var express     = require('express');
var router      = express.Router();
var mongoose    = require('mongoose');
var moment 			= require('moment');
var multer      = require('multer');
var async       = require('async');
let common      = require('../GVyc/common');
var collection  = mongoose.model('collection');
var item 		= mongoose.model('items');
var users 		= mongoose.model('MNlkses');
var nftcurrency = mongoose.model('nftcurrency');
var matched 	= mongoose.model('matched');
var offers 		= mongoose.model('offers');
var activity		= require('../model/activity');

let updatedDate = ()=>{
	return new Date();
};

let storage     = multer.diskStorage({
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	}
});
let upload      = multer({ storage: storage });

router.get('/test', function (req, res) {
	try{
		res.json({status:true, data:'pairDetails'});
	} catch(e) {
		
	}
});


router.post('/auctionsale', common.tokenMiddleware, async function (req, res) {
});




router.post('/getCollections', common.tokenMiddleware, async function (req, res) {
	try{
		var userId = req.userId;
		var info = req.body;
		let limit = info.limit;
		let skip = info.skip;
		let srt = {_id:-1};
		let collectionData = await collection.find({userId:userId}).limit(limit).skip(skip).sort(srt);
		if(collectionData && collectionData.length > 0){
			var collections = [];
			for(var i in collectionData){
				var cid = collectionData[i]._id.toString();
				var Uid = collectionData[i].userId.toString();
				collections.push({
					"collectionId"	: common.encrypt(cid),
					"userId"		: common.encrypt(Uid),
					"name"			: collectionData[i].name,
					"description"	: collectionData[i].description,
					"logo"			: collectionData[i].logo,
					"status"      	: collectionData[i].status,
				}); 
			}
			res.json({status:true,data:collections});
		}else{
			res.json({status:false,msg:'Unable to get data'})
		}
	}catch(e){
	}
});

router.post('/findCollection', common.tokenMiddleware, async function (req, res) {
	try{
		values = req.body;
		var userId = req.userId;
		var cid = common.decrypt(values.id);
		collection.findOne({_id:  cid, userId: userId}).exec(function (errs, resdatas) {
			if (resdatas.length < 0) {
				res.json({ status: false, msg: "No data available!!!" })
			} else {
				res.json({ status: true, msg: "Collection available"})
			}
		})
	}catch(e){
	}
});

router.post('/getNftCurrency', common.tokenMiddleware, async function (req, res) {
	try{
		values = req.body;
		var userId = req.userId;
		nftcurrency.find({status: 'Active'}, {currencyName:1, _id:0}).exec(function (errs, resdatas) {
			if (resdatas.length < 0) {
				res.json({ status: false, msg: "No data available!!!" })
			} else {
				res.json({ status: true, msg: "Currency available", data:resdatas})
			}
		})
	}catch(e){
	}
});

router.post('/createCollection', common.tokenMiddleware, upload.single('collection_img') ,function (req, res) {
	try {
		let info = req.body;
		var userId = req.userId;
		collection.find({name:info.name, userId: userId}).countDocuments().exec(function(err,count){
			if(count > 0) {
				return res.json({status : false, msg : 'Name already exists!'});
			} else {
				common.imgUploader(req.file, function (result){
					if(result) {
						let obj = {
							"userId"		: userId,
							"name"			: info.name,
							"description"	: info.description,
							"logo"			: result.Location,
							"status"      	: 'active',
							"modifieddate"  : updatedDate()
						};
						collection.create( obj, function(err,result) {
							var cId =  result._id.toString();
							var collectionId = common.encrypt(cId);
							if(result) {
								res.json({status : true, msg : " Successfully Created", "collectionId" : collectionId});
							} else {
								res.json({status : false, msg : "Invalid request. Please Try again"});
							}
						});
					}
				});
			}
		});
	} catch(e) {
		
	}
});

router.get('/countCollection', common.tokenMiddleware ,function (req, res) {
	try {
		let info = req.body;
		var userId = req.userId;
		collection.find({userId: userId}).countDocuments().exec(function(err,count){
			if(count > 0) {
				return res.json({status : true, data : count});
			} else {
				return res.json({status : false, msg : "No data found"});
			}
		});
	} catch(e) {
		
	}
});

/*get user nft count api functionality start*/
router.get('/userNft', common.tokenMiddleware ,function (req, res) {
	try {
		let info = req.body;
		var userId = req.userId;
		item.find({'ownerId': mongoose.mongo.ObjectId(userId),$or: [ { salestatus: 0 }, { salestatus: 1 } ]  }).countDocuments().exec(function(err,count){
			if(count > 0) {
				return res.json({status : true, data : count});
			} else {
				return res.json({status : false, msg : "No data found"});
			}
		});
	} catch(e) {
		
	}
});
/*get user nft count api functionality start*/

router.post('/getItems', common.tokenMiddleware, async function (req, res) {
	try{
		var values = req.body;
		var userId = req.userId;
		var cid = common.decrypt(values.id);
		console.log("cidcid",cid);
		let limit = values.limit;
		let skip = values.skip;
		let srt = {_id:-1};
		let itemData = await item.find({collectionId:cid, ownerId: userId}).limit(limit).skip(skip).sort(srt);
		if(itemData && itemData.length > 0){
			var items = [];
			for(var i in itemData){
				var Iid = itemData[i]._id.toString();
				var Uid = itemData[i].userId.toString();
				var Cid = (itemData[i].imported == 1) ? common.encrypt(itemData[i].imported.toString()) : "" ;
				items.push({
					"itemId"		: common.encrypt(Iid),
					"userId"		: common.encrypt(Uid),
					"name"			: itemData[i].name,
					"description"	: itemData[i].description,
					"image"			: itemData[i].image,
					"price"			: itemData[i].price,
					"network"		: itemData[i].network,
					"currency"		: itemData[i].currency,
					"tocurrency"	: itemData[i].tocurrency,
					"nftid"			: itemData[i].sellnftid,
					"supply"		: itemData[i].supply,
					"salestatus"	: itemData[i].salestatus,
					"status"      	: itemData[i].status,
					"imported"      : itemData[i].imported,
					"contract"     	: itemData[i].import_contract,
					"contractId"   	: itemData[i].Cid,
					"type":itemData[i].type,
					"selltokenid":itemData[i].selltokenid,
					"spid":itemData[i].spec_id,
					"admin_mint":itemData[i].admin_mint,
				}); 
			}
			res.json({status:true,data:items});
		}else{
			res.json({status:false,msg:'Unable to get data'})
		}
	}catch(e){
	}
});

