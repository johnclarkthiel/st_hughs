//Requirements
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var morgan = require('morgan');


var mongoose = require('mongoose');
var mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/st_hughs';



//middleware
app.use(express.static('public'));
app.use(morgan('dev'));



app.get('/', function(req,res){
	res.send('HELLO');
});

app.get('/contact', function(req,res){
	res.redirect('/');
});

var staticController = require('./controllers/staticController.js');
app.use('/static', staticController);


//mongoose
mongoose.connect(mongoURI);

mongoose.connection.on('error', function(){
	console.log('MONGO not connected');
});

//port
mongoose.connection.once('open', function(){
		console.log('MONGO connected');
		app.listen(port, function(){
		console.log("Listening on port:" + port);
	});
});