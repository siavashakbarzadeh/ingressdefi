var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var pairSchema = new Schema({
  "pair"                    :{type:String,default:"", ref: 'pairs', useCreateIndex: true},
  "pair_address"            :{type:String,default:"", ref: 'pairs', useCreateIndex: true},
  "fromCurrency"            :{type:String,default:"", ref: 'pairs', useCreateIndex: true}, 
  "toCurrency"              :{type:String,default:"", ref: 'pairs', useCreateIndex: true},
  "fromCurrency_address"    :{type:String,default:"", ref: 'pairs', useCreateIndex: true}, 
  "toCurrency_address"      :{type:String,default:"", ref: 'pairs', useCreateIndex: true},
  "fromCurrency_type"       :{type:String,default:"", ref: 'pairs', useCreateIndex: true},
  "toCurrency_type"         :{type:String,default:"", ref: 'pairs', useCreateIndex: true},
  "from_date"               :{type:Date,default:""},
  "to_date"                 :{type:Date,default:""},
  "day_count"               :{type:Number,default:60},
  "tx_id"                   :{type:String,default:""},
  "total_value"             :{type:Number,default:0},
  "rewardedaddress"         :{type:String,default:"", useCreateIndex: true},
  "reward_token_contract"   :{type:String,default:"", useCreateIndex: true},
  "status"                  :{type:String,default:"Active", useCreateIndex: true},
  "created_date"            :{type: Date, default: Date.now},
  "modified_date"           :{type: Date, default: Date.now}
});
module.exports = mongoose.model('cherry_list', pairSchema, config.DB_prefix+'tsil_yrrehc')