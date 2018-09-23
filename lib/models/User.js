const mongoose = module.parent.exports.mongoose;
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const userSchema = new Schema ({

  // Twitch-specific
  twitchId: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  twitchName: {
    type: String,
    required: true,
    trim: true
  },

  // Bonker-specific
  joinDate: {
    type: Date,
    default: new Date()
  },
  lastActive: {
    type: Date,
    default: new Date()
  },
  isAdmin: {
    type: Boolean,
    default: false
  }

});

userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);
