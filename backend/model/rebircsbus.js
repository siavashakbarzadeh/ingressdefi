var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var subscribeSchema = new Schema({
	"auth":{type:String,default:"", index:1},
    "status":{type:String,default:"", index:1},
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }

});

module.exports = mongoose.model('subscriber', subscribeSchema, config.DB_prefix+'rebircsbus')