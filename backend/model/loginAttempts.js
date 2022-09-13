const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let loginAttempts = new Schema({
  "emailid"      : {type:String,lowercase: true, index:1},
  "secret_key"   : String,  
  "attemptCount" : {type: Number, default: 1, index:1 },
  "ip_address"   : String,
  "browser"      : String,
  "deviceinfo"   : String,
  "created_at"   : {type: Date, default: Date.now },
  "status"       : {type:Number, default:1},
  "fireBaseid"   : { type:String, default: '' },  
  "device"   : { type:String, default: '' },  
  "model"   : { type:String, default: '' },
 }, {"versionKey": false});

module.exports = mongoose.model('loginAttempts',loginAttempts,'loginAttempts');