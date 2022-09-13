import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DataService } from "src/app/common/services/api/data.service";
import { StakeService } from "src/app/common/services/metamask/stake/stake.service";
import { MetamaskService } from "src/app/common/services/metamask/common/metamask.service";
import { CommonContractService } from "src/app/common/services/metamask/common-contract/common-contract.service";
import { Router } from "@angular/router";

declare let window: any;

@Component({
  selector: 'app-staking',
  templateUrl: './staking.component.html',
  styleUrls: ['./staking.component.css']
})
export class StakingComponent implements OnInit {

 stakingPairs = [];
 stakingPairsDatas = [];
 stakingPairSingleObj: any;
 isSingleStake = false;
 isgetPolledPairsLoading = true;

 constructor(
   public dataService: DataService,
   private stakeService: StakeService,
   private metamaskService: MetamaskService,
   private commonContractService: CommonContractService,
   public changeDetectorRef: ChangeDetectorRef,
   private router: Router
   ) { }

 ngOnInit() {
    this.getPolledPairs();
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

  metaFunctions() {
    this.stakingPairs.map(async (item) => {
      await this.getStakedAmount(item.poolId).then((suc) => {
        item.staked_amount = suc;
      });
    });
    this.changeDetectorRef.detectChanges();
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
          return staked_amount;
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
        this.isSingleStake = true;
        this.changeDetectorRef.detectChanges();
      }
    } else {
      this.dataService.showWalletList.emit(true);
      return;
    }
  }

}
