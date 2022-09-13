var express 		= require('express');
var router 			= express.Router();
var mongoose 		= require('mongoose');

/*helpers*/
var common 			= require('../GVyc/common');
var multer  		= require('multer');
/*models*/
var activity 		= require('../model/activity');
var users 			= require('../model/sresu');
var usersaddr 		= require('../model/usersaddr');
var items 			= mongoose.model('items');
var matched			= mongoose.model('matched');
var reports 		= require('../model/reports');
var cobject 		= mongoose.model('cobject');
var usermail 		= require('../model/usermail');
var usergallery 	= require('../model/usergallery');
var fs 				= require('fs');
var async       	= require('async');
var speakeasy 		= require("speakeasy");
var pairs 	    	= mongoose.model('pairs');
var follows 	   	= mongoose.model('follows');
var userSettings  	= mongoose.model('usersettings');
var import_contract = mongoose.model('import_contract');
var item 			= mongoose.model('items');
var collection  = mongoose.model('collection');
var network       = mongoose.model('network');

let updatedDate = ()=>{
	return new Date();
};



/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});
var storage = multer.diskStorage({
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	}
});
var upload = multer({ storage: storage });


router.get('/dbclear', (req,res) => {
	matched.remove().exec(function(err,resData){
	
		activity.remove().exec(function(err,resData){
			items.remove().exec(function(err,resData){
			});
		});
	});
});


router.get('/getNetworks', (req,res) => {
	network.find({status: 'Active'}).exec(function(err, ress) {
		if (err) {return res.json({status: false, message: err})}
		return res.json({status: true, message: 'Datas Found', data: ress});
	});
});


router.post('/addNetworks', (req,res) => {
	let bodyy = req.body;
	
	let obj = {
		"networkName": bodyy.networkName,
		"currencyName": bodyy.currencyName,
		"currencySymbol": bodyy.currencySymbol,
		"currency_type": bodyy.currency_type,
		"currency_decimal": bodyy.currency_decimal,
		"status": 'Active',
	};
	network.find({networkName: bodyy.networkName, currencySymbol: bodyy.currencySymbol}).exec(function(err, ress) {
		if (err) {return res.json({status: false, message: err})}
		if (ress.length > 0) {
			return res.json({status: true, message: 'Network type already added'});	
		}
		else {
			network.create(obj, function (err, postRes) {
				if (err) {return res.json({status: false, message: "failed to add network"});}
				if (postRes) {
					return res.json({status: true, message: "Network type added success"});				
				}
			})
		}
	});
});


router.post('/getContract', (req,res) => {
	let bodyy = req.body;

	var cid = bodyy.contractid;

	console.log("cidcidcid",cid)

	let obj = {
		"_id": mongoose.mongo.ObjectId(cid),
	};
	import_contract.findOne(obj).exec(function(err, ress) {
		if (err) {return res.json({status: false, message: err})}
		if (ress != null && ress != undefined) {
			return res.json({status: true, message: 'Contract details available', data: ress});	
		}
		else {
			return res.json({status: false, message: "failed to get Contract data"});
		}
	});
});


router.post('/importcontract', common.tokenMiddleware, (req,res) => {
	let info = req.body;
	try{
		if (req.userId) {
			var contract = info.contract;
			var network = info.network;
			import_contract.find({network: info.network, contract :info.contract }).exec(function(countErr, countRes) {
				if (countErr) {return res.json({status: false, message: "failed to get contract abi"});}
				if (!countRes.length) {
					var request = require('request');
					request('https://api-testnet.bscscan.com/api?module=contract&action=getabi&address='+contract+'&apikey=15XJR8451J3JBCREK46PVRGB2BP8D3V5UF', function (error, response, body) {
						if (!error && response.statusCode === 200) {
							let bodyy = response.body;
							var bb= JSON.parse(body);
							var contract_abi = bb.result;
							let insertparams = {
								"userId" : req.userId,
								"contract" : info.contract,
								"account" : info.account,
								"network" : info.network,
								"token_currency" : info.network,
								"abi" : contract_abi,
								"type":"import"
							}
							import_contract.create(insertparams, function (err, postRes) {
								if (err) {return res.json({status: false, message: "failed to get contract abi"});}
								if (postRes) {
									var Id = (postRes._id).toString();
									return res.json({status: true, message: "Contract imported success", data: contract_abi, contractId: common.encrypt(Id)});				
								}
							})
						}
						else {
							res.json({status: false, message: "failed to get contract abi"});
						}
					}); 
				}
				else {
					var Id = (countRes[0]._id).toString();
					var ContrId = common.encrypt(Id);
					return res.json({status: true, message: "This contract already imported", data: countRes[0].abi, contractId: ContrId});				
				}
			})
		}
		else {
			res.json({status : false, message : "Invalid Address"});
		}
	}
	catch(e){
		res.json({success : 401, message:"Unauthorized",Error:e});
	}
});

/*import object datas api start here*/
router.post('/importobjectdata', common.tokenMiddleware,async function(req, res) {
	let info = req.body;
	try{
		if (req.userId) {
			var contract = info.contract;
			var tokenuri = info.tokenuri;
			var account = info.account;

			console.log("infoinfoinfo",info)
			
					await item.find({name:'testnft '+info.nftid/*body.name*/,}).countDocuments().exec(async function(err,count){
						if (err) {return res.json({status : false, msg : err});}
						if(count > 0) {
							return res.json({status : false, msg : 'Name already exists!'});
						} else {
							let obj = {
								"userId"			: req.userId,
								"ownerId"			: req.userId,
								"collectionId"      : common.decrypt(info.collectionId),
								// "name"      		: body.name,
								"name"      		: 'testnft '+info.nftid,//need to remove static content
								"sellnftid"      	: info.nftid,
								"selltokenid": info.nftid,
								"sellnftaddr"      	: info.account,
								"currency"      	: info.currency,
								"tocurrency"      	: 'WBNB',
								// "description" 	: body.description,
								"description"      	: 'description '+info.nftid,//need to remove static content
								"network" 			: info.network,
								// "external_link" 	: body.external_link,
								"external_link"     : 'external_link '+info.nftid,//need to remove static content
								"status" 			: 'active',
								"imported" 			: 1,
								// "image"      		: body.image,
								"image"      		: tokenuri,//need to remove static content
								"import_contract"   : info.contract,
								"import_contractId" : common.decrypt(info.contractId),
								"modifieddate"  	: updatedDate(),
								"type":"import",
								"price":"0.0001"
							};
						
							await item.create(obj, async function (err, postRes) {
								if (err) {return res.json({status: false, message: "failed to import nft details"});}
								if (postRes) {
									await item.findOneAndUpdate({_id: postRes._id}, {item_id: Buffer.from(common.encrypt((postRes.spec_id).toString())).toString('base64')}, (e, re) => {
										res.json({status : true, msg : " NFT details imported Successfully", "allowed": postRes.item_id});
									}); 
								}
								else {
									res.json({status : false, msg : "Invalid request. Please Try again"});
								}
							})
						}	
					})
				
		}
		else {
			res.json({status : false, message : "Invalid Address"});
		}
	}
	catch(e){
		res.json({success : 401, message:"Unauthorized",Error:e});
	}
});
/*import object datas api end here*/



