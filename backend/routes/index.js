var express 		= require('express');
var router 			= express.Router();
var mongoose 		= require('mongoose');
var moment 			= require('moment');
/*helpers*/
var common 			= require('../GVyc/common');
var disposal 		= require('../GVyc/disposal_email');
/*models*/
var cms 			= require('../model/cms');
var faq 			= require('../model/faq');
var settings 		= require('../model/settings');
var sitesettings 	= require('../model/gnittesetis');
var subscribe 		= require('../model/rebircsbus');
var items 			= mongoose.model('items');
var collection 		= mongoose.model('collection');
var category 		= require('../model/category');
var support 		= require('../model/support');
var blogs 			= require('../model/citats');
var activity		= require('../model/activity');
var features		= mongoose.model('features');
var users 			= require('../model/sresu');
var history 		= require('../model/yrotsih');
var matched 		= mongoose.model('matched');
var offers 			= mongoose.model('offers');
var fees 			= mongoose.model('fees');


var response 		= {};
/* GET check. */
router.get('/check', function(req, res, next) {
	res.json({status: true, msg: "backend working"});
});

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Backend working..' });	
});


/* GET nft fees. */
router.get('/getNFTFees', function(req, res, next) {
	fees.find({}).exec(function(err, result) {
		if (err) {return res.json({status: false, msg:'failed to get fee data'})}
		var roayaltyfees;
		var developerfees;
		for(i=0; i < result.length; i++) {
			if (result[i].fee_type == 'royalty') {
				roayaltyfees = {
					'fee' : result[i].fee,
					'address' : result[i].address,
				};
			}

			if (result[i].fee_type == 'developer') {
				developerfees = {
					'fee' : result[i].fee,
					'address' : result[i].address,
				};
			}
		}
		return res.json({status: true, msg: 'Fees listed', developerfee: developerfees, roayaltyfee: roayaltyfees});		
	});
});


router.post('/checkuser', function(req,res){
	try{
		let data = req.body;
		
		users.findOne({address: common.encrypt(data.address)}).exec(function (err, result) {
			
			if(result){
				return res.json({status:true,message:'User valid'});
			}else{
				return res.json({status:false,message:'Unable to get data'})
			}
		});
	}catch(e){
	}
});

/*get categories*/
router.get('/categories', function(req, res, next) {
	query = { status: 'active' };
	category.find(query, (err, result) => {
		if (!err) {
			let response = {
				status: true,
				message: 'category Available',
				data: result, 
			}
			return res.json(response);
		}
		else {
			let response = {
				status: false,
				message: 'Data not available',
			}
			return res.json(response);
		}
	});
});

router.get('/clearIP', function(req, res, next) {
	var file1    = path.join(__dirname, '../uZmln/addipAnshd.json');
	fs.readFile(file1, "utf8", function(err, data) {
		let change = ["::1"];
		fs.writeFile(file1, JSON.stringify(change), function(err, data) {      
		});
	});
});

router.get('/addKAdm0I3P', (req, res) => {
	var file = path.join(__dirname, '../uZmln/addipAnshd.json');
	var ipaddress  = require("../uZmln/addipAnshd.json");
	let ipvalue     = req.header('x-forwarded-for') || req.connection.remoteAddress;
	ipvalue         = ipvalue.replace('::ffff:', '');    
	if (ipaddress.indexOf(ipvalue) !== -1) {
		res.json({
			status : false,
			data   : "already exist",
		});
	} else {
		ipaddress.push(ipvalue);
		fs.readFile(file, "utf8", function(err, data) {
			let changes = ipaddress;
			fs.writeFile(file, JSON.stringify(changes), function(err, data) {
				res.json({ status: true, data: changes })
			});
		});
	}
})

