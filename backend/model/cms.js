var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var cmsSchema = new Schema({
    "pagecontent":{type: String,default:""},
    "title":{type: String,default:"", index:1},
    "slug":{type: String,default:"", index:1},
    "pagekey":{type: String,default:"", index:1},
    "status":{type: String,default:"Active"},
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{type:Date,default:Date.now}
});
module.exports = mongoose.model('cms', cmsSchema, config.DB_prefix+'smc')
