var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var emailtemplateSchema = new Schema({
  "title": {type:String, index:1},
  "mailsubject": String,
  "mailcontent": String,
  "createddate": { type: Date, default: Date.now },
  "modifieddate": { type: Date, default: Date.now }
});
module.exports = mongoose.model('emailtemplate', emailtemplateSchema, 'emailtemplate')


