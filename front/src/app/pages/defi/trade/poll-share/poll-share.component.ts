import { Component, OnInit, Input } from "@angular/core";
import { SwapService } from "src/app/common/services/metamask/swap/swap.service";
import { CommonContractService } from "src/app/common/services/metamask/common-contract/common-contract.service";
import { DataService } from "src/app/common/services/api/data.service";
import { ContractDetails } from 'src/assets/files/contract';
import { RouterAbi } from 'src/assets/files/router_abi';

declare let window: any;
let wethaddress = ContractDetails.WBNB_contract;

@Component({
  selector: "app-poll-share",
  templateUrl: "./poll-share.component.html",
  styleUrls: ["./poll-share.component.scss"],
})
export class PollShareComponent implements OnInit {
  constructor(
    private swapservice: SwapService,
    private commoncontractservice: CommonContractService,
    public dataService: DataService
  ) {}

  sw_fullpair_data: any;
  pricePoolShare: any = {};

  sw_first_currency: any;
  sw_second_currency: any;

  @Input() fullPairData: any;
  @Input() swapformorder: any;  // here just get the Form is Changed or Not

  ngOnInit() {
    console.log(this.fullPairData, "fullPairData");

    this.sw_fullpair_data = this.fullPairData;

    this.sw_first_currency = this.sw_fullpair_data.fromCurrency;
    this.sw_second_currency = this.sw_fullpair_data.toCurrency;
    // this.swapformorder = !this.swapformorder;

    this.getPricePoolshare();
  }

