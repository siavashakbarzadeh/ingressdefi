var express     = require('express');
var router      = express.Router();
let common      = require('../GVyc/common');
var mongoose    = require('mongoose');
var pairs       = mongoose.model('pairs');
const Web3      = require('web3');

router.get('/getPooledPairs', common.originMiddleware, async function (req, res) {
    try{
        let pairDetails = await pairs.find({contract_add_status:true});
        if(pairDetails && pairDetails.length > 0){
            res.json({status:true, data:pairDetails});
        }else{
            res.json({status:false, msg:'No data Found'});
        }
    } catch(e) {
  }
});

router.post('/updateAddContractStatus', common.originMiddleware, async function (req, res) {
    try {
        let values      = req.body;
        let updatedPair = await pairs.update({_id:values.id},{$set:{contract_add_status:true, poolId:values.poolId, pooltx_id:values.pair_stack_tx_id}});
        if(updatedPair){
            res.json({status:true, msg:'Updated Successfully'});
        }else{
            res.json({status:false, msg:'Error in updating data'});
        }
    } catch(e) {
  }
});

router.post('/getPoolId',common.originMiddleware, async function(req,res){
    try{
        let values = req.body;
        let pairDetails = await pairs.findOne({pair_address:values.pairAddress}).lean();
        if(pairDetails){
            res.json({status:true, data:pairDetails});
        }else{
            res.json({status:false, msg:'No data Found'});
        }
    } catch(e) {
  }
})

module.exports = router;