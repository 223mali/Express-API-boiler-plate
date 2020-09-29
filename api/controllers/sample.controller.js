
var mongoose = require('mongoose');
var SampleModel = mongoose.model('dbName')








module.exports.sampleController = function(req, res){

    res
        .status(200)
        .json({"message": "Hello You are using your sample Controller"});

}

