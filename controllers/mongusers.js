var mongoose = require('mongoose');
var Monguser = mongoose.model('Monguser');

module.exports = {
	index: function(req,res){
		Monguser.find({}, function(err, mongusers){
			if(err){
				console.log("something went wrong trying to retrieve all mongooses");
			} else {
				console.log("mongooses found")
				res.render('index', {data: mongusers});
			}
		})
	},
	new: function(req,res){
		res.render('new');
	},
	create: function(req,res){
		var monguser = new Monguser({
			name: req.body.name,
			height: req.body.height,
			weight: req.body.weight
		});
		monguser.save(function(err){
			if(err){
				console.log("something went wrong saving the new monguser");
			} else {
				res.redirect('/');
			} 
		})
	},
	show: function(req,res){
		Monguser.findOne({_id: req.params.id}, function(err, monguser){
			if(err){
				console.log("something went wrong retrieving the monguser");
			} else {
				res.render('show', {data: monguser});
			}
		})
	},
	edit: function(req,res){
		Monguser.findOne({_id: req.params.id}, function(err, monguser){
			if(err){
				console.log("something went wrong trying to retrieve all mongooses");
			} else {
				res.render('edit', {data: monguser});
			}
		})
	},
	update: function(req,res){
	 	Monguser.update({_id: req.body.id},{name: req.body.name, height: req.body.height, weight: req.body.weight}, function(err, updated){
	 		console.log(updated);
			res.redirect('/mongooses/' + req.body.id)
		});
	},
	destroy: function(req,res){
	 	Monguser.remove({_id: req.params.id}, function(err){
	 		if(err){
	 			console.log("there was an error while trying to delete!");
	 			res.redirect('/mongooses/' + req.params.id);
	 		} else {
	 			console.log("monguser deleted!")
	 			res.redirect('/');
	 		}
		});
	}
}
