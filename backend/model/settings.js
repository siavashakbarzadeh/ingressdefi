var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sitesettingSchema = new Schema({
	"maintance_detail":{type:String,default:"", index:1},
	"copyrights":{type:String,default:""},
	"frontend_host":{type:String,default:""},
	"backend_host":{type:String,default:""},
	"admin_host":{type:String,default:""},
   	"site_name" :{type: String,default:"", index:1},
 	"site_logo":{type: String,default:"", index:1},
    "site_favicon":{type: String,default:""},
    "site_innerlogo":{type: String,default:""},
    "site_maintaince":{type:String,default:"1"},
    "address":{type:String,default:""},
    "mail":{type:String,default:"", index:1},
    "skype":{type:String,default:""},
    "phone":{type:Number,default:0, index:1},
    "facebook":{type:String,default:""},
    "youtube":{type:String,default:""},
    "videolink":{type:String,default:""},
    "twitter":{type:String,default:""},
    "instagram":{type:String,default:""},
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }

});

module.exports = mongoose.model('setting', sitesettingSchema, 'setting')
