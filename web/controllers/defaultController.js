const mongoose = require('mongoose');
const User = mongoose.model('User');
const Screen = mongoose.model('Screen');

// GET Home Page
exports.index = async (req, res) => {

  const users = await User.countDocuments({});
  let screens = await Screen.countDocuments({});
  console.log(`Got user count from DB: ${users}`);
  console.log(`Got screen count from DB: ${screens}`);
  res.render('index', {
    title: 'Home',
    userCount: users,
    screenCount: screens
  });

}