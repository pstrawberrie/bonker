const chalk = require('chalk');

module.exports = (mongoose, jobJson) => {
  const db = require('../../../lib/util/db')(mongoose);

  return new Promise((resolve, reject) => {
    db.getUserByTwitchId(jobJson.user.id)
    .then(user => {
      if(user == null) {
        console.log('User doesn\'t exist');
        db.createTwitchUser({twitchId: jobJson.user.id, twitchName: jobJson.user.name})
        .then(() => {
          console.log(chalk.grey(`-> Created new record for ${jobJson.user.name}/${jobJson.user.id}`));
          db.getUserByTwitchId(jobJson.user.id).then(newUser => {
            console.log(newUser);
            resolve(newUser);
          }).catch(err => reject(err));
        })
        .catch(err => reject(err));
      } else {
        // Check if the user's twitch-id exists but the user's twitch name has changed
        if(user.twitchName !== jobJson.user.name && user.twitchId === jobJson.user.id) {
          db.updateTwitchUser({twitchId: jobJson.user.id}, {twitchName: jobJson.user.name}, {new: true})
          .then(updatedUser => {
            console.log(chalk.grey(`-> Updated existing user's twitch name`));
            resolve(updatedUser);
          }).catch(err => {console.log(`Error updating existing id with new twitch name: ${err}`)});
        } else {
          console.log(chalk.grey(`-> User already exists`));
          resolve(user);
        }
      }
    }).catch(err => reject(err));
  });
}