  async getPricePoolshare() {
    let pairvalue = this.fullPairData;

    this.swapformorder = true; // here just Set swapformorder true for only Token to Token

    console.log(" pairvalue -----> ", pairvalue);
    console.log(" this.swapformorder -----> ", this.swapformorder);
    // pair balance
    this.commoncontractservice
      .GetTokenbalance(
        pairvalue.pair_address,
        this.dataService.metaDeatails.account
      )
      .then(async (result) => {
        if (result.status) {
          // let tokenBal  	= window.web3.utils.toWei(result.rawbalance.toString(), 'ether');
          let tokenBal = result.rawbalance;
          this.commoncontractservice
            .GetTotalSupply(pairvalue.pair_address)
            .then(async (result) => {
              if (result.status) {
                // let totalSupplies  	= window.web3.utils.toWei(result.rawtotalsupply.toString(), 'ether');
                let totalSupplies = result.rawtotalsupply;
                if (+tokenBal > 0) {
                  this.pricePoolShare.sharePool =
                    (tokenBal / totalSupplies) * 100;
                } else {
                  this.pricePoolShare.sharePool = 0;
                }
              } else {
                this.pricePoolShare.sharePool = 0;
              }
            })
            .catch((error) => {
              this.pricePoolShare.sharePool = 0;
            });
        } else {
          this.pricePoolShare.sharePool = 0;
        }
      })
      .catch((error) => {
        this.pricePoolShare.sharePool = 0;
      });
    // pair balance

    if (
      pairvalue.toCurrency_type == "token" &&
      pairvalue.fromCurrency_type == "token"
    ) {
      console.log("into token to token ---->");
      if (this.swapformorder) {
        console.log("normal pool share --->");
        // from amount
        let amount_value = 1;
        let path_f = [
          pairvalue.fromCurrency_address,
          pairvalue.toCurrency_address,
        ]; // array values
        let path_s = [
          pairvalue.toCurrency_address,
          pairvalue.fromCurrency_address,
        ]; // array values
        // if(this.sw_fullpair_data.fromCurrency_decimal=="18") {
        // 	amountOut            	= window.web3.utils.toWei(amount_value.toString(), 'ether');
        // } else {
        // 	let decimal         	= Math.pow(10, this.sw_fullpair_data.fromCurrency_decimal);
        // 	amountOut            	= amount_value / decimal;
        // }

        let amountIn;
        // new
        if (this.sw_fullpair_data.fromCurrency_decimal == "18") {
          amountIn = window.web3.utils.toWei(amount_value.toString(), "ether");
        } else {
          let decimal = Math.pow(
            10,
            this.sw_fullpair_data.fromCurrency_decimal
          );
          amountIn = (amount_value * decimal).toFixed(4);
        }
        // new

        this.swapservice
          .getAmountsInOld(
            ContractDetails.router_contract,
            RouterAbi,
            amountIn,
            path_f
          )
          .then(async (result) => {
            if (result.status) {
              if (this.sw_fullpair_data.toCurrency_decimal == "18") {
                this.pricePoolShare.to_amount =
                  result.resultamount[0] / 1000000000000000000;
              } else {
                let decimal = Math.pow(
                  10,
                  this.sw_fullpair_data.toCurrency_decimal
                );
                this.pricePoolShare.to_amount =
                  result.resultamount[0] / decimal;
              }
            } else {
              this.pricePoolShare.to_amount = 0.0;
            }
          })
          .catch((error) => {
            this.pricePoolShare.to_amount = 0.0;
          });
        // to amount
        // let amountIn           		= 0;
        // if(this.sw_fullpair_data.toCurrency_decimal=="18") {
        // 	amountIn            	= window.web3.utils.toWei(amount_value.toString(), 'ether');
        // } else {
        // 	let decimal         	= Math.pow(10, this.sw_fullpair_data.toCurrency_decimal);
        // 	amountIn            	= amount_value / decimal;
        // }

        let amountOut;
        if (this.sw_fullpair_data.toCurrency_decimal == "18") {
          amountOut = window.web3.utils.toWei(amount_value.toString(), "ether");
        } else {
          let decimal = Math.pow(10, this.sw_fullpair_data.toCurrency_decimal);
          amountOut = amount_value * decimal;
        }

        this.swapservice
          .getAmountsOutOld(
            ContractDetails.router_contract,
            RouterAbi,
            amountIn,
            path_f
          )
          .then(async (result) => {
            if (result.status) {
              if (this.sw_fullpair_data.fromCurrency_decimal == "18") {
                this.pricePoolShare.from_amount =
                  result.resultamount[1] / 1000000000000000000;
              } else {
                let decimal = Math.pow(
                  10,
                  this.sw_fullpair_data.fromCurrency_decimal
                );
                this.pricePoolShare.from_amount =
                  result.resultamount[1] / decimal;
              }
            } else {
              this.pricePoolShare.from_amount = 0.0;
            }
          })
          .catch((error) => {
            this.pricePoolShare.from_amount = 0.0;
          });
      } else {
        console.log("invert pool share --->");
        // to amount
        let amountIn = 0;
        let amount_value = 1;
        let path_f = [
          pairvalue.fromCurrency_address,
          pairvalue.toCurrency_address,
        ]; // array values
        let path_s = [
          pairvalue.toCurrency_address,
          pairvalue.fromCurrency_address,
        ]; // array values

        if (this.sw_fullpair_data.toCurrency_decimal == "18") {
          amountIn = window.web3.utils.toWei(amount_value.toString(), "ether");
        } else {
          let decimal = Math.pow(10, this.sw_fullpair_data.toCurrency_decimal);
          amountIn = amount_value / decimal;
        }

        console.log(
          ContractDetails.router_contract,
          "-------------- router_contract",
          RouterAbi,
          "-------------- RouterAbi",
          amountIn,
          "-------------- amountIn",
          path_s,
          "-------------- path_s"
        );

        // this.swapservice.getAmountsInOld(ContractDetails.router_contract,RouterAbi,amountIn,path_f).then(async(result)=>{
        this.swapservice
          .getAmountsOutOld(
            ContractDetails.router_contract,
            RouterAbi,
            amountIn,
            path_s
          )
          .then(async (result) => {
            console.log("getAmountsIn --->", result);
            if (result.status) {
              if (this.sw_fullpair_data.fromCurrency_decimal == "18") {
                this.pricePoolShare.from_amount =
                  result.resultamount[1] / 1000000000000000000;
              } else {
                let decimal = Math.pow(
                  10,
                  this.sw_fullpair_data.fromCurrency_decimal
                );
                this.pricePoolShare.from_amount =
                  result.resultamount[1] / decimal;
              }
              console.log(
                "this.pricePoolShare.from_amount --->",
                this.pricePoolShare.from_amount
              );
            } else {
              this.pricePoolShare.from_amount = 0.0;
            }
          })
          .catch((error) => {
            this.pricePoolShare.from_amount = 0.0;
          });

        // from amount
        let amountOut = 0;
        if (this.sw_fullpair_data.fromCurrency_decimal == "18") {
          amountOut = window.web3.utils.toWei(amount_value.toString(), "ether");
        } else {
          let decimal = Math.pow(
            10,
            this.sw_fullpair_data.fromCurrency_decimal
          );
          amountOut = amount_value / decimal;
        }

        console.log(
          ContractDetails.router_contract,
          "---------------- RouterAbi",
          RouterAbi,
          "----------------RouterAbi ",
          amountOut,
          "----------------amountOut ",
          path_s,
          "---------------path_s- "
        );

        // this.swapservice.getAmountsOutOld(ContractDetails.router_contract,RouterAbi,amountOut,path_f).then(async(result)=>{
        this.swapservice
          .getAmountsInOld(
            ContractDetails.router_contract,
            RouterAbi,
            amountOut,
            path_s
          )
          .then(async (result) => {
            console.log("getAmountsOut --->", result);
            if (result.status) {
              if (this.sw_fullpair_data.toCurrency_decimal == "18") {
                this.pricePoolShare.to_amount =
                  result.resultamount[0] / 1000000000000000000;
              } else {
                let decimal = Math.pow(
                  10,
                  this.sw_fullpair_data.toCurrency_decimal
                );
                this.pricePoolShare.to_amount =
                  result.resultamount[0] / decimal;
              }
              console.log(
                "this.pricePoolShare.to_amount --->",
                this.pricePoolShare.to_amount
              );
            } else {
              this.pricePoolShare.to_amount = 0.0;
            }
          })
          .catch((error) => {
            this.pricePoolShare.to_amount = 0.0;
          });
      }
    } else {
      console.log("into coin to token ---->");
      let amount_value = 1;

      this.swapformorder = !this.swapformorder; // here just changef swapformorder only for Coin to Token or Token to Coin

      if (this.swapformorder) {
        console.log("normal pool share --->");
        let amountIn;
        let path_s;
        if (this.sw_fullpair_data.fromCurrency_type == "token") {
          path_s = [this.sw_fullpair_data.fromCurrency_address, wethaddress]; // array values
        } else {
          path_s = [wethaddress, this.sw_fullpair_data.toCurrency_address]; // array values
        }

        let path_f = [wethaddress, this.sw_fullpair_data.fromCurrency_address]; // array values
        // if(this.sw_fullpair_data.fromCurrency_decimal=="18") {
        //      amountIn 				= window.web3.utils.toWei(amount_value.toString(), 'ether');
        //    } else {
        //      let decimal           = Math.pow(10, this.sw_fullpair_data.fromCurrency_decimal);
        //   amountIn  			= (amount_value * decimal).toFixed(4);
        // }

        if (this.sw_fullpair_data.fromCurrency_decimal == "18") {
          amountIn = window.web3.utils.toWei(amount_value.toString(), "ether");
        } else {
          let decimal = Math.pow(
            10,
            this.sw_fullpair_data.fromCurrency_decimal
          );
          amountIn = (amount_value * decimal).toFixed(4);
        }

        this.swapservice
          .getAmountsOutOld(
            ContractDetails.router_contract,
            RouterAbi,
            amountIn,
            path_s
          )
          .then(async (result) => {
            console.log("getAmountsIn ---->", result);
            if (result.status) {
              if (this.sw_fullpair_data.toCurrency_decimal == "18") {
                this.pricePoolShare.to_amount = (
                  result.resultamount[1] / 1000000000000000000
                ).toFixed(4);
              } else {
                let decimal = Math.pow(
                  10,
                  this.sw_fullpair_data.toCurrency_decimal
                );
                this.pricePoolShare.to_amount = (
                  result.resultamount[1] / decimal
                ).toFixed(4);
              }
              console.log(
                "this.pricePoolShare.to_amount ---->",
                this.pricePoolShare.to_amount
              );
            } else {
              this.pricePoolShare.to_amount = 0.0;
            }
          })
          .catch((error) => {
            this.pricePoolShare.to_amount = (0).toFixed(4);
          });

        let amountOut;
        if (this.sw_fullpair_data.toCurrency_decimal == "18") {
          amountOut = window.web3.utils.toWei(amount_value.toString(), "ether");
        } else {
          let decimal = Math.pow(10, this.sw_fullpair_data.toCurrency_decimal);
          amountOut = amount_value / decimal;
        }
        this.swapservice
          .getAmountsInOld(
            ContractDetails.router_contract,
            RouterAbi,
            amountOut,
            path_s
          )
          .then(async (result) => {
            console.log("getAmountsOut ---->", result);
            if (result.status) {
              // new
              if (this.sw_fullpair_data.fromCurrency_decimal == "18") {
                this.pricePoolShare.from_amount = (
                  result.resultamount[0] / 1000000000000000000
                ).toFixed(4);
              } else {
                let decimal = Math.pow(
                  10,
                  this.sw_fullpair_data.fromCurrency_decimal
                );
                this.pricePoolShare.from_amount = (
                  result.resultamount[0] / decimal
                ).toFixed(4);
              }
              // new
              console.log(
                "this.pricePoolShare.from_amount ---->",
                this.pricePoolShare.from_amount
              );
            } else {
              this.pricePoolShare.from_amount = 0.0;
            }
          })
          .catch((error) => {
            this.pricePoolShare.from_amount = 0.0;
          });
      } else {
        // console.log("no need --->")
        console.log("invert pool share --->");
        let amountOut;
        let amount_value = 1;
        // let path_f = [wethaddress, this.sw_fullpair_data.fromCurrency_address]; // array values
        // let path_s = [this.sw_fullpair_data.fromCurrency_address, wethaddress]; // array values

        let path_f;

        if (this.sw_fullpair_data.fromCurrency_type == "token") {
          path_f = [this.sw_fullpair_data.fromCurrency_address, wethaddress]; // array values
        } else {
          path_f = [wethaddress, this.sw_fullpair_data.toCurrency_address]; // array values
        }

        if (this.sw_fullpair_data.fromCurrency_decimal == "18") {
          amountOut = window.web3.utils.toWei(amount_value.toString(), "ether");
        } else {
          let decimal = Math.pow(
            10,
            this.sw_fullpair_data.fromCurrency_decimal
          );
          // amountOut        = amount_value / decimal;
          amountOut = amount_value * decimal;
        }
        this.swapservice
          .getAmountsInOld(
            ContractDetails.router_contract,
            RouterAbi,
            amountOut,
            path_f
          )
          .then(async (result) => {
            if (result.status) {
              console.log("getAmountsIn ---->", result);
              // new
              if (this.sw_fullpair_data.toCurrency_decimal == "18") {
                this.pricePoolShare.to_amount = (
                  result.resultamount[0] / 1000000000000000000
                ).toFixed(4);
              } else {
                let decimal = Math.pow(
                  10,
                  this.sw_fullpair_data.toCurrency_decimal
                );
                this.pricePoolShare.to_amount = (
                  result.resultamount[0] / decimal
                ).toFixed(4);
              }
              console.log(
                "this.pricePoolShare.to_amount ---->",
                this.pricePoolShare.to_amount
              );
              // new
            } else {
              this.pricePoolShare.to_amount = 0.0;
            }
          })
          .catch((error) => {
            this.pricePoolShare.to_amount = 0.0;
          });

        let amountIn;
        if (this.sw_fullpair_data.toCurrency_decimal == "18") {
          amountIn = window.web3.utils.toWei(amount_value.toString(), "ether");
        } else {
          let decimal = Math.pow(10, this.sw_fullpair_data.toCurrency_decimal);
          amountIn = (amount_value * decimal).toFixed(4);
        }
        // let path     = [wethaddress,this.sw_fullpair_data.fromCurrency_address]; // array values
        this.swapservice
          .getAmountsOutOld(
            ContractDetails.router_contract,
            RouterAbi,
            amountIn,
            path_f
          )
          .then(async (result) => {
            console.log("getAmountsOut ---->", result);
            if (result.status) {
              if (this.sw_fullpair_data.fromCurrency_decimal == "18") {
                this.pricePoolShare.from_amount = (
                  result.resultamount[1] / 1000000000000000000
                ).toFixed(4);
              } else {
                let decimal = Math.pow(
                  10,
                  this.sw_fullpair_data.fromCurrency_decimal
                );
                this.pricePoolShare.from_amount = (
                  result.resultamount[1] / decimal
                ).toFixed(4);
              }
              console.log(
                "this.pricePoolShare.from_amount ---->",
                this.pricePoolShare.from_amount
              );
            } else {
              this.pricePoolShare.from_amount = 0.0;
            }
          })
          .catch((error) => {
            this.pricePoolShare.from_amount = (0).toFixed(4);
          });
      }
    }
  }
}
