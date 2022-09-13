var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersgallerySchema = new Schema({
	"userId":{ type:mongoose.Schema.Types.ObjectId, ref:'NusFersT', index:true },
    "gallery":[], 

});

module.exports = mongoose.model('gallery', usersgallerySchema, 'gallery')