/*get sing item details*/
router.post('/getItem', common.tokenMiddleware, async function (req, res) {
	try{
		var values = req.body;
		var userId = req.userId;
		var itemid = common.decrypt(values.id);
		let itemData = await item.findOne({_id:itemid, ownerId: userId}).exec();
		if(itemData){
			var Iid = itemData._id.toString();
			var Uid = itemData.userId.toString();
			var Rid = itemData.ownerId.toString();
			var Cid = (itemData.imported == 1) ? common.encrypt(itemData.import_contractId.toString()) : "" ;
			
			let datas = {
					"itemId"		: common.encrypt(Iid),
					"house"			: common.encrypt(Uid),
					"rent"			: common.encrypt(Rid),
					"name"			: itemData.name,
					"description"	: itemData.description,
					"content"		: itemData.content,
					"link"			: itemData.external_link,
					"currency"		: itemData.currency,
					"metadata"		: itemData.metadata,
					"image"			: itemData.image,
					"price"			: itemData.price,
					"tocurrency"	: itemData.tocurrency,
					"supply"		: itemData.supply,
					"status"      	: itemData.status,
					"spid"      	: itemData.spec_id,
					"item_id"      	: itemData.item_id,
					"bid"      		: itemData.bid,
					"private"      	: itemData.toprivate,
					"sltype"      	: itemData.saletype,
					"objtype"      	: (itemData.objtype == 'single') ? 0 : 1,
					"metadata"     	: itemData.metadata,
					"salestatus"    : itemData.salestatus,
					"status"    	: itemData.status,
					"liked"    		: itemData.likeCount,
					"views"    		: itemData.viewCount,
					"statdate"    	: itemData.start_date,
					"enddate"    	: itemData.end_date,
					"stattime"    	: itemData.start_time,
					"endtime"    	: itemData.end_time,
					"created_date"  : itemData.createddate,
					"selltokenid"  : itemData.sellnftid,
					"selltoken"  : itemData.sellnftaddr,
					"sellassettype"  : itemData.sellastype,
					"buytokenid"  : itemData.buytokenid,
					"buytoken"  : itemData.buytokenadr,
					"buyassettype"  : itemData.buyastype,
					"imported"      : itemData.imported,
					"network"		: itemData.network,
					"contract"     	: itemData.import_contract,
					"contractId"   	: Cid,
					"type":itemData.type,
					"admin_mint":itemData[i].admin_mint,
				};
			res.json({status:true,data:datas});
		}else{
			res.json({status:false,msg:'Unable to get data'})
		}
	}catch(e){
	}
});
/*get sing item details*/


router.post('/onsaleothers', common.originMiddlewarenew, async function (req, res) {
	var username = req.body.username;
	users.findOne({username: username}, {auth:1, profilepicture:1, username:1, address:1, _id:1}, (err, result) => {
		if(result){
			try{
		var values = req.body;
		var userId = result._id;
		let limit = values.limit;
		let skip = values.skip;
		let srt = {_id:-1};

		matched.aggregate([
		{ 
			$lookup:
			{
				from 			: 'IN_MNlkses',
				localField		: 'creatorId',
				foreignField	: '_id',
				as 				: 'user'
			}
		},
		{ 
			$lookup:
			{
				from 			: 'IN_MNlkses',
				localField 		: 'ownerId',
				foreignField	: '_id',
				as 				: 'owner'
			}
		},
		{ 
			$lookup:
			{
				from 			: 'IN_meti',
				localField 		: 'item_id',
				foreignField	: '_id',
				as 				: 'item'
			}
		},
		{ 
			$project:
			{
				"userId"      	: "$creatorId",
				"username"		: "$user.username",
				"profilepicture": "$user.profilepicture",
				"ownerId"      	: "$ownerId",
				"ownername"		: "$owner.username",
				"ownerpicture"	: "$owner.profilepicture",
				"name"			: "$name",
				"description"	: "$item.description",
				"image"			: "$image",
				"item_id"		: "$item_id",
				"currency"		: "$tocurrency",
				"price"			: "$price",
				"supply"		: "$edition",
				"status"      	: "$status",
				"sold"   		: "$sold",
			}
		},
		{ $match: {   'ownerId': mongoose.mongo.ObjectId(userId), 'sold': 1, 'status':"1"  } , },
		{ $sort: srt },
		{ $limit: limit },
		{ $skip: skip }
		]).exec(function(err, result) {
			
			if (err) throw err;
			let itemData = result;
			if(itemData && itemData.length > 0){
				var items = [];
				for(var i in itemData){
					var Iid = itemData[i].item_id.toString();
					var Uid = itemData[i].userId.toString();
					var Oid = itemData[i].ownerId.toString();
					items.push({
						"itemId"			: common.encrypt(Iid),
						"userId"			: common.encrypt(Uid),
						"ownerId"			: common.encrypt(Oid),
						"name"				: itemData[i].name,
						"description"		: itemData[i].description,
						"image"				: itemData[i].image,
						"price"				: itemData[i].price,
						"currency"			: itemData[i].currency,
						"supply"			: itemData[i].supply,
						"status"      		: itemData[i].status,
						"username"     		: itemData[i].username,
						"profilepicture"	: itemData[i].profilepicture,
						"ownername"			: itemData[i].ownername,
						"ownerpicture"		: itemData[i].ownerpicture,
					}); 
				}
				return res.json({status:true,data:items});
			}else{
				return res.json({status:true,msg:'No items found', data: []})
			}
		});
	}catch(e){
	}
		}
	});
	
});

router.post('/userItems', common.tokenMiddleware, async function (req, res) {
	try{
		var values = req.body;
		var userId = req.userId;
		let limit = values.limit;
		let skip = values.skip;
		let srt = {_id:-1};

		matched.aggregate([
		{ 
			$lookup:
			{
				from 			: 'IN_MNlkses',
				localField		: 'creatorId',
				foreignField	: '_id',
				as 				: 'user'
			}
		},
		{ 
			$lookup:
			{
				from 			: 'IN_MNlkses',
				localField 		: 'ownerId',
				foreignField	: '_id',
				as 				: 'owner'
			}
		},
		{ 
			$lookup:
			{
				from 			: 'IN_meti',
				localField 		: 'item_id',
				foreignField	: '_id',
				as 				: 'item'
			}
		},
		{ 
			$project:
			{
				"userId"      	: "$creatorId",
				"username"		: "$user.username",
				"profilepicture": "$user.profilepicture",
				"ownerId"      	: "$ownerId",
				"ownername"		: "$owner.username",
				"ownerpicture"	: "$owner.profilepicture",
				"name"			: "$name",
				"description"	: "$item.description",
				"image"			: "$image",
				"item_id"		: "$item_id",
				"currency"		: "$tocurrency",
				"currency1"		: "$currency",
				"price"			: "$price",
				"supply"		: "$edition",
				"status"      	: "$status",
				"sold"   		: "$sold",
				
			}
		},
		{ $match: {   'ownerId': mongoose.mongo.ObjectId(userId), 'sold': 1, 'status':"1"  } , },
		{ $sort: srt },
		{ $limit: limit },
		{ $skip: skip }
		]).exec(function(err, result) {
			
			if (err) throw err;
			let itemData = result;
			if(itemData && itemData.length > 0){
				var items = [];
				for(var i in itemData){
					var Iid = itemData[i].item_id.toString();
					var Uid = itemData[i].userId.toString();
					var Oid = itemData[i].ownerId.toString();
					items.push({
						"itemId"			: common.encrypt(Iid),
						"userId"			: common.encrypt(Uid),
						"ownerId"			: common.encrypt(Oid),
						"name"				: itemData[i].name,
						"description"		: itemData[i].description,
						"image"				: itemData[i].image,
						"price"				: itemData[i].price,
						"currency"			: itemData[i].currency,
						"supply"			: itemData[i].supply,
						"status"      		: itemData[i].status,
						"username"     		: itemData[i].username,
						"profilepicture"	: itemData[i].profilepicture,
						"ownername"			: itemData[i].ownername,
						"ownerpicture"		: itemData[i].ownerpicture,
						"currency":itemData[i].currency1,
						"tocurrency":itemData[i].currency,
					}); 
				}
				return res.json({status:true,data:items});
			}else{
				return res.json({status:true,msg:'No items found', data: []})
			}
		});
	}catch(e){
	}
});

