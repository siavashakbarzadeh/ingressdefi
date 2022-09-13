var express = require('express');
var router = express.Router();
let common = require('../GVyc/common');
var mail = require('../GVyc/mailhelper');
// var cloudinary = require('cloudinary');
var multer = require('multer');
var async = require('async');
var mongoose = require('mongoose');

var sitesettings = mongoose.model('sitesetting');
var pairs = mongoose.model('pairs');
var pool_log = mongoose.model('pool_log');
var remove_pool = mongoose.model('remove_pool');

var ObjectId = mongoose.Types.ObjectId;

var config = require("../uZmln/config");
var Client = require('node-rest-client').Client;
var WAValidator = require('wallet-address-validator');

var round = require('mongo-round');
var oArray = []
var speakeasy = require('speakeasy');
var qrcode = require('qrcode');
var validator = require('node-validator');

// only for cron functions
var cron = require('node-cron');

const path = require('path');
const fs = require('fs');
// only for cron functions

// need
const Web3 = require('web3');

// need

var Request = require("request").defaults({ encoding: null });

const request = require('request');

var contract_details = require("../uZmln/contract");
const web3 = new Web3(new Web3.providers.HttpProvider(contract_details.provider));


var cron   = require('node-cron');

let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};

var directoryPath = path.join(__dirname);

// need code
router.get('/test', (req, res) => {
  try {
    res.json({ status: true, success: "success123" });
  } catch (e) {
    
  }
});


