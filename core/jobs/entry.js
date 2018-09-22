/**
 * Jobs Entry Point
 */
const chalk = require('chalk');
const friskUser = require('./default/friskUser');

module.exports = (jobJson, internal) => {
  console.log(chalk.magenta(`Job Entry Hit (/core/jobs/entry.js)`));

  //0. check for an internal command (not implemented)
  if(internal) console.log(chalk.magenta(`This job is special`));

  //1. frisk user
  //getUserByTwitchId(jobJson['user-id']);

  //2. check for a valid user command


}