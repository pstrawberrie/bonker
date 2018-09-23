module.exports = mongoose => {
  const User = mongoose.model('User');
  return {

    /**
     * Get Users
     */
    getUserByTwitchName(username) {
      return new Promise((resolve, reject) => {
        User.findOne({ twitchName: username })
        .then(user => {
         resolve(user);
        }).catch(err => reject(err));
      });
    },

    getUserByTwitchId(id) {
      return new Promise((resolve, reject) => {
        User.findOne({ twitchId: id }, (err, result) => {
          if(err) reject(err);
          resolve(result);
        });
      })
    },

    /**
     * Create Users
     */
    createTwitchUser(userJson) {
      return new Promise((resolve, reject) => {
        const newUser = new User(userJson);
        newUser.save({new: true}).catch(err => reject(err))
        .then(() => {
          resolve(userJson);
        })
      });
    }

  }
}