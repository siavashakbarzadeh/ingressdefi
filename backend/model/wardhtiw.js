var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var withdrawSchema = new Schema({
  "userAddress"     : {type: String, useCreateIndex: true},  
  "poolId"          : {type: String, ref: 'par-LEPTlFE1pE', useCreateIndex: true},
  "pairAddress"     : {type:String, default:"", ref: 'pairs', useCreateIndex: true},
  "txId"            : {type:String, default:""},
  "status"          : {type:String, default:"Pending", useCreateIndex: true},
  "amount"          : {type:String, default:"", useCreateIndex: true},
  "created_date"    : {type: Date, default: Date.now },

});
module.exports = mongoose.model('withdraw', withdrawSchema, config.DB_prefix+'wardhtiw')