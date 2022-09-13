var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
   "name":{type: String,default:""},
 	"status":{type: String,default:""},
    // token
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }

});

module.exports = mongoose.model('category', categorySchema, 'category')
