var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var cobjectSchema = new Schema({
	"logo":{type:String,default:"", index:1},
    "name":{type:String,default:"", index:1},
    "description":{type:String,default:"", index:1},
    "youtube_link":{type:String,default:"", index:1},
    "twitter_link":{type:String,default:"", index:1}, 
    "insta_link":{type:String,default:"", index:1}, 
    "status":{type:String,default:"", index:1},
    "userId":{ type:mongoose.Schema.Types.ObjectId, ref:'IN_MNlkses', index:true },
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }
});

module.exports = mongoose.model('collection', cobjectSchema, config.DB_prefix+'noitcelloc')
