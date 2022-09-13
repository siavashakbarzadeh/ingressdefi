var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var activitySchema = new Schema({
  "userId":{type:mongoose.Schema.Types.ObjectId, ref:'IN_MNlkses', index:true},
  "account": {type: String, default:""},
  "contract": {type: String, default:""},
 	"abi":{type:JSON,default:{}, index:1},
  "network":{type: String,default:""},
  "token_currency":{type: String,default:""},
  "createddate": { type: Date, default: Date.now },
  "modifieddate":{ type: Date, default: Date.now }

});

module.exports = mongoose.model('import_contract', activitySchema, config.DB_prefix+'tcartnoc_tropmi')