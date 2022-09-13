var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var ipblockSchema = new Schema({
    "user_ip":{type: String,default:"", index:1},
    "status":{type: Number,default:1},
    "loginattempt":{type: Number,default:0},
    "ucode":{type: Number,default:0},
    "createddate": { type: Date, default: Date.now },


});
module.exports = mongoose.model('ipblock', ipblockSchema,  config.DB_prefix+'kcolbpi')
