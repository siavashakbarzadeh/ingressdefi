var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var sitesettingSchema = new Schema({
	"maintance_detail":{type:String,default:""},
	"copyrights":{type:String,default:""},
	"frontend_host":{type:String,default:""},
	"backend_host":{type:String,default:""},
	"admin_host":{type:String,default:""},
   	"site_name" :{type: String,default:""},
 	"site_logo":{type: String,default:""},
    "site_favicon":{type: String,default:""},
    "site_innerlogo":{type: String,default:""},
    "site_maintaince":{type:String,default:"1"},
    "address":{type:String,default:""},
    "mail":{type:String,default:""},
    "skype":{type:String,default:""},
    "phone":{type:Number,default:0},
    "facebook":{type:String,default:""},
    "youtube":{type:String,default:""},
    "videolink":{type:String,default:""},
    "twitter":{type:String,default:""},
    "instagram":{type:String,default:""},

    "vote_percentage":{type:Number,default:0},
    "referal_percentage":{type:Number,default:0},
    
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }

});

module.exports = mongoose.model('sitesetting', sitesettingSchema, config.DB_prefix+'gnittesetis')