/*create collection datas api start here*/
router.post('/createCollection', common.tokenMiddleware, function (req, res) {
	try {
		let info = req.body;
		var userId = req.userId;
		collection.find({name:info.name, userId: userId}).exec(function(err,count){
			if(count.length) {
				var cId =  count[0]._id.toString();
				var collectionId = common.encrypt(cId);
				return res.json({status : true, msg : 'Name already exists!', "collectionId" : collectionId});
			} else {
				let obj = {
					"userId"		: userId,
					"name"			: info.name,
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
	} catch(e) {
	
	}
});
/*create collection datas api end here*/





router.post('/createProfile', (req,res) => {
	try{
		var info = req.body;
		info.auth = info.auth ? common.encrypt(info.auth) : info.auth;
		info.address = info.address ? common.encrypt(info.address) : info.address;
		
		if(info.address){  		
			users.findOne({address:info.address}).exec(function(countErr, countRes) {
				if(!countRes){
					users.create(info, function (err, postRes) {
						if(postRes){
							var userId = postRes._id;							
							let authKey = common.createPayload(userId);
							res.json({status : true, gametoken:authKey, message : 'User registered successfully' });
						}else{
							res.json({status : false, message : "User registration failed"});
						}
					});
				}else{
					res.json({status : false, message : "This User Address Already Available, Please Login"});
				}
			});
		}else {
			res.json({status : false, message : "Invalid Address"});
		}
	}catch(e){
		res.json({success : 401, message:"Unauthorized",Error:e});
	}
});

router.post('/checksignin', (req,res) => {
	try{
		var info = req.body;
		if(info.key){  		
			users.findOne({address:common.encrypt(info.key)}).exec(function(countErr, countRes) {
				var obj = {'address': common.encrypt(info.key)};
				
				if(!countRes){
					return res.json({status : false, message : 'Invalid User Address, Please Signup' });
				}else{
					var userId = countRes._id;
					let authKey = common.createPayload(userId);
					return res.json({status : true, gametoken:authKey, message : "User Logged Successfully"});
				}
			});
		}else {
			res.json({status : false, message : "Invalid Address"});
		}
	}catch(e){
		res.json({success : 401, message:"Unauthorized",Error:e});
	}
});

router.post('/checkuserData', (req, res) => {
	try{
		var info = req.body;
		if (info.auth) {
			info.auth =  common.encrypt(info.auth);
		}
		if(info){  		
			users.findOne(info).exec(function(countErr, countRes) {
				if(countRes != null || countRes != undefined){
					return res.json({status : false, message : 'Failed' });
				}else{
					return res.json({status : true, message : "Success"});
				}
			});
		}
	}
	catch(e) {

	}
});

router.post('/usersettings', common.tokenMiddleware, (req,res) => {
	try{
		var info = req.body;
	
		if(req.userId){  		
			userSettings.findOne({userid:req.userId}).exec(function(countErr, countRes) {
				if(!countRes){
					info.userid = req.userId;
					userSettings.create(info, function (err, postRes) {
						if(postRes){
							res.json({status : true, message : 'Settings added successfully' });
						}else{
							res.json({status : false, message : "Failed! Try again."});
						}
					});
				}else{
					userSettings.findOneAndUpdate({userid: req.userId}, info, function (err, postRes) {
						if (postRes) {
							res.json({status : true, message : "Settings updated Successfully"});
						}
						else {
							res.json({status : false, message : "Failed! Try again."});
						}
					})
				}
			});
		}else {
			res.json({status : false, message : "Invalid Address"});
		}
	}catch(e){
		res.json({success : 401, message:"Unauthorized",Error:e});
	}
});

/*get items*/
router.get('/getMySettings', common.tokenMiddleware, function(req, res, next) {
	userSettings.findOne({userid: req.userId}, (err, result) => {
		if (!err) {
			let response = {
				status: true,
				message: 'Settings Available',
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

/*get items*/
router.get('/items', function(req, res, next) {
	query = { status: 'active' };
	items.find(query, (err, result) => {
		if (!err) {
			let response = {
				status: true,
				message: 'Items Available',
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

router.post('/pairslist', common.originMiddleware , async function(req,res){
	try{
		data = req.body;
 
		pairs.findOne({fromCurrency_address:data.fromCurrency_address,toCurrency_address:data.toCurrency_address },{}).exec(function(err,result){   
			if (!err) {
				let response = {
					status: true,
					message: 'Items Available',
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
	}
	catch(e){
	
	}
});

/*add items*/
router.post('/additems', function(req, res, next) {

	data = req.body;
	data.userid = req.userid;
	items.create(data, (err, result) => {
		if (!err) {
			let response = {
				status: true,
				message: 'Item added Success',
			}
			return res.json(response);
		}
		else {
			let response = {
				status: false,
				message: 'Something went wrong, Try again.',
			}
			return res.json(response);
		}
	});
});


/*add items*/
router.post('/reportitem', function(req, res, next) {
	data = req.body;
	data.userid = req.userid;
	reports.create(data, (err, result) => {
		if (!err) {
			let response = {
				status: true,
				message: 'Item added Success',
			}
			return res.json(response);
		}
		else {
			let response = {
				status: false,
				message: 'Something went wrong, Try again.',
			}
			return res.json(response);
		}
	});
});

/* GET users listing. */

router.get('/check_profile', common.tokenMiddleware, function(req, res, next) {
	try{  
		users.findOne({_id: mongoose.mongo.ObjectId(req.userId)}).exec(function(error,result){   
			if (result) {
				if(result.profile_status == 0) {
					return res.json({success:2});
				} else {
					return res.json({success:1});
				}
			}else{
				return res.json({success:3});
			}
		});
	}catch(e){
	}
});

router.get('/get_profile_data', common.tokenMiddleware, function(req, res, next) {
	try{  
		users.findOne({_id: mongoose.mongo.ObjectId(req.userId)},{}).exec(function(error,result){   
			if (result) { 
				response = {status:true, msg: "success",data:result};
			}else{
				response = {status:false, msg: "Something went wrong. Try again"};
			}
			return res.json(response);

		});
	}catch(e){
	}
});
router.get('/get_mailpref', common.tokenMiddleware, function(req, res, next) {
	try{   
		usermail.findOne({user_id: mongoose.mongo.ObjectId(req.userId)}).exec(function(error,result){     
			if (result != null) {  
				return res.json({status:true, msg: "success",data:result});
			}else{

				let object = {
					"user_id": mongoose.mongo.ObjectId(req.userId), 
				}    
				usermail.create(object, function(err, result) { 
					if (result !=null) { 
						return res.json({status:true, msg: "success",data:result});
					}else{
						return res.json({status:false, msg: 'Something went wrong, Try again'});
					}  
				}); 
				// return res.json({status:false, msg: "Something went wrong. Try again"});
			} 

		});
	}catch(e){
	}
});
/* GET users listing. */
router.post('/editprofile', common.tokenMiddleware,upload.single('profile_img'),async function(req, res, next) {
	let profile='';
	try{
		data = req.body; 
		await users.find({_id: { $ne: req.userId }, auth: data.email }, (err, result) => { 
			if (err) { return res.json({status: false, msg: "Something went wrong"})};
			if (result.length > 0) {
				return res.json({status: false, msg: "Email id already exist"})
			}
		});

		await users.find({_id: { $ne: req.userId }, username: data.username }, (err, result) => {
			if (err) { return res.json({status: false, msg: "Something went wrong"})};
			if (result.length > 0) {
				return res.json({status: false, msg: "Username id already exist"})
			}
		});

		let userData = users.findOne({_id: mongoose.mongo.ObjectId(req.userId)}, (err, result) =>{
			if (result !=null) {
				/*if(result.tfa_url=='' || result.tfa_url== null){
					var qrName = 'SZK (' + data.email + ')';
					var secret = speakeasy.generateSecret({
						length: 10,
						name: qrName
					});
					var url = common.google_tfa(secret.otpauth_url);
					var tfa_secret = secret.base32;
					var tfa_status = '0'; 

				}else{
					var url = result.tfa_url;
					var tfa_secret = result.tfa_secret;
					var tfa_status = result.tfa_status;
				}*/
				if(typeof req.file != 'undefined' && typeof req.file != undefined && req.file.path != "") {	  
					let query  = { _id : mongoose.mongo.ObjectId(req.userId)}; 
					common.imgUploader(req.file, function(value){
						profile = value;    
						let object = { 
							"auth": common.encrypt(data.email),
							"username": data.username,
							"name": data.name,
							"bio": data.bio,
							"location": data.location,
							"profilepicture": value.Location, 
							"profile_status": 1, 
							// "tfa_status": tfa_status,
							// "tfa_url": url,
							// "tfa_secret": tfa_secret,
							"status" : 'active' 
						}	
						users.updateOne(query,{$set:object},(err,result)=>{
							if (err) {
								return res.json({status:false, msg: 'Something went wrong, Try again'});
							}
							return res.json({status: true, msg: "Profile Updated."});
						}); 

					}); 
				} else { 
					let query  = { _id : mongoose.mongo.ObjectId(req.userId)}; 
					profile = result.profilepicture;   
					let object = { 
						"auth": common.encrypt(data.email),
						"username": data.username,
						"name": data.name,
						"bio": data.bio,
						"location": data.location,
						"profilepicture": profile,
						"profile_status": 1,  
						// "tfa_status": tfa_status,
						// "tfa_url": url,
						// "tfa_secret": tfa_secret,
						"status" : 'active' 
					}	
					users.updateOne(query,{$set:object},(err,result)=>{
						if (err) {
							return res.json({status:false, msg: 'Something went wrong, Try again'});
						}
						return res.json({status: true, msg: "Profile Updated."});
					}); 
				} 
			}
			else {
				
			}
		});  
	}catch(e){
	}
});
// getting User 
/*get view user api functionality start*/
router.post('/user', common.tokenMiddleware, function (req, res) {
	var userId = req.userId;
	try{
		users.findOne({_id: mongoose.mongo.ObjectId(userId)}, {auth:1, profilepicture:1, username:1, address:1, _id:0}, (err, result) => {
			if(result){
				result.auth = common.decrypt(result.auth);
				result.address = common.decrypt(result.address);
				res.json({status:true,data:result});
			}else{
				res.json({status:false,msg:'Invalid User'})
			}
		});
	}catch(e){
	}
	
});
/*get view user api functionality end*/



router.post('/otheruserproffile', common.originMiddlewarenew, function (req, res) {
	var username = req.body.username;
	try{
		users.findOne({username: username}, {auth:1, profilepicture:1, username:1, address:1, _id:0}, (err, result) => {
			if(result){
				result.auth = common.decrypt(result.auth);
				result.address = common.decrypt(result.address);
				res.json({status:true,data:result});
			}else{
				res.json({status:false,msg:'Invalid User'})
			}
		});
	}catch(e){
	   res.json({status:false,msg:'Invalid User'})
	}
	
});


/*get user details*/
router.get('/getuser', common.tokenMiddleware, function(req,res){
	try{
		users.findOne({_id: mongoose.mongo.ObjectId(req.userId)}, (err, result) => {
			if(result){
				result.auth = common.decrypt(result.auth);
				res.json({status:true,data:result});
			}else{
				res.json({status:false,msg:'Unable to get data'})
			}
		});
	}catch(e){
	}
});

/*follow user*/
router.post('/addfollow', common.tokenMiddleware, function(req,res){
	try{
		follows.find({userid: req.userid, followuser: req.data.userid}, (err, result) => {
			if(err){
				return res.json({status:false,msg:'Something went wrong try again'})
			}

			if (result.length > 0) {
				return res.json({status:false,msg:'This user already followed by you.'});
			}
			return res.json({status:true,msg:'Following.'});
		});
	}catch(e){
	}
});

/*followed by this user*/
router.post('/followed', common.tokenMiddleware, function(req,res){
	try{
		follows.find({userid: req.userid, followuser: req.data.userid}, (err, result) => {
			if(err){
				return res.json({status:false,msg:'Something went wrong try again'})
			}

			if (result.length > 0) {
				return res.json({status:false,msg:'This user already followed by you.'});
			}
			return res.json({status:true,msg:'Following.'});
		});
	}catch(e){
	}
});

/*followers for this user*/
router.get('/followers',  function(req,res){
	try{
		async.parallel({
			currencyTotalCount:function(cb) {
				users.aggregate([
				{
					$lookup: {
						from        : "follows",
						localField  : "userid",
						foreignField: "_id",
						as          : "followers"
					},

				},
				]).exec(cb)
			},
			currencyData:function(cb) {
				users.aggregate([
				{
					$lookup: {
						from        : "follows",
						localField  : "userid",
						foreignField: "_id",
						as          : "followers"
					},
				},
				]).exec(cb)
			},
		},function(err,results){
			if (err) return res.status(500).send(err);
			
		})

    
}catch(e){
}
});

/*user publications*/
router.post('/publication', common.tokenMiddleware, function(req,res){
	try{
		follows.find({userid: req.userid}, (err, result) => {
			if(err){
				return res.json({status:false,msg:'Something went wrong try again'})
			}

			if (result.length > 0) {
				return res.json({status:false,msg:'This user already followed by you.'});
			}
			return res.json({status:true,msg:'Following.'});
		});
	}catch(e){
	}
});

/*update user details*/
router.post('/updateuser', common.tokenMiddleware, function(req,res){
	try{
		data = req.data;
		data.auth = common.encrypt(data.mailid);
		let userData = users.findOneAndUpdate({_id: req.userid}, {data}, (err, result) =>{
			if (err) {
				return res.json({status:false,msg:'Something went wrong. Try again'});
			}
			else {
				return res.json({status:true,msg:'Updated Success'})
			}
		});
	}catch(e){
	}
});


/*get user activity*/
router.post('/getactivties', common.tokenMiddleware, function(req,res){
	try{
		reqData = req.body;
  
  	query = { "userid": reqData.userid }
  	let activityData = activity.find(query);
  	if(activityData && activityData.length > 0){
  		res.json({status:true,data:activityData});
  	}else{
  		res.json({status:false,msg:'Unable to get data'})
  	}
  }catch(e){
  }
});

/*get user onsale*/
router.post('/onsale', function(req,res){
	try{

	}catch(e){
	}
});

/*get user offers*/
router.post('/offers', function(req,res){
	try{

	}catch(e){
	}
});

/*get user saved*/
router.get('/favorites', common.tokenMiddleware,function(req,res){
	try{
		reqData = req.body; 
		
		users.findOne({_id: req.userId}, (arrerr, arrusr) =>{  
			if(arrusr !=null){  
				var obj = {
					table: []
				}; 
				activity.aggregate([
				{ 
					$lookup:
					{
						from 			: 'IN_MNlkses',
						localField		: 'creatorId',
						foreignField	: '_id',
						as 				: 'creator'
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
						"userId"     	: "$userId",
						"creator_name"	: "$creator.username",
						"creator_img"	: "$creator.profilepicture",
						"ownerId"      	: "$ownerId",
						"owner_name"	: "$owner.username",
						"owner_img"		: "$owner.profilepicture",
						"objectId"		: "$objectId",
						"name"			: "$objectName",
						"image"			: "$image",
						"type"			: "$type",
					}
				},
				{ $match: {   'userId': arrusr._id, 'type': "Liked" } , },
				]).exec(function (err, resData) {
					if (err) return res.status(500).send(err);
					if (resData.length > 0) {
						resData.forEach((row, index) => {
							let objectId = row.objectId.toString(); 
							objectId = common.encrypt(objectId);
							resData[index].objectId_enc = objectId; 
						}) 
						res.json({ status: true, message: "success", data: resData });
					} else {
						res.json({ status: true, message: "No Data Found", data:resData });
					}
				}) 
			}
		});
	}catch(e){
	}
});


/*get user owned object api functionality start  expired*/
router.post('/userOwned', common.tokenMiddleware, async function (req, res) {
	try{
		var values = req.body;
		var userId = req.userId;
		var ownerId = userId;
		
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
			$project:
			{
				"userId"      	: "$user._id",
				"item_id"      	: "$item_id",
				"username"		: "$user.username",
				"profilepicture": "$user.profilepicture",
				"ownerId"      	: "$ownerId",
				"ownername"		: "$owner.username",
				"ownerpicture"	: "$owner.profilepicture",
				"name"			: "$name",
				"description"	: "$description",
				"sold"			: "$sold",
				"image"			: "$image",
				"currency"		: "$currency",
				"price"			: "$price",
				"supply"		: "$edition",
				"status"      	: "$status",
			}
		},
		{ $match: {   'ownerId': mongoose.mongo.ObjectId(ownerId), 'sold':2, 'status':"2" }},
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
					var ObjId = itemData[i].item_id.toString();
					items.push({
						"itemId"			: common.encrypt(Iid),
						"userId"			: common.encrypt(Uid),
						"ownerId"			: common.encrypt(Oid),
						"objectId"			: common.encrypt(ObjId),
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
				
				return res.json({status:true,msg:'No items found', data: []});
			}
		});
	}catch(e){
	}
});
/*get user owned object api functionality end */


/*get user owned object api functionality start */
router.post('/otherprofilecollect', common.originMiddlewarenew, async function (req, res) {
	try{

		var username = req.body.username;
		
		var values = req.body;
		users.findOne({username: username}, {auth:1, profilepicture:1, username:1, address:1, _id:1}, (err, result) => {
		if(result){
			
			var ownerId = result._id;
			let limit = values.limit;
			let skip = values.skip;
			let srt = {_id:-1};
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
						$lookup:
						{
							from 			: 'IN_dehctam',
							localField 		: '_id',
							foreignField	: 'item_id',
							as 				: 'matched'
						}
					},
					{ 
						$project:
						{
							"userId"      	: "$user._id",
							"item_id"      	: "$_id",
							"username"		: "$user.username",
							"profilepicture": "$user.profilepicture",
							"ownerId"      	: "$ownerId",
							"ownername"		: "$owner.username",
							"ownerpicture"	: "$owner.profilepicture",
							"name"			: "$name",
							"description"	: "$description",
							"supply"		: "$supply",
							"image"			: "$image",
							"currency"		: "$tocurrency",
							"price"			: "$price",
							"salestatus"	: "$salestatus",
							"sold"			: "$matched.sold",
							"status"		: "$matched.status",
						}
					},
					{ $match: {   'ownerId': mongoose.mongo.ObjectId(ownerId), 'salestatus':0 }},
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
									"username"     		: itemData[i].username,
									"profilepicture"	: itemData[i].profilepicture,
									"ownername"			: itemData[i].ownername,
									"ownerpicture"		: itemData[i].ownerpicture,
								}); 
							}
							
							return res.json({status:true,data:items});
						}else{
							
							return res.json({status:true,msg:'No items found', data: []});
						}
					});

		}else{
			res.json({status:false,msg:'Invalid User'})
		}
		});
		


	
		

		
	}catch(e){
	}
});



/*get user owned object api functionality start */
router.post('/userCollected', common.tokenMiddleware, async function (req, res) {
	try{
		var values = req.body;
		var userId = req.userId;
		var ownerId = userId;
	
		let limit = values.limit;
		let skip = values.skip;
		let srt = {_id:-1};

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
			$lookup:
			{
				from 			: 'IN_dehctam',
				localField 		: '_id',
				foreignField	: 'item_id',
				as 				: 'matched'
			}
		},
		{ 
			$project:
			{
				"userId"      	: "$user._id",
				"item_id"      	: "$_id",
				"username"		: "$user.username",
				"profilepicture": "$user.profilepicture",
				"ownerId"      	: "$ownerId",
				"ownername"		: "$owner.username",
				"ownerpicture"	: "$owner.profilepicture",
				"name"			: "$name",
				"type":"$type",
				"description"	: "$description",
				"supply"		: "$supply",
				"image"			: "$image",
				"currency"		: "$currency",
				"currency1"		: "$tocurrency",
				"price"			: "$price",
				"salestatus"	: "$salestatus",
				"sold"			: "$matched.sold",
				"status"		: "$matched.status",
				"selltokenid":"$selltokenid",
				"spec_id":"$spec_id",
				"_id":"$matched._id",
				"type":"$type",
				"import_contractId":"$import_contractId",
			}
		},
		{ $match: {   'ownerId': mongoose.mongo.ObjectId(ownerId), 'salestatus':0 }},
		{ $sort: srt },
		{ $limit: limit },
		{ $skip: skip }
		]).exec(function(err, result) {

			console.log("user collected 111",result)

			if (err) throw err;
			
			let itemData = result;
			if(itemData && itemData.length > 0){
				var items = [];
				for(var i in itemData){



					
					var Iid = itemData[i].item_id.toString();
					var Uid = itemData[i].userId.toString();
					var Oid = itemData[i].ownerId.toString();
					items.push({
						"_id":itemData[i]._id,
						"itemId"			: common.encrypt(Iid),
						"userId"			: common.encrypt(Uid),
						"ownerId"			: common.encrypt(Oid),
						"name"				: itemData[i].name,
						"type"				: itemData[i].type,
						"description"		: itemData[i].description,
						"image"				: itemData[i].image,
						"price"				: itemData[i].price,
						//"currency"			: itemData[i].currency,
						"supply"			: itemData[i].supply,
						"username"     		: itemData[i].username,
						"profilepicture"	: itemData[i].profilepicture,
						"ownername"			: itemData[i].ownername,
						"ownerpicture"		: itemData[i].ownerpicture,
						"currency": itemData[i].currency,
						"tocurrency": itemData[i].currency1,
						"spid":itemData[i].spec_id,
						"selltokenid":itemData[i].selltokenid,
						"contractId":itemData[i].import_contractId,
					}); 
				}

				console.log("itemsitemsitems",items)
				
				return res.json({status:true,data:items});
			}else{
				
				return res.json({status:true,msg:'No items found', data: []});
			}
		});
	}catch(e){
	}
});
/*get user owned object api functionality end */

/*get user owned object api functionality start */
router.post('/userCollected1', common.tokenMiddleware, async function (req, res) {
	try{
		var values = req.body;
		var userId = req.userId;
		var ownerId = userId;
		
		let limit = values.limit;
		let skip = values.skip;
		let srt = {_id:-1};

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
				"userId"      	: "$user._id",
				"item_id"      	: "$_id",
				"username"		: "$user.username",
				"profilepicture": "$user.profilepicture",
				"ownerId"      	: "$ownerId",
				"ownername"		: "$owner.username",
				"ownerpicture"	: "$owner.profilepicture",
				"name"			: "$name",
				"description"	: "$description",
				"supply"		: "$supply",
				"image"			: "$image",
				"currency"		: "$tocurrency",
				"price"			: "$price",
				"salestatus"	: "$salestatus",
			}
		},
		{ $match: {   'ownerId': mongoose.mongo.ObjectId(ownerId), 'salestatus':0 }},
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
						"username"     		: itemData[i].username,
						"profilepicture"	: itemData[i].profilepicture,
						"ownername"			: itemData[i].ownername,
						"ownerpicture"		: itemData[i].ownerpicture,
					}); 
				}
				
				return res.json({status:true,data:items});
			}else{
			
				return res.json({status:true,msg:'No items found', data: []});
			}
		});
	}catch(e){
	}
});
/*get user owned object api functionality end */


