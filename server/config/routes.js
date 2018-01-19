var mongoose = require('mongoose');
var Monguser = mongoose.model('Monguser');
var mongusers = require('./../../controllers/mongusers.js');
module.exports = function(app){

	app.get('/style.css', function(req,res){
		res.render('style.css');
	})

	app.get('/', function(req,res){
		mongusers.index(req,res);
	})

	app.get('/mongooses/new', function(req,res){
		mongusers.new(req,res);
	})

	app.post('/create', function(req,res){
		mongusers.create(req,res);
	})

	app.get('/mongooses/:id', function(req,res){
		mongusers.show(req,res);
	})

	app.get('/mongooses/edit/:id', function(req,res){
		mongusers.edit(req,res);
	})

	app.post('/update', function(req,res){
	 	mongusers.update(req,res);
	})

	app.get('/mongooses/destroy/:id', function(req,res){
	 	mongusers.destroy(req,res);
	})
}
