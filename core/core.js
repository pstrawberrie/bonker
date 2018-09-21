const configFile = require('../env/config');
const currentEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const config = configFile[currentEnv];
const chalk = require('chalk');
