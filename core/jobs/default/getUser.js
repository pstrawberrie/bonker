module.exports = (mongoose, twitchSocket, user) => {
  const db = require('../../../lib/util/db')(mongoose);

  return new Promise((resolve, reject) => {
    // We already have the most current user data from the frisk
    const postJson = {
      msg: `Got user ${user.twitchName}`
    }
    twitchSocket.emit('post', JSON.stringify(postJson));
    resolve(user);
  });
}