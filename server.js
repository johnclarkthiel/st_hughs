//Requirements
var express = require('express');
var app = express();
var morgan = require("morgan");

var port = process.env.PORT || 3000;

//DB for angular
var mongoose = require('mongoose');
var mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/st_hughs';

//middleware and require public folder
app.use(express.static('public'));
app.use(morgan('dev'));

//test that it works
app.get('/', function(req,res){
	res.send('HIIIIIII');
});

//mongoose connecting db to server
mongoose.connect(mongoURI);

//error message if mongo is not turned on
mongoose.connection.on('error', function(){
	console.log('MONGO not connected');
});

//connect to mongo and port 3000
mongoose.connection.once('open', function(){
		console.log('MONGO connected');
		app.listen(port, function(){
		console.log("Listening on port:" + port);
	});
});