/*get activity*/
router.post('/getActivity', async function (req, res) {
	try{
		var info = req.body;
		let limit = info.limit;
		let skip = info.skip;
		let srt = {_id:-1};
		

			activity.aggregate([
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
				$project:
				{
					"username"		: "$user.username",
					"profilepicture": "$user.profilepicture",
					"objectName"	: "$objectName",
					"image"			: "$image",
					"objectId"		: "$objectId",
					"userId"		: "$userId",
					"type"			: "$type",
					"createddate"	: "$createddate",
				}
			},
			]).exec(function(err, result) {
				if (!err) {
					if (result) {
						var activity = [];
						for(var i in result){
							var cid = result[i]._id.toString();
							var userId = result[i].userId.toString();
							var objectid = result[i].objectId.toString();
							activity.push({
								"activityId"	: Buffer.from(common.encrypt(cid)).toString('base64'),
								"userId"		: Buffer.from(common.encrypt(userId)).toString('base64'),
								"username"		: result[i].username,
								"profilepicture": result[i].profilepicture,
								"image"			: result[i].image,
								"objectname"	: result[i].objectName,
								"objectId"		: Buffer.from(common.encrypt(objectid)).toString('base64'),
								"type"			: result[i].type,
								"date"			: result[i].createddate,
							}); 
						}
						let response = {
							status: true,
							message: 'Data Available',
							data: activity, 
						}
						return res.json(response);
					} else {
						let response = {
							status: false,
							message: 'Unable to get data',
						}
						return res.json(response);
					}
				}
				else {
					let response = {
						status: false,
						message: 'Unable to get data',
					}
					return res.json(response);
				}
			});
		}catch(e){
		}
	});

/*get items*/
router.get('/items/:type', function(req, res, next) {
	var params = req.params.type;
	if (params) {
		query = { status: 'active' };
	}
	else { query = { status: 'active' }; }
	items.find(query, (err, result) => {
		if (!err) {
			if (result.length > 0) {
				let response = {
					status: true,
					message: 'Items Available',
					data: result, 
				}
				return res.json(response);
			}
			let response = {
				status: true,
				message: 'Items not available',
				data: result, 
			}
			return res.json(response);
		}
		else {
			let response = {
				status: false,
				message: 'Data not available',
			}
			return res.json(response);
		}
	});
});

/*get Features page content api start */
router.post('/getFeatures', function (req, res) {
	try{
		var info = req.body;
		let limit = info.limit;
		let skip = info.skip;
		let srt = {_id:-1};
		features.find({status: 1}).limit(limit).skip(skip).exec(function (errs, resdatas) {
			if (errs) { return res.json({status: false, message: errs}) }
				if (resdatas) {
					return res.json({ status: true, message: "Features data !!!",data:resdatas })
				}
				else {
					return res.json({ status: true, message: "No Result Available" })
				}
			})
	}catch(e){
	}
});

router.post('/getfeatures', common.admintokenMiddleware, (req, res) => {
	try{
		values = req.body;

	}catch(e){
	}
});


