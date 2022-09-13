var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var favoriteSchema = new Schema({
   "userid":{type: String,default:""},
 	"item_id":{type: String,default:""},
    // token
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }

});

module.exports = mongoose.model('favorite', favoriteSchema, config.DB_prefix+'etirovaf')