router.post('/userItems1', common.tokenMiddleware, async function (req, res) {
	try{
		var values = req.body;
		var userId = req.userId;
		let limit = values.limit;
		let skip = values.skip;
		let srt = {_id:-1};

		item.aggregate([
		{ 
			$lookup:
			{
				from 			: 'IN_MNlkses',
				localField		: 'userId',
				foreignField	: '_id',
				as 				: 'user'
			}
		},
		{ 
			$lookup:
			{
				from 			: 'IN_MNlkses',
				localField 		: 'ownerId',
				foreignField	: '_id',
				as 				: 'owner'
			}
		},
		{ 
			$project:
			{
				"userId"      	: "$userId",
				"username"		: "$user.username",
				"profilepicture": "$user.profilepicture",
				"ownerId"      	: "$ownerId",
				"ownername"		: "$owner.username",
				"ownerpicture"	: "$owner.profilepicture",
				"name"			: "$name",
				"description"	: "$description",
				"image"			: "$image",
				"currency"		: "$currency",
				"price"			: "$price",
				"supply"		: "$supply",
				"status"      	: "$status",
				"salestatus"   	: "$salestatus",
			}
		},
		{ $match: {   'ownerId': mongoose.mongo.ObjectId(userId), 'salestatus': 1,  } , },
		{ $sort: srt },
		{ $limit: limit },
		{ $skip: skip }
		]).exec(function(err, result) {
			
			if (err) throw err;
			let itemData = result;
			if(itemData && itemData.length > 0){
				var items = [];
				for(var i in itemData){
					var Iid = itemData[i]._id.toString();
					var Uid = itemData[i].userId.toString();
					var Oid = itemData[i].ownerId.toString();
					items.push({
						"itemId"			: common.encrypt(Iid),
						"userId"			: common.encrypt(Uid),
						"ownerId"			: common.encrypt(Oid),
						"name"				: itemData[i].name,
						"description"		: itemData[i].description,
						"image"				: itemData[i].image,
						"price"				: itemData[i].price,
						"currency"			: itemData[i].currency,
						"supply"			: itemData[i].supply,
						"status"      		: itemData[i].status,
						"username"     		: itemData[i].username,
						"profilepicture"	: itemData[i].profilepicture,
						"ownername"			: itemData[i].ownername,
						"ownerpicture"		: itemData[i].ownerpicture,
					}); 
				}
				return res.json({status:true,data:items});
			}else{
				return res.json({status:true,msg:'No items found', data: []})
			}
		});
	}catch(e){
	}
});


router.post('/getmyprivate', common.tokenMiddleware, async function (req, res) {
	try{
		var values = req.body;
		var userId = req.userId;
		let limit = values.limit;
		let skip = values.skip;
		let srt = {_id:-1};

		users.findOne({_id:  userId}).exec(function (errs, resdatas) {
			if (errs) {return res.json({status: false, msg: 'Something went wrong'})}
			if (resdatas != null && resdatas != undefined && resdatas != "") {
				let private = common.decrypt(resdatas.address)
			
				matched.aggregate([
				{ 
					$lookup:
					{
						from 			: 'IN_MNlkses',
						localField		: 'creatorId',
						foreignField	: '_id',
						as 				: 'user'
					}
				},
				{ 
					$lookup:
					{
						from 			: 'IN_MNlkses',
						localField 		: 'ownerId',
						foreignField	: '_id',
						as 				: 'owner'
					}
				},
				{ 
					$lookup:
					{
						from 			: 'IN_meti',
						localField 		: 'item_id',
						foreignField	: '_id',
						as 				: 'item'
					}
				},
				{ 
					$project:
					{
						"userId"      	: "$creatorId",
						"username"		: "$user.username",
						"profilepicture": "$user.profilepicture",
						"ownerId"      	: "$ownerId",
						"ownername"		: "$owner.username",
						"ownerpicture"	: "$owner.profilepicture",
						"name"			: "$name",
						"description"	: "$item.description",
						"image"			: "$image",
						"item_id"		: "$item_id",
						"currency"		: "$tocurrency",
						"price"			: "$price",
						"supply"		: "$edition",
						"status"      	: "$status",
						"sold"   		: "$sold",
						"saletype" 		: "$saletype",
						"toprivate"		: "$toprivate",
					}
				},
				{ $match: { "toprivate": private, 'saletype': 'private', 'sold': 1, 'status':"1"  } , },
				{ $sort: srt },
				{ $limit: limit },
				{ $skip: skip }
				]).exec(function(err, result) {
					
					if (err) throw err;
					let itemData = result;
					if(itemData && itemData.length > 0){
						var items = [];
						for(var i in itemData){
							var Iid = itemData[i].item_id.toString();
							var Uid = itemData[i].userId.toString();
							var Oid = itemData[i].ownerId.toString();
							items.push({
								"itemId"			: common.encrypt(Iid),
								"userId"			: common.encrypt(Uid),
								"ownerId"			: common.encrypt(Oid),
								"name"				: itemData[i].name,
								"description"		: itemData[i].description,
								"image"				: itemData[i].image,
								"price"				: itemData[i].price,
								"currency"			: itemData[i].currency,
								"supply"			: itemData[i].supply,
								"status"      		: itemData[i].status,
								"username"     		: itemData[i].username,
								"profilepicture"	: itemData[i].profilepicture,
								"ownername"			: itemData[i].ownername,
								"ownerpicture"		: itemData[i].ownerpicture,
							}); 
						}
						return res.json({status:true,data:items});
					}else{
						return res.json({status:true,msg:'No items found', data: []})
					}
				});
			}
		})				
	}catch(e){
	}
});

