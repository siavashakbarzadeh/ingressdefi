var express 	    = require('express');
var router 		    = express.Router();
var mongoose      = require('mongoose');
var multer        = require('multer');
var async         = require('async');
const fs 		      = require('fs')
const path 		    = require('path');
const moment 	    = require('moment');
var speakeasy 	  = require('speakeasy');
var useragent 	  = require('useragent');
var qrcode    	  = require('qrcode');
var validator     = require('validator');

/*helpers*/
let common        = require('../GVyc/common');
var mail          = require('../GVyc/mailhelper');

var activity     = require('../model/activity');
var users       = require('../model/sresu');
var items       = mongoose.model('items');
var matched      = mongoose.model('matched');

/*models*/
var admin         = require('../model/admin');
var sitesettings  = require('../model/gnittesetis');
var emailtemplate = require('../model/emailtemplate');
var loginAttempts = require('../model/loginAttempts');
var adminloghis   = require('../model/adminloghis');
var ipblock       = require('../model/kcolbpi');
var ipwhite       = require('../model/etihwpi');
var category      = require('../model/category');
var faq           = require('../model/faq');
var cms           = require('../model/cms');
var support       = require('../model/support');
var dummy         = require('../model/dummy');
var subscribe     = require('../model/rebircsbus');
var newsletter    = require('../model/rettelswen');
var blogs         = require('../model/citats');
var currency      = mongoose.model('currency');
var exchange      = mongoose.model('exchange');
var pairs         = mongoose.model('pairs');
var deposit       = mongoose.model('deposit');
var referal       = mongoose.model('referal');
var features      = mongoose.model('features');
var fees          = mongoose.model('fees');
var network       = mongoose.model('network');

/*Api response*/
let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};

let response = {};

let updatedDate = ()=>{
  return new Date();
};

let storage     = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
let upload      = multer({ storage: storage });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Admin Backend working..' });
});

