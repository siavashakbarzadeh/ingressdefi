var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var historySchema = new Schema({
	"image":{type:String,default:"", index:1},
    "username":{type:String,default:"", index:1},
    "itemId":{type:String,default:"", index:1},
    "type":{type:String,default:"", index:1},
    "price":{type:String,default:"", index:1}, 
    "currency":{type:String,default:"", index:1}, 
    "status":{type:String,default:"1", index:1},
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }
});

module.exports = mongoose.model('history', historySchema, config.DB_prefix+'yrotsih')