router.post('/userfavorites', common.tokenMiddleware, function(req,res){
	try{
		userId = req.userId; 
		users.findOne({_id: mongoose.mongo.ObjectId(userId)}, (arrerr, arrusr) =>{  
			if(arrusr !=null){  
				var obj = {
					table: []
				}; 
				activity.aggregate([
				{ 
					$lookup:
					{
						from 			: 'IN_MNlkses',
						localField		: 'creatorId',
						foreignField	: '_id',
						as 				: 'creator'
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
						"userId"     	: "$userId",
						"creator_name"	: "$creator.username",
						"creator_img"	: "$creator.profilepicture",
						"ownerId"      	: "$ownerId",
						"owner_name"	: "$owner.username",
						"owner_img"		: "$owner.profilepicture",
						"objectId"		: "$objectId",
						"name"			: "$objectName",
						"image"			: "$image",
						"type"			: "$type",
					}
				},
				{ $match: {   'userId': arrusr._id, 'type': "Liked" } , },
				]).exec(function (err, resData) {
					
					if (err) return res.status(500).send(err);
					if (resData.length > 0) {
						resData.forEach((row, index) => {
							let objectId = row.objectId.toString(); 
							objectId = common.encrypt(objectId);
							resData[index].objectId_enc = objectId; 
						}) 
						return res.json({ status: true, message: "success", data: resData });
					} else {
						return res.json({ status: true, message: "No Data Found", data:resData });
					}
				}) 
			}
		});
	}catch(e){
	}
});

