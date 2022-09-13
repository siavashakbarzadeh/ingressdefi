import { Injectable } from "@angular/core";
import { DataService } from "src/app/common/services/api/data.service";
import { CommonContractService } from "src/app/common/services/metamask/common-contract/common-contract.service";
import { SwapService } from "src/app/common/services/metamask/swap/swap.service";
import { ContractDetails } from 'src/assets/files/contract';
import { RouterAbi } from 'src/assets/files/router_abi';

declare let window: any;
let wethaddress = ContractDetails.WBNB_contract;

@Injectable({
  providedIn: "root",
})
export class FooterService {
  pricePoolShare: any = {};
  swapformorder = true;

  fromCurrency_address = ContractDetails.governance_token_contract;
  fromCurrency_decimal = 18;
  toCurrency_decimal = 18;

  // pair_address = "0xe6ad2b0d3a211db4c3ca35ab883a6781dc91f10e"; // GLP_BNB

  constructor(private swapservice: SwapService) {
    // this.getPricePoolshare();
  }

  async getPricePoolshare() {
    let amount_value = 1;
    let amountIn;
    let path_s = [this.fromCurrency_address, wethaddress]; // array values

    if (this.fromCurrency_decimal == 18) {
      amountIn = window.web3.utils.toWei(amount_value.toString(), "ether");
    } else {
      let decimal = Math.pow(10, this.fromCurrency_decimal);
      amountIn = (amount_value * decimal).toFixed(4);
    }

    return this.swapservice
      .getAmountsOutOld(
        ContractDetails.router_contract,
        RouterAbi,
        amountIn,
        path_s
      )
      .then(async (result) => {
        console.log("getAmountsIn ---->", result);
        if (result.status) {
          if (this.toCurrency_decimal == 18) {
            this.pricePoolShare.to_amount = (
              result.resultamount[1] / 1000000000000000000
            ).toFixed(4);
          } else {
            let decimal = Math.pow(10, this.toCurrency_decimal);
            this.pricePoolShare.to_amount = (
              result.resultamount[1] / decimal
            ).toFixed(4);
          }
          console.log(
            "this.pricePoolShare.to_amount ---->",
            this.pricePoolShare.to_amount
          );
          return this.pricePoolShare.to_amount;
        } else {
          this.pricePoolShare.to_amount = 0.0;
          return this.pricePoolShare.to_amount;
        }
      })
      .catch((error) => {
        this.pricePoolShare.to_amount = (0).toFixed(4);
        return this.pricePoolShare.to_amount;
      });

    // let amountOut;
    // if (this.toCurrency_decimal == 18) {
    //   amountOut = window.web3.utils.toWei(amount_value.toString(), "ether");
    // } else {
    //   let decimal = Math.pow(10, this.toCurrency_decimal);
    //   amountOut = amount_value / decimal;
    // }
    // this.swapservice
    //   .getAmountsInOld(
    //     ContractDetails.router_contract,
    //     RouterAbi,
    //     amountOut,
    //     path_s
    //   )
    //   .then(async (result) => {
    //     console.log("getAmountsOut ---->", result);
    //     if (result.status) {
    //       // new
    //       if (this.fromCurrency_decimal == 18) {
    //         this.pricePoolShare.from_amount = (
    //           result.resultamount[0] / 1000000000000000000
    //         ).toFixed(4);
    //       } else {
    //         let decimal = Math.pow(10, this.fromCurrency_decimal);
    //         this.pricePoolShare.from_amount = (
    //           result.resultamount[0] / decimal
    //         ).toFixed(4);
    //       }
    //       // new
    //       console.log(
    //         "this.pricePoolShare.from_amount ---->",
    //         this.pricePoolShare.from_amount
    //       );
    //     } else {
    //       this.pricePoolShare.from_amount = 0.0;
    //     }
    //   })
    //   .catch((error) => {
    //     this.pricePoolShare.from_amount = 0.0;
    //   });
  }
}
