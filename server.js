//Requirements
var express = require('express');
var app = express();
var morgan = require("morgan");

var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
var mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/st_hughs';


//middleware and require public folder
app.use(express.static('public'));
app.use(morgan('dev'));


//mongoose
mongoose.connect(mongoURI);

mongoose.connection.on('error', function(){
	console.log('MONGO not connected for some reason');
});

//port
mongoose.connection.once('open', function(){
		console.log('MONGO connected');
		app.listen(port, function(){
		console.log("Listening on port:" + port);
	});
});