router.post('/createItem', common.tokenMiddleware, upload.single('item_img') ,function (req, res) {
	try {
		let info = req.body;
		var userId = req.userId;
		users.findOne({_id:  userId}).exec(function (errs, resdatas) {
			item.find({name:info.name, userId: userId}).countDocuments().exec(function(err,count){
				if(count > 0) {
					return res.json({status : false, msg : 'Name already exists!'});
				} else {
					common.imgUploader(req.file, function (result){
						if(result) {
							let obj = {
								"userId"			: userId,
								"ownerId"			: userId,
								"collectionId"      : common.decrypt(info.collectionId),
								"name"      		: info.name,
								"description" 		: info.description,
								"external_link" 	: info.external_link,
								"content" 			: info.content,
								"supply" 			: info.supply,
								"metadata" 			: info.metadata,
								"bid" 				: info.bid,
								"toprivate" 		: info.toprivate,
								"saletype" 			: info.saletype,
								"price" 			: info.price,
								"objtype" 			: info.objtype,
								"properties" 		: info.properties,
								"stats" 			: info.stats,
								"status" 			: 'active',
								"image"      		: result.Location,
								"currency":"ERC721",
								"tocurrency"      	: 'WBNB',
								"creater_address": info.caddress,
								"modifieddate"  	: updatedDate(),
								"type":"add",
								"admin_mint":0,
								"price":req.body.price
							};
							item.create( obj, function(err,result) {
								if (err) {return res.json({status : false, msg : err});}
								if(result) {
									item.findOneAndUpdate({_id: result._id}, {item_id: Buffer.from(common.encrypt((result.spec_id).toString())).toString('base64')}, (e, re) => {
										res.json({status : true, msg : " Successfully Created", "allowed": result.item_id});
									});
								} else {
									res.json({status : false, msg : "Invalid request. Please Try again"});
								}
							});
						}
					});
				}
			});
		});
	} catch(e) {
	}
});

/*update item api functionality start*/
router.post('/updateItem', common.tokenMiddleware, function (req, res) {
	try {
		let info = req.body;
		var userId = req.userId;
		var itemId = common.decrypt(info.itemId);
		let obj = {
			bid: info.bid,
			supply: info.supply,
			toprivate: info.toprivate,
			saletype: info.saletype,
			currency: info.currency,
			price: info.price,
			buytokenadr: info.buytokenadr,
			buytokenid: info.buytokenid,
			sellnftid: info.sellnftid,
			sellnftaddr: info.sellnftaddr,
			sellastype: info.sellassettype,
			buyastype: info.buyassettype,
			tocurrency: info.tocurrency,
			start_date: info.startdate,
			end_date: info.enddate,
			start_time: info.starttime,
			end_time: info.endtime,
		}
		item.findOneAndUpdate({_id:itemId}, obj, (err,ress) => {
			if(ress) {
				return res.json({status : true, msg : " Successfully Created"});
			} else {
				return res.json({status : false, msg : 'Something went worng Try again!'});
			}
		})
			
	} catch(e) {
	}
});
/*update item api functionality end*/

/*update rechangeItem order functionality start*/
router.post('/rechangeItem', common.tokenMiddleware, function (req, res) {
	try {
		let info = req.body;
		var userId = req.userId;
		var itemId = common.decrypt(info.itemId);
		let obj = {
			salestatus: info.salestatus,
		}
		item.findOneAndUpdate({_id:itemId}, obj, (err,ress) => {
			if(ress) {
				return res.json({status : true, msg : " Successfully Created"});
			} else {
				return res.json({status : false, msg : 'Something went worng Try again!'});
			}
		})
			
	} catch(e) {
	}
});
/*update rechangeItem order status api functionality end*/

/*make offer api functionality start*/
router.post('/makeOffer', common.tokenMiddleware, function (req, res) {
	try {
		let infoo = req.body;
		var userId = req.userId;
		let query = {_id: common.decrypt(infoo.orderId)};
		matched.findOne(query, (err, ress) => {
			
			if(ress) {
				let offerObj = {
					objectId: mongoose.mongo.ObjectId(ress.item_id),
					orderId: mongoose.mongo.ObjectId(ress._id),
					buyerId: mongoose.mongo.ObjectId(userId),
					buyeradress: infoo.address,
					price: ress.price,
					type : infoo.type,
					buyorder: infoo.buyercontractdata,
					currency : ress.tocurrency,
					askedprice: infoo.offerprice,
				}
				activityObj = {
					userId : mongoose.mongo.ObjectId(req.userId),
					image : ress.image,
					type : infoo.type,
					currency : infoo.currency,
					objectId : mongoose.mongo.ObjectId(ress.item_id),
					creatorId : mongoose.mongo.ObjectId(ress.creatorId),
					objectName : ress.name,
					price : infoo.offerprice,
					currency : ress.currency,
					tocurrency : ress.tocurrency,
				}

				offers.create(offerObj, (er, re) => {
					if (er) {return res.json({status : false, msg : "Something went worng Try again!"});}
					activity.create(activityObj, (e, r) => {
						if (e) {return res.json({status : false, msg : "Something went worng Try again!"});}
						return res.json({status : true, msg : " Successfully Created"});
					})
				})
			} 
			else {
				return res.json({status : false, msg : 'Something went worng Try again!'});
			}
		})
			
	} catch(e) {
	}
});
/*make offer api functionality end*/


/*make bid api functionality end*/
router.post('/makeBid', common.tokenMiddleware, function (req, res) {
	try {
		let info = req.body;
		var userId = req.userId;
		let query = {_id: common.decrypt(info.orderId)};
		matched.findOne(query, (err, ress) => {
			
			if(ress) {
				let offerObj = {
					objectId: mongoose.mongo.ObjectId(ress.item_id),
					orderId: mongoose.mongo.ObjectId(ress._id),
					buyerId: mongoose.mongo.ObjectId(userId),
					buyeradress: info.address,
					price: ress.price,
					buyorder: info.buyercontractdata,
					askedprice: info.offerprice,
				}
				activityObj = {
					userId : mongoose.mongo.ObjectId(req.userId),
					image : ress.image,
					type : 'Bid',
					objectId : mongoose.mongo.ObjectId(ress.item_id),
					creatorId : mongoose.mongo.ObjectId(ress.creatorId),
					objectName : ress.name,
					price : info.offerprice,
					currency : ress.currency,
					tocurrency : ress.tocurrency,
				}

				offers.create(offerObj, (er, re) => {
					if (er) {return res.json({status : false, msg : "Something went worng Try again!"});}
					activity.create(activityObj, (e, r) => {
						if (e) {return res.json({status : false, msg : "Something went worng Try again!"});}
						return res.json({status : true, msg : " Successfully Created"});
					})
				})
			} 
			else {
				return res.json({status : false, msg : 'Something went worng Try again!'});
			}
		})
			
	} catch(e) {
	}
});
/*make bid api functionality end*/