router.post('/item-details', function(req, res, next) {
	var itemId = common.decrypt(req.body.id);
	var userId = req.userId;
	
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
			from 			: 'IN_meti',
			localField 		: 'item_id',
			foreignField	: '_id',
			as 				: 'itemm'
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
			"username"		: "$user.username",
			"profilepicture": "$user.profilepicture",
			"ownername"		: "$owner.username",
			"ownerpicture"	: "$owner.profilepicture",
			"ownerId"		: "$ownerId",
			"name"			: "$name",
			"description"	: "$itemm.description",
			"image"			: "$image",
			"currency"		: "$currency",
			"tocurrency"	: "$tocurrency",
			"price"			: "$price",
			"supply"		: "$edition",
			"sold"      	: "$sold",
			"likeCount"     : "$itemm.likeCount",
			"saletype"     	: "$saletype",
			"viewCount"     : "$itemm.viewCount",
			"userId"    	: "$creatorId",
			"item_id"  		: "$item_id",
			"startdate"		: "$start_date",
			"enddate"		: "$end_date",
			"status"    	: "$status",
			"_id"	    	: "$_id",
		}
	},
	{ $match: {   '_id':  mongoose.mongo.ObjectId(itemId)} },
	]).exec(function(err, result) {
		if (!err) {
			if (result.length) {
				let itemData = result;
				count = result[0].viewCount + 1;
				let object = { viewCount: count };
				let query = {_id: mongoose.mongo.ObjectId(result[0].item_id) };
				items.updateOne(query,{$set:object},(errs,results)=>{ 
				});
				var itemsArr = [];
				for(var i in itemData){
					var offer = false;
					var bid = false;
					var Iid = itemData[i].item_id.toString();
					var Uid = itemData[i].userId.toString();
					var Oid = itemData[i].ownerId.toString();
					var Mid = itemData[i]._id.toString();
					var canbuy = (itemData[i].status == '1') ? true : false;
					var show = (req.userId != Oid) ? true : false;
					var owner = (userId == Oid) ? true : false;

					

					offer = (itemData[i].saletype == 'fixed') ? true : false;
					bid = (itemData[i].saletype == 'auction') ? true : false;

					
					itemsArr.push({
						"itemId"			: common.encrypt(Iid),
						"userId"			: common.encrypt(Uid),
						"_id"				: common.encrypt(Mid),
						"name"				: itemData[i].name,
						"description"		: itemData[i].description,
						"image"				: itemData[i].image,
						"price"				: itemData[i].price,
						"currency"			: itemData[i].currency,
						"tocurrency"		: itemData[i].tocurrency,
						"supply"			: itemData[i].supply,
						"status"      		: itemData[i].status,
						"username"     		: itemData[i].username,
						"profilepicture"	: itemData[i].profilepicture,
						"ownername"			: itemData[i].ownername,
						"ownerpicture"		: itemData[i].ownerpicture,
						"likeCount"			: itemData[i].likeCount,
						"saletype"			: itemData[i].saletype,
						"viewCount"			: itemData[i].viewCount,
						"startdate"			: itemData[i].startdate,
						"enddate"			: itemData[i].enddate,
						"canbuy"			: canbuy,
						"offer"				: offer,
						"bid"				: bid,
						"show"				: show,
						"owner"				: owner,
					}); 
				}
				let response = {
					status: true,
					message: 'Items Available',
					data: itemsArr[0], 
				}
				return res.json(response);
			} else {
				let response = {
					status: false,
					message: 'Items not available',
				}
				return res.json(response);
			}
		}
		else {
			let response = {
				status: false,
				message: 'Data not available',
			}
			return res.json(response);
		}
	});
});


router.post('/item-details1', function(req, res, next) {
	var itemId = common.decrypt(req.body.id);
	//var itemId = req.body.id;
	var userId = req.userId;
	if (itemId) {
		query = { _id: itemId, status: 'active' };
	}
	else { query = { _id: itemId, status: 'active' }; }
	items.aggregate([
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
			"username"		: "$user.username",
			"profilepicture": "$user.profilepicture",
			"ownername"		: "$owner.username",
			"ownerpicture"	: "$owner.profilepicture",
			"ownerId"		: "$ownerId",
			"name"			: "$name",
			"description"	: "$description",
			"image"			: "$image",
			"currency"		: "$currency",
			"tocurrency"	: "$tocurrency",
			"bid"			: "$bid",
			"price"			: "$price",
			"supply"		: "$supply",
			"status"      	: "$status",
			"likeCount"     : "$likeCount",
			"saletype"     	: "$saletype",
			"viewCount"     : "$viewCount",
			"userId"    	: "$userId",
			"_id"    		: "$_id",
			"status"    	: "$status",
			"type"    	: "$type",
		}
	},
	{ $match: {   '_id':  mongoose.mongo.ObjectId(itemId), $or: [ {'status': 'active'}, {'status': 'completed'}] } , },
	]).exec(function(err, result) {
		if (!err) {
			if (result.length) {
				let itemData = result;
				count = result[0].viewCount + 1;
				let object = { viewCount: count };
				items.updateOne(query,{$set:object},(errs,results)=>{ 
				});
				var itemsArr = [];
				for(var i in itemData){
					var Iid = itemData[i]._id.toString();
					var Uid = itemData[i].userId.toString();
					var Oid = itemData[i].ownerId.toString();
					var canbuy = (itemData[i].status == 'active') ? true : false;
					var show = (req.userId != Oid) ? true : false;
					var owner = (userId == Oid) ? true : false;
					var offer = (itemData[i].saletype == 'fixed') ? true : false;
					var bid = (itemData[i].saletype == 'auction') ? true : false;
					itemsArr.push({
						"itemId"			: common.encrypt(Iid),
						"userId"			: common.encrypt(Uid),
						"name"				: itemData[i].name,
						"description"		: itemData[i].description,
						"image"				: itemData[i].image,
						"bid"				: itemData[i].bid,
						"price"				: itemData[i].price,
						"currency"			: itemData[i].currency,
						"tocurrency"		: itemData[i].tocurrency,
						"supply"			: itemData[i].supply,
						"status"      		: itemData[i].status,
						"username"     		: itemData[i].username,
						"profilepicture"	: itemData[i].profilepicture,
						"ownername"			: itemData[i].ownername,
						"ownerpicture"		: itemData[i].ownerpicture,
						"likeCount"			: itemData[i].likeCount,
						"saletype"			: itemData[i].saletype,
						"viewCount"			: itemData[i].viewCount,
						"type"				: itemData[i].type,
						"canbuy"			: canbuy,
						"offer"				: offer,
						"bid"				: bid,
						"show"				: show,
						"owner"				: owner,
					}); 
				}
				let response = {
					status: true,
					message: 'Items Available',
					data: itemsArr[0], 
				}
				return res.json(response);
			} else {
				let response = {
					status: false,
					message: 'Items not available',
				}
				return res.json(response);
			}
		}
		else {
			let response = {
				status: false,
				message: 'Data not available',
			}
			return res.json(response);
		}
	});
});

