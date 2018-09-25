const mongoose = require('mongoose');
const User = mongoose.model('User');
const Screen = mongoose.model('Screen');

/* Home Page */
exports.index = async (req, res) => {

  const users = await User.count({});
  let screens = await Screen.count({});
  console.log(`Got user count from DB: ${users}`);
  console.log(`Got screen count from DB: ${screens}`);
  res.render('index', {
    title: 'Home',
    userCount: users,
    screenCount: screens
  });

}