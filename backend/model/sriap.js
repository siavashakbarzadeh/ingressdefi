var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");


var pairSchema = new Schema({
  "pair"                        : {type:String,default:"", useCreateIndex: true},
  "fee"                         : {type:Number,default:0},
  "fee_type"                    : {type:String,default:""},
  "fromCurrency"                : {type:String,default:"", useCreateIndex: true}, 
  "toCurrency"                  : {type:String,default:"", useCreateIndex: true},
  "fromCurrency_i"              : {type:String,default:""}, 
  "toCurrency_i"                : {type:String,default:""},
  "fromCurrency_address"        : {type:String,default:"", useCreateIndex: true}, 
  "toCurrency_address"          : {type:String,default:"", useCreateIndex: true},
  "fromCurrency_type"           : {type:String,default:"", useCreateIndex: true},
  "toCurrency_type"             : {type:String,default:"", useCreateIndex: true},
  "fromCurrency_name"           : {type:String,default:""}, 
  "toCurrency_name"             : {type:String,default:""},
  "fromCurrency_decimal"        : {type:Number,default:18, useCreateIndex: true}, 
  "toCurrency_decimal"          : {type:Number,default:18, useCreateIndex: true},
  "image"                       : {type:String,default:""},
  "pair_address"                : {type:String,default:"", useCreateIndex: true},
  "marketPrice"                 : {type:Number,default:0},
  "from_amount"                 : {type:Number,default:0},
  "to_amount"                   : {type:Number,default:0},
  "status"                      : {type:String,default:"Active", useCreateIndex: true},
  "pair_status"                 : {type:String,default:"Deactive", useCreateIndex: true},
  "contract_add_status"         : {type:Boolean,default:false},
  "first_pool_txid"             : {type:String,default:""},
  "poolId"                      : {type:String,default:""},
  "pooltx_id"                   : {type:String,default:""},
  "liqudity_value"              : {type:Number,default:0},
  "created_by"                  : {type:String,default:""},
  "created_by_address"          : {type:String,default:""},
  "created_date"                : { type: Date, default: Date.now },
  "modified_date"               : { type: Date, default: Date.now }
});

module.exports = mongoose.model('pairs', pairSchema, config.DB_prefix+'par-LEPTlFE1pE')
