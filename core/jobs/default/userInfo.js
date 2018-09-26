const chalk = require('chalk');

module.exports = (mongoose, twitchSocket, user, userCommand) => {
  const db = require('../../../lib/util/db')(mongoose);

  return new Promise((resolve, reject) => {
    if(userCommand.arguments !== null) {
      const userToGet = userCommand.arguments[0];
      if(userToGet === '' || userToGet == undefined || userToGet == null) reject('Invalid getUser Argument');
      db.getUserByTwitchName(userToGet)
      .catch(err => reject(`Failed getUser lookup (by argument): ${err}`))
      .then(receivedUser => {
        if(receivedUser == null) {
          console.log(chalk.grey(`--> User lookup by argument failed for "${userToGet}" (user to lookup doesn't exist)`));
          resolve(null);
        } else {
          const postJson = {msg: `Looked up user ${receivedUser.twitchName}`};
          twitchSocket.emit('post', JSON.stringify(postJson));
          resolve(receivedUser);
        }
      })
    } else {
      // We already have the most current user data from the frisk
      const postJson = {msg: `Passed user "${user.twitchName}" through frisk`}
      twitchSocket.emit('post', JSON.stringify(postJson));
      resolve(user);
    }
  });
}