var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usermailSchema = new Schema({ 
    "user_id":{ type:mongoose.Schema.Types.ObjectId, ref:'NusFersT', index:true },
    "news":{type:String,default:"0", index:1},
    "releases":{type:String,default:"0", index:1}, 
    "paltform_updates":{type:String,default:"0", index:1}, 
    "purchases_is_completed":{type:String,default:"0", index:1}, 
    "purchases_not_completed":{type:String,default:"0", index:1}, 
    "complete_sale":{type:String,default:"0", index:1}, 
    "obj_sale":{type:String,default:"0", index:1}, 
    "sent_item":{type:String,default:"0", index:1}, 
    "receive_item":{type:String,default:"0", index:1}, 
    "get_offer":{type:String,default:"0", index:1}, 
    "make_offer":{type:String,default:"0", index:1}, 
    "receive_bit":{type:String,default:"0", index:1}, 
    "make_bit":{type:String,default:"0", index:1}, 
    "is_offer_accepted":{type:String,default:"0", index:1}, 
    "new_followed":{type:String,default:"0", index:1}, 
    "new_followers":{type:String,default:"0", index:1}, 
    "offer_received":{type:String,default:"0", index:1}, 
    "purchase_made":{type:String,default:"0", index:1}, 
    "sales_made":{type:String,default:"0", index:1}, 
    "transaction_carried":{type:String,default:"0", index:1},  
    "is_yours_wallet":{type:String,default:"0", index:1},  
    "is_yours_uname_wallet":{type:String,default:"0", index:1},  
    "is_yours_uname":{type:String,default:"0", index:1},  
    "is_yours":{type:String,default:"0", index:1},  
    "is_twofactor":{type:String,default:"0", index:1},  
    "is_portfolio":{type:String,default:"0", index:1},    
    "created_at": { type: Date, default: Date.now },
    "updated_at":{ type: Date, default: Date.now }

});

module.exports = mongoose.model('NmaFilTprTefFN', usermailSchema, 'NmaFilTprTefFN')
