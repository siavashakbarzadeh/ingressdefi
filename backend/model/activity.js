var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var activitySchema = new Schema({
   "userId":{type:mongoose.Schema.Types.ObjectId, ref:'IN_MNlkses', index:true},
   "image": {type: String, default:""},
 	"type":{type: String,default:""},
 	"objectId":{type:mongoose.Schema.Types.ObjectId, ref:'IN_meti', index:true},
   "creatorId":{type:mongoose.Schema.Types.ObjectId, ref:'IN_MNlkses', index:true},
   "ownerId":{type:mongoose.Schema.Types.ObjectId, ref:'IN_MNlkses', index:true},
   "objectName":{type: String,default:""},
   "price":{type: String,default:""},
   "currency":{type: String,default:""},
   "tocurrency":{type: String,default:""},
   "txid":{type: String,default:""},
    // token
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }

});

module.exports = mongoose.model('activities', activitySchema, config.DB_prefix+'seitivitca')