var nodemailer = require('nodemailer');
var mongoose  = require('mongoose'); 
let smtpDetails = require('../uZmln/mkilail');

var CryptoJS 		= require("crypto-js");
let newpwd = "Ingressdefinft";
const crypto = require('crypto');

var key 			= "jobNFMGHElf3qw54yuiUTYT#$bjkuysdf";
var iv  			= "mlrseKHJ&TRBMKJ*(Y#@$mkbrjtjkba";

key 				= CryptoJS.enc.Base64.parse(key);
iv  				= CryptoJS.enc.Base64.parse(iv);


	var hostname = smtpDetails.smtpauth.hostname;
	var port = smtpDetails.smtpauth.port;
	var username = smtpDetails.smtpauth.username;
	var password = smtpDetails.smtpauth.password;
	var from_value = smtpDetails.smtpauth.from_value;

	var transporter = nodemailer.createTransport({
	host: hostname,
	port: port,
	secure: false,
	auth: {
		user: username,
		pass: password
	}
});

module.exports = {


	

	sendMail : function(type,values,callback){
		let mailOptions = {
			from: from_value,	      
		};

		if(type=='newsletter'){
			mailOptions["bcc"]=values.to;
		}
		else{
			mailOptions["to"]=values.to;
		}



		switch(type){
			case 'register':

			mailOptions['subject'] = 'Ingress - Account confirmation mail';
			mailOptions['html'] = values.html;
			break; 
			case 'Notification Alert':

			mailOptions['subject'] = 'Ingress - Notification Alert';
			mailOptions['html'] = values.html;
			break;

			case 'Cancel Deposit':

			mailOptions['subject'] = 'Ingress - Cancel Deposit Request';
			mailOptions['html'] = values.html;
			break;

			case 'Cancel withdraw':

			mailOptions['subject'] = 'Ingress - Cancel  withdraw Request';
			mailOptions['html'] = values.html;
			break;
			case 'User OTP':

			mailOptions['subject'] = 'Ingress - OTP Alert';
			mailOptions['html'] = values.html;
			break;

			case 'KYC Admin approve':

			mailOptions['subject'] = 'Ingress - KYC Admin Approve';
			mailOptions['html'] = values.html;
			break; 

			case 'KYC Admin reject':

			mailOptions['subject'] = 'Ingress - KYC Admin Reject';
			mailOptions['html'] = values.html;
			break; 

			case 'KYC Approve':

			mailOptions['subject'] = 'Ingress - KYC Approve';
			mailOptions['html'] = values.html;
			break;
			case 'Kyc Reject':

			mailOptions['subject'] = 'Ingress - Kyc Reject';
			mailOptions['html'] = values.html;
			break;

			case 'forgetPwd':
			mailOptions['subject'] = 'Ingress - Reset Pin request';
			mailOptions['html'] = values.html;
			break;
			case 'depositApprove':
			mailOptions['subject'] = 'Ingress - Deposit Approve';
			mailOptions['html'] = values.html;
			break;
			case 'withdrawApprove':
			mailOptions['subject'] = 'Ingress - Withdraw Approve';
			mailOptions['html'] = values.html;
			break;
			case 'Deposit Cancel':
			mailOptions['subject'] = 'Ingress - Deposit Cancelled';
			mailOptions['html'] = values.html;
			break;

			case 'Deposit Approve':
			mailOptions['subject'] = 'Ingress - Deposit Approved';
			mailOptions['html'] = values.html;
			break;

			case 'crypto Approve':
			mailOptions['subject'] = 'Ingress - Crypto withdraw Approved';
			mailOptions['html'] = values.html;
			break;

			case 'crypto reject':
			mailOptions['subject'] = 'Ingress - Crypto withdraw reject';
			mailOptions['html'] = values.html;
			break;

			case 'contactusfunction':
			mailOptions['subject'] = 'Ingress - Contact us';
			mailOptions['text'] = values.text;
			mailOptions['html'] = values.html;
			break;

			case 'Deposit Admin':
			mailOptions['subject'] = 'Ingress - Deposit Request';
			mailOptions['html'] = values.html;
			break;  
			case 'UserDeposit Request':
			mailOptions['subject'] = 'Ingress - User Requesting the Deposit';
			mailOptions['html'] = values.html;
			break;
			case 'withdraw Admin':
			mailOptions['subject'] = 'Ingress - User Requesting the Withdraw';
			mailOptions['html'] = values.html;
			break;

			case 'UserWithdraw Request':
			mailOptions['subject'] = 'Ingress - Withdraw Request';
			mailOptions['html'] = values.html;
			break;

			case 'withdrawCancel':
			mailOptions['subject'] = 'Ingress - Withdraw cancelled';
			mailOptions['html'] = values.html;
			break;
			case 'withdrawPending':
			mailOptions['subject'] = 'Ingress - Withdraw pending';
			mailOptions['html'] = values.html;
			break;
			case 'withdrawComplete':
			mailOptions['subject'] = 'Ingress - Withdraw completed';
			mailOptions['html'] = values.html;
			break;

			case 'forgetPwdAdmin':
			mailOptions['subject'] = 'Ingress - Reset password request';
			mailOptions['html'] = values.html;
			break;


			case 'newlogin':
			mailOptions['subject'] = 'Ingress - New Device Login';
			mailOptions['html'] = values.html;
			break;


			case 'changePwd':
			mailOptions['subject'] = 'Ingress - Change password';
			mailOptions['html'] = values.html;
			break;

			case 'profileupdate':
			mailOptions['subject'] = 'Ingress - Profile Update';
			mailOptions['html'] = values.html;
			break;


			case 'newsletter':
			mailOptions['subject'] = 'Ingress - News/Announcement';
			mailOptions['html'] = values.html;
			break;
			case 'account deactivate':
			mailOptions['subject'] = 'Ingress - Account Deactivate';
			mailOptions['html'] = values.html;
			break;

			case 'Admin OTP':
			mailOptions['subject'] = 'Ingress - Admin OTP';
			mailOptions['html'] = values.html;
			break;


			case 'loginalert':
			mailOptions['subject'] = 'Ingress - Login OTP';
			mailOptions['html'] = values.html;
			break;

			case 'successmail':
			mailOptions['subject'] = 'Ingress - Login Alert';
			mailOptions['html'] = values.html;
			break;

			case 'support Admin':
			mailOptions['subject'] = 'Ingress - Support Ticket';
			mailOptions['html'] = values.html;
			break;

			case 'oldemailidchange':
			mailOptions['subject'] = 'Ingress - Old Emailid Change';
			mailOptions['html'] = values.html;
			break;
			case 'emailidchange':
			mailOptions['subject'] = 'Ingress - Emailid Change';
			mailOptions['html'] = values.html;
			break;
			case 'inviteuser':
			mailOptions['subject'] = 'Ingress - Invite User';
			mailOptions['html'] = values.html;
			break;

			case 'subadmin':
			mailOptions['subject'] = 'Ingress - subadmin ';
			mailOptions['html'] = values.html;
			break;

			case 'forgetPatternAdmin':
			mailOptions['subject'] = 'Ingress - Forgot your Pattern? ';
			mailOptions['html'] = values.html;
			break;





			default:
			break;
		}

		transporter.sendMail(mailOptions, function(error, info){
			if (error) {
			} else {
				mailhistory.findOneAndUpdate({ "_id": mailsendid },
					{ "$set": {"status": 1}},{multi: true}).
				exec(function(err, resUpdate){
				});
			}
		});
		callback(true);
	}, 
	decrypt : function(txt){
		if(txt != undefined){
			var bytes  = CryptoJS.AES.decrypt(txt.toString(), key, {iv:iv});
			return bytes.toString(CryptoJS.enc.Utf8);	
		}
	},
	newencrypt :function(txt){
		var mykey = crypto.createCipher('aes-128-cbc', newpwd);
		var mystr = mykey.update(txt, 'utf8', 'hex')
		mystr += mykey.final('hex');
		return mystr;
	},
	newdecrypt :function(txt){
			var mykey1 = crypto.createDecipher('aes-128-cbc',newpwd);
			var mystr1 = mykey1.update(txt, 'hex', 'utf8')
			mystr1 += mykey1.final('utf8');
			return mystr1;		
	},

};