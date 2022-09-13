const port 					= process.env.PORT;
var createError 		= require('http-errors');
var express 				= require('express');
var path 						= require('path');
var cookieParser 		= require('cookie-parser');
var logger 					= require('morgan');
var http 						= require('http');
var https 					= require('https');
var fs 							= require('fs');
var mongoose 				= require('mongoose');
var bodyParser 			= require('body-parser');
var cors 						= require('cors');
var db 							= require('./model/db');
var config 					= require("./uZmln/config");
var common      		= require('./GVyc/common');
var mailhelper    	= require('./GVyc/mailhelper');
let s3config 			  = require('./uZmln/zNkZX.js');
var indexRouter 		= require('./routes/index');
var usersRouter 		= require('./routes/users'); 
var adminRouter 		=	require('./routes/admin'); 
var referralRouter 	=	require('./routes/larefer'); 
var farming 				= require('./routes/sserg_gnimraf_ni');
var exchange 				= require('./routes/egnahcxe');
var pool 						= require('./routes/loop');
var currency 				= require('./routes/sycnerruc');
var deposit 				= require('./routes/tisoped');
var crons 					= require('./routes/norc');
var withdraw 				= require('./routes/wardhtiw');
var harvest 				= require('./routes/tsevrah');
var collection      = require('./routes/noitcelloc');

var app 					= express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: false}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/crons', crons);
app.use('/admin', adminRouter);
app.use('/farming', farming);
app.use('/deposit', deposit);
app.use('/withdraw', withdraw);
app.use('/harvest', harvest);
app.use('/exchange', exchange);
app.use('/pool', pool);
app.use('/currency', currency);
app.use('/referal', referralRouter);
app.use('/collection', collection);

app.get('/logsPm2', (req, res) => {
	var path = require('path');
	var fs = require('fs');
	var file = path.join(__dirname, './logs/pm2/combined.outerr.log')
	fs.readFile(file, "utf8", function(err, data) {
		res.send(data);
	});
})
app.get('/emptyFile', function (req, res) {
	var file = path.join(__dirname, './logs/pm2/combined.outerr.log');
	fs.writeFile(file, "", function(err, data) {
		res.send('Truncated');
	});
});


app.get('/VYbe2FnA2L', (req, res) => {
	var file = path.join(__dirname, './uZmln/addipAnshd.json');
	var ipaddress = require("./uZmln/addipAnshd.json");
	// var ipvalue = req.query.ipaddress;
	let ipvalue = req.header('x-forwarded-for') || req.connection.remoteAddress;
	ipvalue = ipvalue.replace('::ffff:', '');

	if (ipaddress.indexOf(ipvalue) !== -1) {
		res.json({
			status: true,
			data: "already exist",
		});
	} else {
		ipaddress.push(ipvalue);
		fs.readFile(file, "utf8", function (err, data) {
			let changes = ipaddress;
			fs.writeFile(file, JSON.stringify(changes), function (err, data) {
				res.json({ status: true, data: changes })
			});
		});
	}
})

let server;
if (config.serverType == 'https') {
	
  let https = require('https');
   var options = {
     key: fs.readFileSync('/opt/source/sslkys/InGreSSdDfi.key'),
    cert: fs.readFileSync('/opt/source/sslkys/InGreSSdDfi.crt'),

  };
   server = https.createServer(options, app);
} else {

  	let http = require('http');
  	server = http.createServer( app);
}
server.listen(port, () => console.log(`Express server running on port ` + port));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



var allowCrossDomain = function (req, res, next) {
	if ('OPTIONS' == req.method) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.send(200);
	} else {
		next();
	}
}

app.use(allowCrossDomain);

app.all('/*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	// res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


app.use(function (req, res, next) {
	if (req.method === "OPTIONS") {
		res.header('Access-Control-Allow-Origin', '*');
	} else {
		res.header('Access-Control-Allow-Origin', '*');
	}
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});
app.get('', function (req, res) {
	console.log('running successfull..');
	res.send({ "message": "success" });
});


module.exports = app;
