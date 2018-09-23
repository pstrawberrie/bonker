/**
 * Jobs Entry Point
 */
const config = require('../../env/config').getConfig(process.env.NODE_ENV);
const chalk = require('chalk');
const twitchUtil = require('../../lib/util/twitch');
const mongoose = require('mongoose');

// Set up Sockets here so we don't have to pass it down from core.js
const coreSocketServer = require('socket.io').listen(config.corePort);
coreSocketServer.on('connection', client => {
  console.log(chalk.grey(`-> Client Connected to Core Entry Socket`));

  client.on('web', data => {
    console.log(chalk.grey(`Socket Request From Web: "${data}"`));
  }); 
});

const twitchSocketClient = require('socket.io-client').connect(`http://localhost:${config.twitchPort}`);
twitchSocketClient.on('connect', function open() {
  console.log(chalk.cyan(`+++ Core Entry is connected to Twitch Socket +++`));
});
// Send a 'finished' socket to indicate a job is finished (WARNING: this was made to block )
function finishJob() {
  twitchSocketClient.emit('finished', '1');
}

const webSocketClient = require('socket.io-client').connect(`http://localhost:${config.webPort}`);
webSocketClient.on('connect', function open() {
  console.log(chalk.cyan(`+++ Core Entry is connected to Web Socket +++`));
});

const friskUser = require('./default/friskUser');

module.exports = (jobJson, internal) => {
  console.log(chalk.white(`Job Entry Hit (/core/jobs/entry.js)`));

  //0. check for an internal command (not implemented)
  if(internal) console.log(chalk.magenta(`This job is special`));

  //1. frisk user
  console.log(chalk.grey('-> Frisking user in entry.js'));
  friskUser(mongoose, jobJson)
  .then(user => {
    processCommand(jobJson.message, user);
  }).catch(err => console.log(err));

  //2. check for a valid user command
  function processCommand(command, user) {
    const userCommand = twitchUtil.parseCommand(config.twitchCommandFlag, command);
    if(userCommand == null) {
      finishJob();  
      return;
    }

    //3. route commands (map commands externally?)
    switch(userCommand.command) {

      case 'user':
      case 'info':
      case 'me':
      case 'self':
        const getUser = require('./default/getUser');
        getUser(mongoose, twitchSocketClient, user)
        .then(fetchedUser => {
          console.log('ran getUser command. result:');
          console.log(fetchedUser);
          finishJob();
        }).catch(err => console.log(err));
        break;

      default:
        finishJob();
        break;
    }

  }

}