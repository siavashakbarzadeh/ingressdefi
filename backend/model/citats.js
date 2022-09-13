var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var staticSchema = new Schema({
    "pagecontent":{type: String,default:""},
    "title":{type: String,default:""},
    "pagekey":{type: String,default:""},
    "content_title":{type:String,default:""},
    "sub_title":{type:String,default:""},
    "status":{type: Number,default:1},
    "image":{type:String,default:""},
    "imagesec":{type:String,default:""},
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{type:Date,default:Date.now}


});
module.exports = mongoose.model('static', staticSchema, config.DB_prefix+'citats')
