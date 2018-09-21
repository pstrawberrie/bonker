const configFile = require('../env/config');
const currentEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const config = configFile[currentEnv];
const chalk = require('chalk');
const util = require('./util');

/**
 * Create New Job
 */
function createJob() {

}

/**
 * Twitch tmi.js
 * - Sets up listener to Twitch IRC
 */
function startTwitch() {
  const tmi = require('tmi.js');

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
  
  //+ Twitch Chat Listener (this is the juicy part)
  twitch.on("chat", function (channel, userstate, message, self) {
  
    // Soft validation
    if (self) return;
    const job = util.createJob(channel, userstate, message);
  
    console.log('created new message job:');
    console.log(job);
  
  });
  
  //+ Twitch Connect
  twitch.connect()
  .catch((error) => {
    console.log(chalk.red(`xxx Error Connecting Bot "${config.twitchBot}" xxx`));
    console.log(error);
  });

}

/**
 * Static Testing
 * - skips Twitch IRC setup and uses websockets/HTML for testing
 */
function startTest() {
  const uuidv4 = require('uuid/v4');
  const express = require('express');
  const app = express();
  const server = require('http').createServer(app);
  const io = require('socket.io')(server);
  const testPort = 3001;

  app.use(express.static(__dirname + '/node_modules'));
  app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/test.html');
  });

  io.on('connection', function(client) {
    console.log(chalk.grey(`+ Client Connected to Websocket +`));

    client.on('join', function(data) {
      console.log(data);
    });
    client.on('job', function(data) {
      console.log(data);
      const job = {
        channel: '#channel',
        userstate: {
          id: uuidv4(),
          badges: { broadcaster: '1', premium: '1' },
          color: '#B3194F',
          'display-name': 'admin',
          emotes: null,
          mod: false,
          'room-id': '111',
          subscriber: false,
          'tmi-sent-ts': new Date().getTime(),
          turbo: false,
          'user-id': '111',
          'user-type': null,
          'emotes-raw': null,
          'badges-raw': 'broadcaster/1,premium/1',
          username: 'admin',
          'message-type': 'chat',
        },
        message: data
      };
      io.emit('job', JSON.stringify(job));
    });
  });

  server.listen(testPort, () => {
    console.log(chalk.cyan(`+++ Test Server Started on http://localhost:${testPort} +++`));
  });
}

//+ Initiate Service
if(config.testMode) startTest();
if(!config.testMode) startTwitch();