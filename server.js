// DEPS

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.urlencoded({ extend: true }));
app.use(express.static(path.join(__dirname,'./client/static')));
app.set('views', path.join(__dirname,'./client/views'));
app.set('view engine', 'ejs');

// MONGOOSE SETUP
require('./server/config/mongoose.js');

// ROUTES
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// HOSTING
app.listen(8000, function(){
	console.log('-- running localhost in port 8000 --');
})
