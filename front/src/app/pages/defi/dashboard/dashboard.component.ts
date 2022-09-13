import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/common/services/api/data.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { MetamaskService } from "src/app/common/services/metamask/common/metamask.service";
import { CommonContractService } from "src/app/common/services/metamask/common-contract/common-contract.service";
import { StakeService } from "src/app/common/services/metamask/stake/stake.service";
import { Router } from "@angular/router";
import { ContractDetails } from 'src/assets/files/contract';
declare let window: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	stakingPairs = [];
	  public Homepagevariable: any = {
	    governanceTokenHarvset : 0,
	  };

	profile: any = {};
	collection: any = {};

	governanceTokenBalance: any = 0;
  	governanceTokenSupply: any = 0;

  	constructor(
  		public dataService: DataService,
	    private metamaskService: MetamaskService,
	    private commonContractService: CommonContractService,
	    private stakeService: StakeService,
	    private toasterService: ToasterService,
	    private router: Router
  	) 
  	{ 
  		this.metaCallCommonFunction();
  	}

  	ngOnInit() {
  		this.countCollection();
  		this.countNFT();
  	}

	metaCallCommonFunction() {
	    //  After Check

	    this.dataService.isMetaReady.subscribe((suc) => {
	      if (suc) {
	        this.getPolledPairs();
	        this.getGovernanceTokenBalance();
	        this.getTotalsupply();
	      }
	    });

	    //  Before Check
	    if (this.dataService.metaDeatails.isMetaLogin) {
	      this.getPolledPairs();
	      this.getGovernanceTokenBalance();
	      this.getTotalsupply();
	    }
	}

	goto(value) {
	    this.router.navigateByUrl("/" + value);
	}

	async getPolledPairs() {
	    console.log("yes heheheheheheheeh")
	    this.Homepagevariable.governanceTokenHarvset = 0;
	    this.dataService.getRequest("farming/getPooledPairs").subscribe((suc) => {
	      let responseData: any = suc;
	      if (responseData.status) {
	        this.stakingPairs = responseData.data;
	        let get_farmpairdata = responseData.data;
	        let governanceTokenHarvset = 0;
	        get_farmpairdata.map(async (items) => {
	          this.stakeService
	            .GetRewardamount(items.poolId)
	            .then(async (result) => {
	              console.log("______________ result", "resultresult" , result)
	              if (result.status) {
	                governanceTokenHarvset = window.web3.utils.fromWei(
	                  result.result.toString(),
	                  "ether"
	                );
	                this.Homepagevariable.governanceTokenHarvset =
	                  +this.Homepagevariable.governanceTokenHarvset + +governanceTokenHarvset;
	              } else {
	                this.Homepagevariable.governanceTokenHarvset =
	                  +this.Homepagevariable.governanceTokenHarvset + 0;
	              }
	            })
	            .catch((error) => {
	              this.Homepagevariable.governanceTokenHarvset =
	                +this.Homepagevariable.governanceTokenHarvset + 0;
	              console.log(" gettvlvalue error 2---->", error);
	            });
	            this.Homepagevariable.governanceTokenHarvset = 0;
	        });
	      }
	    });
	}

	getGovernanceTokenBalance() {
	    this.commonContractService
	      .GetTokenbalance(ContractDetails.governance_token_contract)
	      .then((suc) => {
	        if (suc.balance) {
	          this.governanceTokenBalance = suc.balance;
	        } else {
	          this.governanceTokenBalance = 0;
	        }
	    });
	}

	getTotalsupply() {
	    this.commonContractService
	      .GetTotalSupply(ContractDetails.governance_token_contract)
	      .then((suc) => {
	        if (suc.totalsupply) {
	          this.governanceTokenSupply = suc.totalsupply;
	        } else {
	          this.governanceTokenSupply = 0;
	        }
	    }); 
	}

	countNFT() {
		this.dataService.getRequest("collection/userNft").subscribe((suc:any) => {
			if (suc.status) {
				this.profile.count = suc.data;
			} else {
				this.profile.count = 0;
			}
		});
	}

	countCollection() {
		this.dataService.getRequest("collection/countCollection").subscribe((suc:any) => {
			if (suc.status) {
				this.collection.count = suc.data;
			} else {
				this.collection.count = 0;
			}
		});
	}

}
