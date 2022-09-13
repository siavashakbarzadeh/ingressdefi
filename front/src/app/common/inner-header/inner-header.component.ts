import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from "@angular/router";
import { ContractDetails } from 'src/assets/files/contract';
import { DataService } from "src/app/common/services/api/data.service";
import { CommonContractService } from "src/app/common/services/metamask/common-contract/common-contract.service";
import { MetamaskService } from "src/app/common/services/metamask/common/metamask.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

declare let window: any;

@Component({
	selector: 'app-inner-header',
	templateUrl: './inner-header.component.html',
	styleUrls: ['./inner-header.component.css']
})

export class InnerHeaderComponent implements OnInit { 

	siteObj: any = {};
  	isLogin = localStorage.getItem('Game-Token');
  	accountShort = "";
  	balance = "";
	governanceTokenBalance: any;
	modalRef?: BsModalRef;
	@ViewChild("connectModal", { static: false }) connectModal: any;

	constructor(
		private metamaskService: MetamaskService,
		public commonContractService: CommonContractService,
		public dataService: DataService,
		private router: Router,
		private toasterService: ToasterService,
		private modalService: BsModalService,
		) { 

	/*	if (!this.isLogin) {
			this.toasterService.show(false, 'Please login to continue');
			this.router.navigate(['/']);
		}
		else {*/
			
			this.dataService.showWalletList.subscribe((suc) => {
				if (suc) {
					this.modalRef = this.connectModal.show();
				}
			});

			this.dataService.isMetaReady.subscribe((suc) => {
				if (suc) {
					this.getGovernanceTokenBalance();
					this.GetEbalance();
				} else {
				}
			});

			this.dataService.accountsChanged.subscribe((suc) => {
				if (suc) {
					this.getGovernanceTokenBalance();
					this.GetEbalance();
				}
			});
		//}

	}

	ngOnInit() {
		// this.getGovernanceTokenBalance();
		this.siteSettings();
		if (this.isLogin) {
	      this.accountShort = this.dataService.metaDeatails.accountShort;
	      this.balance = this.dataService.metaDeatails.balance;
	    }
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

	async GetEbalance() {
		this.metamaskService
		.GetEbalance()
		.then(async (result) => {
			console.log(result, "result");
			if (result.status) {
				this.dataService.metaDeatails.balance = result.balance;
			} else {
			}
		})
		.catch((error) => {});
	}

	connector:any;
	async connctEwallet(walletname: any) {
		console.log('walletname', walletname);
		switch (walletname) {
			case "metamask":
			sessionStorage.setItem("Wallettype", "metamask");
			localStorage.setItem("Wallettype", "metamask");
			window.web3 = window.web3.currentProvider;
			window.web3 = new window.Web3(window.ethereum);
        // code block
        break;
        case "trustwallet":
        sessionStorage.setItem("Wallettype", "trustwallet");
        localStorage.setItem("Wallettype", "trustwallet");
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum);
        // code block
        break;
        case "mathwallet":
        sessionStorage.setItem("Wallettype", "mathwallet");
        localStorage.setItem("Wallettype", "mathwallet");
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum);
        // code block
        break;
        case "walletconnect":
        // this.connector = new WalletConnect({
        //   bridge: "https://bridge.walletconnect.org" // Required
        // });
        
        sessionStorage.setItem("Wallettype", "walletconnect");
        localStorage.setItem("Wallettype", "walletconnect");
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum);
        // code block
        break;
        case "binanceconnect":
        sessionStorage.setItem("Wallettype", "binanceconnect");
        localStorage.setItem("Wallettype", "binanceconnect");
        // await BinanceChain.enable();
        window.web3 = new window.Web3(window.BinanceChain);
        // code block
        break;
        default:
      // code block
  }
    // return false;
    this.metamaskService.connectMetaMask("clicked").then((suc) => {
    	let responseData: any = suc;
    	this.toasterService.show(responseData.status, responseData.message);
    	if (responseData.status) {
    		this.dataService.postRequest('users/createProfile', {key: this.dataService.metaDeatails.account}).subscribe((res:any) => {
    			if (res.status) {
    				localStorage.setItem("Game-Token", res.gametoken);
    				this.toasterService.show(res.status, res.message);
    				this.GetEbalance();
    				sessionStorage.setItem("isMetaLogin", "true");
    				this.modalRef.hide();
    			}
    		})
    	}
    });
}

siteSettings() {
	this.dataService.getRequest('admin/siteinform').subscribe((suc: any) => {
		this.siteObj = suc.data;
	});
}

logout() {
	this.dataService.metaLogout();
	localStorage.clear();
	this.router.navigateByUrl("/");
}
}