/*get user rewards*/
router.post('/rewards', function(req,res){
	try{

	}catch(e){
	}
});


/*get user history api functionality start */
router.post('/history', common.tokenMiddleware, async function (req, res) {
	try{
		var values = req.body;
		var userId = req.userId;
		
		activity.aggregate([
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
				"item_id"      	: "$objectId",
				"to"			: "$user.address",
				"from"			: "$owner.address",
				"name"			: "$objectName",
				"currency"		: "$tocurrency",
				"price"			: "$price",
				"txid"			: "$txid",
				"image"			: "$image",
				"type"			: "$type",
				"date"			: "$createddate",
				"ownerId"		: "$ownerId",
			}
		},
		{ $match: {   'ownerId': mongoose.mongo.ObjectId(userId), 'type': 'Purchased' }},
		]).exec(function(err, result) {
			if (err) throw err;
		
			let itemData = result;
			if(itemData && itemData.length > 0){
				var items = [];
				for(var i in itemData){
					var ObjId = itemData[i].item_id.toString();
					var to = itemData[i].to.toString();
					var from = itemData[i].from.toString();
					items.push({
						"objectId"			: common.encrypt(ObjId),
						"name"				: itemData[i].name,
						"image"				: itemData[i].image,
						"price"				: itemData[i].price,
						"txid"				: itemData[i].txid,
						"currency"			: itemData[i].currency,
						"to"     			: common.decrypt(to),
						"from"     			: common.decrypt(from),
						"date"     			: itemData[i].date,
						"type"     			: itemData[i].type,
					}); 
				}
				return res.json({status:true,data:items});
			}else{
				return res.json({status:true,msg:'No items found', data: []});
			}
		});
	}catch(e){
	}
});
/*get user owned object api functionality end */


