var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var faqSchema = new Schema({
    "question":{type: String,default:"", index:1},
    "answer":{type: String,default:"", index:1},
    "status":{type: String,default:"Deactive"},
    "createddate": { type: Date, default: Date.now },
    "modifieddate": { type: Date, default: Date.now },


});
module.exports = mongoose.model('faq', faqSchema, 'faq')