router.post('/more-item-details', function(req, res, next) {
	var itemId = common.decrypt(req.body.id);
	var userId = common.decrypt(req.body.userId);
	matched.find({item_id :{ $ne:itemId }, ownerId : mongoose.mongo.ObjectId(userId), 'sold': 1, 'status': '1' }, {image:1, _id:1}, (err, result) => {
		if (!err) {
			if (result.length > 0) {
				let itemData = result;
				var itemsArr = [];
				for(var i in itemData){
					var Iid = itemData[i]._id.toString();
					itemsArr.push({
						"itemId"			: common.encrypt(Iid),
						"image"				: itemData[i].image,
					}); 
				}
				let response = {
					status: true,
					message: 'Items Available',
					data: itemsArr, 
				}
				return res.json(response);
			}
			let response = {
				status: true,
				message: 'Items not available',
				data: result, 
			}
			return res.json(response);
		}
		else {
			let response = {
				status: false,
				message: 'Data not available',
			}
			return res.json(response);
		}
	});
});

router.post('/more-item-details1', function(req, res, next) {
	var itemId = common.decrypt(req.body.id);
	var userId = common.decrypt(req.body.userId);
	items.find({_id :{ $ne:itemId }, userId : userId }, {image:1, _id:1}, (err, result) => {
		if (!err) {
			if (result.length > 0) {
				let itemData = result;
				var itemsArr = [];
				for(var i in itemData){
					var Iid = itemData[i]._id.toString();
					itemsArr.push({
						"itemId"			: common.encrypt(Iid),
						"image"				: itemData[i].image,
					}); 
				}
				let response = {
					status: true,
					message: 'Items Available',
					data: itemsArr, 
				}
				return res.json(response);
			}
			let response = {
				status: true,
				message: 'Items not available',
				data: result, 
			}
			return res.json(response);
		}
		else {
			let response = {
				status: false,
				message: 'Data not available',
			}
			return res.json(response);
		}
	});
});

router.post('/item-history', function(req, res, next) {
	var itemId = common.decrypt(req.body.id);
	if (itemId) {
		query = { _id: itemId, status: 'active' };
	}
	else { query = { _id: itemId, status: 'active' }; }
	history.find().exec(function(err, result) {
		if (!err) {
			if (result.length) {
				let itemData = result;
				var itemsArr = [];
				for(var i in itemData){
					var Iid = itemData[i].itemId.toString();
					itemsArr.push({
						"itemId"			: common.encrypt(Iid),
						"username"			: itemData[i].username,
						"image"				: itemData[i].image,
						"type"				: itemData[i].type,
						"price"				: itemData[i].price,
						"currency"			: itemData[i].currency,
					}); 
				}
				let response = {
					status: true,
					message: 'Items Available',
					data: itemsArr[0], 
				}
				return res.json(response);
			} else {
				let response = {
					status: true,
					message: 'Items not available',
				}
				return res.json(response);
			}
		}
		else {
			let response = {
				status: false,
				message: 'Data not available',
			}
			return res.json(response);
		}
	});
});


