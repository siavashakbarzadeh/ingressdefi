var mongoose = require( 'mongoose' );
var config   = require("../uZmln/config");

const CryptoJS = require('crypto-js');
var key = CryptoJS.enc.Base64.parse("#base64Key#");
var iv  = CryptoJS.enc.Base64.parse("#base64IV#");
var mhelper   = require("../GVyc/mailhelper");

let dbconnection = mhelper.newdecrypt(config.dbconnection);


console.log("dbconnectiondbconnection",mhelper.newdecrypt(config.dbconnection))


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(dbconnection, { useNewUrlParser: true,useUnifiedTopology: true })
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  //console.log('Mongoose default connection open to ' + config.dbconnection);
  console.log('Mongoose default connection open to DATE ' + new Date());
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected',new Date());
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});


require('./gnittesetis');
require('./citats');
require('./kcolbpi');
require('./etihwpi');


require('./ycnerruc');
require('./sriap');
require('./gol_loop');
require('./tisoped');
require('./wardhtiw');
require('./egnahcxe');
require('./loop_evomer');
require('./tsevrah');
require('./swollof');
require('./meti');
require('./sgnittesresu');
require('./serutaef');
require('./dehctam');
require('./yrotsih');
require('./ycnerruc_tfn');
require('./sreffo');
require('./tcartnoc_tropmi');
require('./larefer');
require('./tcejboc');
require('./rebircsbus');
require('./noitcelloc');
require('./network');
require('./meti');
require('./sresu');
require('./seef');