/*admin login*/
router.post('/admin_login', (req,res)=>{
  try{
    var values      = req.body;
   
    var encryptpass = common.encrypt(values.password);
    console.log("111111111111",encryptpass);

    let encryptedemail = common.encrypt(values.emailid);
     console.log("22222",encryptedemail);
    let pattern = values.patternlock;
    var random = 123456;
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    admin.find({$and:[{"auth":encryptedemail},{"key":encryptpass}, {"admin_pattern":pattern}]}).exec(function(err,resdata){
      if (err){ return res.status(500).send(err); }
        if(resdata.length>0){
          if(resdata[0].role=="admin"){
            if(resdata[0].tfastatus=="Active"){
              datas = {
               status  : true,
               tfa     : true,
               success : "You are logging in. Please Wait"
             };
             res.json(datas);
           }else{
            if(resdata[0].otp_options==true){
              admin.findOneAndUpdate({"_id":resdata[0]._id},{"$set":{"random_code":random}},{new: true}).exec(function(errs,rescreate){
                sitesettings.find().exec(function(err_site,data_site){
                  var logo = data_site[0].site_logo;
                  var fb=data_site[0].facebook;
                  var insta=data_site[0].instagram;
                  var twitter=data_site[0].twitter;
                  var message = " Welcome to my home page";
                  emailtemplate.find({ "title": 'Admin OTP' }).exec(function(etemperr,etempdata){
                    var etempdataDynamic = etempdata[0].mailcontent.replace(/###TO###/g,values.emailid).replace(/###SUBJECT###/g,rescreate.random_code).replace(/###OTP###/g,rescreate.random_code).replace(/###LOGO###/g, logo).replace(/###twitter###/g,twitter).replace(/###insta###/g,insta).replace(/###fb###/g,fb);
                    if(resdata[0].admin_pattern == req.body.patternlock){
                     datas = {
                       status  : true,
                       otp_options    : resdata[0].otp_options,
                       name    : resdata[0].admin_name,
                       role    : resdata[0].role,
                       random_code:"",
                       success : "You are logging in. Please Wait"
                     };
                     removeip(ip);
                     res.json(datas);
                     mail.sendMail('Admin OTP',{to:values.emailid, subject:'Re: '+random,text:message,html:etempdataDynamic},function(resp){});
                   } else {
                    attempts(req,res);
                  }

                });
                });
              });
            } else if(resdata[0].otp_options==false){
             let origin = common.admin_createPayload(resdata[0]._id);
             if(resdata[0].admin_pattern == req.body.patternlock){
               datas = {
                 status  : true,
                               // data    : resdata[0],
                               otp_options    : resdata[0].otp_options,
                               name    : resdata[0].admin_name,
                               role    : resdata[0].role,
                               session:origin,
                               otp_options:false,
                               success : "You are logging in. Please Wait"
                             };
                             removeip(ip);
                             res.json(datas);
                           } else {
                            attempts(req,res);
                          }
                        }
                      }
                    } else if(resdata[0].role=="subadmin") {
                      if(resdata[0].status=="Active"){
                       if(resdata[0].otp_options==true){
                        admin.findOneAndUpdate({"_id":resdata[0]._id},{"$set":{"random_code":random}},{new: true}).exec(function(errs,rescreate){
            // let origin = common.createPayload(resdata[0]._id);
            sitesettings.find().select('site_logo').exec(function(err_site,data_site){
              var logo = data_site[0].site_logo;
              var fb=data_site[0].facebook;
              var insta=data_site[0].instagram;
              var twitter=data_site[0].twitter;
              var message = " Welcome to my home page";
              emailtemplate.find({ "title": 'Admin OTP' }).exec(function(etemperr,etempdata){
                var etempdataDynamic = etempdata[0].mailcontent.replace(/###TO###/g,values.emailid).replace(/###SUBJECT###/g,rescreate.random_code).replace(/###OTP###/g,rescreate.random_code).replace(/###LOGO###/g, logo).replace(/###twitter###/g,twitter).replace(/###insta###/g,insta).replace(/###fb###/g,fb);
                if(resdata[0].admin_pattern == req.body.patternlock){
                 datas = {
                   status  : true,
                         // data    : resdata[0],
                         otp_options    : resdata[0].otp_options,
                         // session : origin,
                         name    : resdata[0].admin_name,
                         role    : resdata[0].role,
                         random_code:rescreate.random_code,
                         success : "You are logging in. Please Wait"
                       };
                       removeip(ip);
                       res.json(datas);
                       mail.sendMail('Admin OTP',{to:values.emailid, subject:'Re: '+random,text:message,html:etempdataDynamic},function(resp){});
                     }
                     else{
                      attempts(req,res);
                    }

                  });
            });
          });
                      }
                      else if(resdata[0].otp_options==false){
                        let origin = common.admin_createPayload(resdata[0]._id);
                        if(resdata[0].admin_pattern == req.body.patternlock){
                         datas = {
                           status  : true,
                         // data    : resdata[0],
                         otp_options    : resdata[0].otp_options,
                         name    : resdata[0].admin_name,
                         role    : resdata[0].role,
                         session:origin,
                         otp_options:false,
                         success : "You are logging in. Please Wait"
                       };
                       removeip(ip);
                       res.json(datas);
                     }
                     else{
                      attempts(req,res);
                    }
                  } 
                }
                else{
                  attempts(req,res);
                }

              }
            } else {
              attempts(req,res);
            }
          })
} catch(e) {
}
});

router.get('/dashboard', (req,res)=>{
  try{
    async.parallel({
      blockCount:function(cb) {
        ipblock.find({status:1}).countDocuments().exec(cb);
      },
      swapCount:function(cb) {
        exchange.find({}).countDocuments().exec(cb);
      },
      pairsCount:function(cb) {
        pairs.find({}).countDocuments().exec(cb);
      },
      currencyCount:function(cb) {
        currency.find({}).countDocuments().exec(cb);
      },
      depositCount:function(cb) {
        deposit.find({}).countDocuments().exec(cb);
      },
      subscribeCount:function(cb) {
        subscribe.find({}).countDocuments().exec(cb);
      },     
      referalCount:function(cb) {
        referal.find({}).countDocuments().exec(cb);
      },
    },function(err,results){
      if (err) return res.status(500).send(err);
      response.data = [];
      response.status = true;
      response.blockCount = results.blockCount;
      response.swapCount = results.swapCount;
      response.pairsCount = results.pairsCount;
      response.currencyCount = results.currencyCount;
      response.depositCount = results.depositCount;
      response.subscribeCount = results.subscribeCount;
      response.referalCount = results.referalCount;
      response.message = "";
      res.json(response);
    })
  } catch(e) {
  }
});

/*admin forgot password*/
router.post('/forgetPwdAdmin',  common.originMiddleware,(req, res) => {
  try{
    var datas = {},
    values = req.body.emailid;
    var dtime=req.body.datetime;
    let encryptedemail = common.encrypt(req.body.emailid);
    admin.find({"auth":encryptedemail}).exec(function(err,resData){
     if(resData.length >0) {
      if(resData[0].role=="admin"){
        emailtemplate.find({ "title": 'forget password admin' }).exec(function(etemperr,etempdata){
          var len = etempdata.length;           
          sitesettings.find().select('site_logo').exec(function(err_site,data_site){
            var logo = data_site[0].site_logo;
            var fb=data_site[0].facebook;
            var insta=data_site[0].instagram;
            var twitter=data_site[0].twitter;
            var current_date = (new Date()).valueOf().toString();

            var encyptid=common.encrypt(values.toString());
            var clientHost = common.ulink();
            link=clientHost+'#'+'/'+"reset-new?dfd="+encyptid+'&ee='+dtime;

                // var etempdataDynamic = etempdata[0].mailcontent.replace(/###LINK###/g, link).replace(/###LOGO###/g, logo).replace(/###twitter###/g,twitter).replace(/###insta###/g,insta).replace(/###fb###/g,fb);
                /*mail.sendMail('forgetPwdAdmin',{to:values,id:resData[0]._id,html:etempdataDynamic},function(mailRes){

                })*/
                res.json({ status : true , success    : "success",});
              });
        });
      }
      else{
       emailtemplate.find({ "title": 'forget password admin' }).exec(function(etemperr,etempdata){
        var len = etempdata.length;
        sitesettings.find().select('site_logo').exec(function(err_site,data_site){
          var logo = data_site[0].site_logo;
          var fb=data_site[0].facebook;
          var insta=data_site[0].instagram;
          var twitter=data_site[0].twitter;
          var current_date = (new Date()).valueOf().toString();
          var encyptid=common.encrypt(values.toString());
          var clientHost = common.ulink();
          link=clientHost+'#'+'/'+"reset-new?dfd="+encyptid+'&ee='+dtime;

                // var etempdataDynamic = etempdata[0].mailcontent.replace(/###LINK###/g, link).replace(/###LOGO###/g, logo).replace(/###twitter###/g,twitter).replace(/###insta###/g,insta).replace(/###fb###/g,fb);
                /*mail.sendMail('forgetPwdAdmin',{to:values,id:resData[0]._id,html:etempdataDynamic},function(mailRes){
               
                })*/
                res.json({ status : true , success    : "success",});
              });
      });
     }
   }
   else{
    res.json({
      status:false,
      message:'Email id does not belong to our website'
    })
  }
});
  }
  catch(e){
  }
});

/*admin forgot pattern*/
router.post('/forgetPattern',  common.originMiddleware,(req, res) => {
  try{
    var datas = {},
    values = req.body.emailid;
    var dtime=req.body.datetime;
    let encryptedemail = common.encrypt(req.body.emailid);
    admin.find({"auth":encryptedemail}).exec(function(err,resData){
     if(resData.length >0) {
       if(resData[0].role=="admin"){
        emailtemplate.find({ "title": 'forget pattern admin' }).exec(function(etemperr,etempdata){
          var len = etempdata.length;
          sitesettings.find().select('site_logo').exec(function(err_site,data_site){
            var logo = data_site[0].site_logo;
            var fb=data_site[0].facebook;
            var insta=data_site[0].instagram;
            var twitter=data_site[0].twitter;
            var current_date = (new Date()).valueOf().toString();
            var encyptid=common.encrypt(values.toString());
            var clientHost = common.ulink();
            link=resData[0].admin_pattern;
                
                res.json({ status : true , success    : "success",});
                
              });
        });
      }
      else{
       emailtemplate.find({ "title": 'forget pattern admin' }).exec(function(etemperr,etempdata){
        var len = etempdata.length;
        sitesettings.find().select('site_logo').exec(function(err_site,data_site){
          var logo = data_site[0].site_logo;
          var fb=data_site[0].facebook;
          var insta=data_site[0].instagram;
          var twitter=data_site[0].twitter;
          var current_date = (new Date()).valueOf().toString();
          var encyptid=common.encrypt(values.toString());
          var clientHost = common.ulink();
          link=resData.admin_pattern;

              
                res.json({ status : true , success    : "success",});            
                
              });
      });
     }
   }
   else{
    res.json({
      status:false,
      message:'Email id does not belong to our website'
    })
  }
});
  }
  catch(e){
  }
});


/*admin tfa*/
router.post('/admintfa', common.admintokenMiddleware, function(req, res, next) {
  data = req.body;
  userId = req.userId;
  query = { _id: userId }
  admin.findOne(query, (err, result) => {
    if (!err && result != null) {
      if (result.tfaurl == "" || result.tfaurl == undefined) {
        secret = common.generateTFASecret(common.decrypt(result.auth));
        qrUrl = common.getQrUrl(secret.otpauth_url);
        update = { secret: secret.base32, tfaurl: qrUrl, tfastatus: "Dective" };
        admin.updateOne(query, update, (er, ress) => {
          if (er)  {
            let response = {
              status: false,
              message: 'Something went wrong. Try again', 
            };
            return res.json(response);
          }
        })
      }
      if (data.tfastatus == 'Active' || data.tfastatus == 'Deactive') {       
        if (data.tfastatus == 'Active' && result.tfastatus == 'Deactive') {
          var verified = speakeasy.totp.verify({
            secret  : (result.secret).trim(),
            encoding: 'base32',
            token   : (data.tfa_code).trim(),
            window: 4
          });
          if (verified) {
            var type = null;
            type = 'Enabled';
            let update = { tfastatus: 'Active' };
            admin.updateOne(query, update, (err, ress) => {
              if (!err) {
                let response = {
                  status : true,
                  message : 'TFA '+type,
                }
                return res.json(response);
              }
              else {
                let response = {
                  status : false,
                  message : 'Something went wrong, Please try again',
                }
                return res.json(response);
              }
            });
          }
          else {
            let response = {
              status : false,
              message : 'Invalid TFA Code, Please try again',
            }
            res.json(response);
          }
        }
        else 
        {
          type = 'Disabled';
          secret = common.generateTFASecret(common.decrypt(result.auth));
          qrUrl = common.getQrUrl(secret.otpauth_url);
          let update = { tfastatus: 'Deactive', secret: secret.base32, tfaurl: qrUrl };
          admin.updateOne(query, update, (err, ress) => {
            if (!err) {
              let response = {
                status : true,
                message : 'TFA '+type,
              }
              return res.json(response);
            }
            else {
              let response = {
                status : false,
                message : 'Something went wrong, Please try again',
              }
              return res.json(response);
            }
          });
        }
      }
      else {
        let response = {
          status : false,
          message : 'Invalid Request, Please try again.',
        }
        return res.json(response);
      }
    }
    else {

      let response = {
        status : false,
        message : 'Invalid Request.',
      }
      return res.json(response);
    }
  });
}); 

/*tfa validate*/
router.post("/tfavalidate", (req,res)=>{
  let encryptedemail = common.encrypt(req.body.emailid)
  admin.findOne({"auth":encryptedemail}).exec(function(err,resdata){
    if(req.body.otp){
      var tfakey    = resdata.secret;
      var verified  = speakeasy.totp.verify({
        secret  : tfakey.trim(),
        encoding: 'base32',
        token   : req.body.otp,
        window: 4,
      });
      var d         = new Date();
      var n         = d.getSeconds();
      if(verified == true){
        let origin     = common.admin_createPayload(resdata._id);
        var date_for   = new Date();
        let ip      = req.header('x-forwarded-for') || req.connection.remoteAddress;
        ip        = ip.replace('::ffff:', '');
        var arr=ip.split(':'); 
        var obj={
          "browser":"",
          "ip_address":ip,
          "user_id":resdata._id,
        }
        adminloghis.create(obj,function(err,resdata){

        });
        res.json({status: true, data:{"role":"admin"},session:origin,date:date_for});
      } else {
        res.json({ status: false, error: 'Invalid TFA code .' });
      }
    } else { 
      res.json({status: false, error:"Please enter TFA code. "});
    }
  })
});

/*admin change password*/
router.post('/changepassword',common.admintokenMiddleware,(req,res)=>{
  try{
    admin.findOne({"_id":req.userId}).exec(function(err,resdata){
      var cupass=common.encrypt(req.body.currentpwd)
      var newencrypt=common.encrypt(req.body.newpwd)
      var confirmencrypt=common.encrypt(req.body.confirmpwd)
      if(resdata.key!=cupass){
        res.json({"status": false,error:"You have entered the wrong current password"});
      }
      else{
        admin.findOneAndUpdate({"_id":req.userId},{"$set":{"key":newencrypt}},{new:true}).exec(function(errup,resdataup){
          if(err) {
            res.status(500).send(err);
          } else {
            common.socket_emit("emit_achangepassword");
            apiresponse.data    = [];
            apiresponse.data    = resdataup;
            apiresponse.message = "Password Changed Successfully";
            res.json({status:true,data:apiresponse});
          }
        });
      }
    }); 
  } catch(e) {
  }
});



router.post('/tfaupdate', common.admintokenMiddleware, (req, res) => {
  try {
    let info = req.body;
    console.log("info  ----->",info);
    let status;
    admin.findOne({"_id": req.userId},{secret:1,admin_emailid:1,tfaurl:1,tfastatus:1}).exec(function(err,userRes){
      var verified = speakeasy.totp.verify({
        secret  : info.secret,
        encoding: 'base32',
        token   : info.tfacode
      });
      let userValidation = validator.isMongoId(req.userId);
      console.log("userValidation   ---->",userValidation);
      console.log("verified   ---->",verified);
      if(verified && userValidation) {      
        if(userRes.tfastatus == "Deactive"){
          updatedRule = { tfastatus: "Active", secret : info.secret, tfaurl : info.tfaurl}
          status = 'enabled';
        } else {
       
          updatedRule = { tfastatus: "Deactive", secret : "", tfaurl : ""};
          status = 'disabled';
        }
        admin.updateOne({ "_id": req.userId },
          { "$set": updatedRule }).exec(function(err, resUpdate){
            if(err) {
              res.status(500).send("Something went wrong. Please try again");
            }
            else {
              res.json({
                status : true,            
                result : updatedRule,
                msg   : "Updated Successfully"                        
              });
            }
          });          
        }
        else{
          res.json({
            status: false,
            msg   : "Invalid 2FA Code"
          });
        }
      });
  }
  catch(e) {
    res.status(401).send('unauthorized')
  }
});

router.get('/checktfa', (req,res) => {
  admin.findOne({},{secret:1,admin_emailid:1,tfaurl:1,tfastatus:1}).exec(function(error,resData){
    if (error) {
      return res.json({status : false});
    }
    if(resData){
      if(resData.tfastatus == "Deactive"){
        var qrName = `IngressDefi (${resData.admin_emailid})`;
        var secret = speakeasy.generateSecret({
          length: 10,
          name: qrName
        });
        var url = common.getQrUrl(secret.otpauth_url);              
        updatedRule = { tfastatus: "Active", secret : secret.base32, tfaurl : url};
        admin.updateOne({ "_id": resData._id },{ "$set": updatedRule }).exec(function(err, resUpdate){
          admin.findOne({},{secret:1,admin_emailid:1,tfaurl:1,tfastatus:1}).exec(function(error,resData){
            res.json({status : true, data : resData });
          });
        })
      }else{
        res.json({status : true, data : resData });
      }
    } 
  })
});

/*add block ip*/
router.post('/addIpToBlock', common.admintokenMiddleware, async(req, res)=>{
  try{
    let reqData = req.body;
    let ipExists = await ipblock.findOne({user_ip:reqData.user_ip}).lean();
    if(!ipExists){
      let addIp = await ipblock.create(reqData);
      res.json({status:true, msg:'Created Successfully'});
    }else{
      res.json({status:false, msg:'Ip already Exists'});
    }
  }catch(e){
  }
})


/*admin login history*/
router.post('/adminloginhistory',common.admintokenMiddleware,  (req, res) => {
  try{
    var skip    = req.body.page.pageNumber *  req.body.page.size;
    var limit   = req.body.page.size;
    let prop1   = req.body.sorting.prop;

    var dir     = req.body.sorting['dir'];
    var srt     = {}
    srt[prop1]  = dir == 'desc' ? -1 : 1;

    var cnt;
    var search  = req.body.search;
    if(req.body.search != ""){
      cnt = {$or:[{'username': { $regex: '.*' + search + '.*',$options: 'i' }},{'emailid': { $regex: '.*' + search + '.*',$options: 'i' }},{'browser': { $regex: '.*' + search + '.*',$options: 'i' }}]};
    } else {
      cnt = {};
    }
    async.parallel({
      currencyTotalCount:function(cb) {
        adminloghis.aggregate([
        {
          $lookup: {
            from        : "admin",
            localField  : "user_id",
            foreignField: "_id",
            as          : "username"
          },

        },
        {
          $project:{
            "username":"$username.admin_name",
            "emailid":"$username.auth",
            "ip_address":"$ip_address",
            "createddate":"$createddate"

            
          }
        },
        { $match:cnt},
        ]).exec(cb)
      },
      currencyData:function(cb) {
        adminloghis.aggregate([
        {
          $lookup: {
            from        : "admin",
            localField  : "user_id",
            foreignField: "_id",
            as          : "username"
          },
        },
        {
          $project:{
            "username":"$username.admin_name",
            "emailid":"$username.auth",
            "ip_address":"$ip_address",
            "createddate":"$createddate"
          }
        },
        { $match:cnt},
        { "$sort": srt },
        { "$skip": skip },
        { "$limit": limit },
        ]).exec(cb)
      },
    },function(err,results){
      if (err) return res.status(500).send(err);
      apiresponse.data = [];
      apiresponse.status = true;
      apiresponse.data = results.currencyData;
      apiresponse.currencycount = results.currencyTotalCount.length;
      apiresponse.message = "";
      for(let i=0; i<apiresponse.data.length; i++){
        apiresponse.data[i].emailid[0] = common.decrypt(apiresponse.data[i].emailid[0])
      }
      res.json(apiresponse);
    })
  } catch(e) {
  }
});


/*check ip address*/
router.post('/chkipaddress',  (req, res) => {
  var resp = req.body;
  var ip_val = req.header('x-forwarded-for') || req.connection.remoteAddress.replace("::ffff:", "")
  var ipvalue = ip_val.replace("::ffff:", "");
  console.log('ipvalue',ipvalue);
  var data={
    "user_ip":ipvalue,
    "status":1
  }
 
    ipblock.find({"user_ip": ipvalue }).exec(function(err,resData){ 
      if (err) return res.status(500).send(err);
      if(resData.length > 0){
        if(resData[0].status == 1 || resData[0].status == 2){
          apiresponse.status = true;
          apiresponse.data = [];
          apiresponse.message = "Your Ip Address has been blocked";
          res.json(apiresponse);
        }
        else{
          apiresponse.data = [];
          apiresponse.status = false;
          apiresponse.message = "";
          res.json(apiresponse);
        }
      } else {

        apiresponse.data = [];
        apiresponse.status = false;
        apiresponse.message = "";

        res.json(apiresponse);
      } 
    });
});


router.post('/chkip',  (req, res) => {
  var resp = req.body;
  var ipvalue=req.header('x-forwarded-for') || req.connection.remoteAddress.replace("::ffff:", "")
  res.json({mss:ipvalue})
});

/*admin ip blocked history*/
router.post('/IPblockhistory',common.admintokenMiddleware , (req, res) => {
  try{

    var skip = req.body.page.pageNumber *  req.body.page.size;
    var limit = req.body.page.size;
    let prop1= req.body.sorting.prop;

    var dir= req.body.sorting['dir'];
    var srt = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt;
    var search = req.body.search;
    if(req.body.search != ""){
      cnt = {$or:[{'emailid': { $regex: '.*' + search + '.*',$options: 'i' }}]};
      filter = parseFloat(search);
      if(filter >= 0){
        cnt['$or'].push({'user_ip': { $eq: parseFloat(filter)}},{'status':{$eq:parseFloat(filter)}});
      } 
    }
    else{
      cnt = {};
    }
    async.parallel({
      currencyTotalCount:function(cb) {
        ipblock.find(cnt).countDocuments().exec(cb);
      },
      currencyData:function(cb) {
        ipblock.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb)

      },
    },function(err,results){
      if (err) return res.status(500).send(err);
      apiresponse.data = [];
      apiresponse.status = true;
      apiresponse.data = results.currencyData;
      apiresponse.currencycount = results.currencyTotalCount;
      apiresponse.message = "";
      res.json(apiresponse);
    })
  }
  catch(e){
  }
});

router.post('/ipstatus',common.admintokenMiddleware, common.originMiddleware, (req,res) => {
  try{
    ipblock.findOneAndUpdate({ "_id": req.body._id },{ "$set": { "status": req.body.status,
      "modifieddate": new Date()}},{multi: true}).exec(async function(err,resData){
        let ipDetails = await ipblock.findOne({_id:req.body._id}).lean();
        // io.emit('blockip',{status:req.body.status, ip:ipDetails.user_ip});
        res.json({ status:true, data:resData})
      }); 
    }
    catch(e){
      
    }  
  });

router.post('/deleteip',common.admintokenMiddleware, common.originMiddleware, async(req,res) => {
  try{
    let ipDetails = await ipblock.findOne({_id:req.body._id}).lean();
    ipblock.deleteOne({ "_id": req.body._id }).exec(async function(err,resData){
    // io.emit('blockip',{status:1, ip:ipDetails.user_ip});
    res.json({ status:true, msg:"Deleted Successfully"})
  }); 
  }
  catch(e){
   
  }  
});

router.post('/addIpToBlock', common.admintokenMiddleware, common.originMiddleware, async(req, res)=>{
  try{
    let reqData = req.body;
    let ipExists = await ipblock.findOne({user_ip:reqData.user_ip}).lean();
    if(!ipExists){
      let addIp = await ipblock.create(reqData);
      // io.emit('blockip',{status:1, ip:reqData.user_ip});
      res.json({status:true, msg:'Created Successfully'});
    }else{
      res.json({status:false, msg:'Ip already Exists'});
    }
  }catch(e){
    
  }
})

router.post('/get_single_ip',common.admintokenMiddleware, common.originMiddleware, async(req,res) => {
  try{
    let ipDetails = await ipblock.findOne({_id:req.body._id}).lean();
    res.json({ status:true, msg:"Deleted Successfully",data:ipDetails})
  }
  catch(e){
    
  }  
});

/*ip whitelist*/
router.get("/availip:type?", function (req, res) {
	secret = common.generateTFASecret('vairamuthu@pulsehyp.com');
  qrUrl = common.getQrUrl(secret.otpauth_url);
  console.log(qrUrl, 'qrUrl');
  console.log(secret, 'secret');
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
  ipwhite.findOne({user_ip: ip, status: 1}, (err, result) => {
    if (err) { return res.json({status: false, msg: err}) }
      if (!err && result != null) {
        let response = {
          status: true,
          msg: "IP Enabled",
        }
        return res.json(response);
      }
      else {
        let response = {
          status: false,
          msg: "IP Not Enabled",
        }
        return res.json(response);
      }
    });
});


/*add ip whitelist*/
router.post('/addIpTowhite', common.admintokenMiddleware,  async(req, res)=>{
  try{
    let reqData = req.body;
    let ipExists = await ipwhite.findOne({user_ip:reqData.user_ip}).lean();
    if(!ipExists){
      let addIp = await ipwhite.create(reqData);
      res.json({status:true, msg:'Created Successfully'});
    }else{
      res.json({status:false, msg:'Ip already Exists'});
    }
  }catch(e){
  }
})

/*ip whitelist history*/
router.post('/IPwhitehistory',common.admintokenMiddleware , (req, res) => {
  try{

    var skip = req.body.page.pageNumber *  req.body.page.size;
    var limit = req.body.page.size;
    let prop1= req.body.sorting.prop;

    var dir= req.body.sorting['dir'];
    var srt = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt;
    var search = req.body.search;
    if(req.body.search != ""){
      cnt = {$or:[{'emailid': { $regex: '.*' + search + '.*',$options: 'i' }}]};
      filter = parseFloat(search);
      if(filter >= 0){
        cnt['$or'].push({'user_ip': { $eq: parseFloat(filter)}},{'status':{$eq:parseFloat(filter)}});
      } 
    }
    else{
      cnt = {};
    }
    async.parallel({
      currencyTotalCount:function(cb) {
        ipwhite.find(cnt).countDocuments().exec(cb);
      },
      currencyData:function(cb) {
        ipwhite.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb)

      },
    },function(err,results){
      if (err) return res.status(500).send(err);
      apiresponse.data = [];
      apiresponse.status = true;
      apiresponse.data = results.currencyData;
      apiresponse.currencycount = results.currencyTotalCount;
      apiresponse.message = "";
      res.json(apiresponse);
    })
  }
  catch(e){
  }
});

