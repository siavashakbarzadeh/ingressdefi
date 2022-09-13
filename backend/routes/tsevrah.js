var express      = require('express');
var router       = express.Router();
let common       = require('../GVyc/common');
var async        = require('async');
var mongoose     = require('mongoose');
var harvest      = mongoose.model('harvest');
var pairs        = mongoose.model('pairs');
const Web3       = require('web3');
const web3       = new Web3(new Web3.providers.HttpProvider(""));
var cron         = require('node-cron');


let apiresponse = {
    status: 200,
    message: "",
    data: [],
    cmscount: 0
  }

router.post('/createHarvest', common.originMiddleware, async function (req, res){
    try{
        let reqData = req.body;
        let transactionExists = await harvest.findOne({txId:reqData.txId}).lean();
        if(!transactionExists){
            let holdersDetails = await harvest.create(reqData);
            if(holdersDetails){
                res.json({status:true, msg:'Created Successfully'});
            }else{
                res.json({status:false, msg:'Unable to Create Harvest'});
            }
        }else{
            res.json({status:false, msg:'Transaction already Exists'});
        }
    } catch(e) {
    }
});

router.post('/updateHarvest', common.originMiddleware, async function(req, res){
    try{
        let reqData = req.body;
        let updateDetails = await harvest.update({_id:reqData._id},{$set:{status:reqData.status}});
        if(updateDetails){
            res.json({status:true, msg:'Updated Successfully'});
        }else{
            res.json({status:false, msg:'Unable to update Deposit'});
        }
    }catch(e){
    }
})

router.post('/harvestlist', async function(req,res){
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
        cnt = {$or:[{'holderAddress': { $regex: '.*' + search + '.*',$options: 'i' }},{'balance': { $regex: '.*' + search + '.*',$options: 'i' }},{'created_date': { $regex: '.*' + search + '.*',$options: 'i' }}]};
      }
  
       async.parallel({
        holdersTotalCount:function(cb) {
            harvest.find(cnt).countDocuments().exec(cb);
        },
        holdersData:function(cb) {
            harvest.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
  
           },
        }, async function(err,results){
            if (err) return res.status(500).send(err);
            apiresponse.data = [];
            apiresponse.status = true;
            apiresponse.data = results.holdersData;
            apiresponse.holderscount = results.holdersTotalCount;
            apiresponse.message = "";
            
            res.json(apiresponse);
        })
     }
     catch(e){
     }
  });




module.exports = router;