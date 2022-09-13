var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({ 
    "address":{type:String,default:"", index:1}, 
    "status":{type:String,default:"", index:1},
    "network":{type:String,default:"", index:1},
    "activation_date": { type: Date, default: Date.now },
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }

});

module.exports = mongoose.model('NusFersT', usersSchema, 'NusFersT')
