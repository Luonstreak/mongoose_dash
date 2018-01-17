// DEPS

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extend: true }));
app.use(express.static(path.join(__dirname,'./static')));
app.set('views', path.join(__dirname,'./views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

// ROUTES

app.get('/', function(req,res){
	Monguser.find({}, function(err, mongusers){
		if(err){
			console.log("something went wrong trying to retrieve all mongooses");
		} else {
			console.log("mongooses found")
			res.render('index', {data: mongusers});
		}
	})
})
app.get('style.css', function(req, res){
	res.render('style.css');
})
app.get('/new', function(req,res){
	res.render('new');
})
app.post('/create', function(req,res){
	var monguser = new Monguser({
		name: req.body.name,
		height: req.body.height,
		weight: req.body.weight
	});``
	monguser.save(function(err){
		if(err){
			console.log("something went wrong saving the new monguser");
		} else {
			console.log("new monguser added!");
			res.redirect('/');
		} 
	})
})
app.get('/mongooses/:id', function(req,res){
	Monguser.find({}, function(err, monguser){
		if(err){
			console.log("something went wrong trying to retrieve all mongooses");
		} else {
			console.log("mongooses found")
			res.render('show', {data: monguser});
		}
	})
})
app.get('/mongooses/edit/:id', function(req,res){
	Monguser.find({}, function(err, monguser){
		if(err){
			console.log("something went wrong trying to retrieve all mongooses");
		} else {
			console.log("mongooses found")
			res.render('edit', {data: monguser});
		}
		})
	})
app.post('/update', function(req,res){
	console.log("--------------------");
	console.log(req.body);
	Monguser.update({_id: req.body.id}, {$set: {name: req.body.name, height: req.body.height, weight: req.body.weight}});
	res.redirect('mongooses/' + req.body.id)
})


// HOSTING
app.listen(8000, function(){
	console.log('-- running localhost in port 8000 --');
})

var monguserSchema = new mongoose.Schema({
	name: String,
	height: Number,
	weight: Number
})
mongoose.model('Monguser', monguserSchema);
var Monguser = mongoose.model('Monguser');