/*add cms*/
router.post('/addactivity', common.tokenMiddleware, async function(req,res){
	try{
		reqData = req.body;
		obj = {
			"userId": req.userId,
			"objectId": common.decrypt(reqData.objectId),
			"creatorId": common.decrypt(reqData.creatorId),
			"ownerId": common.decrypt(reqData.ownerId),
			"objectName": reqData.objectName,
			"image": reqData.image,
			"type": reqData.type,
		}
		query = {"userId": req.userId,"type":["Liked", "Following"],"objectId": common.decrypt(reqData.objectId)}
		activity.findOne(query, (er, re) => {
			if (er) {
				return res.json({status:false,msg:'Something went wrong, Try again.'})
			}
			if (re) {
				activity.deleteOne(query, (er1, re1) => {
				});
				items.updateOne({_id:common.decrypt(reqData.objectId)},{$inc: { likeCount: -1},$pull: { "favUsers": req.userId }},(err,ree)=>{
				});				
				return res.json({status:false,msg:'This activity already exist.'});
			} else {
				activity.create(obj, (err, result) =>{
					if (err) {
						return res.json({status:false,msg:'Something went wrong, Try again.'})
					}
					else {
						var favArr = [];
						favArr.push(req.userId);
						items.updateOne({_id:common.decrypt(reqData.objectId)},{$inc: { likeCount: +1},$push: { "favUsers": favArr }},(err,ree)=>{
						});
						return res.json({status:true,msg: "Your activity completed."});
					}
				})
			}
		})
	}catch(e){
	}
});