router.post('/offlinesale', common.tokenMiddleware, function (req, res) {
	var info = req.body;
	let query = {_id: common.decrypt(info.id)};
	item.findOne(query, (err, ress) => {
		if(ress){
			let matchObj = {
					creatorId: ress.userId,
					ownerId: ress.ownerId,
					image: ress.image,
					spec_id: ress.spid,
					item_id: ress._id,
					name: ress.name,
					currency: ress.currency,
					price: ress.price,
					sellorder: info.sellorder,
					tocurrency:"WBNB",
					imported:ress.imported,
					contractId:ress.import_contractId,
					//tocurrency: ress.tocurrency,
					/*toprivate: info.toprivate,
					sellorder: info.sellorder,
					saletype: info.saletype,*/
					/*price: ress.price,
					start_date: ress.start_date,
					start_time: ress.start_time,
					end_date: ress.end_date,
					end_time: ress.end_time,*/
					sold: 1,
					status: 1,
				}
				matched.create(matchObj, (er, re) => {

					console.log("ererer",er)

					if (er) {return res.json({status : false, msg : "Something went worng Try again!"});}
					item.update(query, {salestatus: 1}, (e, r) => {
						if (e) {return res.json({status : false, msg : "Something went worng Try again!"});}
						return res.json({status : true, msg : " Successfully Created"});
					})
				})
			}else{
				return res.json({status : false, msg : 'Something went worng Try again!'});
			}
	});
});


/*update item api functionality start*/
router.post('/privateSale', common.tokenMiddleware, function (req, res) {
	try {
		let info = req.body;
		var userId = req.userId;
		let query = {_id: common.decrypt(info.itemid)};
		item.findOne(query, (err, ress) => {
		
			if(ress) {
				let matchObj = {
					creatorId: common.decrypt(info.house),
					ownerId: common.decrypt(info.rent),
					image: ress.image,
					spec_id: ress.spid,
					item_id: ress._id,
					name: ress.name,
					edition: info.edition,
					imported: info.imported,
					contractId: common.decrypt(info.contractId),
					currency: ress.currency,
					tocurrency: ress.tocurrency,
					toprivate: info.toprivate,
					sellorder: info.sellorder,
					saletype: info.saletype,
					price: ress.price,
					start_date: ress.start_date,
					start_time: ress.start_time,
					end_date: ress.end_date,
					end_time: ress.end_time,
					sold: 1,
					status: 1,
				}
				matched.create(matchObj, (er, re) => {
					if (er) {return res.json({status : false, msg : "Something went worng Try again!"});}
					item.update(query, {salestatus: 1}, (e, r) => {
						if (e) {return res.json({status : false, msg : "Something went worng Try again!"});}
						return res.json({status : true, msg : " Successfully Created"});
					})
				})
			} 
			else {
				return res.json({status : false, msg : 'Something went worng Try again!'});
			}
		})
			
	} catch(e) {
	}
});
/*update item api functionality end*/

/*item fixedsale api functionality start*/
router.post('/fixedsale', common.tokenMiddleware, function (req, res) {
	try {
		let info = req.body;
		var userId = req.userId;
		let query = {_id: common.decrypt(info.itemid)};
		item.findOne(query, (err, ress) => {
			
			if(ress) {
				let matchObj = {
					creatorId: common.decrypt(info.house),
					ownerId: common.decrypt(info.rent),
					image: ress.image,
					spec_id: ress.spid,
					item_id: ress._id,
					name: ress.name,
					edition: info.edition,
					imported: info.imported,
					contractId: common.decrypt(info.contractId),
					currency: ress.currency,
					tocurrency: ress.tocurrency,
					sellorder: info.sellorder,
					saletype: info.saletype,
					start_date: ress.start_date,
					start_time: ress.start_time,
					end_date: ress.end_date,
					end_time: ress.end_time,
					price: ress.price,
					sold: 1,
					status: 1,
				}
				matched.create(matchObj, (er, re) => {
					if (er) {return res.json({status : false, msg : "Something went worng Try again!"});}


					item.updateOne(query, {salestatus: 1}, (e, r) => {


						if (e) {return res.json({status : false, msg : "Something went worng Try again!"});}
						 return res.json({status : true, msg : " Successfully Created"});

					
						
					})
				})
			} 
			else {
				return res.json({status : false, msg : 'Something went worng Try again!'});
			}
		})
			
	} catch(e) {
	}
});
/*item fixedsale api functionality end*/


/*update privatebuyComplete api functionality start*/
router.post('/privatebuyComplete', common.tokenMiddleware, function (req, res) {
	try {
		let info = req.body;
		var userId = req.userId;
		let query = {_id: common.decrypt(info.orderId), sold: 1, status: '1'};
		let matchObj = {
			ownerId: mongoose.mongo.ObjectId(req.userId),
			buyorder: info.buyercontractdata,
			sold: info.sold,
			txid: info.txid,
			status: info.status,
		}
		matched.findOneAndUpdate(query, matchObj, (err, ress) => {
			
			if(ress) {
				let activityObj = {
					userId : mongoose.mongo.ObjectId(req.userId),
					image : ress.image,
					type : 'Purchased',
					objectId : mongoose.mongo.ObjectId(ress.item_id),
					creatorId : mongoose.mongo.ObjectId(ress.creatorId),
					ownerId : mongoose.mongo.ObjectId(req.userId),
					objectName : ress.name,
					price : ress.price,
					txid : info.txid,
					currency : ress.currency,
					tocurrency : ress.tocurrency,
				}
				activity.create(activityObj, (er, re) => {
					
					if (er) {return res.json({status : false, msg : "Something went worng Try again!"});}
					return res.json({status : true, msg : "Owenership Successfully Created", buyerId: common.encrypt((req.userId).toString())});
				})
			} 
			else {
				return res.json({status : false, msg : 'Invalid Items!'});
			}
		})
			
	} catch(e) {
	}
});
/*update privatebuyComplete api functionality end*/


