  import { BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { DataService } from "src/app/common/services/api/data.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { MetamaskService } from "src/app/common/services/metamask/common/metamask.service";
import { CommonContractService } from "src/app/common/services/metamask/common-contract/common-contract.service";
import { StakeService } from "src/app/common/services/metamask/stake/stake.service";
import { Router } from "@angular/router";
import { ContractDetails } from 'src/assets/files/contract';
import { NgForm } from '@angular/forms';

declare let window: any;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	stakingPairs = [];
	public Homepagevariable: any = {
		governanceTokenHarvset : 0,
	};

	governanceTokenBalance: any = 0;
	governanceTokenSupply: any = 0;

	model: any = {};
	cmsContent: any = {};
	blogContent: any = {};
	activity: any = {};
	artist: any = {};
	topcollectors: any = {};

	limit = 6;
	skip = 6;
	isLogin = localStorage.getItem('Game-Token');

	@ViewChild('form',{static:false,read:NgForm}) form:any;

	paginationConfig = {
		itemsPerPage:6,
		currentPage: 1,
		totalItems: this.activity
		  ? this.activity.length
		  : 0,
	  };
	  isActivityViewMore=false;
	constructor(
		public dataService: DataService,
		private metamaskService: MetamaskService,
		private commonContractService: CommonContractService,
		private stakeService: StakeService,
		private toasterService: ToasterService,
		private router: Router
		) {

	}

	ngOnInit() {
		this.dataService.isOverlay = false;
		this.getGovernanceTokenBalance();
		this.getCms();
		this.getBlogs();
		this.getActivity();
		this.topCollectors();
		this.trendings();
	}

	/*goto(value) {
	    this.router.navigateByUrl("/" + value);
	}*/

	/*async getPolledPairs() {
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
	}*/

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

	/*getTotalsupply() {
	    this.commonContractService
	      .GetTotalSupply(ContractDetails.governance_token_contract)
	      .then((suc) => {
	        if (suc.totalsupply) {
	          this.governanceTokenSupply = suc.totalsupply;
	        } else {
	          this.governanceTokenSupply = 0;
	        }
	    });
	}*/

	onSubmit(news:NgForm) {
		var data = news.value;
		this.dataService.postRequest("subscribe", data).subscribe((suc: any) => {
			if (suc.status) {
				this.toasterService.show(true, suc.message);
			} else {
				this.toasterService.show(false, suc.message);
			}
		});
	}

	getCms() {
		var data = {page :'home'};
		this.dataService.postRequest("cms", data).subscribe((suc: any) => {
			if (suc.status) {
				var res = suc.data;
				this.cmsContent = suc.data;
				this.dataService.footerContent.emit(res[7].pagecontent);
			} else {
			}
		});
	}

	getBlogs() {
		var data = {page :'home', skip : 0,limit : 3};
		this.dataService.postRequest("blogs", data).subscribe((suc: any) => {
			if (suc.status) {
				this.blogContent = suc.data;
				this.blogContent.sucs = 1;
			} else {
			}
		});
	}

	myFunc(blog_id: any) {
		this.router.navigate(['/blog-details/'], {queryParams:{id: encodeURIComponent(blog_id)}});
	}

	getActivity() {
		this.dataService.postRequest("getActivity", { skip : 0,limit : this.limit }).subscribe((suc) => {
			let responseData: any = suc;
			if (responseData.status) {
				this.activity = responseData.data;
				if(Number(this.activity.length)>6){
					this.isActivityViewMore = true;
				}
			}
		});
	}

	trendings() {
		this.dataService.getRequest("topartist").subscribe((suc) => {
			let responseData: any = suc;
			if (responseData.status) {
				this.artist = responseData.data;
			}
		});
	}

	topCollectors() {
		this.dataService.getRequest("topcollectors").subscribe((suc) => {
			let responseData: any = suc;
			if (responseData.status) {
				this.topcollectors = responseData.data;
			}
		});
	}

	goto(){
		this.isLogin = localStorage.getItem('Game-Token');
		if(this.isLogin){
			this.router.navigateByUrl('/import');
		}else{
			this.dataService.modelSignup.emit(true)
		}
	}
}
