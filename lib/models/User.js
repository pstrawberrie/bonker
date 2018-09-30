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
  twitchSubscriber: {
    type: Boolean,
    default: false
  },
  twitchBanned: {
    type: Boolean,
    default: false
  },
  twitchMod: {
    type: Boolean,
    default: false
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
userSchema.index({twitchName: 'text'});

module.exports = mongoose.model('User', userSchema);

/**
 * Generate Data
 * https://www.json-generator.com/
 */
/*
[
  '{{repeat(90, 150)}}',
  {
    _id: '{{objectId()}}',
    twitchId: '{{guid()}}',
    twitchName: '{{firstName()}}',
    twitchSubscriber: false,
    twitchBanned: false,
    twitchMod: false,
    joinDate: '{{date(new Date(2017, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss")}}',
    lastActive: '{{date(new Date(2017, 0, 2), new Date(), "YYYY-MM-ddThh:mm:ss")}}',
    isAdmin: false
  }
]
 */