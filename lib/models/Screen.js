const mongoose = module.parent.exports.mongoose;
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const screenSchema = new Schema ({

  name: {
    type: String,
    required: true
  },
  modules: {
    type: Array,
    default: []
  },
  dateCreated: {
    type: Date,
    default: new Date()
  }

});

screenSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Screen', screenSchema);
