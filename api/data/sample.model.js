var mongoose = require('mongoose');



var sampleSchema = new mongoose.Schema({
  name : String,
  age : Number,
  description : String,
  photos : [String],
  price : Number
});

mongoose.model('dbName', sampleSchema, 'dbNames');