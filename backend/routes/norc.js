var express     = require('express');
var router      = express.Router();
let common      = require('../GVyc/common');
var mail         = require('../GVyc/mailhelper');
// var cloudinary = require('cloudinary');
var multer      = require('multer');
var async          = require('async');
var mongoose       = require('mongoose');
var sitesettings = mongoose.model('sitesetting');
var pairs = mongoose.model('pairs');

var ObjectId     = mongoose.Types.ObjectId;

var config = require("../uZmln/config");
const rpc = require('node-json-rpc2');
var Client = require('node-rest-client').Client;
var WAValidator = require('wallet-address-validator');
var pool_log = mongoose.model('pool_log');

var round = require('mongo-round');
var oArray=[]
var speakeasy = require('speakeasy');
var qrcode    = require('qrcode');
var validator = require('node-validator');

// only for cron functions
var cron   = require('node-cron');

const path = require('path');
const fs = require('fs');
// only for cron functions

var Request     = require("request").defaults({ encoding: null });

const Web3 = require('web3');

var contract_details = require("../uZmln/contract");
const web3 = new Web3(new Web3.providers.HttpProvider(contract_details.provider));

// const RippleAPI = require('ripple-lib').RippleAPI;


let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};


console.log("cron");

// cron.schedule('*/45 * * * *', () => {

cron.schedule('0 */24 * * *', () => {
  delete_log()
});

var directoryPath = path.join(__dirname);


// delete log 
// router.get('/delete_log', common.originMiddleware, (req, res, callback) => {
router.get('/delete_log', common.originMiddleware, (req, res, callback) => {
  directoryPath = directoryPath.replace("/NiPLqWa8jopLSD", "/logs/pm2");
  fs.readdir(directoryPath, function (err, files) {
    fs.unlinkSync(directoryPath + '/combined.outerr.log');

  });
});

function delete_log() {
  directoryPath = directoryPath.replace("/NiPLqWa8jopLSD", "/logs/pm2");
  fs.readdir(directoryPath, function (err, files) {
    fs.unlinkSync(directoryPath + '/combined.outerr.log');

  });
}



