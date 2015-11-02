var mongoose = require('mongoose');

var animalSchema = new mongoose.Schema({
	name : String,
	venomous : String
})

animalSchema.path('name').required(true);
animalSchema.path('venomous').required(true);


var Snake = mongoose.model('Animal', animalSchema);