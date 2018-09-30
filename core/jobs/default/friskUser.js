const chalk = require('chalk');

/**
 * Frisk User - called on every chat message
 * @param {object} mongoose 
 * @param {object} jobJson 
 */
module.exports = (mongoose, jobJson) => {
  const db = require('../../../lib/util/db')(mongoose);

  function updateUserLastActive(user) {
    return new Promise((resolve, reject) => {
      db.updateTwitchUser({twitchId: user.twitchId}, {lastActive: new Date()}, {new: true})
      .catch(err => reject(err))
      .then(updatedUser => {
        resolve(updatedUser);
      })
    });
  }

  return new Promise((resolve, reject) => {
    db.getUserByTwitchId(jobJson.user.id)
    .then(user => {
      if(user == null) {
        // If user doesn't exist yet
        console.log('User doesn\'t exist');
        const newUserObj = {
          twitchId: jobJson.user.id,
          twitchName: jobJson.user.name,
          twitchMod: jobJson.user.mod,
          twitchSubscriber: jobJson.user.subscriber,
        }
        db.createTwitchUser(newUserObj)
        .then(() => {
          console.log(chalk.grey(`-> Created new record for ${jobJson.user.name}/${jobJson.user.id}`));
          db.getUserByTwitchId(jobJson.user.id).then(newUser => {
            console.log(newUser);
            resolve(newUser);
          }).catch(err => reject(err));
        })
        .catch(err => reject(err));
      } else {
        // If the user's twitch-id exists but the user's twitch name has changed
        if(user.twitchName !== jobJson.user.name && user.twitchId === jobJson.user.id) {
          db.updateTwitchUser({twitchId: jobJson.user.id}, {twitchName: jobJson.user.name, lastActive: new Date()}, {new: true})
          .then(updatedUser => {
            console.log(chalk.grey(`-> Updated existing user's twitch name + last active`));
            resolve(updatedUser);
          }).catch(err => {console.log(`Error updating existing id with new twitch name: ${err}`)});
        } else {
          updateUserLastActive(user).catch(err => reject(err))
          .then(updatedUser => {
            console.log(chalk.grey(`-> User already exists. Updated Last active`));
            resolve(updatedUser);
          });
        }
      }
    }).catch(err => reject(err));
  });
}