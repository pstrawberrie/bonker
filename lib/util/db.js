module.exports = mongoose => {
  const User = mongoose.model('User');
  return {

    /**
     * Users
     */
    //+ Get Users
    getUserByTwitchName(username) {
      return new Promise((resolve, reject) => {
        User.findOne({twitchName: username})
        .catch(err => reject(err))
        .then(result => {
          resolve(result);
        });
      });
    },
    getUserByTwitchId(id) {
      return new Promise((resolve, reject) => {
        User.findOne({twitchId: id})
        .catch(err => reject(err))
        .then(result => {
          resolve(result);
        });
      })
    },

    //+ Create Users
    createTwitchUser(userJson) {
      return new Promise((resolve, reject) => {
        const newUser = new User(userJson);
        newUser.save({new: true})
        .catch(err => reject(err))
        .then(() => {
          resolve(userJson);
        });
      });
    },

    //+ Update Users
    updateTwitchUser(query, update, conditions) {
      return new Promise((resolve, reject) => {
        User.findOneAndUpdate(query, update, conditions)
        .catch(err =>  reject(err))
        .then(result => {
          resolve(result);
        });
      });
    },

    //+ Delete Users
    removeTwitchUserById(id) {
      return new Promise((resolve, reject) => {
        User.findOneAndRemove({twitchId: id})
        .catch(err => reject(err))
        .then(done => {
          resolve(true);
        });
      });
    },
    removeTwitchUserByName(name) {
      return new Promise((resolve, reject) => {
        User.findOneAndRemove({twitchName: name})
        .catch(err => reject(err))
        .then(done => {
          resolve(true);
        });
      });
    },

    /**
     * Screens
     */

  }
}