/*update privatebuyComplete api functionality start*/
router.post('/offerbuyComplete', common.tokenMiddleware, function (req, res) {
	try {
		let info = req.body;
		var userId = req.userId;
		let query = {_id: common.decrypt(info.orderId), sold: 1, status: '1'};
		let matchObj = {
			ownerId: mongoose.mongo.ObjectId(common.decrypt(info.ownerId)),
			buyorder: info.buyercontractdata,
			sold: info.sold,
			status: info.status,
			txid: info.txid,
			offerclosed: info.price,
			completedprice: info.price,
		}
		matched.findOneAndUpdate(query, matchObj, (err, ress) => {
			
			if(ress) {
				let activityObj = {
					userId : mongoose.mongo.ObjectId(common.decrypt(info.ownerId)),
					image : ress.image,
					type : 'Purchased',
					objectId : mongoose.mongo.ObjectId(ress.item_id),
					creatorId : mongoose.mongo.ObjectId(ress.creatorId),
					ownerId : mongoose.mongo.ObjectId(common.decrypt(info.ownerId)),
					objectName : ress.name,
					price : info.price,
					txid : info.txid,
					currency : ress.currency,
					tocurrency : ress.tocurrency,
				}
				activity.create(activityObj, (er, re) => {
					
					if (er) {return res.json({status : false, msg : "Something went worng Try again!"});}
					return res.json({status : true, msg : "NFT purchased Successfully"});
				})
			} 
			else {
				return res.json({status : false, msg : 'Invalid Items!'});
			}
		})
			
	} catch(e) {
	}
});
/*update privatebuyComplete api functionality end*/


/*update bidbuyComplete api functionality start*/
router.post('/bidbuyComplete', common.tokenMiddleware, function (req, res) {
	try {
		let info = req.body;
		var userId = req.userId;
		let query = {_id: common.decrypt(info.orderId), sold: 1, status: '1'};
		let matchObj = {
			ownerId: mongoose.mongo.ObjectId(common.decrypt(info.ownerId)),
			buyorder: info.buyercontractdata,
			sold: info.sold,
			txid: info.txid,
			status: info.status,
			bidclosed: info.price,
			completedprice: info.price,
		}
		matched.findOneAndUpdate(query, matchObj, (err, ress) => {
			
			if(ress) {
				let activityObj = {
					userId : mongoose.mongo.ObjectId(common.decrypt(info.ownerId)),
					image : ress.image,
					type : 'Purchased',
					objectId : mongoose.mongo.ObjectId(ress.item_id),
					creatorId : mongoose.mongo.ObjectId(ress.creatorId),
					ownerId : mongoose.mongo.ObjectId(common.decrypt(info.ownerId)),
					objectName : ress.name,
					price : info.price,
					txid : info.txid,
					currency : ress.currency,
					tocurrency : ress.tocurrency,
				}
				activity.create(activityObj, (er, re) => {
					
					if (er) {return res.json({status : false, msg : "Something went worng Try again!"});}
					return res.json({status : true, msg : "NFT purchased Successfully"});
				})
			} 
			else {
				return res.json({status : false, msg : 'Invalid Items!'});
			}
		})
			
	} catch(e) {
	}
});
/*update privatebuyComplete api functionality end*/


/*update purchased item api functionality start*/
router.post('/updateItems', common.tokenMiddleware, function (req, res) {
	try {
		let info = req.body;
		var userId = req.userId;
		var ownerId = info.ownerId;
		let query = {_id: mongoose.mongo.ObjectId(common.decrypt(info.itemId))};
		let itemObj = {
			salestatus: info.salestatus,
			status: info.status,
			ownerId: mongoose.mongo.ObjectId(common.decrypt(ownerId)),
		}
		item.findOneAndUpdate(query, itemObj, (err, ress) => {
			
			if (err) {return res.json({status : false, msg : "Something went worng Try again!"});}
			if(ress) {
				return res.json({status : true, msg : "NFT purchased Successfully"});
			} 
			else {
				return res.json({status : false, msg : 'Invalid Items!'});
			}
		})
			
	} catch(e) {
		
	}
});
/*update purchased item api functionality end*/

router.post('/getMarkets', common.userMiddleware, async function (req, res) {
	try{
		var values = req.body;
		var account = values.account;
		let limit = values.limit;
		let skip = values.skip;
		let userId = req.userId;
		let srt = {_id:-1};
		matched.aggregate([
		{ 
			$lookup:
			{
				from 			: 'IN_MNlkses',
				localField		: 'creatorId',
				foreignField	: '_id',
				as 				: 'user'
			}
		},
		{ 
			$lookup:
			{
				from 			: 'IN_MNlkses',
				localField 		: 'ownerId',
				foreignField	: '_id',
				as 				: 'owner'
			}
		},
		{ 
			$lookup:
			{
				from 			: 'IN_meti',
				localField 		: 'item_id',
				foreignField	: '_id',
				as 				: 'item'
			}
		},
		{ 
			$project:
			{
				"userId"      	: "$creatorId",
				"username"		: "$user.username",
				"profilepicture": "$user.profilepicture",
				"ownerId"      	: "$ownerId",
				"ownername"		: "$owner.username",
				"ownerpicture"	: "$owner.profilepicture",
				"name"			: "$name",
				"description"	: "$item.description",
				"image"			: "$image",
				"item_id"		: "$item_id",
				"currency"		: "$tocurrency",
				"price"			: "$price",
				"supply"		: "$edition",
				"salestatus"    : "$salestatus",
				"status"      	: "$status",
				"favUsers"      : "$item.favUsers",
				"likeCount"     : "$item.likeCount",
				"saletype"     	: "$saletype",
				"private"    	: "$toprivate",
				"startdate"		: "$start_date",
				"enddate"		: "$end_date",
				"sold"	    	: "$sold",
				"_id"	    	: "$_id",
				"items_id":"$item._id",
				"currency":"$currency",
				"tocurrency":"$tocurrency",
				"type":"$item.type",
				"imported":"$item.imported",
			}
		},
		{ $match: {  "sold": 1, status: '1' }},
		{ $sort: srt },
		{ $limit: limit },
		{ $skip: skip }
		]).exec(function(err, result) {
			if (err) throw err;
			let itemData = result;
			console.log("itemDataitemDataitemData",itemData)
			if(itemData && itemData.length > 0){
				var items = [];
				for(var i in itemData){
					var Iid = itemData[i].item_id.toString();
					var Uid = itemData[i].userId.toString();
					var Oid = itemData[i].ownerId.toString();
					var Mid = itemData[i]._id.toString();
					var ids =  itemData[i].items_id.toString();
					var private = itemData[i].private;
					var favUsers = itemData[i].favUsers;
					if(req.userId) {
						if(favUsers.includes(req.userId)) {
							var fav = 1;
						} else {
							var fav = 0;
						}
					}
					if (userId == itemData[i].ownerId) {
						var buy = false;
					}
					else {
						var buy = true;
					}

					var show = true;
					if (account != "" && account != null && account != undefined && private != "" && private != null && private != undefined) {
						if (account == private) {
							show = true;
						}
						else {
							show = false;
						}
					}

					

					
					items.push({
						"itemId"			: common.encrypt(Iid),
						"userId"			: common.encrypt(Uid),
						"ownerId"			: common.encrypt(Oid),
						"_id"				: common.encrypt(Mid),
						"name"				: itemData[i].name,
						"description"		: itemData[i].description,
						"image"				: itemData[i].image,
						"bid"				: itemData[i].bid,
						"price"				: itemData[i].price,
						"currency"			: itemData[i].currency,
						"tocurrency"	    : itemData[i].tocurrency,
						"item_id"			: itemData[i].item_id,
						"supply"			: itemData[i].supply,
						"status"      		: itemData[i].status,
						"username"     		: itemData[i].username,
						"profilepicture"	: itemData[i].profilepicture,
						"ownername"			: itemData[i].ownername,
						"ownerpicture"		: itemData[i].ownerpicture,
						"likeCount"			: itemData[i].likeCount,
						"startdate"			: itemData[i].startdate,
						"enddate"			: itemData[i].enddate,
						"fav"				: fav,
						"canbuy"			: buy,
						"show"				: show,
						"items_id": common.encrypt(ids),
						"type":itemData[i].type,
						"imported":itemData[i].imported,
					}); 
				}
				res.json({status:true,data:items});
			}else{
				res.json({status:false,msg:'Unable to get data'})
			}
		});
	}catch(e){
	}
});