cron.schedule('* * * * *', () => {
  console.log("this cron working")
  pool_log.find({ "status": "Deactive" }).limit(2).exec(function (errs, resdatas) {

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

router.get('/getbasecurrency', common.originMiddleware, (req, res) => {
  try {
    cnt = { 'status': "Active" }
    pairs.aggregate([
      { $match: cnt },
      {
        $group: {
          _id: "$fromCurrency",
          decimal: { $first: "$fromCurrency_decimal" },
          contract_address: { $first: "$fromCurrency_address" },
          currency_type: { $first: "$fromCurrency_type" },
          currency_image : {$first:"$fromCurrency_i"},
        }
      },
    ]).exec(function (err, resData) {
      if (err) return res.status(500).send(err);
      res.json({ status: true, data: resData });
    })
  } catch (e) {
    
  }
});


router.post('/getpairdetails', common.originMiddleware, (req, res) => {
  try {
    var datas = {},
      values = req.body;
    if (typeof (values.basecurrency) == "undefined" || values.basecurrency == '' || values.basecurrency == null) {
      res.json({
        status: false,
        message: 'Please select currency',
        err_msg: "Need select currency"
      })
    } else {
      pairs.find({ "fromCurrency": values.basecurrency, "status": "Active" }).exec(function (errs, resdatas) {
       
        res.json({ status: true, data: resdatas })
      })
    }
  } catch (e) {
    
  }
});

router.post('/get_swap_pairdetails', common.originMiddleware, (req, res) => {
  try {
    var datas = {},
      values = req.body;
    if (typeof (values.basecurrency) == "undefined" || values.basecurrency == '' || values.basecurrency == null) {
      res.json({
        status: false,
        message: 'Please select currency',
        err_msg: "Need select currency"
      })
    } else {
      pairs.find({ "fromCurrency": values.basecurrency, "pair_status": "Active" }).exec(function (errs, resdatas) {
        res.json({ status: true, data: resdatas })
      })
    }
  } catch (e) {
    
  }
});

// get token balance

router.post('/gettokenbalance', common.originMiddleware, (req, res) => {
  try {
    var datas = {},
      values = req.body;
    request(values.url, function (error, response, body) {
      let data = JSON.parse(body);
      res.json({ status: true, success: "success", data: data.result });
    });
  } catch (e) {
   
  }
});

// get token balance


router.post('/create_pool_log', common.originMiddleware, (req, res) => {
  try {
    var datas = {},
      values = req.body;
    

    pool_log.create(values, async function (err, resdata) {
      let updatePreviousPools = await pool_log.update({ pair: values.pair, user_address: values.user_address }, { $set: { remove_status: false } }, { multi: true });
      res.json({ status: true, message: "success", data: "Inserted successfully" });
    });
    
  } catch (e) {
  
  }
});

router.post('/get_pooldetails', common.originMiddleware, (req, res) => {
  try {
    var datas = {},
    values    = req.body;
  
    pool_log.aggregate([
      {
        $lookup: {
          from: "IN_par-LEPTlFE1pE",
          localField: "pair",
          foreignField: "pair",
          as: "pairs"
        },
      },
      {
        $project: {
          // "pair_address": "$pairs.pair_address",
          "pair_address": { $arrayElemAt: ["$pairs.pair_address", 0] },
          "pair": "$pair",
          "fromCurrency": "$fromCurrency",
          "toCurrency": "$toCurrency",
          "fromCurrency_address": "$fromCurrency_address",
          "toCurrency_address": "$toCurrency_address",
          "from_amount": "$from_amount",
          "to_amount": "$to_amount",
          "fromCurrency_name": "$fromCurrency_name",
          "fromCurrency_type": "$fromCurrency_type",
          "toCurrency_name": "$toCurrency_name",
          "fromCurrency_decimal": { $arrayElemAt: ["$pairs.fromCurrency_decimal", 0] },
          "toCurrency_decimal": { $arrayElemAt: ["$pairs.toCurrency_decimal", 0] },
          "fromCurrency_i": { $arrayElemAt: ["$pairs.fromCurrency_i", 0] },
          "toCurrency_i": { $arrayElemAt: ["$pairs.toCurrency_i", 0] },
          "toCurrency_type": "$toCurrency_type",
          "tx_id": "$tx_id",
          "status": "$status",
          "user_address": "$user_address",
          "remove_status": "$remove_status"
        }
      },
      // "status":"Active",remove_status:false
      { $match: { "user_address": values.address, "status": "Active" ,"remove_status":false} ,  },
    ]).exec(function (err, resData) {
      if (err) return res.status(500).send(err);
      if (resData.length > 0) {
        res.json({ status: true, message: "Already creadted", data: resData });
      } else {
        res.json({ status: false, message: "No Data Found" });
      }
    })
  } catch (e) {
   
  }
});

// create pair
  router.post('/createpair', common.originMiddleware , async function(req,res){
    try {
      let values  = req.body;

      let pair  = values.fromCurrency+"_"+values.toCurrency;

      pairs.find({"pair":pair,"remove_status":false }).exec(function(err,resData){
        if(resData.length > 0) {
          res.json({ status:true , msg:"already added"});
        } else {
          var obj     = {
            "pair"                : values.fromCurrency+"_"+values.toCurrency,
            "fromCurrency"        : values.fromCurrency,
            "toCurrency"          : values.toCurrency,
            "fromCurrency_i"      : values.fromCurrency_img,
            "toCurrency_i"        : values.toCurrency_img,
            "fromCurrency_address": values.fromCurrency_address,
            "toCurrency_address"  : values.toCurrency_address,
            "fromCurrency_type"   : values.fromCurrency_type,
            "toCurrency_type"     : values.toCurrency_type,
            "fromCurrency_name"   : values.fromCurrencyname,
            "toCurrency_name"     : values.toCurrencyname,
            "fromCurrency_decimal": values.fromCurrency_decimal,
            "toCurrency_decimal"  : values.toCurrency_decimal,
            "created_by"          : values.created_by,
            "created_by_address"  : values.created_by_address,
          }
          pairs.create(obj,function(err,resdata){
            if (err) return res.status(500).send(err);
            res.json({ status:true, msg:"pair creadte" ,data:values.fromCurrency+"_"+values.toCurrency});
          });
        }
      });
    } catch(e) {
     
    }
  });
// create pair





router.post('/getSinglePair', async function (req, res) {
  try {
    let data = req.body;
    let getPair = await pairs.findOne({ pair: data.pair }).lean();
    res.json({ status: true, data: getPair });
  } catch (e) {
    
  }
});

router.post('/poollist', async function (req, res) {
  try {
    var skip = req.body.page.pageNumber * req.body.page.size;
    var limit = req.body.page.size;
    let prop1 = req.body.sorting.prop;

    var dir = req.body.sorting['dir'];
    var srt = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt = {};
    var search = req.body.search;
    if (req.body.search != "") {
      cnt = { $or: [{ 'user_address': { $regex: '.*' + search + '.*', $options: 'i' } }, { 'pair': { $regex: '.*' + search + '.*', $options: 'i' } }, { 'tx_id': { $regex: '.*' + search + '.*', $options: 'i' } }] };
    }

    async.parallel({
      totalCount: function (cb) {
        pool_log.find(cnt).countDocuments().exec(cb);
      },
      poolData: function (cb) {
        pool_log.find(cnt).limit(limit).skip(skip).sort(srt).exec(cb)

      },
    }, function (err, results) {
      if (err) return res.status(500).send(err);
      apiresponse.data = [];
      apiresponse.status = true;
      apiresponse.data = results.poolData;
      apiresponse.totalCount = results.totalCount;
      apiresponse.message = "";
      res.json(apiresponse);
    })
  }
  catch (e) {
   
  }
});


//remove pool apis

router.post('/add_remove_pool', common.originMiddleware, async function (req, res) {
  try {
    let reqData = req.body;
    let transactionExists = await remove_pool.findOne({ tx_id: reqData.tx_id }).lean();
    var rpoollogs = await pool_log.findOne({  pair: reqData.pair, user_address: reqData.user_address }).lean();
    var pert = Number(reqData.percentage);
    if (!transactionExists) {
      let holdersDetails = await remove_pool.create(reqData);
      if (holdersDetails) {

        
        if(rpoollogs.remove_percentage == NaN || rpoollogs.remove_percentage == undefined){
          remain_pert = pert;
        }else{
          var remain_pert  = Number(rpoollogs.remove_percentage);
          remain_pert = Number(remain_pert+pert);
        }
        
        var msg = "Removed Successfully";


        if (remain_pert >= 100) {
          var rstatus = {remove_status:true,"remove_percentage":100};
        }else{
           var rstatus = {remove_status:false,"remove_percentage":remain_pert};
           msg = "successfully removed "+remain_pert +"%";
        }
      let poolUpdate = await pool_log.update({ pair: reqData.pair, user_address: reqData.user_address }, { $set: rstatus }, { multi: true });

        res.json({ status: true, msg: msg});
      } else {
        res.json({ status: false, msg: 'Unable to Create Exchange' });
      }
    } else {
      res.json({ status: false, msg: 'Transaction already Exists' });
    }
  } catch (e) {
    
  }
});

router.post('/remove_poollist', common.originMiddleware, async function (req, res) {
  try {
    var skip = req.body.page.pageNumber * req.body.page.size;
    var limit = req.body.page.size;
    let prop1 = req.body.sorting.prop;

    var dir = req.body.sorting['dir'];
    var srt = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt = {};
    var search = req.body.search;
    if (req.body.search != "") {
      cnt = { $or: [{ 'user_address': { $regex: '.*' + search + '.*', $options: 'i' } }, { 'pair': { $regex: '.*' + search + '.*', $options: 'i' } }, { 'tx_id': { $regex: '.*' + search + '.*', $options: 'i' } }] };
    }

    async.parallel({
      totalCount: function (cb) {
        remove_pool.find(cnt).countDocuments().exec(cb);
      },
      poolData: function (cb) {
        remove_pool.find(cnt).limit(limit).skip(skip).sort(srt).exec(cb)

      },
    }, function (err, results) {
      if (err) return res.status(500).send(err);
      apiresponse.data = [];
      apiresponse.status = true;
      apiresponse.data = results.poolData;
      apiresponse.totalCount = results.totalCount;
      apiresponse.message = "";
      res.json(apiresponse);
    })
  }
  catch (e) {
  }
});





module.exports = router;