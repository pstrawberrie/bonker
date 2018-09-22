const mongoose = require('mongoose');
const User = mongoose.model('User');

/**
 * Get Users
 */
exports.getUserByTwitchName = async username => {
  const user = await User.findOne({ twitchName: username });
  return user;
}

exports.getUserByTwitchId = async id => {
  const user = await User.findOne({ twitchName: id });
  return user;
}

/**
 * Create Users
 */
exports.createTwitchUser = async userJson => {
  const newUser = User(userJson);
  await newUser.save();
  return userJson;
}