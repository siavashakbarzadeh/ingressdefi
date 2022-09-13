var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;
var config   = require("../uZmln/config");

var networkSchema = new Schema({
  "networkName"        : {type: String, default:""},  
  "currencyName"        : {type: String, default:""},  
  "currencySymbol"      : {type: String, default:""},
  "currency_type"       : {type: String, default:""},
  "currency_decimal"    : {type: Number, default:18},
  "status"              : {type: String, default: "Active"},
  "created_date"        : {type: Date, default: Date.now},
  "modify_date"         : {type: Date, default: Date.now},
});

module.exports = mongoose.model('network', networkSchema, config.DB_prefix+'network')
