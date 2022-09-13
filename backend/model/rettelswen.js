const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var config   = require("../uZmln/config");

let NewsletterSchema = new Schema({
  "type"       : {type: Number, default: 0 }, //0-alluser 1- particularuser
  "lettermail" : {type: String, default: '' },
  "subject"    : String,
  "message"    : String,
  "selusr"     : [],
  "subcribers" : {type: Number, default: 0 },
  "created_at" : {type: Date, default: Date.now },
  "updated_at" : {type: Date, default: Date.now }
}, {"versionKey" : false});

module.exports = mongoose.model('newsletter', NewsletterSchema, config.DB_prefix+'rettelswen');
