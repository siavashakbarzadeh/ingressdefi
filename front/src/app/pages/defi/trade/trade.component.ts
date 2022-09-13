import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DataService } from "src/app/common/services/api/data.service";
import { MetamaskService } from "src/app/common/services/metamask/common/metamask.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { LiqudityService } from "src/app/common/services/metamask/liqudity/liqudity.service";
import { CommonContractService } from "src/app/common/services/metamask/common-contract/common-contract.service";
import { SwapService } from "src/app/common/services/metamask/swap/swap.service";
import { ContractDetails } from 'src/assets/files/contract';
import { ActivatedRoute } from "@angular/router";


@Component({
	selector: 'app-trade',
	templateUrl: './trade.component.html',
	styleUrls: ['./trade.component.css']
})

export class TradeComponent implements OnInit {

	isLiquidityActive = false;
  	isShowImportPool = false;

  	activeTab: any = "Swap";

  	constructor(
  		public dataService: DataService,
  		private metamaskService: MetamaskService,
  		private toasterService: ToasterService,
  		private liqudityService: LiqudityService,
  		private commonContractService: CommonContractService,
  		private route: ActivatedRoute,
  		private swapService: SwapService
  		) 
  	{
  		this.route.queryParams.subscribe((params) => {
  			let pair = params["pair"];
  			if (pair) {
  				this.isLiquidityActive = true;
  				this.activeTab = "Liquidity";
  			}
  		});
  	}

  	ngOnInit() {
  	}


  	changeTab(val: string) {
  		this.activeTab = val;
  		this.isShowImportPool = false;
  	}

  	showImportPool(event) {
  		this.activeTab = "Liquidity";

  		if (event) {
  			this.isShowImportPool = true;
  		} else {
  			this.isShowImportPool = false;
  		}
  	}
}