/* Search Market */





router.post('/getMarketssearch', common.originMiddlewarenew, async function (req, res) {
	try{
		var values = req.body;
		var account = values.account;
		let limit = values.limit;
		let skip = values.skip;
		let userId = req.userId;
		let srt = {_id:-1};
		let search = values.search;

		var  ccnd = {};

		if(search == ""){
			  ccnd = {'sold':1,'status':'1'};
		}else{

			  var  ccnd = {"sold":1,"status":'1',$or:[
        {'name': { $regex: '.*' + search + '.*',$options: 'i' }},
        ]};

			 
		}


		matched.aggregate([
			{ 
			$lookup:
			{
				from 			: 'IN_meti',
				localField 		: 'item_id',
				foreignField	: '_id',
				as 				: 'item'
			}
		},
		{ $match: ccnd },
		{ 
			$lookup:
			{
				from 			: 'IN_MNlkses',
				localField		: 'creatorId',
				foreignField	: '_id',
				as 				: 'user'
			}
		},
		

		{ 
			$lookup:
			{
				from 			: 'IN_MNlkses',
				localField 		: 'ownerId',
				foreignField	: '_id',
				as 				: 'owner'
			}
		},
		
		
		{ 
			$project:
			{
				"userId"      	: "$creatorId",
				"username"		: "$user.username",
				"profilepicture": "$user.profilepicture",
				"ownerId"      	: "$ownerId",
				"ownername"		: "$owner.username",
				"ownerpicture"	: "$owner.profilepicture",
				"name"			: "$name",
				"description"	: "$item.description",
				"image"			: "$image",
				"item_id"		: "$item_id",
				"currency"		: "$tocurrency",
				"price"			: "$price",
				"supply"		: "$edition",
				"salestatus"    : "$salestatus",
				"status"      	: "$status",
				"favUsers"      : "$item.favUsers",
				"likeCount"     : "$item.likeCount",
				"saletype"     	: "$saletype",
				"private"    	: "$toprivate",
				"startdate"		: "$start_date",
				"enddate"		: "$end_date",
				"sold"	    	: "$sold",
				"_id"	    	: "$_id",
			}
		},
		
		{ $sort: srt },
		{ $limit: limit },
		{ $skip: skip }
		]).exec(function(err, result) {


			if (err) throw err;
			let itemData = result;
			if(itemData && itemData.length > 0){
				var items = [];
				for(var i in itemData){
					var Iid = itemData[i].item_id.toString();
					var Uid = itemData[i].userId.toString();
					var Oid = itemData[i].ownerId.toString();
					var Mid = itemData[i]._id.toString();
					var private = itemData[i].private;
					var favUsers = itemData[i].favUsers;
					if(req.userId) {
						if(favUsers.includes(req.userId)) {
							var fav = 1;
						} else {
							var fav = 0;
						}
					}
					if (userId == itemData[i].ownerId) {
						var buy = false;
					}
					else {
						var buy = true;
					}

					var show = true;
					if (account != "" && account != null && account != undefined && private != "" && private != null && private != undefined) {
						if (account == private) {
							show = true;
						}
						else {
							show = false;
						}
					}

					

					

					items.push({
						"itemId"			: common.encrypt(Iid),
						"userId"			: common.encrypt(Uid),
						"ownerId"			: common.encrypt(Oid),
						"_id"				: common.encrypt(Mid),
						"name"				: itemData[i].name,
						"description"		: itemData[i].description,
						"image"				: itemData[i].image,
						"bid"				: itemData[i].bid,
						"price"				: itemData[i].price,
						"currency"			: itemData[i].currency,
						"item_id"			: itemData[i].item_id,
						"supply"			: itemData[i].supply,
						"status"      		: itemData[i].status,
						"username"     		: itemData[i].username,
						"profilepicture"	: itemData[i].profilepicture,
						"ownername"			: itemData[i].ownername,
						"ownerpicture"		: itemData[i].ownerpicture,
						"likeCount"			: itemData[i].likeCount,
						"startdate"			: itemData[i].startdate,
						"enddate"			: itemData[i].enddate,
						"fav"				: fav,
						"canbuy"			: buy,
						"show"				: show,
					}); 
				}
				res.json({status:true,data:items});
			}else{
				res.json({status:false,msg:'Unable to get data'})
			}
		});
	}catch(e){
	}
});


