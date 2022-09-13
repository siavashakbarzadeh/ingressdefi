var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cmsSchema = new Schema({
    "photograph":{type: String,default:""},
    "title":{type: String,default:"", index:1},
    "description":{type: String,default:"", index:1},
    "external_link":{type: String,default:"", index:1},
    "num_copy":{type: String,default:"", index:1},
    "status":{type: String,default:"Active"},
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{type:Date,default:Date.now}
});
module.exports = mongoose.model('dummy', cmsSchema, 'dummy')