router.post('/create_obj', common.tokenMiddleware,upload.single('photograph1'),function(req,res){
	try{
		data = req.body; 
		var obj = {
			table: []
		};  
		common.singleUploadcheck(req, function(value){
			let photograph = value; 

			let object = {
				"photograph": photograph,
				"title": data.title,
				"description": data.description,
				"external_link": data.external_link,
				"num_copy": data.num_copy,
				"userId": mongoose.mongo.ObjectId(req.userId),
				"status" : 'active'
			}

			cobject.create(object, (err, result) => { 
				if(result){
					obj.table.push({id: result._id, photograph:photograph,title:data.title,description:data.description,external_link:data.external_link,num_copy:data.num_copy,inc_id: result.inc_id});

					var json = JSON.stringify(obj);
		
				let response = {
					status: true,
					message: 'Object added Success',
				}
				return res.json(response);
				
		}else{
			let response = {
				status: false,
				message: 'Somthing went wrong',
			}
			return res.json(response);
		}

	}); 

		});

	}catch(e){
	}
});
router.post('/login', function(req,res){
	try{
		data = req.body;  
		let addr = data.address;
		usersaddr.findOne({address: addr},{_id:1}).exec(function(error,result){ 

			let token = common.createPayload(result._id); 
			if (result) { 
				let response = {
					status: true,
					msg: token,
					token: token
				}
				return res.json(response); 
			}else{ 
				let response = {
					status: true,
					msg: 'Something went wrong. Try again'
				}
				return res.json(response); 
			}

		});
	}catch(e){
	}
});

