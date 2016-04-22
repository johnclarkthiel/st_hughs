//Requirements
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

//middleware
app.use(express.static('public'));

app.get('/', function(req,res){
	res.send('HELLO');
});

app.get('/contact', function(req,res){
	res.redirect('/');
});

app.listen(port, function(){
	console.log("Listening on port:" + port);
});
