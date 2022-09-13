var express      = require('express');
var router       = express.Router();
let common       = require('../GVyc/common');
var async        = require('async');
var mongoose     = require('mongoose');
var deposit      = mongoose.model('deposit');
var pairs        = mongoose.model('pairs');
const Web3       = require('web3');
var contract_details = require("../uZmln/contract");
const web3       = new Web3(new Web3.providers.HttpProvider(contract_details.provider));
var cron         = require('node-cron');

let apiresponse = {
    status: 200,
    message: "",
    data: [],
    cmscount: 0
  }

router.post('/createDeposit', common.originMiddleware, async function (req, res){
    try{
        let reqData = req.body;
        let transactionExists = await deposit.findOne({txId:reqData.txId}).lean();
        if(!transactionExists){
            let holdersDetails = await deposit.create(reqData);
            if(holdersDetails){
                res.json({status:true, msg:'Created Successfully'});
            }else{
                res.json({status:false, msg:'Unable to Create Deposit'});
            }
        }else{
            res.json({status:false, msg:'Transaction already Exists'});
        }
    } catch(e) {
    }
});

router.post('/updateDeposit', common.originMiddleware, async function(req, res){
    try{
        let reqData = req.body;
        let updateDetails = await deposit.update({_id:reqData._id},{$set:{status:reqData.status}});
        if(updateDetails){
            res.json({status:true, msg:'Updated Successfully'});
        }else{
            res.json({status:false, msg:'Unable to update Deposit'});
        }
    }catch(e){
    }
})

router.post('/depositlist', async function(req,res){
    try{
      var skip    = req.body.page.pageNumber *  req.body.page.size;
      var limit   = req.body.page.size;
      let prop1   = req.body.sorting.prop;
  
      var dir     = req.body.sorting['dir'];
      var srt     = {}
      srt[prop1]  = dir == 'desc' ? -1 : 1;
  
      var cnt     = {};
      var search  = req.body.search;
      if(req.body.search != ""){
        cnt = {$or:[{'holderAddress': { $regex: '.*' + search + '.*',$options: 'i' }},{'balance': { $regex: '.*' + search + '.*',$options: 'i' }},{'created_date': { $regex: '.*' + search + '.*',$options: 'i' }}]};
      }
  
       async.parallel({
        holdersTotalCount:function(cb) {
            deposit.find(cnt).countDocuments().exec(cb);
        },
        holdersData:function(cb) {
            deposit.find( cnt ).limit(limit).skip(skip).sort( srt ).lean().exec(cb);
  
           },
        }, async function(err,results){
            if (err) return res.status(500).send(err);
            apiresponse.data = [];
            apiresponse.status = true;
            let totalData = results.holdersData;
            for(let i=0; i<totalData.length; i++){
                let pairDetails = await pairs.findOne({pair_address:totalData[i].pairAddress}).lean();
                totalData[i].pair = (pairDetails && pairDetails.pair) ? pairDetails.pair : '';
            }
            apiresponse.data = totalData;
            apiresponse.holderscount = results.holdersTotalCount;
            apiresponse.message = "";
            
            res.json(apiresponse);
        })
     }
     catch(e){
     }
  });

  //cron for status update 
  cron.schedule('* * * * *', async () => {
    let depositData = await deposit.find({status:'Pending'});
    if(depositData && depositData.length > 0){
        for(let i=0; i<depositData.length; i++){
            let txid        = depositData[i].txId;
            web3.eth.getTransactionReceipt(txid, async function (err, result) {
                if(!err){
                    if(result.status == true){
                        let updateDeposit = await deposit.update({txId:txid},{$set:{status:'Success'}});
                    }else{
                        let updateFailDeposit = await deposit.update({txId:txid},{$set:{stauts:'Failed'}});
                    }
                }else{
                }
            });
        }
    }
  });



module.exports = router;