router.post('/getMarkets1', common.userMiddleware, async function (req, res) {
	try{
		var values = req.body;
		var account = values.account;
		let limit = values.limit;
		let skip = values.skip;
		let userId = req.userId;
		let srt = {_id:-1};
		item.aggregate([
		{ 
			$lookup:
			{
				from 			: 'IN_MNlkses',
				localField		: 'userId',
				foreignField	: '_id',
				as 				: 'user'
			}
		},
		{ 
			$lookup:
			{
				from 			: 'IN_MNlkses',
				localField 		: 'ownerId',
				foreignField	: '_id',
				as 				: 'owner'
			}
		},
		{ 
			$project:
			{
				"userId"      	: "$userId",
				"username"		: "$user.username",
				"profilepicture": "$user.profilepicture",
				"ownerId"      	: "$ownerId",
				"ownername"		: "$owner.username",
				"ownerpicture"	: "$owner.profilepicture",
				"name"			: "$name",
				"description"	: "$description",
				"image"			: "$image",
				"item_id"		: "$item_id",
				"currency"		: "$currency",
				"bid"			: "$bid",
				"price"			: "$price",
				"supply"		: "$supply",
				"salestatus"    : "$salestatus",
				"status"      	: "$status",
				"favUsers"      : "$favUsers",
				"likeCount"     : "$likeCount",
				"private"     	: "$toprivate",
			}
		},
		{ $match: {  "salestatus": 1, }},
		{ $sort: srt },
		{ $limit: limit },
		{ $skip: skip }
		]).exec(function(err, result) {
			if (err) throw err;
			let itemData = result;
			if(itemData && itemData.length > 0){
				var items = [];
				for(var i in itemData){
					var Iid = itemData[i]._id.toString();
					var Uid = itemData[i].userId.toString();
					var Oid = itemData[i].ownerId.toString();
					var private = itemData[i].private;
					var favUsers = itemData[i].favUsers;
					if(req.userId) {
						if(favUsers.includes(req.userId)) {
							var fav = 1;
						} else {
							var fav = 0;
						}
					}
					if (userId == itemData[i].ownerId) {
						var buy = false;
					}
					else {
						var buy = true;
					}

					var show = true;
					if (account != "" && account != null && account != undefined && private != "" && private != null && private != undefined) {
						if (account == private) {
							show = true;
						}
						else {
							show = false;
						}
					} 
					items.push({
						"itemId"			: common.encrypt(Iid),
						"userId"			: common.encrypt(Uid),
						"ownerId"			: common.encrypt(Oid),
						"name"				: itemData[i].name,
						"description"		: itemData[i].description,
						"image"				: itemData[i].image,
						"bid"				: itemData[i].bid,
						"price"				: itemData[i].price,
						"currency"			: itemData[i].currency,
						"item_id"			: itemData[i].item_id,
						"supply"			: itemData[i].supply,
						"status"      		: itemData[i].status,
						"username"     		: itemData[i].username,
						"profilepicture"	: itemData[i].profilepicture,
						"ownername"			: itemData[i].ownername,
						"ownerpicture"		: itemData[i].ownerpicture,
						"likeCount"			: itemData[i].likeCount,
						"fav"				: fav,
						"canbuy"			: buy,
						"show"				: show,
					}); 
				}
				res.json({status:true,data:items});
			}else{
				res.json({status:false,msg:'Unable to get data'})
			}
		});
	}catch(e){
	}
});

router.get('/test1', async function (req, res) {
	try{
		var values = req.body;
		let limit = 6;
		let skip = 0;
		let srt = {_id:-1};
		item.aggregate([
		{ 
			$lookup:
			{
				from: 'IN_MNlkses',
				localField: 'userId',
				foreignField: '_id',
				as: 'user'
			}
		},
		{ 
			$lookup:
			{
				from: 'IN_MNlkses',
				localField: 'ownerId',
				foreignField: '_id',
				as: 'owner'
			}
		},
		{ 
			$project:
			{
				"username"		: "$user.username",
				"profilepicture": "$user.profilepicture",
				"ownername"		: "$owner.username",
				"ownerpicture"	: "$owner.profilepicture",
				"name"			: "$name",
				"description"	: "$description",
				"image"			: "$image",
				"item_id"		: "$item_id",
				"bid"			: "$bid",
				"supply"		: "$supply",
				"status"      	: "$status",
			}
		},
		{ $match: {  "_id": mongoose.mongo.ObjectId('616d058cdb94b0262e03f4eb')} ,  },
		{ $sort: srt },
		{ $limit: limit },
		{ $skip: skip }
		]).exec(function(err, result) {
			if (err) throw err;
			let itemData = result;
			res.json({status:true,data:itemData});

			
		});
	}catch(e){
	}
});



/* Offer Details */
router.post('/getOfferInfo', common.tokenMiddleware, async function (req, res) {
	var itemid = common.decrypt(req.body.item_id);
	let itemData = await offers.findOne({_id:itemid,"approve_status":0, "is_expired":0}).exec();
	if(itemData){
			let iifno = await item.findOne({_id:itemData.objectId}).exec();
			let matchediifno = await matched.findOne({item_id:itemData.objectId}).exec();
			var Iid = itemData._id.toString();

			let datas = {
					"_id":common.encrypt((Iid).toString()),
					"itemId"		: common.encrypt((itemData.objectId).toString()),
					"orderId"		: common.encrypt((itemData.orderId).toString()),
					"buyerId"	    : common.encrypt((itemData.buyerId).toString()),
					"price"			: itemData.price,
					"buyorder"		: itemData.buyorder,
					"askedprice"	: itemData.askedprice,
					"buyerAddr"		: itemData.buyeradress,
					"currency":iifno.currency,
					"tocurrency":iifno.tocurrency,
					"sellorder":matchediifno.sellorder,
					"imported":matchediifno.imported,
					"contractId":(matchediifno.contractId != "") ? common.encrypt((matchediifno.contractId).toString()) : "",
					
				};
			return res.json({status:true,data:datas});
		}else{
			return res.json({status:false,msg:'Unable to get data'})
		}
});

router.post('/expireOffer', common.tokenMiddleware, async function (req, res) {
	var itemid = common.decrypt(req.body.itemId);
	var orderid = common.decrypt(req.body.orderId);
	var _idd = common.decrypt(req.body._id);
	let cnd = {objectId: mongoose.mongo.ObjectId(itemid), orderId: mongoose.mongo.ObjectId(orderid), is_expired: 0};
	let upd = { is_expired: 1};
	await offers.updateMany(cnd, upd).exec(function(err, ress) {
		if (!err) {}
		if (ress)
		{ 
			offers.findOneAndUpdate({_id: _idd}, {approve_status: 1}).exec(function(er, re) {
				if (re) {
					res.json({status: true, msg: "Offer Updated"})
				}
			});
		}
	});
});

/*get sing item details*/
router.post('/getOrderDetails', common.tokenMiddleware, async function (req, res) {
	try{
		var values = req.body;
		var userId = req.userId;
		var mid = common.decrypt(values._id);

		console.log("midmidmidmid",mid)

		//let itemData = await matched.findOne({_id:mid, edition: values.edition, sold: '1'}).exec();
		let itemData = await matched.findOne({_id:mid, sold: '1'}).exec();
		if(itemData){
			var Oid = itemData._id.toString();
			var Iid = itemData.item_id.toString();
			var Cid = (itemData.contractId != "") ? common.encrypt(itemData.contractId.toString()): "";
			let datas = {
					"itemId"		: common.encrypt(Iid),
					"orderId"		: common.encrypt(Oid),
					"name"			: itemData.name,
					"image"			: itemData.image,
					"edition"		: itemData.edition,
					"currency"		: itemData.currency,
					"tocurrency"	: itemData.tocurrency,
					"price"			: itemData.price,
					"buyorder"		: itemData.buyorder,
					"sellorder"		: itemData.sellorder,
					"imported"		: itemData.imported,
					"contractId"	: itemData.contractId,
					"type": itemData.type,
					
				};
			return res.json({status:true,data:datas});
		}else{
			return res.json({status:false,msg:'Unable to get data'})
		}
	}catch(e){
	}
});
/*get sing item details*/

module.exports = router;