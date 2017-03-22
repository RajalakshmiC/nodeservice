// server.js

// set up ======================================================================
// get all the tools we need

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Book = require('./model/book');
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');

app.use(bodyParser.json());
// configuration ===============================================================
mongoose.connect('mongodb://admin:admin@ds139360.mlab.com:39360/testservice'); // connect to our database
mongoose.set('debug',false);  

	//to save book details in database
  app.post('/book', function (req, res) {
	  var bookObject = new Book();
	  bookObject.title = req.body.title;
	  bookObject.author = req.body.author;
	  bookObject.isbn = req.body.isbn;
	  bookObject.save(function(err,book){
		  console.log('saved')
	  })
        
    });  
	
	//to get list of books from database
app.get('/book',function(req,res){
	Book.find({},function(err,book){
		console.log('book',book)
	})
})
app.get('/book/:isbn',function(req,res){
	Book.find({isbn:req.params.isbn},function(err,book){
		console.log('book',book)
	})
})
// launch ======================================================================
app.listen(port);

console.log('The magic happens on port ' + port);