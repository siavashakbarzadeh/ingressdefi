var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var followsSchema = new Schema({
   "userid":{type: String,default:""},
 	"type":{type: String,default:""},
 	"followedby":{type: String,default:""},
    // token
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }

});

module.exports = mongoose.model('follows', followsSchema, config.DB_prefix+'swollof')
