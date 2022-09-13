var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var exchangeSchema = new Schema({
    "userAddress"   : {type: String,default:"", useCreateIndex: true},
    "type"          : {type: String,default:""},
    "amountETH"     : {type: String,default:"", useCreateIndex: true},
    "amountToken"   : {type: String,default:"" , useCreateIndex: true},
    "tokenAddress"  : {type: String,default:"" },
    "pair"          : {type: String,default:"", ref: 'pairs', useCreateIndex: true},
    "txId"          : {type: String,default:"", useCreateIndex: true },
    "status"        : {type: Boolean,default:true },
    "createddate"   : {type: Date, default: Date.now }

});
module.exports = mongoose.model('exchange', exchangeSchema, config.DB_prefix+'egnahcxe')
