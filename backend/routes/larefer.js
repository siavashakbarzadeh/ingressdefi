var express     = require('express');
var router      = express.Router();
let common      = require('../GVyc/common');
var async       = require('async');
var mongoose    = require('mongoose');
var referal     = mongoose.model('referal');
var ObjectId    = mongoose.Types.ObjectId;
var Request     = require("request").defaults({ encoding: null });
const request   = require('request');

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

router.post('/addReferal', common.originMiddleware, (req, res) => {
    try {
        values = req.body;
        referal.create(values, async function (err, resdata) {
            res.json({ status: true, message: "Successfully Referral Added" });
        });
    } catch (e) {
        
    }
});

router.post('/isReferal', common.originMiddleware, (req, res) => {
    try {
        values = req.body;

        referal.find({ "user_address": values.user_address }).exec(function (errs, resdatas) {
            if (resdatas.length > 0) {
                res.json({ status: false, message: "Alread Referal Addedd" })

            } else {
                res.json({ status: true, message: "Availble To Add Referal" })

            }
        })
    } catch (e) {
        
    }
});

// user side referal history
router.post('/user_referal_list', common.originMiddleware, (req, res) => {
  try {
    var skip    = req.body.page.pageNumber *  req.body.page.size;
    var limit   = req.body.page.size;
    let prop1   = req.body.sorting.prop;

    var dir     = req.body.sorting['dir'];
    var srt     = {}
    srt[prop1]  = dir == 'desc' ? -1 : 1;

    var cnt     = {};
    var search  = req.body.search;

    let ref_address  = req.body.ref_address;

    if (search != "") {
        cnt = {
            $and: [{
                'ref_address': { '$eq': ref_address.toLowerCase() },
            },
            {
              $or: [{ 
                'user_address': { $regex: '.*' + search + '.*', $options: 'i' } },
                { 'ref_address': { $regex: '.*' + search + '.*', $options: 'i' } },
                { 'ref_txId': { $regex: '.*' + search + '.*', $options: 'i' } },
                { 'status': { $regex: '.*' + search + '.*', $options: 'i' } }
              
                ]
            }
            ]
        };
       
    } else {
        cnt = {
            '$and': [ { "ref_address": { '$eq': ref_address.toLowerCase() } } ] 
        }
    }

    async.parallel({ 
        holdersTotalCount:function(cb) {
            referal.find(cnt).countDocuments().exec(cb);
        },
        holdersData:function(cb) {
            referal.find( cnt ).limit(limit).skip(skip).sort( srt ).lean().exec(cb);
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
    });
} catch(e) {
   
}
});

// admin referal history
router.post('/referal_list', common.originMiddleware, (req, res) => {
  try {
    var skip    = req.body.page.pageNumber *  req.body.page.size;
    var limit   = req.body.page.size;
    let prop1   = req.body.sorting.prop;

    var dir     = req.body.sorting['dir'];
    var srt     = {}
    srt[prop1]  = dir == 'desc' ? -1 : 1;

    var cnt     = {};
    var search  = req.body.search;
    if(req.body.search != ""){
        cnt = {$or:[{'user_address': { $regex: '.*' + search + '.*',$options: 'i' }},{'ref_address': { $regex: '.*' + search + '.*',$options: 'i' }},{'ref_txId': { $regex: '.*' + search + '.*',$options: 'i' }},{'status': { $regex: '.*' + search + '.*',$options: 'i' }},{'created_date': { $regex: '.*' + search + '.*',$options: 'i' }}]};
    }

    async.parallel({
        holdersTotalCount:function(cb) {
            referal.find(cnt).countDocuments().exec(cb);
        },
        holdersData:function(cb) {
            referal.find( cnt ).limit(limit).skip(skip).sort( srt ).lean().exec(cb);
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

// referral amount section
router.post('/crateReferralLog', common.originMiddleware, (req, res) => {
    try {
      values = req.body;
      referal.create(values, async function (err, resdata) {
          res.json({ status: true, message: "Successfully Referral Added" });
      });
  } catch (e) {
    
  }
});
module.exports = router;