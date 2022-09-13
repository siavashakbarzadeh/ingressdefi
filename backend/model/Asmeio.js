var mongoose = require( 'mongoose' );
const CryptoJS = require('crypto-js');

var config   = require("../uZmln/config");
var common   = require("../GVyc/common");
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(common.decrypt(config.dbconnection), { useNewUrlParser: true,useUnifiedTopology: true })
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));
mongoose.connection.on('connected', function () {
	console.log(common.decrypt(config.dbconnection));
    console.log('Mongoose default connection open to DATE ' + new Date());
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected',new Date());
});
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});


