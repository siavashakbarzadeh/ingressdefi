var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
   "userid":{type: String,default:""},
   "itemid":{type: String,default:""},
   "message":{type: String,default:""},
    "status":{type: String,default:""},
    // token
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }

});

module.exports = mongoose.model('reports', itemSchema, 'reports')
