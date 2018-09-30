const config = require('../env/config').getConfig(process.env.NODE_ENV);
const chalk = require('chalk');
const util = require('../lib/util/twitch');

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const tmi = require('tmi.js');
const amqp = require('amqplib/callback_api');

//-------------------//
//+ Local Functions +//
//-------------------//

/**
 * Send New Job
 * @param {object} data
 */
function sendJob(data) {
  rabbitChannel.sendToQueue(config.twitchAdmin, new Buffer(JSON.stringify(data)));
  console.log(chalk.yellow(`Sent Rabbit Job`));
}

/**
 * Sends a Message From the Bot
 * @param {object} data - data about the message to send 
 */
function botSend(data) {
  if(!data.msg || config.testMode) return;
  if(data.msgType && data.msgTarget) {
    twitch.whisper(data.msgTarget, data.msg)
    .then(data => { console.log('botsend whisper successful') })
    .catch(err => console.log('error in botsend whisper: ' + err));
  } else if(data.msgType === 'action') {
    twitch.action(config.twitchAdmin, data.msg)
    .then(data => { console.log('botsend action successful') })
    .catch(err => console.log('error in botsend action: ' + err));
  } else {
    twitch.say(config.twitchAdmin, data.msg)
    .then(data => { console.log('botsend say successful') })
    .catch(err => console.log('error in botsend say: ' + err));
  }
}

/**
 * Mods/unmods a User
 * @param {string} twitchName - user's twitch name
 * @param {boolean} bool - true to mod, false to unmod
 */
function modUser(twitchName, bool) {
  if(config.testMode) {
    console.log(`mock mod user ${twitchName} with flag ${bool ? 'true' : 'false'}`);
    return;
  }
  if(bool) {
    twitch.mod(config.twitchAdmin, twitchName)
    .catch(err => console.log(`err modding ${twitchName}: ${err}`))
    .then(result => {console.log(`modded ${twitchName}`)});
  } else {
    twitch.unmod(config.twitchAdmin, twitchName)
    .catch(err => console.log(`err unmodding ${twitchName}`))
    .then(result => {console.log(`unmodded ${twitchName}`)});
  }
}

/**
 * Bans/unbans a User
 * @param {string} twitchName - user's twitch name
 * @param {string} reason - reason for ban
 * @param {boolean} bool - true to ban, false to unban
 */
function banUser(twitchName, reason, bool) {
  if(config.testMode) {
    console.log(`mock ban user ${twitchName} with flag ${bool ? 'true' : 'false'}`);
    return;
  }
  if(bool) {
    twitch.ban(config.twitchAdmin, twitchName, reason)
    .catch(err => console.log(`err banning ${twitchName}: ${err}`))
    .then(result => {
      botSend({msgType: 'action', msg: `banned ${twitchName}`});
      console.log(`banned ${twitchName}: ${reason}`);
    });
  } else {
    twitch.unban(config.twitchAdmin, twitchName)
    .catch(err => console.log(`err unbanning ${twitchName}`))
    .then(result => {
      botSend({msgType: 'action', msg: `unbanned ${twitchName}`});
      console.log(`unbanned ${twitchName}`);
    });
  }
}

/**
 * Timeout a User
 * @param {string} twitchName - user's twitch name
 * @param {number} duration - duration of timeout
 * @param {string} reason - reason for timeout
 */
function timeoutUser(twitchName, duration, reason) {
  if(config.testMode) {
    console.log(`mock timeout user ${twitchName} with duration ${duration}`);
    return;
  }
  twitch.timeout(config.twitchAdmin, twitchName, duration, reason)
  .catch(err => console.log(`err timing out ${twitchName}: ${err}`))
  .then(result => {
    botSend({msgType: 'action', msg: `timed out ${twitchName} for ${duration} seconds: ${reason}`});
    console.log(`timed out ${twitchName} for ${duration}sec: ${reason}`);
  });
}

//-----------------//
//+ Start Service +//
//-----------------//
let canSendJobs = true;

/**
 * Set Up Queue Connection
 */
