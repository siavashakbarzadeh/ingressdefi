var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var pairSchema = new Schema({
  "pair"                  :{type:String,default:"", ref: 'pairs', useCreateIndex: true},
  "fromCurrency"          :{type:String,default:"", ref: 'pairs', useCreateIndex: true}, 
  "toCurrency"            :{type:String,default:"", ref: 'pairs', useCreateIndex: true}, 
  "fromCurrency_address"  :{type:String,default:"", ref: 'pairs', useCreateIndex: true}, 
  "toCurrency_address"    :{type:String,default:"", ref: 'pairs', useCreateIndex: true},
  "from_amount"           :{type:Number,default:0},
  "to_amount"             :{type:Number,default:0},
  "user_address"          :{type:String,default:""},
  "tx_id"                 :{type:String,default:""},
  "toCurrency_type"       :{type:String,default:""},
  "fromCurrency_type"     :{type:String,default:""},
  "toCurrency_img"       :{type:String,default:""},
  "fromCurrency_img"     :{type:String,default:""},
  "remove_percentage"     :{type:Number,default:0},
  "status"                :{type:String,default:"Deactive", useCreateIndex: true},
  "remove_status"         :{type:Boolean,default:false},
  "created_date"          : { type: Date, default: Date.now },
  "modified_date"         : { type: Date, default: Date.now }
});

module.exports = mongoose.model('pool_log', pairSchema, config.DB_prefix+'gol_loop')
