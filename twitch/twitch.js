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
 * @param {string} msgType
 * @param {string} msgTarget
 * @param {string} msg
 */
function botSend(msg, msgType, msgTarget) {
  switch(msgType) {
    case 'whisper':
      if(!msgType || !msgTarget) return;
      twitch.whisper(msgTarget, msg);
      break;

    default:
      twitch.say(config.twitchAdmin, msg);
      break;
  }
}

//-----------------//
//+ Start Service +//
//-----------------//

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
  if (userstate['message-type'] === 'whisper' && userstate.username !== config.twitchAdmin) {
    console.log(chalk.red(`Received whisper from non-admin "${userstate.username}". Denying job.`));
    return;
  }
  const job = util.createJob(channel, userstate, message);
  sendJob(job);
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

io.on('connection', function(client) {
  console.log(chalk.grey(`+ Client Connected to Websocket +`));

  // Send a Job from Test Mode
  if(config.testMode) {
    client.on('job', function(data) {
      console.log(chalk.grey(`Received Client Message "${data}"`));
      const job = util.createTestJob(data);
      sendJob(job);
      io.emit('job', `Server Received Job with Message "${data}"`);
    });
  }

  // Post Request from Core or Web
  client.on('post', function(data) {
    console.log(chalk.grey(`Post Request from another Service: "${data}"`));
    botSend(data.msg, data.msgType || null, data.msgTarget || null);
  }); 

});

server.listen(config.twitchPort, () => {
  console.log(chalk.cyan(`+++ Twitch Socket Server Started on port ${config.twitchPort} +++`));
});