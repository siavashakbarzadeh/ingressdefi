var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require("../uZmln/config");

var referalSchema = new Schema({
    "user_address": { type: String, default: "", useCreateIndex: true },
    "ref_address": { type: String, default: "", useCreateIndex: true },
    "ref_txId": { type: String, default: "", useCreateIndex: true },
    "status": { type: String, default: "Active", useCreateIndex: true },
    "created_date": { type: Date, default: Date.now },
    "modified_date": { type: Date, default: Date.now }
});

module.exports = mongoose.model('referal', referalSchema, config.DB_prefix + 'larefer')


