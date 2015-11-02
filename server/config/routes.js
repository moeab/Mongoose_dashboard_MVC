var mongoose = require('mongoose');
var Snake = mongoose.model('Animal');
var snake = require('./../controllers/animals.js');
module.exports = function(app){
	app.get('/', function(req, res){
		snake.home(req, res);
	})
	app.get('/snake/new', function(req, res){
		snake.show_new(req, res); 
	})
	app.get('/snake/:id/edit', function(req, res){
		snake.show_edit(req, res);
	})

	app.post('/snake/:id', function(req, res){
		snake.edit(req, res);
	})

	app.post('/snake/:id/destroy', function(req, res){
		snake.destroy(req, res);
	})
	app.post('/snakes', function(req, res){
		snake.create(req, res);
	})
}