/*ip whitelist status*/
router.post('/whiteipstatus',common.admintokenMiddleware, (req,res) => {
	try{
   ipwhite.findOneAndUpdate({ "_id": req.body._id },{ "$set": { "status": req.body.status,
     "modifieddate": new Date()}},{multi: true}).exec(async function(err,resData){
       let ipDetails = await ipwhite.findOne({_id:req.body._id}).lean();
       res.json({ status:true, data:resData})
     }); 
   }
   catch(e){
   }  
 });


router.post('/currencyList',common.admintokenMiddleware , (req, res) => {
  try{

    var skip = req.body.page.pageNumber *  req.body.page.size;
    var limit = req.body.page.size;
    let prop1= req.body.sorting.prop;

    var dir= req.body.sorting['dir'];
    var srt = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt;
    var search = req.body.search;
    if(req.body.search != ""){
      cnt = {$or:[{'emailid': { $regex: '.*' + search + '.*',$options: 'i' }}]};
      filter = parseFloat(search);
      if(filter >= 0){
        cnt['$or'].push({'currencyName': { $eq: parseFloat(filter)}},{'currencySymbol':{$eq:parseFloat(filter)}},{'status':{$eq:parseFloat(filter)}});
      } 
    }
    else{
      cnt = {};
    }
    async.parallel({
      currencyTotalCount:function(cb) {
        currency.find(cnt).countDocuments().exec(cb);
      },
      currencyData:function(cb) {
        currency.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb)

      },
    },function(err,results){
      if (err) return res.status(500).send(err);
      apiresponse.data = [];
      apiresponse.status = true;
      apiresponse.data = results.currencyData;
      apiresponse.currencycount = results.currencyTotalCount;
      apiresponse.message = "";
      res.json(apiresponse);
    })
  }
  catch(e){
  }
});

