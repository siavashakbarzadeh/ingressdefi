var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");
const AutoIncrement = require('mongoose-sequence')(mongoose);

var objectmatchedSchema = new Schema({
    "creatorId":{ type:mongoose.Schema.Types.ObjectId, ref:'IN_MNlkses', index:true },
    "ownerId":{ type:mongoose.Schema.Types.ObjectId, ref:'IN_MNlkses', index:true },
    "image":{type:String,default:"", index:1},
    "spec_id":{type:Number,default:"", index:1},
    "item_id":{type:String,default:"", index:1},
    "name":{type:String,default:"", index:1},
    "edition":{type:String,default:"", index:1}, 
    "bidclosed":{type:Number,default:0, index:1}, 
    "offerclosed":{type:Number,default:0, index:1}, 
    "imported":{type:Number,default:0, index:1}, 
    "contractId":{type:String,default:"", index:1}, 
    "currency":{type:String,default:"", index:1},
    "tocurrency":{type:String,default:"", index:1}, 
    "saletype":{type:String,default:"", index:1},
    "toprivate":{type:String,default:"", index:1},
    "price":{type:String,default:"", index:1}, 
    "completedprice":{type:String,default:"", index:1}, 
    "start_date":{type:String,default:"", index:1}, 
    "start_time":{type:String,default:"", index:1}, 
    "end_date":{type:String,default:"", index:1}, 
    "end_time":{type:String,default:"", index:1}, 
    "sellorder":{type:Array,default:[], index:1},
    "txid":{type: String,default:""},
    "buyorder":{type:Array,default:[], index:1},
    "sold":{type:Number,default:1, index:1},//0: deactive, 1: active but not sold, 2: sold 
    "status":{type:String,default:"", index:1},
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }
});

module.exports = mongoose.model('matched', objectmatchedSchema, config.DB_prefix+'dehctam')