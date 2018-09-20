const configFile = require('../env/config');
const currentEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const config = configFile[currentEnv];
const chalk = require('chalk');
const tmi = require('tmi.js');
const util = require('./util');

//+ Instantiate Twitch IRC Listener
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