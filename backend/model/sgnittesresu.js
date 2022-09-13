var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var userSettingSchema = new Schema({
   "userid":{type: String,default:""},
 	"transnotify":{type: String,default:""},
 	"followernotify":{type: String,default:""},
 	"artnotify":{type: String,default:""},
 	"noisenotify":{type: String,default:""},
 	"bid":{type: String,default:""},
    // token
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }

});

module.exports = mongoose.model('usersettings', userSettingSchema, config.DB_prefix+'sgnittesresu')
