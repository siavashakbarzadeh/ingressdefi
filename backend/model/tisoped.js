var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var depositSchema = new Schema({
  "userAddress"     : {type: String},  
  "poolId"       	: {type: String, ref: 'par-LEPTlFE1pE', useCreateIndex: true},
  "pairAddress"     : {type:String, default:"", useCreateIndex: true},
  "txId"            : {type:String, default:""},
  "status"          : {type:String, default:"Pending", useCreateIndex: true},
  "amount"          : {type:Number, default:0},
  "created_date"    : {type: Date, default: Date.now },

});
module.exports = mongoose.model('deposit', depositSchema, config.DB_prefix+'tisoped')