router.get('/mycollections', common.tokenMiddleware, function(req,res){
	try{
		cobject.find({userId: req.userId}).exec(function(error,result){  
			if (result) { 
				let response = {
					status: true,
					data: result,
					msg: 'success'
				}
				return res.json(response); 
			}else{ 
				let response = {
					status: true,
					msg: 'Something went wrong. Try again'
				}
				return res.json(response); 
			} 
		});
	}catch(e){
	}
});

router.get('/test', function(req,res){
	try{
		var Web3 = require('web3');
		var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545')); 
		web3.eth.sign("Hello world", "0x77d9CA3237b61459504AAC0B94A354376C765d17")
	}catch(e){
	}
});


router.post('/prefupdate', common.tokenMiddleware,function(req, res, next) {
	let bidCheck='';let incompleteCheck='';let makebidCheck='';let makeCheck='';let newsCheck='';let objectsaleCheck=''; let offerbidCheck='';
	let offerCheck='';let platformCheck='';let purchaseCheck='';let receiveCheck='';let releaseCheck='';let salesCheck=''; let sentCheck='';
	try{
		data = req.body; 

		if(data.bidCheck==null || data.bidCheck=='0'){ bidCheck='0'; }else{ bidCheck='1';}
		if(data.incompleteCheck==null || data.incompleteCheck=='0' ){ incompleteCheck='0'; }else{ incompleteCheck='1';}
		if(data.makebidCheck==null || data.makebidCheck=='0' ){ makebidCheck='0'; }else{ makebidCheck='1';}
		if(data.makeCheck==null || data.makeCheck=='0' ){ makeCheck='0'; }else{ makeCheck='1';}
		if(data.newsCheck==null || data.newsCheck=='0' ){ newsCheck='0'; }else{ newsCheck='1';}
		if(data.objectsaleCheck==null || data.objectsaleCheck=='0' ){ objectsaleCheck='0'; }else{ objectsaleCheck='1';}
		if(data.offerbidCheck==null || data.offerbidCheck=='0' ){ offerbidCheck='0'; }else{ offerbidCheck='1';}
		if(data.offerCheck==null || data.offerCheck=='0' ){ offerCheck='0'; }else{ offerCheck='1';}
		if(data.platformCheck==null || data.platformCheck=='0' ){ platformCheck='0'; }else{ platformCheck='1';}
		if(data.purchaseCheck==null || data.purchaseCheck=='0' ){ purchaseCheck='0'; }else{ purchaseCheck='1';}
		if(data.receiveCheck==null || data.receiveCheck=='0' ){ receiveCheck='0'; }else{ receiveCheck='1';}
		if(data.releaseCheck==null || data.releaseCheck=='0' ){ releaseCheck='0'; }else{ releaseCheck='1';}
		if(data.salesCheck==null || data.salesCheck=='0' ){ salesCheck='0'; }else{ salesCheck='1';}
		if(data.sentCheck==null || data.sentCheck=='0' ){ sentCheck='0'; }else{ sentCheck='1';}  

		let object = {
			"receive_bit": bidCheck,
			"purchases_not_completed": incompleteCheck,
			"make_bit": makebidCheck,
			"make_offer": makeCheck,
			"news": newsCheck,
			"obj_sale":objectsaleCheck,
			"is_offer_accepted": offerbidCheck, 
			"get_offer": offerCheck, 
			"paltform_updates": platformCheck, 
			"purchases_is_completed": purchaseCheck, 
			"receive_item": receiveCheck, 
			"releases": releaseCheck, 
			"complete_sale": salesCheck, 
			"sent_item": sentCheck, 
		}   
		let userData = usermail.find({user_id: mongoose.mongo.ObjectId(req.userId)}, (err, result) =>{

			if (result !=null) {
				let query  = { user_id: mongoose.mongo.ObjectId(req.userId)};
				usermail.updateOne(query,{$set:object},(err,result)=>{ 
					if (err) {
						return res.json({status:false, msg: 'Something went wrong, Try again'});
					}
					return res.json({status: true, msg: "Profile Updated."});
				}); 
			}
			else {
				users.create(object, function(err, result) {
					if (err) {
						return res.json({status:false, msg: 'Something went wrong, Try again'});
					}
					return res.json({status: true, msg: "Profile Updated."});
				});

			}
		});  

	}catch(e){
	}
});

