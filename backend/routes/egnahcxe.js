var express      = require('express');
var router       = express.Router();
let common       = require('../GVyc/common');
var async        = require('async');
var mongoose     = require('mongoose');
var exchange     = mongoose.model('exchange');
var pairs        = mongoose.model('pairs');


let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
}

// get first currency
router.get('/get_sw_basecurrency', common.originMiddleware ,(req,res)=>{
  try{
    cnt = {'pair_status':"Active"}
    pairs.aggregate( [ 
      {$match: cnt},
      { 
        $group : { 
          _id : "$fromCurrency",
          decimal : {$first:"$fromCurrency_decimal"},
          contract_address : {$first:"$fromCurrency_address"},
          currency_type : {$first:"$fromCurrency_type"},
          currency_image : {$first:"$fromCurrency_i"},
        }
      } ,
      ] ).exec(function(err,resData){
        if (err) return res.status(500).send(err);
        res.json({status: true, data:resData});
      })
    } catch(e) {
     
    }
  });

// get first currency
router.post('/createExchange', common.originMiddleware, async function (req, res){
  try{
    let reqData = req.body;
    let transactionExists = await exchange.findOne({txId:reqData.txId}).lean();
    if(!transactionExists){
      let holdersDetails = await exchange.create(reqData);
      if(holdersDetails){
        res.json({status:true, msg:'Created Successfully'});
      }else{
        res.json({status:false, msg:'Unable to Create Exchange'});
      }
    }else{
      res.json({status:false, msg:'Transaction already Exists'});
    }
  } catch(e) {
   
  }
});


router.post('/exchangelist', async function(req,res){
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
      cnt = {$or:[{'userAddress': { $regex: '.*' + search + '.*',$options: 'i' }},{'amountETH': { $regex: '.*' + search + '.*',$options: 'i' }},{'txId': { $regex: '.*' + search + '.*',$options: 'i' }}]};
    }

    async.parallel({
      totalCount:function(cb) {
        exchange.find(cnt).countDocuments().exec(cb);
      },
      exchangeData:function(cb) {
        exchange.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb)
      },
    },function(err,results){
      if (err) return res.status(500).send(err);
      apiresponse.data = [];
      apiresponse.status = true;
      apiresponse.data = results.exchangeData;
      apiresponse.totalCount = results.totalCount;
      apiresponse.message = "";
      res.json(apiresponse);
    })
  }
  catch(e){
  
 }
});

module.exports = router;