let rabbitChannel;
amqp.connect('amqp://localhost',(err, conn) => {
  if(err != null) return console.log(chalk.red(`xxx Error Connecting to RabbitMQ xxx`));
  chalk.cyan(`+++ Connected to RabbitMQ +++`);

  conn.createChannel((err, ch) => {
    if(err) return console.log(chalk.red(`xxx Error Creating RabbitMQ Channel xxx`));
    rabbitChannel = ch;
    rabbitChannel.assertQueue(config.twitchAdmin, {durable: false});
  });
});

/**
 * Start Twitch Service
 */
const twitch = new tmi.client({
  options: { debug:true},
  connection: {
    cluster:"aws",
    reconnect:true,
    timeout: 5000
  },
  identity: {
    username: config.twitchBot,
    password: config.twitchKey
  },
  channels: [config.twitchAdmin]
});

//+ Twitch On Connected
twitch.on('connected', function() {
  console.log(chalk.cyan(`+++ Twitch Bot "${config.twitchBot}" Connected +++`));
});

//+ Twitch On Disconnected
twitch.on('disconnected', function() {
  console.log(chalk.red(`--- Twitch Bot "${config.twitchBot}" Disconnected ---`));
});

//+ Twitch Chat Listener
twitch.on("chat", function (channel, userstate, message, self) {
  //- Soft validation
  //- Accept all standard chat messages
  //- Only allow whispers from bot admin (config.twitchAdmin)
  if (self) return;
  if (!canSendJobs) {
    console.log(chalk.red('Blocked Job in Twitch Service (canSendJobs === false)'));
    return;
  }
  if (userstate['message-type'] === 'whisper' && userstate.username !== config.twitchAdmin) {
    console.log(chalk.red(`Received whisper from non-admin "${userstate.username}". Denying job.`));
    return;
  }
  const job = util.createJob(channel, userstate, message);
  sendJob(job);
  canSendJobs = false;
});

//+ Twitch Connect
if(!config.testMode) {
  twitch.connect()
  .catch((error) => {
    console.log(chalk.red(`xxx Error Connecting Bot "${config.twitchBot}" xxx`));
    console.log(error);
  });
}

/**
 * Start Web Server for Sockets
 */
if(config.testMode) {
  app.use(express.static(__dirname + '/node_modules'));
  app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/test.html');
  });
}

io.on('connection', client => {
  console.log(chalk.grey(`+ Client Connected to Twitch Socket +`));

  // Send a Job from Test Mode
  if(config.testMode) {
    client.on('job', data => {
      console.log(chalk.grey(`Received Client Message "${data}"`));
      const twitchFormat = util.createTestJob(data);
      const job = util.createJob(twitchFormat.channel, twitchFormat.userstate, twitchFormat.message);
      sendJob(job);
      io.emit('job', `Server Received Job with Message "${data}"`);
    });
  }

  // Finish Job From Web
  client.on('finished', data => {
    if(data === '1') canSendJobs = true;
    console.log(chalk.green('Server Finished Job'));
  });

  // Post Request from Core or Web
  client.on('post', data => {
    const parsedData = JSON.parse(data);
    console.log(chalk.grey(`Post Request from another Service: "${parsedData.msg}"`));
    botSend(parsedData);

    if(config.testMode) io.emit('post', parsedData);
  });

  // Modify User Request from Core (don't send from web)
  client.on('modifyUser', data => {
    const parsedData = JSON.parse(data);
    console.log(chalk.grey(`Modify Request from another Service: "${parsedData}"`));
    switch(parsedData.type) {
      case 'mod':
        modUser(parsedData.twitchName, true);
        break;
      case 'unmod':
        modUser(parsedData.twitchName, false);
        break;
      case 'ban':
        modUser(parsedData.twitchName, parsedData.reason, true);
        break;
      case 'unban':
        modUser(parsedData.twitchName, false);
        break;
      case 'timeout':
        modUser(parsedData.twitchName, parsedData.duration, parsedData.reason);
        break;
      default:
        return;
    }
  });

});

server.listen(config.twitchPort, () => {
  console.log(chalk.cyan(`+++ Twitch Socket Server Started on port ${config.twitchPort} +++`));
});