router.post('/get_single_currency',common.admintokenMiddleware, common.originMiddleware, async(req,res) => {
  try{
    let currencyDetails = await currency.findOne({_id:req.body._id}).lean();
    res.json({ status:true, msg:"Found Successfully",data:currencyDetails})
  }
  catch(e){
    
  }  
});

router.post('/updateCurrency',common.admintokenMiddleware, common.originMiddleware, (req,res) => {
  try{
    currency.findOneAndUpdate({ "_id": req.body._id },{ "$set": { "currency_decimal": req.body.currency_decimal, "status": req.body.status, "modifieddate": new Date()}},{multi: true}).exec(async function(err,resData){
      res.json({ status:true, data:resData})
    }); 
  }
  catch(e){
    
  }  
});

/*get user nft history api functionality start */
router.post('/transactions_list', common.admintokenMiddleware, async function (req, res) {
  try{
    var values = req.body;
    activity.aggregate([
    { 
      $lookup:
      {
        from       : 'IN_MNlkses',
        localField    : 'creatorId',
        foreignField  : '_id',
        as         : 'user'
      }
    },
    { 
      $lookup:
      {
        from       : 'IN_MNlkses',
        localField     : 'ownerId',
        foreignField  : '_id',
        as         : 'owner'
      }
    },
    { 
      $project:
      {
        "item_id"        : "$objectId",
        "to"      : "$user.address",
        "from"      : "$owner.address",
        "name"      : "$objectName",
        "currency"    : "$tocurrency",
        "price"      : "$price",
        "txid"      : "$txid",
        "image"      : "$image",
        "type"      : "$type",
        "date"      : "$createddate",
        "ownerId"    : "$ownerId",
      }
    },
    { $match: { 'type': 'Purchased' }},
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
            "objectId"      : common.encrypt(ObjId),
            "name"        : itemData[i].name,
            "image"        : itemData[i].image,
            "price"        : itemData[i].price,
            "txid"        : itemData[i].txid,
            "currency"      : itemData[i].currency,
            "to"           : common.decrypt(to),
            "from"           : common.decrypt(from),
            "date"           : itemData[i].date,
            "type"           : itemData[i].type,
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


/* network type management functionalities start*/
router.post('/networkList',common.admintokenMiddleware , (req, res) => {
  try{

    var skip = req.body.page.pageNumber *  req.body.page.size;
    var limit = req.body.page.size;
    let prop1= req.body.sorting.prop;

    var dir= req.body.sorting['dir'];
    var srt = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt;
    var search = req.body.search;
    if(req.body.search != ""){
      cnt = {$or:[{'emailid': { $regex: '.*' + search + '.*',$options: 'i' }}]};
      filter = parseFloat(search);
      if(filter >= 0){
        cnt['$or'].push({'networkName': { $eq: parseFloat(filter)}},{'currencySymbol':{$eq:parseFloat(filter)}},{'status':{$eq:parseFloat(filter)}});
      } 
    }
    else{
      cnt = {};
    }
    async.parallel({
      networkTotalCount:function(cb) {
        network.find(cnt).countDocuments().exec(cb);
      },
      networkData:function(cb) {
        network.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb)

      },
    },function(err,results){
      if (err) return res.status(500).send(err);
      apiresponse.data = [];
      apiresponse.status = true;
      apiresponse.data = results.networkData;
      apiresponse.currencycount = results.networkTotalCount;
      apiresponse.message = "";
      res.json(apiresponse);
    })
  }
  catch(e){
  }
});

router.post('/get_single_network',common.admintokenMiddleware, common.originMiddleware, async(req,res) => {
  try{
    let currencyDetails = await network.findOne({_id:req.body._id}).lean();
    res.json({ status:true, msg:"Found Successfully",data:currencyDetails})
  }
  catch(e){
  }  
});

router.post('/updateNetwork',common.admintokenMiddleware, common.originMiddleware, (req,res) => {
  try{
    network.findOneAndUpdate({ "_id": req.body._id },{ "$set": { "status": req.body.status, "modifieddate": new Date()}},{multi: true}).exec(async function(err,resData){
      res.json({ status:true, data:resData})
    }); 
  }
  catch(e){
  }  
});
/* network type management functionalities end*/

router.post('/feeList',common.admintokenMiddleware , (req, res) => {
  try{

    var skip = req.body.page.pageNumber *  req.body.page.size;
    var limit = req.body.page.size;
    let prop1= req.body.sorting.prop;

    var dir= req.body.sorting['dir'];
    var srt = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt;
    var search = req.body.search;
    if(req.body.search != ""){
      cnt = {$or:[{'emailid': { $regex: '.*' + search + '.*',$options: 'i' }}]};
      filter = parseFloat(search);
      if(filter >= 0){
        cnt['$or'].push({'fee_type': { $eq: parseFloat(filter)}},{'address':{$eq:parseFloat(filter)}},{'fee':{$eq:parseFloat(filter)}});
      } 
    }
    else{
      cnt = {};
    }
    async.parallel({
      currencyTotalCount:function(cb) {
        fees.find(cnt).countDocuments().exec(cb);
      },
      currencyData:function(cb) {
        fees.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb)

      },
    },function(err,results){
      if (err) return res.status(500).send(err);
      apiresponse.data = [];
      apiresponse.status = true;
      apiresponse.data = results.currencyData;
      apiresponse.feecount = results.currencyTotalCount;
      apiresponse.message = "";
      res.json(apiresponse);
    })
  }
  catch(e){
  }
});

router.post('/get_single_fee',common.admintokenMiddleware, common.originMiddleware, async(req,res) => {
  try{
    let currencyDetails = await fees.findOne({_id:req.body._id}).lean();
    res.json({ status:true, msg:"Found Successfully",data:currencyDetails})
  }
  catch(e){
   
  }  
});

router.post('/updateFees',common.admintokenMiddleware, common.originMiddleware, (req,res) => {
  try{
    fees.findOneAndUpdate({ "_id": req.body._id },{ "$set": { "fee_type": req.body.fee_type, "address": req.body.address, "fee": req.body.fee, "modifieddate": new Date()}},{multi: true}).exec(async function(err,resData){
      res.json({ status:true, data:resData})
    }); 
  }
  catch(e){
    
  }  
});


/*update site settings*/
router.post('/sitesettingupdate',common.admintokenMiddleware, upload.array("uploads[]", 2),(req,res)=>{
  try{
    if(req.body.page=="site"){
      sitesettings.findOneAndUpdate({},
        {"$set":{"site_maintaince":req.body.site_maintaince,
        "maintance_detail":req.body.maintance_detail}}).exec(function(err,resupData){
          if(err) {
            res.status(500).send(err);
          } else {
            res.json({status: true, data:resupData});
          }
        });
      } else if(req.body.page=="social") {
        sitesettings.findOneAndUpdate({},{"$set":{"address":req.body.address,"mail":req.body.mail,"skype":req.body.skype,"phone":req.body.phone,"facebook":req.body.facebook,"youtube":req.body.youtube,"twitter":req.body.twitter,"instagram":req.body.instagram,"videolink":req.body.videolink}},{new:true}).exec(function(errss,resdata){
          if(errss) {
           res.status(500).send(errss);
         } else {
          res.json({status: true, data:resdata});
        }
      });
      }else if(req.body.page=="pattern") {
        admin.findOneAndUpdate({},{"$set":{admin_pattern:req.body.patternlock}}).exec(function(errss,resdata){
          if(errss) {
           res.status(500).send(errss);
         } else {
          res.json({status: true, data:resdata});
        }
      });
      } else {
        var site_fav_icon = site_logo = '';
        if (req.files.length > 0) {
          var uploadLength = 0;
          var imgArray = []; 
          var totLength = req.files.length;
          for (var i = 0; i < req.files.length; i++) {
            common.imgUploader(req.files[i], function (result){
              let object = {"site_name":req.body.site_name, "copyrights":req.body.copyrights};
              if(result !=undefined){
                var orgName = result.key;
                var splits = orgName.split('.');
                var site_logo = splits[0];                  
                var image = (site_logo == "site_logo") ? "site_logo" : "site_favicon";
                imgArray[image]=result.Location;
                uploadLength = uploadLength + 1;
                if (totLength == uploadLength) {
                  if(imgArray['site_logo'] != null && imgArray['site_logo'] != undefined) {
                    object['site_logo'] = imgArray['site_logo'];
                  }
                  if(imgArray['site_favicon'] != null && imgArray['site_favicon'] != undefined) {
                    object['site_favicon'] = imgArray['site_favicon'];
                  }
                  siteUp(object, function (result) {
                    if(result) {
                      res.json({status: true, message: "Updated Successfully"});
                    }
                  });
                }
              }
            });
          }       
        } else {
         var obj = {"site_name":req.body.site_name, "copyrights":req.body.copyrights};
         siteUp(obj, function (result) {
          if(result) {
            res.json({status: true, message: "Updated Successfully"});
          }
        });
       }
     }
   } catch(e) {
   }
 });

function siteUp(obj,callback) {
 sitesettings.updateOne({},
  {"$set":obj},{new: true}).exec(function(err,resupData){
    if(err) {
      callback('');
    } else {
      callback(resupData);
    }
  });

}

/*site settings*/
router.get('/siteinform', (req,res)=>{
  try{
    sitesettings.findOne().exec(function(err,resdata){
      if(err) {
        res.status(500).send(err);
      } else {
        res.json({status: true, data:resdata});
      }
    })
  } catch(e) {
  }
});

/*admin details*/
router.get('/adminDetails', common.admintokenMiddleware,(req,res)=>{
  try{
    var where={"_id":req.userId}
    var gets={admin_name:1,auth:1,admin_image:1,otp_options:1,otp_options:1, tfaurl:1,secret:1,tfastatus:1,_id:0}
    admin.findOne(where,gets).exec(function(err,resdta){
      if (err) return res.status(500).send(err);
        console.log('res', resdta);
        if (resdta.tfastatus == "Deactive" || typeof(resdta.tfastatus) == "undefined") {
          // get tfa data 
            var mail = resdta.auth;
            var secret = speakeasy.generateSecret({
              length: 10,
              name: "Ingress_admin:"+ common.decrypt(resdta.auth)
            });
            
            qrcode.toDataURL(secret.otpauth_url, function (err, image_data) {
              if (image_data) {
                var base64 = image_data;
                var token = speakeasy.totp({
                  secret: secret.base32,
                  encoding: 'base32'
                });
                var secret1 = secret.base32;
                var url = base64;
                var onecode = token;
                resdta.secret = secret1;
                resdta.tfaurl  = url;
                resdta.auth = common.decrypt(resdta.auth);
                res.json({ status: true, data: resdta });
              } 
            });
        } else {
          resdta.auth = common.decrypt(resdta.auth);
          res.json({ status: true, data: resdta });
        }
    });
  } catch(e) {
  }
});

/*cms list*/
router.post('/cmslist',common.admintokenMiddleware, (req, res) => {
  try{
    var skip = req.body.page.pageNumber *  req.body.page.size;
    var limit = req.body.page.size;
    let prop1= req.body.sorting.prop;

    var dir= req.body.sorting['dir'];
    var srt = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt;
    var search = req.body.search;
    if(req.body.search != ""){
      cnt = {$or:[{'title': { $regex: '.*' + search + '.*',$options: 'i' }}]};
    }
    else{
      cnt = {};
    }
    async.parallel({
      currencyTotalCount:function(cb) {
        cms.find(cnt).countDocuments().exec(cb);
      },
      currencyData:function(cb) {
       cms.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
     },
   },function(err,results){

    if (err) { console.log(err, 'cms error'); return res.status(500).send(err) };
    apiresponse.data = [];
    apiresponse.status = true;
    apiresponse.data = results.currencyData;
    apiresponse.currencycount = results.currencyTotalCount;
    apiresponse.message = "";
    res.json(apiresponse);
  })
  }
  catch(e){
  }
});

/*get cms*/
// router.get('/getcms',async function(req,res){
//   try{
//     let cmsData = await cms.find({});
//     if(cmsData && cmsData.length > 0){
//       res.json({status:true,data:cmsData});
//     }else{
//       res.json({status:false,msg:'Unable to get data'})
//     }
//   }catch(e){
//   }
// });

router.post('/getcms', common.originMiddleware,async function(req,res){
  try{
   values = req.body;
   cms.findOne({ "pagekey": values.pagekey }).exec(function (errs, resdatas) {
    if (resdatas.length > 0) {
      res.json({ status: false, message: "No data available !!!" })
    } else {
      res.json({ status: true, message: "cms data !!!",data:resdatas })
    }
  })
 }catch(e){
  console.log(e,'error in getting cms')
}
});

/*add cms*/
router.post('/addcms',async function(req,res){
  try{
    let reqData = req.body;
    reqData.slug = ((reqData.title).toLowerCase()).replace(' ', '_');
    let cmsData = await cms.create(reqData);
    if(cmsData){
      res.json({status:true,msg:'Created Successfully'});
    }else{
      res.json({status:false,msg:'Unable to get data'})
    }
  }catch(e){
  }
});


/*edit cms*/    
router.post('/editcms',common.admintokenMiddleware, (req, res) => {
  cms.findOneAndUpdate({ "_id": req.body._id },
    { "$set": 
    { "title": req.body.title,
    "pagecontent": req.body.pagecontent,
    "modifieddate": new Date()}},{multi: true}).
  exec(function(err, resUpdate){
    try
    {
     if(err) {
       res.status(500).send(err);
     } else {
       cms.find({ "_id": req.body._id }).exec(function(err,resData){
         if (err) return res.status(500).send(err);
         apiresponse.data = [];
         apiresponse.data = resData;
         apiresponse.message = "Email Template Updated Successfully";
         res.json(apiresponse);
       });
     }
   }
   catch (err)
   {
     console.info("emailtemplist", err)
   }
 });
});

/*change cms status*/
router.post('/cmsstatus', common.admintokenMiddleware, (req, res)=> {
  cms.findOneAndUpdate({ "_id": req.body._id },
    { "$set": 
    { "status": req.body.status,
    "modifieddate": new Date()}},{multi: true}).
  exec(function(err, resUpdate){
    try
    {
     if(err) {
       res.status(500).send(err);
     } else {
       cms.find({ "_id": req.body._id }).exec(function(err,resData){
         if (err) return res.status(500).send(err);
         apiresponse.data = [];
         apiresponse.data = resData;
         apiresponse.message = "CMS Status Updated Successfully";
         res.json(apiresponse);
       });
     }
   }
   catch (err)
   {
     console.info("cms status updates", err)
   }
 });
})

router.post('/bloglist',common.admintokenMiddleware, (req, res) => {
  try{
    var skip = req.body.page.pageNumber *  req.body.page.size;
    var limit = req.body.page.size;
    let prop1= req.body.sorting.prop;

    var dir= req.body.sorting['dir'];
    var srt = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt;
    var search = req.body.search;
    if(req.body.search != ""){
      cnt = {$or:[{'title': { $regex: '.*' + search + '.*',$options: 'i' }}]};
    }
    else{
      cnt = {};
    }
    async.parallel({
      currencyTotalCount:function(cb) {
        blogs.find(cnt).countDocuments().exec(cb);
      },
      currencyData:function(cb) {
       blogs.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
     },
   },function(err,results){

    if (err) { console.log(err, 'cms error'); return res.status(500).send(err) };
    apiresponse.data = [];
    apiresponse.status = true;
    apiresponse.data = results.currencyData;
    apiresponse.currencycount = results.currencyTotalCount;
    apiresponse.message = "";
    res.json(apiresponse);
  })
  }
  catch(e){
  }
});

router.post('/itemupdate',common.admintokenMiddleware, (req, res) => {
    var id = req.body.id;
    items.findOne( {"_id":id} ).exec(function (errs, resdatas) {
       if(errs){
        res.json({ status: false,message:"Record not found" })
       }else{
          if(resdatas != ""){
             var upres = {
                          "mint_response":req.body.cresponse,
                          "token_id":req.body.token_id,
                          "admin_mint":1,
                          "selltokenid":req.body.token_id,
                         };
             items.findOneAndUpdate({"_id":id},{"$set":upres},{new: true}).exec(function(errs, resdatas) {
                 res.json({ status: true, message: "Successfully Mint" })
             });
          }else{
              res.json({ status: false,message:"Please try later" })
          }
       }
    });
});


router.post('/itemlist',common.admintokenMiddleware, (req, res) => {
  try{
    var skip = req.body.page.pageNumber *  req.body.page.size;
    var limit = req.body.page.size;
    let prop1= req.body.sorting.prop;

    var dir= req.body.sorting['dir'];
    var srt = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt;
    var search = req.body.search;
    if(req.body.search != ""){
      cnt = {$or:[{'name': { $regex: '.*' + search + '.*',$options: 'i' }}]};
    }
    else{
      cnt = {"type":"add","admin_mint":0};
    }
    async.parallel({
      currencyTotalCount:function(cb) {
        items.find(cnt).countDocuments().exec(cb);
      },
      currencyData:function(cb) {
       items.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
     },
   },function(err,results){

    if (err) { console.log(err, 'cms error'); return res.status(500).send(err) };
    apiresponse.data = [];
    apiresponse.status = true;
    apiresponse.data = results.currencyData;
    apiresponse.currencycount = results.currencyTotalCount;
    apiresponse.message = "";
    res.json(apiresponse);
  })
  }
  catch(e){
  }
});


router.post('/getblogs', common.admintokenMiddleware, (req, res) => {
  try{
   values = req.body;
   blogs.findOne({ "_id": values.id }).exec(function (errs, resdatas) {
    if (resdatas.length > 0) {
      res.json({ status: false, message: "No data available !!!" })
    } else {
      res.json({ status: true, message: "cms data !!!",data:resdatas })
    }
  })
 }catch(e){
  console.log(e,'error in getting cms')
}
});

router.post('/getitems', common.admintokenMiddleware, (req, res) => {
  try{
   values = req.body;
   items.findOne({ "_id": values.id }).exec(function (errs, resdatas) {
    if (resdatas.length > 0) {
      res.json({ status: false, message: "No data available !!!" })
    } else {
      res.json({ status: true, message: "items data !!!",data:resdatas })
    }
  })
 }catch(e){
  console.log(e,'error in getting cms')
}
});




// router.post('/newsAdd',common.tokenMiddleware,upload.single('news_img'), (req,res) => {
//   var info = req.body;    
//   blogs.find({'title':info.title}).exec(function (error, existData) {
//     if (error) {
//       return res.json({ status : false, msg:"Try again later!" });
//     }
//     if(existData.length > 0) {
//       res.json({ status : false, msg : "Title already exist!" });
//     } else {
//       uploadcheck(req, function(uploadImg) {
//         let obj = {
//           "title"       : info.title,
//           "description" : info.description,
//           "content"     : info.content,
//           "status"      : info.status
//         };
//         if(typeof uploadImg != 'undefined' && typeof uploadImg != undefined)
//         {
//           obj["news_image"] = uploadImg;
//         }
//         blogs.create( obj, function(err,result) {      
//           if(result)  {        
//             res.json({ status : true, msg : "Successfully added"});
//           } else {
//             res.json({ status : false, msg : "Something went wrong. Please Try again"});
//           }
//         });
//       });
//     }
//   }); 
// });

router.post('/blogAdd', common.admintokenMiddleware, upload.single('blog_img'), (req,res) => {
  let info = req.body;
  common.imgUploader(req.file, function (result){
    if(result) {
      let obj = {
        "title"       : info.title,
        "pagecontent"     : info.pagecontent,
        "status"      : info.status,
        "image"      : result.Location,
        "modifieddate"  : updatedDate()
      };
      blogs.create( obj, function(err,result) {  
        if(result) {
          response = {status : true, msg : " Successfully Created"};
        } else {
          response = {status : false, msg : "Invalid request. Please Try again"};
        }
        res.json(response); 
      });
    }
  });
});

router.post('/blogUpdate', common.admintokenMiddleware, upload.single('blog_img'), (req,res) => {
  let info = req.body;
  common.imgUploader(req.file, function (result){
    if(result) {
      let obj = {
        "title"       : info.title,
        "pagecontent"     : info.pagecontent,
        "status"      : info.status,
        "image"      : result.Location,
        "modifieddate"  : updatedDate()
      };
      blogs.findOneAndUpdate({ "_id": info._id},{ "$set": obj },{multi: true}).exec(function(err, resUpdate){
        if(resUpdate) {
          response = {status : true, msg : " Successfully updated"};
        } else {
          response = {status : false, msg : "Invalid request. Please Try again"};
        }
        res.json(response); 
      });
    }
  });
});



/*admin features management functionalities*/
router.post('/featureslist',common.admintokenMiddleware, (req, res) => {
  try{
    var skip = req.body.page.pageNumber *  req.body.page.size;
    var limit = req.body.page.size;
    let prop1= req.body.sorting.prop;

    var dir= req.body.sorting['dir'];
    var srt = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt;
    var search = req.body.search;
    if(req.body.search != ""){
      cnt = {$or:[{'title': { $regex: '.*' + search + '.*',$options: 'i' }}]};
    }
    else{
      cnt = {};
    }
    async.parallel({
      currencyTotalCount:function(cb) {
        features.find(cnt).countDocuments().exec(cb);
      },
      currencyData:function(cb) {
       features.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
     },
   },function(err,results){

    if (err) { console.log(err, 'Features error'); return res.status(500).send(err) };
    apiresponse.data = [];
    apiresponse.status = true;
    apiresponse.data = results.currencyData;
    apiresponse.currencycount = results.currencyTotalCount;
    apiresponse.message = "";
    res.json(apiresponse);
  })
  }
  catch(e){
  }
});

router.post('/getfeatures', common.admintokenMiddleware, (req, res) => {
  try{
   values = req.body;
   features.findOne({ "_id": values.id }).exec(function (errs, resdatas) {
    if (resdatas.length > 0) {
      res.json({ status: false, message: "No data available !!!" })
    } else {
      res.json({ status: true, message: "Features data !!!",data:resdatas })
    }
  })
 }catch(e){
  
}
});


router.post('/featuresAdd', common.admintokenMiddleware, upload.single('features_img'), (req,res) => {
  let info = req.body;
  common.imgUploader(req.file, function (result){
    if(result) {
      let obj = {
        "title"       : info.title,
        "pagecontent"     : info.pagecontent,
        "status"      : info.status,
        "image"      : result.Location,
        "modifieddate"  : updatedDate()
      };
      features.create( obj, function(err,result) {  
        if(result) {
          response = {status : true, msg : " Successfully Created"};
        } else {
          response = {status : false, msg : "Invalid request. Please Try again"};
        }
        res.json(response); 
      });
    }
  });
});

router.post('/featuresUpdate', common.admintokenMiddleware, upload.single('features_img'), (req,res) => {
  let info = req.body;
  common.imgUploader(req.file, function (result){
    if(result) {
      let obj = {
        "title"       : info.title,
        "pagecontent"     : info.pagecontent,
        "status"      : info.status,
        "image"      : result.Location,
        "modifieddate"  : updatedDate()
      };
      features.findOneAndUpdate({ "_id": info._id},{ "$set": obj },{multi: true}).exec(function(err, resUpdate){
        if(resUpdate) {
          response = {status : true, msg : " Successfully updated"};
        } else {
          response = {status : false, msg : "Invalid request. Please Try again"};
        }
        res.json(response); 
      });
    }
  });
});

router.post('/dummylist',common.admintokenMiddleware, (req, res) => {
  try{
    var skip = req.body.page.pageNumber *  req.body.page.size;
    var limit = req.body.page.size;
    let prop1= req.body.sorting.prop;

    var dir= req.body.sorting['dir'];
    var srt = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt;
    var search = req.body.search;
    if(req.body.search != ""){
      cnt = {$or:[{'title': { $regex: '.*' + search + '.*',$options: 'i' }}]};
    }
    else{
      cnt = {};
    }
    async.parallel({
      currencyTotalCount:function(cb) {
        dummy.find(cnt).countDocuments().exec(cb);
      },
      currencyData:function(cb) {
        dummy.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
      },
    },function(err,results){

      if (err) { console.log(err, 'cms error'); return res.status(500).send(err) };
      apiresponse.data = [];
      apiresponse.status = true;
      apiresponse.data = results.currencyData;
      apiresponse.currencycount = results.currencyTotalCount;
      apiresponse.message = "";
      res.json(apiresponse);
    })
  }
  catch(e){
  }
});

/*get cms*/
router.get('/getdummy',async function(req,res){
  try{
    let cmsData = await dummy.find({});
    if(cmsData && cmsData.length > 0){
      res.json({status:true,data:cmsData});
    }else{
      res.json({status:false,msg:'Unable to get data'})
    }
  }catch(e){
  }
});

/*add cms*/
router.post('/adddummy',async function(req,res){
  try{
    let reqData = req.body;
    reqData.slug = ((reqData.title).toLowerCase()).replace(' ', '_');
    let cmsData = await dummy.create(reqData);
    if(cmsData){
      res.json({status:true,msg:'Created Successfully'});
    }else{
      res.json({status:false,msg:'Unable to get data'})
    }
  }catch(e){
  }
});


/*edit cms*/    
router.post('/editdummy',common.admintokenMiddleware, (req, res) => {
  dummy.findOneAndUpdate({ "_id": req.body._id },
    { "$set": 
    { "title": req.body.title,
    "pagecontent": req.body.pagecontent,
    "modifieddate": new Date()}},{multi: true}).
  exec(function(err, resUpdate){
    try
    {
     if(err) {
       res.status(500).send(err);
     } else {
       dummy.find({ "_id": req.body._id }).exec(function(err,resData){
         if (err) return res.status(500).send(err);
         apiresponse.data = [];
         apiresponse.data = resData;
         apiresponse.message = "Email Template Updated Successfully";
         res.json(apiresponse);
       });
     }
   }
   catch (err)
   {
     console.info("emailtemplist", err)
   }
 });
});

/*change cms status*/
router.post('/dummystatus', common.admintokenMiddleware, (req, res)=> {
  dummy.findOneAndUpdate({ "_id": req.body._id },
    { "$set": 
    { "status": req.body.status,
    "modifieddate": new Date()}},{multi: true}).
  exec(function(err, resUpdate){
    try
    {
     if(err) {
       res.status(500).send(err);
     } else {
       dummy.find({ "_id": req.body._id }).exec(function(err,resData){
         if (err) return res.status(500).send(err);
         apiresponse.data = [];
         apiresponse.data = resData;
         apiresponse.message = "CMS Status Updated Successfully";
         res.json(apiresponse);
       });
     }
   }
   catch (err)
   {
     console.info("cms status updates", err)
   }
 });
})


/*cms list*/
router.post('/faqlist',common.admintokenMiddleware, (req, res) => {
  try{
    var skip = req.body.page.pageNumber *  req.body.page.size;
    var limit = req.body.page.size;
    let prop1= req.body.sorting.prop;

    var dir= req.body.sorting['dir'];
    var srt = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt;
    var search = req.body.search;
    if(req.body.search != ""){
      cnt = {$or:[{'title': { $regex: '.*' + search + '.*',$options: 'i' }}]};
    }
    else{
      cnt = {};
    }
    async.parallel({
      currencyTotalCount:function(cb) {
        faq.find(cnt).countDocuments().exec(cb);
      },
      currencyData:function(cb) {
        faq.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
      },
    },function(err,results){

      if (err) { };
      console.log(results, 'result');
      apiresponse.data = [];
      apiresponse.status = true;
      apiresponse.data = results.currencyData;
      apiresponse.currencycount = results.currencyTotalCount;
      apiresponse.message = "";
      res.json(apiresponse);
    })
  }
  catch(e){
  }
});

/*get faq*/
router.get('/getfaq',async function(req,res){
  try{
    let faqData = await faq.find({});
    if(faqData && faqData.length > 0){
      res.json({status:true,data:faqData});
    }else{
      res.json({status:false,msg:'Unable to get data'})
    }
  }catch(e){
  }
});

/*add faq*/
router.post('/addfaq', common.admintokenMiddleware, function(req,res){
  try{
    let reqData = req.body;
    faq.find({question: reqData.question}, (err, result) => {
      if (!err) {
        if (result.length > 0) {
          return res.json({status: false, msg: "Given question already exist"});
        }
        let faqData = faq.create(reqData);
        if(reqData){
          res.json({status:true,msg:'Created Successfully'});
        }else{
          res.json({status:false,msg:'Unable to get data'})
        }
      }
      else {
        return res.json({status: false, msg: "Something went wrong, Try again"});
      }
    })
  }catch(e){
  }
});


/*edit faq*/    
router.post('/editfaq',common.admintokenMiddleware, (req, res) => {
  reqData = req.body;
  try
  {
    faq.findOneAndUpdate({_id: reqData._id}, reqData, (err, result) => {
      if (err) {
        return res.json({status: false, msg: "Something went wrong, Try again."});
      }

      if (result) {
        return res.json({status: true, msg: "Updated success"});
      }
    })       
  }
  catch (err)
  {
    console.info("emailtemplist", err)
  }
});

/*change faq status*/
router.post('/faqstatus', common.admintokenMiddleware, (req, res)=> {
  faq.findOneAndUpdate({ "_id": req.body._id },
    { "$set": 
    { "status": req.body.status,
    "modifieddate": new Date()}},{multi: true}).
  exec(function(err, resUpdate){
    try
    {
     if(err) {
       res.status(500).send(err);
     } else {
       faq.find({ "_id": req.body._id }).exec(function(err,resData){
         if (err) return res.status(500).send(err);
         apiresponse.data = [];
         apiresponse.data = resData;
         apiresponse.message = "CMS Status Updated Successfully";
         res.json(apiresponse);
       });
     }
   }
   catch (err)
   {
     console.info("cms status updates", err)
   }
 });
})

/*pagecontent list*/
router.post('/pagecontentlist',common.admintokenMiddleware, (req, res) => {
  try{
    var skip = req.body.page.pageNumber *  req.body.page.size;
    var limit = req.body.page.size;
    let prop1= req.body.sorting.prop;

    var dir= req.body.sorting['dir'];
    var srt = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt;
    var search = req.body.search;
    if(req.body.search != ""){
      cnt = {$or:[{'title': { $regex: '.*' + search + '.*',$options: 'i' }}]};
    }
    else{
      cnt = {};
    }
    async.parallel({
      currencyTotalCount:function(cb) {
        pagecontent.find(cnt).countDocuments().exec(cb);
      },
      currencyData:function(cb) {
        pagecontent.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb)

      },
    },function(err,results){
      if (err) return res.status(500).send(err);
      apiresponse.data = [];
      apiresponse.status = true;
      apiresponse.data = results.currencyData;
      apiresponse.currencycount = results.currencyTotalCount;
      apiresponse.message = "";
      res.json(apiresponse);
    })
  }
  catch(e){
  }
});

/*get pagecontent */
router.get('/getpagecontent',async function(req,res){
  try{
    let cmsData = await pagecontent.find({});
    if(cmsData && cmsData.length > 0){
      res.json({status:true,data:cmsData});
    }else{
      res.json({status:false,msg:'Unable to get data'})
    }
  }catch(e){
  }
});

/*add pagecontent*/
router.post('/addpagecontent',async function(req,res){
  try{
    let reqData = req.body;
    pagecontent.findOne({"title":reqData.title, "page":reqData.page}, (err, result) => {
      if(!err && result == null) {
        let cmsData = pagecontent.create(reqData);
        if(cmsData){
          res.json({status:true,msg:'Created Successfully'});
        }else{
          res.json({status:false,msg:'Unable to get data'});
        }
      }
      else {
        return res.json({status:false,msg:'Page name and Page title already exist'});  
      }
    });
    
  }catch(e){
  }
});

/*pagecontent status*/
router.post('/contentstatus',async function(req,res){
  try{
    var data = req.body;
    let updateData = {"status": data.status};
    let cmsData = await pagecontent.findOneAndUpdate({"_id":data._id }, updateData);
    if(cmsData){
      res.json({status:true,msg:'Updated Successfully'});
    }else{
      res.json({status:false,msg:'Unable to Update data'})
    }
  }catch(e){
  }
});

/*edit pagecontent*/    
router.post('/editpagecontent',common.admintokenMiddleware, (req, res) => {
  pagecontent.findOneAndUpdate({ "_id": req.body._id },
    { "$set": 
    { "title": req.body.title,
    "pagecontent": req.body.pagecontent,
    "modifieddate": new Date()}},{multi: true}).
  exec(function(err, resUpdate){
    try
    {
     if(err) {
       res.status(500).send(err);
     } else {
       pagecontent.find({ "_id": req.body._id }).exec(function(err,resData){
         if (err) return res.status(500).send(err);
         apiresponse.data = [];
         apiresponse.data = resData;
         apiresponse.message = "Email Template Updated Successfully";
         res.json(apiresponse);
       });
     }
   }
   catch (err)
   {
     console.info("emailtemplist", err)
   }
 });
});

/*support list*/
router.post('/supportlist',common.admintokenMiddleware, (req, res) => {
  try{
    var skip = req.body.page.pageNumber *  req.body.page.size;
    var limit = req.body.page.size;
    let prop1= req.body.sorting.prop;

    var dir= req.body.sorting['dir'];
    var srt = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt;
    var search = req.body.search;
    if(req.body.search != ""){
      cnt = {$or:[{'subject': { $regex: '.*' + search + '.*',$options: 'i' }}]};
    }
    else{
      cnt = {};
    }
    async.parallel({
      currencyTotalCount:function(cb) {
        support.find(cnt).countDocuments().exec(cb);
      },
      currencyData:function(cb) {
        support.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
      },
    },function(err,results){

      if (err) { console.log(err, 'cms error'); return res.status(500).send(err) };
      (results.currencyData).forEach((item, index) => {
        results.currencyData[index].auth = common.decrypt(item.auth);
        results.currencyData[index].name = common.decrypt(item.name);
      });
      apiresponse.data = [];
      apiresponse.status = true;
      apiresponse.data = results.currencyData;
      apiresponse.currencycount = results.currencyTotalCount;
      apiresponse.message = "";
      res.json(apiresponse);
    })
  }
  catch(e){
  }
});

/*get categories*/
router.get('/getcategories',async function(req,res){
  try{
    let categoryData = await category.find({});
    if(categoryData && categoryData.length > 0){
      res.json({status:true,data:categoryData});
    }else{
      res.json({status:false,msg:'Unable to get data'})
    }
  }catch(e){
  }
});

/*add categories*/
router.post('/addcategories',async function(req,res){
  try{
    let reqData = req.body;
    await category.find({slug: (reqData.category_name).toLowerCase()}, (err, result) => {
    	if (!err && result.length > 0) {
        return res.json({status:false,msg:'category Already Available'});
      }
      reqData.slug = (reqData.category_name).toLowerCase();
      categoryData = category.create(reqData);
    });
    if(categoryData){
      res.json({status:true,msg:'Created Successfully'});
    }else{
      res.json({status:false,msg:'Unable to get data'})
    }
  }catch(e){
  }
});


/*edit cms*/    
router.post('/editcategories',common.admintokenMiddleware, (req, res) => {
  category.findOneAndUpdate({ "_id": req.body._id },
    { "$set": {"status": req.body.status,
    "modifieddate": new Date()}},{multi: true}).
  exec(function(err, resUpdate){
    try
    {
     if(err) {
       res.status(500).send(err);
     } else {
       category.find({ "_id": req.body._id }).exec(function(err,resData){
         if (err) return res.status(500).send(err);
         apiresponse.data = [];
         apiresponse.data = resData;
         apiresponse.message = "category Updated Successfully";
         res.json(apiresponse);
       });
     }
   }
   catch (err)
   {
     console.info("category", err)
   }
 });
});

/*get currency*/
router.get('/getcurrency',async function(req,res){
  try{
    let currencyData = await currency.find({});
    if(currencyData && currencyData.length > 0){
      res.json({status:true,data:currencyData});
    }else{
      res.json({status:false,msg:'Unable to get data'})
    }
  }catch(e){
  }
});

/*add categories*/
router.post('/addcurrency',async function(req,res){
  try{
    let reqData = req.body;
    await currency.find({symbol: reqData.symbol}, (err, result) => {
    	if (!err && result.length > 0) {
        return res.json({status:false,msg:'category Already Available'});
      }
      currencyData = currency.create(reqData);
    });
    if(cmsData){
      res.json({status:true,msg:'Created Successfully'});
    }else{
      res.json({status:false,msg:'Unable to get data'})
    }
  }catch(e){
  }
});


/*edit cms*/    
router.post('/editcurrency',common.admintokenMiddleware, (req, res) => {
  currency.findOneAndUpdate({ "_id": req.body._id },
    { "$set": 
    {"symbol": req.body.symbol,
    "name": req.body.name,
    "status": req.body.status,
    "modifieddate": new Date()}},{multi: true}).
  exec(function(err, resUpdate){
    try
    {
     if(err) {
       res.status(500).send(err);
     } else {
       currency.find({ "_id": req.body._id }).exec(function(err,resData){
         if (err) return res.status(500).send(err);
         apiresponse.data = [];
         apiresponse.data = resData;
         apiresponse.message = "category Updated Successfully";
         res.json(apiresponse);
       });
     }
   }
   catch (err)
   {
     console.info("currency", err)
   }
 });
});


/*admin login attempt count*/
function attempts(info,res)
{ 
  let ip_addr = info.headers['x-forwarded-for'] || info.connection.remoteAddress || info.socket.remoteAddress || info.connection.socket.remoteAddress;
  let ip = ip_addr.replace("::ffff:", "");
  var agent = useragent.parse(info.headers['user-agent']);
  var os = agent.os.toString().split(' ')[0];
  var browser = agent.toAgent().split(' ')[0];
  var remainAttempt = 4;
  var search = {"ip_address" : ip };
  async.parallel({
    attemptRst:function(cb) {
      loginAttempts.findOne(search).select('attemptCount').exec(cb)
    },
  },function(err,results){
   if (err) return res.status(500).send(err);
   if(results.attemptRst!=null){ 
     remainAttempt = remainAttempt - results.attemptRst.attemptCount;
     if(results.attemptRst.attemptCount >= 4){ 
       let object = {
         "user_ip"   :ip,
         "loginattempt": 5,
         "createddate":Date.now(),
         "status"    : 2
       }

       ipblock.create(object,function(err,result){
         if(result){
           return res.json({status:"blocked", error:"Invalid login attempts, Your IP has been blocked"});
         }
       });
     }
     else{

       loginAttempts.findOne({"ip_address":ip}).exec(function(error,resData){
         if(resData){
           let attemptCount = resData.attemptCount + 1;              
           loginAttempts.updateOne({"_id": resData._id},{ $set: {"attemptCount":+attemptCount,"status":0} }).exec(function(err,resUpdate) {               
             if(resUpdate){
               return res.json({status:false, error:"Invalid login credentials, You have only "+remainAttempt+" more attempts"});
             }
           });              
         }
       });                            
     }
   }
   else
   {
     let attempt={
       "emailid":info.body.email,
       "secret_key":info.body.password,
       "ip_address":ip,
       "browser":browser,
       "deviceinfo":os,
       "created_at":Date.now(),
       "status":0
     }
     loginAttempts.create(attempt, function(err,result){               
       if(result){           
         return res.json({status:false, error:"Invalid login credentials, You have only "+remainAttempt+" more attempts"});
       }
     }); 
   }  
 })   
}


//List pairs
router.post('/pairslist', common.originMiddleware , async function(req,res){
  try{
    var skip = req.body.page.pageNumber *  req.body.page.size;
    var limit = req.body.page.size;
    let prop1= req.body.sorting.prop;

    var dir= req.body.sorting['dir'];
    var srt = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt = {};
    var search = req.body.search;
    if(req.body.search != ""){
      cnt = {$or:[{'pair_address': { $regex: '.*' + search + '.*',$options: 'i' }},{'pair': { $regex: '.*' + search + '.*',$options: 'i' }},{'status': { $regex: '.*' + search + '.*',$options: 'i' }}]};
    }

    async.parallel({
      pairsTotalCount:function(cb) {
        pairs.find(cnt).countDocuments().exec(cb);
      },
      pairsData:function(cb) {
        pairs.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb)

      },
    },function(err,results){
      if (err) return res.status(500).send(err);
      apiresponse.data = [];
      apiresponse.status = true;
      apiresponse.data = results.pairsData;
      apiresponse.pairscount = results.pairsTotalCount;
      apiresponse.message = "";
      res.json(apiresponse);
    })
  }
  catch(e){
 }
});


/*remove blocked ip*/
function removeip(ip) {
  loginAttempts.find({"ip_address":ip}).countDocuments().exec(function(error,respon){
    if(respon != null){
      loginAttempts.remove({"ip_address": ip}).exec(function(upErr, upRes) {
        ipblock.remove({"user_ip": ip}).exec(function(err, res) {
        })
      });
    }
  });
}

router.get('/getletteremail', common.originMiddleware, (req, res) => {
 async.parallel({
  subscribers: function (cb) {
    subscribe.aggregate([
    {
      $project: {
        _id: 1,
        "auth":1
      }
    },
    ]).exec(cb);
  },
}, function (err, results) {
  let newsdata=results.subscribers;
  response.message = "";
  subusers = [];
  for(var j in newsdata){
    if(newsdata[j].auth !=''){
      auth = common.decrypt(newsdata[j].auth);
      subusers.push({"auth":auth});         
    }
  }
  response.subs = subusers;
  response.subcount  = subusers.length;
  res.json(response);
});
});

router.post('/sendnewsltr',common.originMiddleware, (req,res) => {
  let info = req.body;
  try {
    let obj = {
      "subject": info.subject,      
      "message": info.message,
      "type"   : info.type,
      "selusr" : info.selectedusers,
      "updated_at" : updatedDate()
    };   
    newsletter.create(obj, function (err, ltr) {        
      let sentemail = info.selectedusers;
      for(var i=0;i<sentemail.length;i++){         
        let usermail = sentemail[i];
          
          res.json({status: true, msg: 'Newsletter message send successfully.'});
        }
      });
  } catch (e) {
    res.json({status:false, msg:"Unauthorized"});
  }
});

module.exports = router;
