var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var removePoolSchema = new Schema({
  "pair"                  :{type:String,default:"", ref: 'pairs', useCreateIndex: true},
  "fromCurrency"          :{type:String,default:"", ref: 'pairs', useCreateIndex: true}, 
  "toCurrency"            :{type:String,default:"", ref: 'pairs', useCreateIndex: true}, 
  "fromCurrency_address"  :{type:String,default:"", ref: 'pairs', useCreateIndex: true}, 
  "toCurrency_address"    :{type:String,default:"", ref: 'pairs', useCreateIndex: true},
  "from_amount"           :{type:Number,default:0},
  "to_amount"             :{type:Number,default:0},
  "percentage"            :{type:Number,default:0},
  "balance"               :{type:Number,default:0},
  "user_address"          :{type:String,default:"", useCreateIndex: true},
  "tx_id"                 :{type:String,default:""},
  "status"                :{type:String,default:"Completed", useCreateIndex: true},
  "created_date"          : { type: Date, default: Date.now },
  "modified_date"         : { type: Date, default: Date.now }
});

module.exports = mongoose.model('remove_pool', removePoolSchema, config.DB_prefix+'loop_evomer')
