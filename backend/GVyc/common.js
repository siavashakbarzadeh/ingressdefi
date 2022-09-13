var CryptoJS 		= require("crypto-js");
const bcrypt 		= require('bcrypt');
var speakeasy 		= require('speakeasy');
var qrcode    		= require('qrcode');
let jwt 			= require('jsonwebtoken');
let ip 				= require('ip');
let multer     		= require('multer');
let fs     			= require('fs');
let aws     		= require('aws-sdk');
var mailhelper 			= require('./mailhelper');
var moment = require('moment');
//upload  storage
let storage 		= multer.diskStorage({
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	}
});
let upload 			= multer({ storage: storage });

let originCheck 	= require('../uZmln/originCheck.json');
let config 			= require('../uZmln/zNkZX.js');
let ipblock 		= require('../model/kcolbpi');

var key 			= "jsvNFMGHElf3qw54yuiUTYT#$bjkuysdf";
var iv  			= "msvseKHJ&TRBMKJ*(Y#@$mkbrjtjkba";

let jwtToken 		= '7lse^#%^*YRN4nItrn8ap9c2kZ';
let admin_jwtToken	= 'VCdTsdhk)&*(&*It7NMBefmsd9rnapc2kZ';

key 				= CryptoJS.enc.Base64.parse(key);
iv  				= CryptoJS.enc.Base64.parse(iv);

const s3 			= new aws.S3(config.awsOptions);

