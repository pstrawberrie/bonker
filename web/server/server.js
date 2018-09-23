const config = require('../../env/config').getConfig(process.env.NODE_ENV);
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
});
require('../lib/models/User');

/**
 * Include Base Dependencies
 */
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const webHandler = require('../../lib/util/webHandler');

/**
 * Web Server
 */
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use(webHandler.notFound);

// Handle Errors
if (app.get('env') === 'development') {
  app.use(webHandler.developmentErrors);
}
app.use(webHandler.productionErrors);

// Wait until DB is connected to start the server & connect to twitch chat
function startServer() {
  /**
   * Start Web Server
   */
  app.set('port', process.env.PORT || 7777);
  server.listen(7777, () => {
    console.log(chalk.bold.white.bgBlue(` Phoenix Bot Server Started @ localhost:${server.address().port} `));

    // Sockets
    io.on('connection', socket => {
      socket.emit('FromAPI', { hello: 'world' });
    });
    
    io.on('twitch', socket => {
      console.log('socket came in: ', socket);
    });
  });
}