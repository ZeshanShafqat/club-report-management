var express = require('express');
var http = require('http');
var mysql = require('mysql');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');


var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '000',
  database : 'crud',
  port	   : '3310'
});

//
var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
 
app.use(bodyParser.urlencoded({extended:false}))

connection.connect(function(err) {
	if(err) {
	console.log("error occured");
	} else {
		console.log('no error');
	}
});


app.get('/', function(req, res) {
	console.log('request placed for: ' + req.url);
	res.render('index');
});


app.get('/login', function(req, res){
	console.log('request placed for: ' + req.url);
	res.render('login');
});

app.post('/login', function(req, res){
	console.log('request placed for: ' + req.url);
	console.log('Got A post request on /login.');
	console.log('Displays all-reports after login');
	console.log('params'+ req.body.username + " " + req.body.password);
	res.redirect('/user/all-reports')
});

app.get('/signup', function(req, res){
	console.log('request placed for: ' + req.url);
	res.render('signup');
});

app.post('/signup', function(req, res){
	console.log('request placed for: ' + req.url);
	console.log('Got A post request on /signup.');
	console.log("params " + req.body.firstname + " " + req.body.familyname + " " + req.body.username + " " + req.body.password +" "+ req.body.confirmpassword)
	res.render('login');
});

app.get('/user/all-reports', function(req, res){
	console.log('request placed for: ' + req.url);
	res.render('all-reports');
});

app.get('/user/report', function(req, res){
	console.log('request placed for: ' + req.url);
	res.render('report');
});

app.get('/user/report/delete', function(req, res){
	console.log('request placed for: ' + req.url);
	console.log('resource deleted');
	console.log('Goes back to all-reports page');
});

app.get('/user/create-report', function(req, res){
	console.log('request placed for: ' + req.url);
	res.render('create-report');
});

app.post('/user/create-report', function(req, res){
	console.log('request placed for: ' + req.url);
	console.log('Got A post request on /create-report.');
	console.log("pasrm" + req.body.newreport);
	res.redirect('/user/report');

});

app.get('/user/report/edit', function(req, res){
	console.log('request placed for: ' + req.url);
	res.render('edit-report');
});

app.post('/user/report/edit', function(req, res){
	console.log('request placed for: ' + req.url);
	console.log('Got A post request on /edit-report.');
	console.log('Displays the report page');
	console.log('This is to test git repository');
});


http.createServer(app).listen(3000);

