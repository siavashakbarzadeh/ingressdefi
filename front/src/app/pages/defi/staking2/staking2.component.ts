import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from "@angular/core";
import { DataService } from "src/app/common/services/api/data.service";
import { StakeService } from "src/app/common/services/metamask/stake/stake.service";
import { MetamaskService } from "src/app/common/services/metamask/common/metamask.service";
import { CommonContractService } from "src/app/common/services/metamask/common-contract/common-contract.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";

declare let window: any;

@Component({
  selector: "app-staking2",
  templateUrl: "./staking2.component.html",
  styleUrls: ["./staking2.component.scss"],
})
export class Staking2Component implements OnInit {
  @Input() stakingPair: any = {};

  @Output() goBack = new EventEmitter();

  isUnstakeAvailable = false;
  isClaimAvailable = false;
  isStakeAvailable = false;
  istoUnstakeAmountValid = true;
  isTostakeAmountValid = true;

  constructor(
    public dataService: DataService,
    private stakeService: StakeService,
    private metamaskService: MetamaskService,
    private commonContractService: CommonContractService,
    private toasterService: ToasterService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.metaCallCommonFunction();

    this.dataService.accountsChanged.subscribe((suc) => {
      this.cancel();
    });
  }

  ngOnInit() {
    this.getPolledPairs();
  }

  getReferrerReward(txId) {
    this.stakeService.GetReferrerReward(txId).then((suc) => {
      console.log(suc, "_________ suc");

      let apiData = {};
    });
  }

  cancel() {
    this.goBack.emit(true);
  }

  metaCallCommonFunction() {}

  async getPolledPairs() {
    console.log(this.stakingPair, "stakingPair");

    await this.setPairBalance(this.stakingPair.pair_address).then((suc) => {
      this.stakingPair.avilableStakeAmount = suc.balance;
      this.stakingPair.avilableStakeAmountRaw = suc.rawbalance;
      this.stakingPair.toStakeAmount = this.stakingPair.avilableStakeAmount;
      console.log(suc.balance, 'suc.balance');
      if (+suc.balance > 0) {
        this.isStakeAvailable = true;
      } else {
        this.isStakeAvailable = false;
      }
    });

    await this.getRewardAmount(this.stakingPair.poolId).then((suc) => {
      console.log(suc, "___________ suc");
      this.stakingPair.reward_amount = suc;

      if (+suc > 0) {
        this.isClaimAvailable = true;
      } else {
        this.isClaimAvailable = false;
      }
    });

    await this.getStakedAmount().then((suc: any) => {
      this.stakingPair.staked_amount = suc.amount;
      this.stakingPair.staked_amountRaw = suc.amountRaw;
      this.stakingPair.toUnstakeAmount = suc.amount;

      if (+suc.amount > 0) {
        this.isUnstakeAvailable = true;
      } else {
        this.isUnstakeAvailable = false;
      }
    });

    setTimeout(() => {
      this.changeDetectorRef.detectChanges();
    });
  }