module.exports = {
	google_tfa : function(url){
		return 'https://chart.googleapis.com/chart?chs=168x168&chld=M|0&cht=qr&chl='+url+'';
	},
	encrypt : function(txt){
		return CryptoJS.AES.encrypt(txt, key,{iv:iv}).toString();
	},
	decrypt : function(txt){
		if(txt != undefined){
			var bytes  = CryptoJS.AES.decrypt(txt.toString(), key, {iv:iv});
			return bytes.toString(CryptoJS.enc.Utf8);	
		}
	},
	Pass : function(txt, cb){
		bcrypt.hash(txt, saltRounds, function(err, hash) {			
			cb(hash);
		});
	},
	Passcmp : function(txt, key, cb){
		bcrypt.compare(txt, key, function(err, res) {
			cb(res);
		});
	},
	MulPassCmp : function(txt, passArr, cb){
		var i = 1; var len = passArr.length;		
		if(len > 0){
			passArr.forEach((val) => {
				bcrypt.compare(txt, val, function(err, res) {
					if(res) {
						cb(1); return;
					} else {          
						if(i == len) {cb(0); }
					}
					i = i + 1;
				});				
			});			
		}else {
			cb(0);
		}
	},
	generateRandomNumber : function(randomArr, cb){
		var i = 1; var len = randomArr.length;
		// var ran = common.genRandomNumber(8);	
		if(len > 0){
			randomArr.forEach((val) => {
				if(val != ran){
					cb(ran); return;
				} 
				i = i + 1;		
			});
		}else {
			cb(ran);
		}
	},
	siteUrl: function(req) {
		return req.headers.origin+"/";
	},
	frontUrl: function(req) {
		console.log(req.hostname, 'hostname');
		if (req.hostname == 'localhost') {
			return 'http://'+req.hostname+":4200/";
		}
		else {
			return '';
		}
	},
	siteSettings: function(key) {
		sitesetting.findOne({}, (err, result) => {
			
			if(!err) {return result.key;}
			else {return null;}
		});
	},
	userUrl: function(req) {
		return req.headers.origin+"/";
	},
	adminUrl: function(req) {
		return req.headers.origin+"/#/";
	},
	firstMail: function(email) {
		return email.substr(0, 5);
	},
	secondMail: function(email) {
		return email.substr(5);
	},
	encryptemail : function(txt){
		let email = txt.substr(0, 5)
		return CryptoJS.AES.encrypt(email, key,{iv:iv}).toString();
	},
	generateRandom: function(string_length) {
		let random_string = '';
		let random_ascii;
		let ascii_low = 65;
		let ascii_high = 90
		for(let i = 0; i < string_length; i++) {
			random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
			random_string += String.fromCharCode(random_ascii)
		}
		return random_string
	},
	tokenMiddleware: function(request, res, next) {

		if (!request.headers.authorization) {
			return res.status(401).send('unauthorized')
		}
		let token = request.headers.authorization.split(' ')[1];

		if (token === 'null') {
			return res.status(401).send('unauthorized')
		} else {
			let payload = jwt.verify(token, jwtToken)

			if (!payload) {
				return res.status(401).send('unauthorized')
			}
			request.userId = payload.subject;


			next();
		}
	},
	userMiddleware: function(request, res, next) {

		if (!request.headers.authorization) {
			next();
		} else {
			let token = request.headers.authorization.split(' ')[1];
			if (token === 'null') {
				next();
			} else {
				let payload = jwt.verify(token, jwtToken)
				if (!payload) {
					next();
				}
				request.userId = payload.subject;
				next();
			}
		}
	},
	originMiddlewarenew: async function(req, res, next) {
		try{
			let failed = false;
			const corsWhitelist = originCheck;

			
				if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
					req.device = "Web";
					next();
				} else {
					var agent           = req.headers['user-agent'];
					var agent_array     = agent.split("Android");
					if(agent_array.length > 1) {
						req.device = "Android";
						next();
					} else {
						var agent_array_iOS     = agent.split("iOS");
						if(agent_array_iOS.length > 1) {
							req.device = "iOS";
							next();
						} else {
							return res.status(401).send('unauthorized')
						}
					}
				}

		}catch(e){
		}
	},
	originMiddleware: async function(req, res, next) {
		try{
			let failed = false;
			const corsWhitelist = originCheck;
			let ipBlockDetails = await ipblock.findOne({user_ip:ip.address(),status:0}).lean();
			if(ipBlockDetails && (req.headers.origin != 'https://adnfhhgeb.ingressdefi.com')){
				return res.json({status:false, msg:'Your Ip is blocked'})
			}else{
				if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
					req.device = "Web";
					next();
				} else {
					var agent           = req.headers['user-agent'];
					var agent_array     = agent.split("Android");
					if(agent_array.length > 1) {
						req.device = "Android";
						next();
					} else {
						var agent_array_iOS     = agent.split("iOS");
						if(agent_array_iOS.length > 1) {
							req.device = "iOS";
							next();
						} else {
							return res.status(401).send('unauthorized')
						}
					}
				}
			} 
		}catch(e){
		}
	},
	createPayload: function(key) {
		let payload = { subject: key }
		let token = jwt.sign(payload, jwtToken)
		return token;
	},
	admin_createPayload: function(key) {
		let payload = { subject: key }
		let token = jwt.sign(payload, admin_jwtToken)
		return token;
	},
	randomString: function(length, chars) {
		var result = '';
		for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
			return result;
	},
	getQrUrl: function(url) {
		return 'https://chart.googleapis.com/chart?chs=168x168&chld=M|0&cht=qr&chl='+url+'';
	},
	generateTFASecret: function(mail){  
		var qrName = `IngressDefi (${mail})`;
		return  speakeasy.generateSecret({
			length: 10,
			name: qrName
		});
	},
	set_tokenvalue: function(usertoken,admintoken) {
		jwtToken1       = usertoken;
		admin_jwtToken  = admintoken;
	},
	socket_emit: function(method) {
		socket.sockets.emit(method, "ok");
	},
	digitset: function(n,decimal) {
		n = parseFloat(n);
		n = n.toString();
		if(n.indexOf(".") == -1){

			n = (+n).toFixed(decimal);
			return n
		} else {

			n = n.slice(0, (n.indexOf(".")) + (decimal + 1));
			n = (+n).toFixed(decimal);
			return n
		}
	},
	admintokenMiddleware: function(request, res, next) {
		if(!request.headers.authorization) {
			return res.status(401).send('unauthorized')
		}
		let token = request.headers.authorization.split(' ')[1];
		if(token == 'null') {
			return res.status(401).send('unauthorized')
		}else{
			var ipaddress   = require("../uZmln/addipAnshd.json");
			let ip          = request.header('x-forwarded-for') || request.connection.remoteAddress;
			// console.log(ip, 'ip');
			if(ip != ''){
				ip = ip.split(',')[0];
			}
			ip              = ip.replace('::ffff:', ''); 
			if(originCheck.indexOf(ip.trim()) != -1){
				verifyPayload(request, res, token, next);
			}else if(ip =="::1"){
				verifyPayload(request, res, token, next);
			}else if(ipaddress.indexOf(ip) !== -1){
				verifyPayload(request, res, token, next);
			}else{
				verifyPayload(request, res, token, next);
			}
		}
	}, 
	ulink: function(value) {
		var adminorigin=""
		return adminorigin
	},
	urlkyc: function(value) {
		var kycorigin=""
		return kycorigin
	},
	urllink: function(value) {
		var origin=""
		return origin
	},
	singleUploadcheck: function (req,callback) { 
		
	},
	imgUploader: function(data, callback) {

		if(data != null && data != undefined && data.path != '') {
			const s3bucket = new aws.S3(config.awsOptions);
	    	var digital_endpoint = mailhelper.newdecrypt(config.awsOptions.endponit);
			var digital_key = mailhelper.newdecrypt(config.awsOptions.key);
			var digital_secret_key =  mailhelper.newdecrypt(config.awsOptions.skey);
			var digital_bucket = mailhelper.newdecrypt(config.awsOptions.bucket);


			const s3 = new aws.S3({
    			endpoint: digital_endpoint,    useAccelerateEndpoint: false,    credentials: new aws.Credentials(digital_key, digital_secret_key, null)
			});

			const fileStream = fs.createReadStream(data.path); 
			       fs.readFile(data.path, (err, data) => {
	                   if (err) {      
	                   	var eres = {status:false,"Location":""};      
	                      callback(eres)                    
	                     };        
				const params = {                              
						Bucket: digital_bucket,          
						Body: fileStream,             
						ACL: 'public-read',          
						Key:  moment().format("X") + '_' + data.filename,
						};        
			    s3.upload(params, function (s3Err, rdata) {  
			    		console.log("rdatardata",rdata);
			    		console.log("s3Errs3Errs3Err",s3Err);
			                callback(rdata)       
			              });      
			       });    
		} else {
			var eres = {status:false,"Location":""};      
	                      callback(eres)                    
		}
	
	},
}

function verifyPayload(request, res, token, next){
	try{
		let payload = jwt.verify(token, admin_jwtToken)
		if (!payload) {
			return res.status(401).send('unauthorized')
		}
		request.userId = payload.subject;
		next();
	}catch(e){
		next();
	}
}