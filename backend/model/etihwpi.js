var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var ipwhiteSchema = new Schema({
    "user_ip":{type: String,default:"", index:1},
    "status":{type: Number,default:1},
    "loginattempt":{type: Number,default:0},
    "ucode":{type: Number,default:0},
    "createddate": { type: Date, default: Date.now },


});
module.exports = mongoose.model('ipwhite', ipwhiteSchema, config.DB_prefix+'etihwpi')