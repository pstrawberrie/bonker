const config = require('../env/config').getConfig(process.env.NODE_ENV);
const path = require('path');
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
  startServer();
});
require('../lib/models/User');
require('../lib/models/Screen');

/**
 * Web Server Setup
 */
function startServer() {
  const express = require('express');
  const app = express();
  var server = require('http').Server(app);
  var io = require('socket.io')(server);
  const cookieParser = require('cookie-parser');
  const bodyParser = require('body-parser');
  const routes = require('./routes');
  const errorHandlers = require('./handlers/errorHandlers');
  
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  
  app.use((req, res, next) => {
    //global middleware here
    res.locals.currentPath = req.path;
    next();
  });
  
  // session here
  // passport here
  // flash here
  
  app.use('/', routes);
  app.use(errorHandlers.notFound);
  if (app.get('env') === 'development') {
    app.use(errorHandlers.developmentErrors);
  }
  app.use(errorHandlers.productionErrors);
  server.listen(config.webPort, () => {
    console.log(chalk.cyan(`+++ Web Server Started on localhost:${config.webPort} +++`));

    io.on('connection', function (socket) {
      socket.on('core', function (data) {
        console.log(chalk.cyan(`-> Received Socket From Core`));
        console.log(data);
      });
    });
  });
}
