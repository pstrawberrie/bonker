const mongoose = require('mongoose');
const User = mongoose.model('User');

/* Home Page */
exports.index = async (req, res) => {

  const users = await User.find({});
  console.log(users);
  res.render('index', {
    title: 'Home',
    users
  });

}