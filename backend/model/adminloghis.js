var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userlogSchema = new Schema({
    "user_id":{ type: mongoose.Schema.Types.ObjectId, ref: 'admin', index:1},
    "browser":{type:String,default:""},
    "ip_address":{type:String,default:""},
    "createddate": { type: Date, default: Date.now }
});
module.exports = mongoose.model('adminlog', userlogSchema, 'adminlog')
