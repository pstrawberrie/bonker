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

// GET Users Page
exports.users = async (req, res) => {

  const userCount = await User.countDocuments({});
  const users = await User.find({}).limit(50);
  console.log(`Default controller for /users got the first ${users.length} out of ${userCount} users`);
  res.render('users', {
    title: 'Users',
    users,
    userCount
  })

}