  checkValidAmount(type) {
    if (type == "stake") {
      if (
        this.stakingPair.avilableStakeAmount < this.stakingPair.toStakeAmount
      ) {
        this.isTostakeAmountValid = false;
      } else {
        this.isTostakeAmountValid = true;
      }
    } else {
      if (this.stakingPair.staked_amount < this.stakingPair.toUnstakeAmount) {
        this.istoUnstakeAmountValid = false;
      } else {
        this.istoUnstakeAmountValid = true;
      }
    }
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

  async getStakedAmount() {
    return this.stakeService
      .GetStakedamount(this.stakingPair.poolId)
      .then(async (suc) => {
        if (suc.status) {
          let staked_amount = await window.web3.utils.fromWei(
            suc.amount.toString(),
            "ether"
          );

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
    await this.metamaskService.checkChainIdCall();
    this.stakeApprove(stakingPairObj);
  }

  async stakeApprove(stakingPairObj) {
    // {"useraddress":"0x6eC4E4103c1527517Dd954521F0cAFd0A20B5928","poolId":"1","pairAddress":"0x44f4e7eca81cc9ab195e5e6d6fb4b5b0285dbd8b","rewardAddress":"0x64762410c8747f06fad63de242ab632cf8980ac453a1b8dbc55d87987ec1d25b","status":"Completed","amount":"2.59375"}

    let stakeAmountRaw = await window.web3.utils.toWei(
      this.stakingPair.toStakeAmount.toString(),
      "ether"
    );

    this.dataService.isOverlay = true;
    this.dataService.changeDetector.emit(true);
    this.stakeService
      .ApproveFunction(stakingPairObj.pair_address, stakeAmountRaw.toString())
      .then((suc) => {
        if (suc.status) {
          this.stakeService
            .StakeFunction(
              stakingPairObj.poolId.toString(),
              stakeAmountRaw.toString() 
            )
            .then(async (result) => {
              console.log(result, "-------- result");
              if (result.status) {
                let stakedData = {
                  userAddress: this.dataService.metaDeatails.account,
                  poolId: stakingPairObj.poolId,
                  pairAddress: stakingPairObj.pair_address,
                  rewardAddress: stakingPairObj.rewardedaddress,
                  txId: result.result.transactionHash,
                  status: "Completed",
                  amount: stakingPairObj.toStakeAmount,
                };

                this.stakeApiCall(stakedData, "deposit/createDeposit");
                this.toasterService.show(true, "Staked Successfully");
              } else {
                this.dataService.isOverlay = false;
                this.dataService.changeDetector.emit(true);
              }
            })
            .catch((err) => {
              this.dataService.isOverlay = false;
              this.dataService.changeDetector.emit(true);
            });
        } else {
          this.dataService.isOverlay = false;
          this.dataService.changeDetector.emit(true);
          this.toasterService.show(false, suc.message);
        }
      })
      .catch((err) => {
        this.dataService.isOverlay = false;
        this.dataService.changeDetector.emit(true);
        this.toasterService.show(false, err.error);
      });
  }

  async unstake(stakingPairObj) {
    this.dataService.isOverlay = true;
    this.dataService.changeDetector.emit(true);

    let unstakeAmountRaw = await window.web3.utils.toWei(
      this.stakingPair.toUnstakeAmount.toString(),
      "ether"
    );

    this.stakeService
      .UnstakeFunction(stakingPairObj.poolId, unstakeAmountRaw)
      .then(async (result) => {
        console.log(result, "-------- result");
        // 0xe2f82ead275502035c5bf5b9fdd5a6f8b7b9aa5c99b0055593278bb4bfb1a881
        // 0xb46eb92e5bcb1c08351b77ffb7b061c5b0af7c425a799d1d7572da00759f2713
        if (result.status) {
          console.log("result ---------->", result);
          let stakedData = {
            userAddress: this.dataService.metaDeatails.account,
            poolId: stakingPairObj.poolId,
            pairAddress: stakingPairObj.pair_address,
            txId: result.result.transactionHash,
            status: "Completed",
            amount: stakingPairObj.toUnstakeAmount,
          };

          this.stakeApiCall(stakedData, "withdraw/createwithdraw");

          let stakedDataToClaim = {
            userAddress: this.dataService.metaDeatails.account,
            poolId: stakingPairObj.poolId,
            pairAddress: stakingPairObj.pair_address,
            txId: result.result.transactionHash,
            status: "Completed",
            amount: stakingPairObj.reward_amount,
            pair: stakingPairObj.pair,
          };
          this.stakeApiCall(stakedDataToClaim, "harvest/createHarvest");

          this.toasterService.show(true, "Unstaked Successfully");
        } else {
          this.dataService.isOverlay = false;
          this.dataService.changeDetector.emit(true);
        }
      })
      .catch((err) => {
        this.dataService.isOverlay = false;
        this.dataService.changeDetector.emit(true);
      });
  }

  calimeReward(stakingPairObj) {
    this.dataService.isOverlay = true;
    this.dataService.changeDetector.emit(true);
    this.stakeService
      .HarvestFunction(stakingPairObj.poolId)
      .then(async (result) => {
        console.log(result, "-------- result");
        // 0x66f0041e6fa2dffcc4f4bdc1dbb04ccd5ec1eac155f23f213751a99640d2fabe
        if (result.status) {
          let stakedData = {
            userAddress: this.dataService.metaDeatails.account,
            poolId: stakingPairObj.poolId,
            pairAddress: stakingPairObj.pair_address,
            txId: result.result.transactionHash,
            status: "Completed",
            amount: stakingPairObj.reward_amount,
            pair: stakingPairObj.pair,
          };
          this.stakeApiCall(stakedData, "harvest/createHarvest");
          this.toasterService.show(true, "Claimed Successfully");
        } else {
          this.dataService.isOverlay = false;
          this.dataService.changeDetector.emit(true);
        }
      })
      .catch((err) => {
        console.log("______________", "yes");
        this.dataService.isOverlay = false;
        this.dataService.changeDetector.emit(true);
      });
  }

  stakeApiCall(stakedData, apiUrl) {
    this.dataService.postRequest(apiUrl, stakedData).subscribe((suc: any) => {
      if (suc.status) {
        this.getPolledPairs();
        this.commonContractService.getGovernanceTokenBalance();
        this.dataService.isOverlay = false;
        this.dataService.changeDetector.emit(true);
      }
    });
  }
}
