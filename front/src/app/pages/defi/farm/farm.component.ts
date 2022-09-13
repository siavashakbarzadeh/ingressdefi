import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { DataService } from "src/app/common/services/api/data.service";
import { StakeService } from "src/app/common/services/metamask/stake/stake.service";
import { MetamaskService } from "src/app/common/services/metamask/common/metamask.service";
import { CommonContractService } from "src/app/common/services/metamask/common-contract/common-contract.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { FooterService } from "src/app/common/footer/footer.service";
import { ContractDetails } from 'src/assets/files/contract';

declare let window: any;

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  isCollapsed = false;

  stakingPairs = [];
  stakingPairsDatas = [];
  isCollapseds = [];

  stakingPairSingleObj: any;

  isSingleStake = false;
  isStakeAvailable = false;
  isClaimAvailable = false;

  isgetPolledPairsLoading = true;

  // Filter
  isStakedOnly = false;
  stackedLength = 0;
  isTable = true;

  master_stake_address;

  @ViewChild("top", { static: false }) "top";

  constructor(
  	public dataService: DataService,
    private stakeService: StakeService,
    private metamaskService: MetamaskService,
    private commonContractService: CommonContractService,
    private toasterService: ToasterService,
    private changeDetectorRef: ChangeDetectorRef,
    private footerService: FooterService
  ) 
  { 
  	this.master_stake_address = ContractDetails.master_stake_address;
  }

  	ngOnInit() {
  		this.getPolledPairs();
  	}

	filter(type) {
	    if (type == "stakedOnly") {
	      this.stackedLength = this.stakingPairs.filter(function (item: any) {

          console.log(item, 'type');
	        return item.staked_staus == true;
	      }).length;
	    }
	}

	changeView(type) {
	    console.log(type, "typetype");
	    if (type == "table") {
	      this.isTable = true;
	    } else {
	      this.isTable = false;
	    }
	}

  	metaCallCommonFunction() {
    	//  After Check
    	this.dataService.isMetaReady.subscribe((suc) => {
      		if (suc) {
        		this.metaFunctions();
      		}
    	});

    	//  Before Check
    	if (this.dataService.metaDeatails.isMetaLogin) {
      		this.metaFunctions();
    	}
  	}

  	toTop() {
    	// window.scroll(0, 0);
    	this.top.nativeElement.scrollIntoView({
      		behavior: "smooth",
      		block: "start",
      		inline: "nearest",
    	});
  	}

  	getBack() {
      console.log('getBack called');
    	this.isSingleStake = false;
    	this.changeDetectorRef.detectChanges();
  	}

	isCollapsedOpen() {
	    console.log("ue");
	    this.isCollapsed = true;
	    this.changeDetectorRef.detectChanges();
	}

	getPolledPairs() {
	    this.isgetPolledPairsLoading = true;
	    this.dataService.getRequest("farming/getPooledPairs").subscribe((suc) => {
	      let responseData: any = suc;

	      if (responseData.status) {
	        this.stakingPairs = responseData.data;
	        this.metaCallCommonFunction();
	      }
	      this.isgetPolledPairsLoading = false;
	    });
	}

	async getAprCalculation(poolId, priceOfToken) {
	    // APR =(Price of Token * No.of Rewards<poolInfo> * 365 )

	    return this.stakeService.GetPoolInfo(poolId).then((suc) => {
	      if (suc.status) {
	        console.log(suc , "____________________________________________________________ sucess");
	        let noReward = +suc.share * +suc.allocPoint;
	        let per = priceOfToken * noReward * 365;

	        return per.toFixed(2);
	      }
	    });
	}

	metaFunctions() {
	    this.stakingPairs.map(async (item) => {
	      	await this.setPairBalance(item.pair_address).then((suc) => {
	        	item.avilableStakeAmount = suc.balance;
	        	item.avilableStakeAmountRaw = suc.rawbalance;

	        	if (+suc.balance > 0) {
	          		item.isStakeAvailable = true;
	        	} else {
	          		item.isStakeAvailable = false;
	        	}
	    	});

		    await this.getRewardAmount(item.poolId).then((suc) => {
		        item.reward_amount = suc;

		        if (+suc > 0) {
		          item.isClaimAvailable = true;
		        } else {
		          item.isClaimAvailable = false;
		        }
		    });

		    await this.getStakedAmount(item.poolId).then((suc: any) => {
		        item.staked_amount = suc.amount;
		        item.staked_amountRaw = suc.amountRaw;

		        if (+suc.amount > 0) {
		          item.staked_staus = true;
		        } else {
		          item.staked_staus = false;
		        }
		    });

		    await this.footerService.getPricePoolshare().then(async (suc) => {
		        console.log(suc , "+++++++++++++++++++++++++++++++++ suc")

		        await this.getAprCalculation(item.poolId, suc).then(
		          (percentage: any) => {
		            item.aprPercentage = percentage;
		          }
		        );
		    });

		    await this.getTotalSupply(item.pair_address).then((suc) => {
		        item.totalLiqudity = suc;
		    });

	      	this.changeDetectorRef.detectChanges();
	    });

	    this.changeDetectorRef.detectChanges();
	}

  	async getTotalSupply(contractAddress) {
    	return this.commonContractService
      		.GetTotalSupply(contractAddress)
      		.then(async (suc) => {
        		if (suc.status) {
          			return suc.totalsupply;
        		} else {
          		return 0.0;
        	}
      	})
      	.catch((err) => {
        	console.log("reward false");
      	});
  	}

  	setPairBalance(pair_address) {
    	return this.commonContractService
      		.GetTokenbalance(pair_address)
      		.then((suc) => {
        		if (suc.status) {
          			return suc;
        		} else {
          			return 0.0;
        		}
      		});
  	}

  	async getRewardAmount(poolId) {
    	return this.stakeService
      		.GetRewardamount(poolId)
      		.then(async (suc) => {
        		if (suc.status) {
		          let reward_amount = await window.web3.utils.fromWei(
		            suc.result.toString(),
		            "ether"
		          );
          			return reward_amount;
        		} else {
          			return 0.0;
        		}
      		})
      		.catch((err) => {
        	console.log("reward false");
      	});
  	}

  	async getStakedAmount(poolId) {
    	return this.stakeService
      		.GetStakedamount(poolId)
      		.then(async (suc) => {
        		if (suc.status) {
          			let staked_amount = await window.web3.utils.fromWei(
            		suc.amount.toString(),
            		"ether"
          		);
          		console.log(staked_amount, "staked_amount");

          		let stakeData = {
            		amountRaw: suc.amount,
            		amount: staked_amount,
          		};

          		return stakeData;
        	} else {
          		return 0.0;
        	}
      	})
      	.catch((err) => {
        	console.log("reward false");
      	});
  	}

  	async stake(stakingPairObj) {
    	if (this.dataService.metaDeatails.isMetaLogin) {
      		let isChainId: any = await this.metamaskService.checkChainIdCall();
      		if (isChainId) {
        		this.stakingPairSingleObj = stakingPairObj;
            console.log(this.stakingPairSingleObj, 'this.isChainId'); 
        		this.isSingleStake = true;
        		this.changeDetectorRef.detectChanges();
      		}
    	} else {
      		this.dataService.showWalletList.emit(true);
      		return;
    	}
  	}

}
