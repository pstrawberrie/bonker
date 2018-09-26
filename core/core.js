const config = require('../env/config').getConfig(process.env.NODE_ENV);
const chalk = require('chalk');

/**
 * Database Connection
 */
const mongoose = require('mongoose');
module.exports.mongoose = mongoose;
mongoose.connect(config.mongoDbAddress, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.log(chalk.red(`xxx Error Connecting to Mongodb ${err.message} xxx`));
});
mongoose.connection.once('open', (err) => {
  console.log(chalk.cyan(`+++ Connected to Mongodb +++`));
  requireModels();
  seed().then(() => {
    rabbitConnect();
  }).catch(err => console.log('Seed Failed'));
});

/**
 * Require Models
 */
function requireModels() {
  require('../lib/models/User');
}

/**
 * Seed Data
 */
function seed() {
  const users = require('../lib/seedData/users.json');
  return new Promise((resolve, reject) => {
    const User = mongoose.model('User');
    User.deleteMany({})
    .then(a => {
      console.log(chalk.yellow('-> Data Removed'));
      User.insertMany(users)
      .then(b => {
        console.log(chalk.yellow('-> Seed Data Inserted'));
        resolve();
      }).catch(err => reject(`Error inserting Test Data: ${err}`));
    }).catch(err => reject(`Error Loading Test Data: ${err}`));
  });
}

/**
 * RabbitMQ Consumer
 */
const amqp = require('amqplib/callback_api');
function rabbitConnect() {
  amqp.connect('amqp://localhost', (err, conn) => {
    if(err != null) return console.log(chalk.red(`xxx Error Connecting to RabbitMQ xxx`));
  
    conn.createChannel((err, ch) => {
  
      ch.assertQueue(config.twitchAdmin, {durable: false});
      const jobEntry = require('./jobs/entry');
      console.log(chalk.cyan(`+++ Waiting for RabbitMQ messages in channel ${config.twitchAdmin} +++`));
  
      ch.consume(config.twitchAdmin, msg => {
        const parsedMsg = JSON.parse(msg.content.toString());
        console.log(chalk.grey(`~~~~~~~~~~~~~~~~~~~~`));
        console.log(chalk.yellow(`-> Processing: ${msg.content.toString()}`));
        jobEntry(parsedMsg);
      }, {noAck: true});
  
    });
  });
}