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

/**
 * Generate Data
 */
/*
[
  '{{repeat(15, 17)}}',
  {
    _id: '{{objectId()}}',
    twitchId: '{{guid()}}',
    twitchName: '{{firstName()}}',
    joinDate: '{{date(new Date(2017, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    lastActive: '{{date(new Date(2017, 0, 2), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    isAdmin: false
  }
]
 */