var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var cobjectSchema = new Schema({
	"image":{type:String,default:"", index:1},
    "name":{type:String,default:"", index:1},
    "description":{type:String,default:"", index:1},
    "youtube_link":{type:String,default:"", index:1},
    "twitter_link":{type:String,default:"", index:1},
    "insta_link":{type:String,default:"", index:1},
    "copies":{type:String,default:"", index:1}, 
    "status":{type:String,default:"", index:1},
    "object_id":{type:Number,default:"", index:1},
    "userId":{ type:mongoose.Schema.Types.ObjectId, ref:'NusFersT', index:true },
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }
});

cobjectSchema.plugin(AutoIncrement, {inc_field: 'inc_id'});
module.exports = mongoose.model('cobject', cobjectSchema, config.DB_prefix+'tcejboc')
