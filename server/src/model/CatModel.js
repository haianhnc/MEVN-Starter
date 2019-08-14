var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CatSchema = new Schema({
  name: String,
  color: String,
});

var CatModel = mongoose.model('Cat', CatSchema);

module.exports = CatModel;