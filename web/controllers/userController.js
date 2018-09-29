const mongoose = require('mongoose');
const User = mongoose.model('User');
const Screen = mongoose.model('Screen');

/* User Controller */

//+ GET Users Index
exports.index = async (req, res) => {

  const userCount = await User.countDocuments({});
  const users = await User.find({}).limit(50).sort({lastActive: -1});
  console.log(`Default controller for /users got the first ${users.length} out of ${userCount} users`);
  res.render('users', {
    title: 'Users',
    users,
    userCount
  });

}

//+ POST remove user
exports.removeUser = async (req, res) => {

  console.log(`User controller removing user: ${req.query.user}`);
  res.json({status: 200});
  // const users = await User.count({});
  // let screens = await Screen.count({});
  // console.log(`Got user count from DB: ${users}`);
  // console.log(`Got screen count from DB: ${screens}`);
  // res.render('index', {
  //   title: 'Home',
  //   userCount: users,
  //   screenCount: screens
  // });

}