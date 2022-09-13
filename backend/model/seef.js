var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var activitySchema = new Schema({
   "fee_type": {type: String, default:""},
 	"address":{type: String,default:""},
   "fee":{type: String,default:""},
    // token
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }

});

module.exports = mongoose.model('fees', activitySchema, config.DB_prefix+'seef')