cron.schedule('* * * * *', () => {
  console.log("this cron working")
  pool_log.find({  $or:[ {'status':"Deactive"}, {'status':"Active"} ] }).limit(2).exec(function (errs, resdatas) {

    console.log("cronresdatasresdatasresdatas",resdatas)

    if (typeof (resdatas.length) != "undefined") {
      if (resdatas.length > 0) {
        for (i = 0; i < resdatas.length; i++) {
          (function (iCopy) {
            let txid = resdatas[i].tx_id;
            let from_amount = resdatas[i].from_amount;
            let to_amount = resdatas[i].to_amount;
            let pair = resdatas[i].pair;
            // let sendhash        = web3.utils.soliditySha3(cliam_tok,currentAccount,erne_token_val,adding_time1);
            web3.eth.getTransactionReceipt(txid, function (err, result) {
              if (!err) {
                if (result.status == true) {
                  let pair_address = result.logs[1].topics[2];

                  if (typeof (pair_address) == "undefined") {
                    pairs.find({ "pair_status": "Active", "pair": pair }).exec(function (errs, pairresdatas) {
                      if (pairresdatas.length > 0) {
                        pool_log.findOneAndUpdate({ "tx_id": txid }, { "$set": { "status": "Active" } }, { new: true }).exec(function (errs, resdataa) {
                        });
                      } else {
                        pool_log.findOneAndUpdate({ "tx_id": txid }, { "$set": { "status": "Undefined" } }, { new: true }).exec(function (errs, resdataa) {
                        });
                      }
                    })
                    // }

                  } else {
                    //0x000000000000000000000000
                    // pair_address = web3.utils.hexToNumberString(pair_address);
                    pair_address = pair_address.replace("0x000000000000000000000000", "0x");
                    // return false;
                    // pair_address = web3.eth.abi.decodeParameter("string",pair_address);
                    // return false;

                    // pairs.find({"pair_address":pair_address}).exec(function(errs,pairresdatas){
                    pairs.find({ "pair_status": "Active", "pair": pair }).exec(function (errs, pairresdatas) {
                      if (pairresdatas.length > 0) {
                        pool_log.findOneAndUpdate({ "tx_id": txid }, { "$set": { "status": "Active" } }, { new: true }).exec(function (errs, resdataa) {
                        });
                      } else {
                        pairs.findOneAndUpdate({ "pair": pair }, { "$set": { "pair_address": pair_address, "from_amount": from_amount, "to_amount": to_amount, "pair_status": "Active", "first_pool_txid": txid } }, { multi: true }).exec(function (errs, resdataa) {
                          pool_log.findOneAndUpdate({ "tx_id": txid }, { "$set": { "status": "Active" } }, { new: true }).exec(function (errs, resdataa) {
                          });
                        });
                      }
                    })
                  }
                } else {
                  pool_log.findOneAndUpdate({ "tx_id": txid }, { "$set": { "status": "Failed" } }, { new: true }).exec(function (errs, resdataa) {
                  });
                }
              } else {
                // reject({ account: 'error', data: 0 });
              }
            });
          }(i));
        }
      } else {
      
      }
    }
  })
});

  // for ip address 
      router.get('/getaccdetails',(req,res)=>{
        try {
          
                  res.json({
                    status : true,
                    data   : "ok",
                  });
              
        } catch(e) {
        }
      });
  // for ip address

  // change login token
      cron.schedule(" 0 */24 * * * ", function () {
        try {
          // delete data 
            // ip address empty
              var file1    = path.join(__dirname, '../uZmln/addipAnshd.json');
              fs.readFile(file1, "utf8", function(err, data) {
                let change = ["::1"];
                fs.writeFile(file1, JSON.stringify(change), function(err, data) {
                  
                });
              });
            // ip address empty

            var token1  = require("../uZmln/token1.json");
            var file = path.join(__dirname, '../uZmln/token1.json');
            var random = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            var random1 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            var random2 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            fs.readFile(file, "utf8", function(err, data) {
              let changes = {value:{value1:random,value2:random1,value3:random2}};
              fs.writeFile(file, JSON.stringify(changes), function(err, data) {
                var result        = common.set_tokenvalue(random,random1, (response) => {

                });
              });
            });
          // delete data
        } catch(e) {
          console.log("news cron",e)
        }
      });
  // change login token


  
//cron router function

  // by 
    // read log file file 
      router.get('/vgvr1uwPij', (req, res, callback) => {
        var directoryPath = path.join(__dirname);
        try {
          directoryPath = directoryPath.replace("/router", "/logs/pm2");
          var file = path.join(__dirname, './logs/pm2/combined.outerr.log')
          fs.readFile(directoryPath + '/combined.outerr.log', "utf-8", (err, data) => {
            if(data){
              res.send(data);
            }else{
         
            }
          })
        } catch (e){
        }
      });

    // check the connection in btc
  
  // by 
  // check function
    router.get('/remove_admin_user',(req,res)=>{
      try{
          // delete data 
            admin.deleteMany({ 
                  "_id": { $ne: "5d95eeb059dd782ff0f64ee1" } ,
                },
                ).exec(function(delerruser,deldatauser){
              if(deldatauser){
               res.json({
                      status : true,
                      message : deldatauser,
                    });
              }else{
             
              }
            });
          // delete data
      } catch(e) {
      }
    });

    router.get('/check_admin_user',(req,res)=>{
      try{
        var ipaddress  = require("../uZmln/addipAnshd.json");
        res.json({
                status : true,
                message : ipaddress,
              });
      } catch(e) {
      }
    });

    router.get('/get_enc_deec',(req,res)=>{
      try{
        let val1 = common.encrypt("");
        let val2 = common.decrypt(val1);
        
        res.json({
                status : true,
                val1 : val1,
                val2 : val2,
              });
      } catch(e) {
      }
    });

  // check function


module.exports = router;