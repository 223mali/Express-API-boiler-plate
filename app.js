require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');
var bodyParser = require('body-parser');
var cors = require('cors');


app.set('port', 3000)

app.use(express.static(path.join(__dirname,'frontend')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(cors({origin: "*"}));

app.use('/api',routes)

app.use('/node_modules', express.static(__dirname + '/node_module'));



var server  = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Asynch Magic happens on porte " + port);
});
