var mongoose = require('mongoose');
var monguserSchema = new mongoose.Schema({
	name: String,
	height: Number,
	weight: Number
})

var monguser = mongoose.model('Monguser', monguserSchema);
