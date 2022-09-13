var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
   "auth":{type: String,default:""},
   "name":{type: String,default:""},
   "subject":{type: String,default:""},
   "message":{type: String,default:""},
    "status":{type: String,default:""},
    "replied":{type: String,default:"No"},
    // token
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }

});

module.exports = mongoose.model('support', itemSchema, 'support')
