const mongoose = require('mongoose');
const User = mongoose.model('User');
const Screen = mongoose.model('Screen');

/* User Controller */

//+ GET Users Index
exports.index = async (req, res) => {

  const userCountPromise = User.countDocuments({});
  const usersPromise = User.find({}).limit(50).sort({lastActive: -1});
  const [userCount, users] = await Promise.all([userCountPromise, usersPromise]);
  console.log(`Default controller for /users got the first ${users.length} out of ${userCount} users`);
  res.render('users', {
    title: 'Users',
    users,
    userCount
  });

}

//+ POST search user
exports.searchUser = async (req, res) => {

  const searchString = req.body.searchString;
  let query = {twitchName: {$regex: searchString, $options: 'i'}};
  if(searchString === '') query = {};
  const users = await User.find(query).limit(50).sort({lastActive: -1});
  if(users && users.length > 0) {
    res.json(users);
  } else {
    res.json({result: null});
  }

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