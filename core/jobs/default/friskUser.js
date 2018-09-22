const { getUserByTwitchId } = require('../../../lib/util/db');
module.exports = jobJson => {

  console.log(`frisk user command: get user by id of ${jobJson.userstate['user-id']}`);
  return;
}