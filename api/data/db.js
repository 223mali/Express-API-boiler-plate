var mongoose = require('mongoose');
var connectionurl = 'mongodb://localhost:27017/dbName';

mongoose.connect(connectionurl);

mongoose.connection.on('connected',function(){
    console.log('we are connected through mongoose');
})


mongoose.connection.on('disconnected',function(){
    console.log('we are disconnected through mongoose');
})

mongoose.connection.on('error',function(err){
    console.log('an error occured through mongoose');
})

require('./sample.model.js')