var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var harvestSchema = new Schema({
  "userAddress"     : {type: String},  
  "poolId"          : {type: String, ref: 'par-LEPTlFE1pE', useCreateIndex: true},
  "pairAddress"     : {type:String, default:"", ref: 'pairs', useCreateIndex: true},
  "pair"            : {type:String, default:"", ref: 'pairs', useCreateIndex: true},
  "txId"            : {type:String, default:"", useCreateIndex: true},
  "status"          : {type:String, default:"Completed"},
  "amount"          : {type:String, default:"", useCreateIndex: true},
  "created_date"    : {type: Date, default: Date.now },

});
module.exports = mongoose.model('harvest', harvestSchema, config.DB_prefix+'tsevrah')