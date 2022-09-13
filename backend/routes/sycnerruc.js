var express     = require('express');
var router      = express.Router();
let common      = require('../GVyc/common');
var async       = require('async');
var mongoose    = require('mongoose');

var currency    = mongoose.model('currency');

var ObjectId    = mongoose.Types.ObjectId;
var round       = require('mongo-round');
var oArray      = []
var validator   = require('node-validator');
var cron        = require('node-cron');
// need
const Web3      = require('web3');
// need
var Request     = require("request").defaults({ encoding: null });
const request   = require('request');
var contract_details = require("../uZmln/contract");
const web3      = new Web3(new Web3.providers.HttpProvider(contract_details.provider));

let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};

// need code
router.get('/test', (req, res) => {
  try {
    res.json({ status: true, success: "success123" });
  } catch (e) {
  }
});

// currency list in admin side  
router.post('/currency_list', common.originMiddleware, (req, res) => {
  try {
    values    = req.body;
    
    var skip    = req.body.page.pageNumber *  req.body.page.size;
    var limit   = req.body.page.size;
    let prop1   = req.body.sorting.prop;

    var dir     = req.body.sorting['dir'];
    var srt     = {}
    srt[prop1]  = dir == 'desc' ? -1 : 1;

    var cnt     = {};
    var search  = req.body.search;
    if(req.body.search != "") {
      cnt       = {$or:[{'currencyName': { $regex: '.*' + search + '.*',$options: 'i' }},{'currencySymbol': { $regex: '.*' + search + '.*',$options: 'i' }},{'currency_type': { $regex: '.*' + search + '.*',$options: 'i' }},{'currency_image': { $regex: '.*' + search + '.*',$options: 'i' }},{'contract_address': { $regex: '.*' + search + '.*',$options: 'i' }},{'currency_decimal': { $regex: '.*' + search + '.*',$options: 'i' }},{'status': { $regex: '.*' + search + '.*',$options: 'i' }},{'created_date': { $regex: '.*' + search + '.*',$options: 'i' }}]};
    }

    async.parallel({
      holdersTotalCount:function(cb) {
        currency.find(cnt).countDocuments().exec(cb);
      },
      holdersData:function(cb) {
        currency.find( cnt ).limit(limit).skip(skip).sort( srt ).lean().exec(cb);
      },
    }, async function(err,results){
      if (err) return res.status(500).send(err);
      apiresponse.data    = [];
      apiresponse.status  = true;
      let totalData       = results.holdersData;
      apiresponse.data    = totalData;
      apiresponse.datacount = results.holdersTotalCount;
      apiresponse.message = "";
      res.json(apiresponse);
    })

  } catch(e) {
  }
});

router.post('/single_currency_data', common.originMiddleware, async (req, res) => {
  try {
    values    = req.body;
    await currency.find({ "currencySymbol": values.currencySymbol }).exec(async function (errs, resdatas) {
      if (resdatas.length > 0) {
        res.json({ status: true, data: "Data not found" });
      } else {
        res.json({ status: true, data: resdatas });
      }
    });
  } catch(e) {
  }
});


// insert currency
router.post('/insert_currency', common.originMiddleware, async (req, res) => {
  try {
    values    = req.body;
    currency.find({"currencySymbol":values.currencySymbol }).exec(function(err,resData){
      if(resData.length > 0) {
        res.json({ status:true , msg:"already added"});
      } else {
        var obj     = {
          "currencyName"        :values.currencyName,
          "currencySymbol"      :values.currencySymbol,
          "currency_type"       :values.currency_type,
          "currency_image"      :values.currency_image,
          "contract_address"    :values.contract_address.toLowerCase(),
          "currency_decimal"    :values.currency_decimal,
          "status"              :"Active",
        }
        currency.create(obj,function(err,resdata){
          if (err) return res.status(500).send(err);
          res.json({ status:true, msg:"inserted"});
        });
      }
    });
  } catch(e) {
  }
});

module.exports = router;