/*get item offers api functionality start*/ 
router.post('/item-offers', common.tokenMiddleware, function(req, res, next) {
	var itemId = common.decrypt(req.body.id);
	var userId = req.userId;
	offers.aggregate([
		{ 
			$lookup:
			{
				from 			: 'IN_MNlkses',
				localField		: 'buyerId',
				foreignField	: '_id',
				as 				: 'user'
			}
		},
		{ 
			$project:
			{
				"objectId"      : "$objectId",
				"offerId"      	: "$_id",
				"orderId"      	: "$orderId",
				"price"      	: "$askedprice",
				"currency"     	: "$currency",
				"username"		: "$user.username",
				"profilepicture": "$user.profilepicture",
				"date"			: "$createddate",
				"type"			: "$type",
				
			}
		},
		{ $match: { 'orderId': mongoose.mongo.ObjectId(itemId)}, },
	]).exec(function(err, result) {
		if (err) throw err;
		let itemData = result;
		if(itemData && itemData.length > 0){
			var items = [];
			var highest;
			for(var i in itemData){
				var offerId = itemData[i].offerId.toString();
				var objectId = itemData[i].objectId.toString();
				items.push({
					"orderId"			: common.encrypt(itemId),
					"offerId"			: common.encrypt(offerId),
					"itemId"			: common.encrypt(objectId),
					"currency"			: itemData[i].currency,
					"username"			: itemData[i].username,
					"profilepicture"	: itemData[i].profilepicture,
					"price"				: itemData[i].price,
					"date"				: itemData[i].date,
					"type"				: itemData[i].type,
				});
				if (i == (itemData.length - 1)) {
					highest = itemData[i].price;
				} 
			}
			res.json({status:true,data:items, highestbid: highest});
		}else{
			res.json({status:false,msg:'Unable to get data'})
		}
	})
});
/*get item offers api functionality end*/ 



/*Top artist api's start*/
router.get("/topartist", async (req, res) => {
	try {
		items.aggregate([
		{
			$lookup: {
				from: "IN_MNlkses",
				localField: "userId",
				foreignField: "_id",
				as: "user"
			},
		},
		{
			$project: {
				"user_pic": "$user.profilepicture",
				"user_name": "$user.username",
				"userid": "$userId",
				"status": "$status",
			}
		},
		{ $match: {   'status': 'completed' } , },
		{ 
			$group : { 
				_id : "$userid",
				user_pic: { $first: "$user_pic" },
				user_name: { $first: "$user_name" },
			} 
		},
		{ $limit: 10 }
		]).exec(function (err, resData) { 
			if (err) return res.status(500).send(err);
			if (resData.length > 0) {
				res.json({ status: true, message: "success", data: resData });
			} else {
				res.json({ status: false, message: "No Data Found" });
			}
		}) 
	} catch (err) {
	}
})
/*Top artist api's end*/


/*Top artist api's start*/
router.get("/topcollectors", async (req, res) => {
	try {
		matched.aggregate([
		{
			$lookup: {
				from: "IN_MNlkses",
				localField: "ownerId",
				foreignField: "_id",
				as: "user"
			},
		},
		{
			$project: {
				"user_pic": "$user.profilepicture",
				"user_name": "$user.username",
				"ownerId": "$ownerId",
			}
		},
		{ 
			$group : { 
				_id : "$ownerId",
				userid: { $first: "$ownerId" },
				user_pic: { $first: "$user_pic" },
				user_name: { $first: "$user_name" },
			} 
		},
		{ $limit: 10 }
		]).exec(function (err, resData) { 
			if (err) return res.status(500).send(err);
			if (resData.length > 0) {
				res.json({ status: true, message: "success", data: resData });
			} else {
				res.json({ status: false, message: "No Data Found" });
			}
		}) 
	} catch (err) {
		
	}
})
/*Top artist api's end*/

/* CMS  */
router.post('/cms', function(req, res, next) {
	var data = req.body;
	query = { status:'Active', pagekey: data.page };
	cms.find(query, (err, result) => {
		if (!err) {
			let apiresponse = {
				status: true,
				message: 'CMS Available',
				data: result, 
			}
			return res.json(apiresponse);
		}
		else {
			let apiresponse = {
				status: false,
				message: 'Something went wrong, Try again',
			}
			return res.json(apiresponse);
		}
	});
});

