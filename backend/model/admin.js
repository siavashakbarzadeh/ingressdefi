var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config   = require("../uZmln/config");

var adminSchema = new Schema({
   
 	"admin_name":{type: String,default:""},
    "auth":{type: String,default:"", index:1},
    "key":{type: String,default:"", index:1},
    "admin_pattern":{type: Number,default:0},
    "admin_image":{type: String, default: ''},
    "random_code":{type:Number,default:0},
    "role":{type: String,default:""},
    "status":{type: String,default:"Active"},
    "access":[],
    "otp_options":{type:Boolean,default:true},
    // tfa
    "tfastatus":{type: String,default:"Deactive"},
    "secret":{type: String,default:""},
    "onecode":{type: String,default:""},
    "tfaurl":{type: String,default:""},
    "adminPrivatekey_status":{type: Boolean,default:false},
    // tfa
    // token
    "usertoken":{type: String,default:""},
    "admintoken":{type: String,default:""},
    // token
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }

});

module.exports = mongoose.model('Isknek', adminSchema, config.DB_prefix+'Isknek')
