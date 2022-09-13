var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var usersSchema = new Schema({
	// "userId":{ type:mongoose.Schema.Types.ObjectId, ref:'NusFersT', index:true },
    "auth":{type:String,default:"", index:1},
    "username":{type:String,default:"", index:1},
    "address":{type:String,default:"", index:1},
    "name":{type:String,default:"", index:1},
    "profilepicture":{type:String,default:"", index:1},
    "bio":{type:String,default:"", index:1},
    "social":{type:JSON,default:"", index:1},
    "location":{type:JSON,default:"", index:1},
    "status":{type:String,default:"", index:1},
    "tfa_status":{type:String,default:"", index:1},
    "tfa_url":{type:String,default:"", index:1},
    "tfa_secret":{type:String,default:"", index:1},
    "profile_status":{type:Number,default:0, index:1},
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }

});

module.exports = mongoose.model('MNlkses', usersSchema, config.DB_prefix+'MNlkses')