router.post('/activityupdate', common.tokenMiddleware,function(req, res, next) {
	let followedCheck='';let followersCheck='';let ofrrcvCheck='';let purchCheck='';let slsCheck='';let tcoCheck='';  
	try{
		data = req.body; 

		if(data.followedCheck==null || data.followedCheck=='0'){ followedCheck='0'; }else{ followedCheck='1';}
		if(data.followersCheck==null || data.followersCheck=='0' ){ followersCheck='0'; }else{ followersCheck='1';}
		if(data.ofrrcvCheck==null || data.ofrrcvCheck=='0' ){ ofrrcvCheck='0'; }else{ ofrrcvCheck='1';}
		if(data.purchCheck==null || data.purchCheck=='0' ){ purchCheck='0'; }else{ purchCheck='1';}
		if(data.slsCheck==null || data.slsCheck=='0' ){ slsCheck='0'; }else{ slsCheck='1';}
		if(data.tcoCheck==null || data.tcoCheck=='0' ){ tcoCheck='0'; }else{ tcoCheck='1';} 
		let object = {
			"new_followed": followedCheck,
			"new_followers": followersCheck,
			"offer_received": ofrrcvCheck,
			"purchase_made": purchCheck,
			"sales_made": slsCheck,
			"transaction_carried":tcoCheck, 
		}   
		let userData = usermail.find({user_id: mongoose.mongo.ObjectId(req.userId)}, (err, result) =>{

			if (result !=null) {
				let query  = { user_id: mongoose.mongo.ObjectId(req.userId)};
				usermail.updateOne(query,{$set:object},(err,result)=>{ 
					if (err) {
						return res.json({status:false, msg: 'Something went wrong, Try again'});
					}
					return res.json({status: true, msg: "Profile Updated."});
				}); 
			}
			else {
				users.create(object, function(err, result) {
					if (err) {
						return res.json({status:false, msg: 'Something went wrong, Try again'});
					}
					return res.json({status: true, msg: "Profile Updated."});
				});

			}
		});  

	}catch(e){
	}
});
router.post('/rankingupdate', common.tokenMiddleware,function(req, res, next) {
	let is_twofactor='';let is_yours='';  let is_yours_uname='';  let is_yours_uname_wallet='';  let is_yours_wallet='';  let is_portfolio='';  
	try{
		data = req.body; 

		if(data.example11=='customRadio'){ is_twofactor='customRadio'; }else if(data.example11=='showRadio'){ is_yours='showRadio';}else{ is_yours_uname='unameRadio'; } 
		if(data.example12=='uname1Radio'){ is_yours
			_uname_wallet='uname1Radio'; }else if(data.example12=='show1Radio'){ is_yours_wallet='show1Radio';}else{ is_portfolio='portfolioRadio'; } 
			let object = {
				"is_twofactor": is_twofactor,
				"is_yours": is_yours,
				"is_yours_uname": is_yours_uname,
				"is_yours_uname_wallet": is_yours_uname_wallet,
				"is_yours_wallet": is_yours_wallet,
				"is_portfolio":is_portfolio, 
			}   
			let userData = usermail.find({user_id: mongoose.mongo.ObjectId(req.userId)}, (err, result) =>{

				if (result !=null) {
					let query  = { user_id: mongoose.mongo.ObjectId(req.userId)};
					usermail.updateOne(query,{$set:object},(err,result)=>{ 
						if (err) {
							return res.json({status:false, msg: 'Something went wrong, Try again'});
						}
						return res.json({status: true, msg: "Profile Updated."});
					}); 
				}
				else {
					users.create(object, function(err, result) {
						if (err) {
							return res.json({status:false, msg: 'Something went wrong, Try again'});
						}
						return res.json({status: true, msg: "Profile Updated."});
					});

				}
			});  

		}catch(e){
		}
	});

router.post('/update_tfa', common.tokenMiddleware,function(req, res, next) {  
	try{
		data = req.body;  

		let userData = users.findOne({_id: mongoose.mongo.ObjectId(req.userId)}, (err, result) =>{  
			var verified = speakeasy.totp.verify({
				secret  : result.tfa_secret,
				encoding: 'base32',
				token   : data.tfa_value
			});
			if(verified) {
				if(result.tfa_status == 0){
					updatedRule = { tfa_status: 1}
					status = 'enabled';
				} else {
					var qrName = 'SZK (' + result.auth + ')';
					var secret = speakeasy.generateSecret({
						length: 10,
						name: qrName
					});
					var url = common.google_tfa(secret.otpauth_url); 					
					updatedRule = { tfa_status: 0, tfa_secret : secret.base32, tfa_url : url};
					status = 'disabled';
				}
				users.updateOne({"_id":mongoose.mongo.ObjectId(req.userId)}, {"$set":updatedRule}).exec(function(errUpdate, resUpdate) {
					if(resUpdate) {
						return res.json({ status:true, message:"2FA has been " + status});
					} else {
						return res.json({ status:false, message:"2FA has not updated"});
					}
				});
			} else {
				return res.json({ status:false, message:"Invalid 2FA Code" });
			} 

		});  

	}catch(e){
	}
});

router.get('/getobject/:id', function(req,res){
	var obj = {
		table: []
	}; 
	try{ 
		cobject.findOne({inc_id:req.params.id}).exec(function(error,result){  

			if (result) { 

				// obj.table.push({id: result._id, photograph:result.photograph,title:result.title,description:result.description,external_link:result.external_link,num_copy:result.num_copy,inc_id: result.inc_id}); 

				// var json = JSON.stringify(obj);

				let response = {id: result._id, photograph:result.photograph,title:result.title,description:result.description,external_link:result.external_link,num_copy:result.num_copy,inc_id: result.inc_id}
				return res.json(response); 
			}else{ 
				let response = {
					status: true,
					msg: 'Something went wrong. Try again'
				}
				return res.json(response); 
			} 
		});
	}catch(e){
	}
});

router.post('/updategallery', common.tokenMiddleware,upload.single('gallery'),async function(req, res, next) {
	let profile='';
	try{ 
		let userData = usergallery.findOne({userId: mongoose.mongo.ObjectId(req.userId)}, (err, result) =>{
			if (result !=null) {
				common.singleUploadcheck(req, function(value){
					let pf =  value; 
					let query  = { userId : mongoose.mongo.ObjectId(req.userId)};  
					usergallery.updateOne(query,{$push: { "gallery": pf }},(err,result)=>{ 
						if (err) {
							return res.json({status:false, msg: 'Something went wrong, Try again'});
						}
						return res.json({status: true, msg: "Gallery Updated."});

					});

				});	
			}
			else { 
				common.singleUploadcheck(req, function(value){
					let pf =  value;

					var obj = {'gallery': pf,userId : mongoose.mongo.ObjectId(req.userId)};
					usergallery.create(obj, function (err, result) {
						if(result){
							return res.json({status: true, msg: "Gallery Updated."});
						}else{
							return res.json({status: false, msg: "Gallery not Updated."});
						}
					}); 

				});	  

			}
		});  

	}catch(e){
	}
});

router.get('/getgallery', common.tokenMiddleware, function(req, res, next) {
	try{  
		usergallery.findOne({userId: mongoose.mongo.ObjectId(req.userId)},{}).exec(function(error,result){   
			if (result) { 
				response = {status:true, msg: "success",data:result};
			}else{
				response = {status:false, msg: "Something went wrong. Try again"};
			}
			return res.json(response);

		});
	}catch(e){
	}
});

module.exports = router;
