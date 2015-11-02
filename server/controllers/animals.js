var mongoose = require('mongoose');
var Snake = mongoose.model('Animal');
module.exports = {
	home: function(req, res){
		var snake_list = [];
		Snake.find({}, function(err, snakes){
			if(err){
				res.render('index', {err_succ : 'Something went wrong'});
			} else {
				for (var i = 0; i < snakes.length; i++){
					snake_list.push({name : snakes[i].name ,venomous : snakes[i].venomous ,id : snakes[i]._id});
				}
				res.render('index', {snakes : snake_list});
			}
		})
	},
	show_new: function(req, res){
		res.render('new');
	},
	create: function(req, res){
		var snake = new Snake({name : req.body.name, venomous : req.body.venom});
		snake.save(function(err){
			if(err){
				res.render('new',  {err : 'Please enter snake name'});
			} else {
				res.redirect('/');
			}
		})
	},
	show_edit: function(req, res){
		Snake.findOne({_id : req.params.id}, function(err, snake){
			res.render('edit', {snake : snake});
		})
	},
	edit: function(req, res){
		Snake.update({_id : req.params.id}, {name : req.body.name , venomous : req.body.venom }, function(err, snake){
			res.redirect('/');
		})
	},
	destroy: function(req, res){
		Snake.remove({_id : req.params.id}, function(err, snake){
			res.redirect('/');
		})
	}
}