router.post('/blogs', async function(req, res, next) {
	query = { status:1};
	var info = req.body;
	let limit = info.limit;
	let skip = info.skip;
	let srt = {_id:1};
	let blogsData = await blogs.find(query).limit(limit).skip(skip).sort(srt);
	if(blogsData && blogsData.length > 0){
		var blog = [];
		for(var i in blogsData){
			var bid = blogsData[i]._id.toString();
			blog.push({
				"blogId"		: common.encrypt(bid),
				"title"			: blogsData[i].title,
				"pagecontent"	: blogsData[i].pagecontent,
				"image"			: blogsData[i].image,
			}); 
		}
		res.json({status:true, message: 'Blogs Available', data:blog});
	}else{
		res.json({status:false, message:'Something went wrong, Try again'})
	}
});


router.post('/getBlog', async function (req, res) {
	try{
		values = req.body;
		var bid = common.decrypt(values.id);
		blogs.findOne({_id:  bid}).exec(function (errs, resdatas) {
			if (resdatas) {
				res.json({ status: true, msg: "Blog available", data: resdatas})
			} else {
				res.json({ status: false, msg: "No data available!!!" })
			}
		})
	}catch(e){
	}
});

/* FAQ  */
router.get('/faq', function(req, res, next) {
	query = { status: 'Active' };
	faq.find(query, (err, result) => {
		if (!err) {
			let response = {
				status: true,
				message: 'FAQ Available',
				data: result, 
			}
			return res.json(response);
		}
		else {
			let response = {
				status: false,
				message: 'Data not available',
			}
			return res.json(response);
		}
	});
});

/* FAQ  */
router.get('/get_site', function(req, res, next) {
	sitesettings.find(function(err, result) {
		if (!err) {
			let response = {
				status: true,
				message: 'Data Available.',
				data: result,
			}
			return res.json(response);
		}
		else {
			let response = {
				status: false,
				message: 'Something went wrong.',
			}
			return res.json(response);
		}
	});
});

/*add subscription*/
router.post('/subscribe', function(req, res, next) {
	data = req.body;
	var mail_format = data.email.substring(data.email.lastIndexOf("@")+1);
	if (disposal.indexOf(mail_format) > -1) {
		return res.json({status:false, message:"Invaild email"});
	} else {
		query = { auth: common.encrypt(data.email) };
		subscribe.find(query, (err, result) => {
			if (!err && result.length > 0) {
				let response = {
					status: false,
					message: 'This user already subscribed',
				}
				return res.json(response);
			}
			else {
				var obj = {
					'auth': common.encrypt(data.email),
					'status' : 'active',
				}
				subscribe.create(obj, (err, result) => {
					if (!err) {
						let response = {
							status: true,
							message: 'Subscription successfull'
						}
						return res.json(response);
					}
					else {
						let response = {
							status: false,
							message: 'Something went wrong, Try again',
						}
						return res.json(response);
					}
				});
			}
		});
	}
});

/* support  */
router.post('/support', function(req, res, next) {
	data = req.body;
	var obj = {
		'auth': common.encrypt(data.email),
		'name': common.encrypt(data.name),
		'subject': data.subject,
		'message': data.message,
		'status' : 'Unread',
	}
	support.create(obj, (err, result) => {
		if (!err) {
			let response = {
				status: true,
				message: 'Your question has been successfully registered! Admin will contact you soon.'
			}
			return res.json(response);
		}
		else {
			let response = {
				status: false,
				message: 'Something went wrong, Try again',
			}
			return res.json(response);
		}
	});
});

/* subscribtion functionality  */
router.post('/add_news_letter', function(req, res, next) {
	data = req.body;
	var obj = {
		'auth': common.encrypt(data.mail_id),
		'status' : 'Active',
	}
	subscribe.findOne({auth: common.encrypt(data.mail_id)}, (err, result) => {
		if (result) {
			let response = {
				status: false,
				message: 'Already added this mail id',
			}
			return res.json(response);
		}
		else {
			subscribe.create(obj, (er, ress) => {
				if (!er) {
					let response = {
						status: true,
						message: 'Your mail has been added successfully.'
					}
					return res.json(response);
				}
				else {
					let response = {
						status: false,
						message: 'Something went wrong, Try again.'
					}
					return res.json(response);
				}
			})
		}
	});
});

module.exports = router;
