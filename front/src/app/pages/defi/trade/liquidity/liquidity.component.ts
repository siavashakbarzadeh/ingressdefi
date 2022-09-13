import { Component, OnInit, ViewChild, Output, EventEmitter } from "@angular/core";
import { DataService } from "src/app/common/services/api/data.service";
import { MetamaskService } from "src/app/common/services/metamask/common/metamask.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { LiqudityService } from "src/app/common/services/metamask/liqudity/liqudity.service";
import { CommonContractService } from "src/app/common/services/metamask/common-contract/common-contract.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { StakeService } from "src/app/common/services/metamask/stake/stake.service";

import * as _ from "lodash";
import { Route } from "@angular/compiler/src/core";
import { ContractDetails } from 'src/assets/files/contract';
import { RouterAbi } from 'src/assets/files/router_abi';

declare let window: any;
let min_percentage = 0.5;

export interface Currency {
  _id: String;
  currency_image: String;
  contract_address: String;
  currency_type: String;
  decimal: any;
  amount: any;
  amountCal: any;
}

export interface CurrencyTo {
  _id: String;
  currency_image: String;
  contract_address: String;
  currency_type: String;
  decimal: any;
  amount: any;
  pair_address: any;
  amountCal: any;
  pair: "";
}

@Component({
  selector: "app-liquidity",
  templateUrl: "./liquidity.component.html",
  styleUrls: ["./liquidity.component.scss"],
})
export class LiquidityComponent implements OnInit {
  @Output() public showImportPool = new EventEmitter();

  // Get Liqudity Sections
  isGetLiqudityListLoading = false;
  liquidityList = [];

  showPairDetails = [];
  selectedPairDetails: any;

  poolDetails: any = {};
  isShowAddAndRemove = false;

  // Add Liqudiy Sections

  //  Common
  addLiquidityCurrencies: Currency[] = [];
  liqudityType = "from";
  searchCtrl = "";
  isAleradyPaired = false;
  isApproved = false;
  isFormValid = false;
  isAddLiquidityProcessing = false;

  calculatedAmount: any;

  getBaseCurrencyService: any;
  getPairCurrencyService: any;

  //  From Currency
  fromCurrencyMainBalance: any;
  isAddLiquidity = false;
  isGetBaseCurrencyLoading = false;
  addLiquidityFromCurrencies = [];

  pairFromAmount: any;

  addLiquidityFromCurrency: Currency = {
    _id: "",
    currency_image: "",
    contract_address: "",
    currency_type: "",
    decimal: "",
    amount: "",
    amountCal: "",
  };

  filterData = { count: 0, isNot: false };

  // To Currency
  toCurrencyMainBalance: any;
  addLiquidityToCurrencies = [];

  addLiquidityToCurrency: CurrencyTo = {
    _id: "",
    currency_image: "",
    contract_address: "",
    currency_type: "",
    decimal: "",
    amount: "",
    pair_address: "",
    amountCal: "",
    pair: "",
  };
  pairToAmount: any;

  // Remove Liqudity Sections

  constructor(
    public dataService: DataService,
    private metamaskService: MetamaskService,
    private toasterService: ToasterService,
    private liqudityService: LiqudityService,
    private commonContractService: CommonContractService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private stakingService: StakeService,
  ) {
    this.dataService.isMetaReady.subscribe((suc) => {
      if (suc) {
        this.getLiqudityList();
      } else {
        this.liquidityList = [];
      }
    });

    this.dataService.accountsChanged.subscribe((suc) => {
      if (suc) {
        this.loadconstructor();
      }
    });

    this.loadconstructor();
  }

  setParm(pair) {
    const queryParams: Params = { pair: pair };
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: "merge", // remove to replace all query params by provided
    });
  }

  loadconstructor() {
    this.activatedRoute.queryParams.subscribe((params) => {
      let pair = params["pair"];
      if (pair) {
        this.isAddLiquidity = true;
        this.getPair(pair);
      }
    });
  }

  ngOnInit() {
    if (this.dataService.metaDeatails.isMetaLogin) {
      this.getLiqudityList();
    }
  }

  addLiquidityToCurrencyClear() {
    this.addLiquidityToCurrency = {
      _id: "",
      currency_image: "",
      contract_address: "",
      currency_type: "",
      decimal: "",
      amount: "",
      pair_address: "",
      amountCal: "",
      pair: "",
    };
    this.toCurrencyMainBalance = "";
  }

  addLiquidityFromCurrencyClear() {
    this.addLiquidityFromCurrency = {
      _id: "",
      currency_image: "",
      contract_address: "",
      currency_type: "",
      decimal: "",
      amount: "",
      amountCal: "",
    };
    this.fromCurrencyMainBalance = "";
  }

  showLoginBox() {
    this.dataService.showWalletList.emit(true);
  }

  async amountUnit(amount: any, decimal, type?: any, isTrunc?: boolean) {
    if (!type) {
      type = "fromWei";
    }

    if (decimal == "18") {
      let out = await window.web3.utils[type](amount.toString(), "ether");
      console.log(out, "out");
      return out;
    } else {
      let decimalCal = Math.pow(10, decimal);

      if (isTrunc) {
        amount = amount * +decimal;
        return Math.trunc(amount);
      } else {
        return (amount * decimalCal).toFixed(4);
      }
    }
  }

  getPair(pair) {
    this.dataService
      .postRequest("pool/getSinglePair", {
        pair: pair,
      })
      .subscribe((suc) => {
        let responseData: any = suc;
        if (responseData.status) {
          this.isAddLiquidity = true;
          this.setAddLiqudity(responseData.data);
        }
      });
  }

  // pool/get_pooldetails

  getLiqudityList() {
    this.isGetLiqudityListLoading = true;
    this.liquidityList = [];

    this.dataService
      .postRequest("pool/get_pooldetails", {
        address: this.dataService.metaDeatails.account,
      })
      .subscribe((suc) => {
        let responseData: any = suc;

        if (responseData.status) {
          this.liquidityList = _.uniqBy(responseData.data, "pair");
        }

        this.isGetLiqudityListLoading = false;
      });
  }

  async managePairs(pairDetails, index) {
    let tokenBal: any;
    this.isShowAddAndRemove = false;

    console.log(pairDetails, "pairDetailspairDetails");

    this.selectedPairDetails = pairDetails;
    this.commonContractService
      .GetTokenbalance(
        pairDetails.pair_address,
        this.dataService.metaDeatails.account
      )
      .then(async (result) => {
        let responseData: any = result;
        if (responseData.status) {
          tokenBal = await window.web3.utils.fromWei(
            result.rawbalance.toString(),
            "ether"
          );

          this.poolDetails.userBalance = (
            result.rawbalance / 1000000000000000000
          ).toFixed(8);

          this.liqudityService
            .GetReserves(
              pairDetails.pair_address,
              this.dataService.metaDeatails.account,
              pairDetails.fromCurrency_address
            )
            .then(async (result) => {
              let from_amount = result.from_amount;
              let to_amount = result.to_amount;

              this.poolDetails.fromCurrency = await this.amountUnit(
                from_amount,
                pairDetails.fromCurrency_decimal,
                "fromWei"
              );
              this.poolDetails.toCurrency = await this.amountUnit(
                to_amount,
                pairDetails.toCurrency_decimal,
                "fromWei"
              );

              this.commonContractService
                .GetTotalSupply(pairDetails.pair_address)
                .then(async (result) => {
                  if (result.status) {
                    if (this.poolDetails.userBalance) {
                      this.poolDetails.totalShare =
                        (tokenBal / result.totalsupply) * 100;
                    } else {
                      this.poolDetails.totalShare = 0;
                    }
                    this.isShowAddAndRemove = true;
                  } else {
                    this.toasterService.show(false, result.message);
                  }
                })
                .catch((error) => {
                  this.toasterService.show(false, error);
                });
            });
        } else {
          this.toasterService.show(false, responseData.message);
        }
      })
      .catch((err) => {
        this.toasterService.show(false, err.message);
      });
  }

  async showAddLiqudity(liquidityObj) {
    this.isAddLiquidity = !this.isAddLiquidity;
    this.setAddLiqudity(liquidityObj);
  }

  async setAddLiqudity(liquidityObj) {
    let FromCurrency: Currency = {
      _id: liquidityObj.fromCurrency,
      currency_image: liquidityObj.fromCurrency_i,
      contract_address: liquidityObj.fromCurrency_address,
      currency_type: liquidityObj.fromCurrency_type,
      decimal: liquidityObj.fromCurrency_decimal,
      amount: 0,
      amountCal: 0,
    };

    await this.selectionType("from");
    await this.selectToken(FromCurrency);

    // await this.getUserBalance(FromCurrency);
    // await this.getPairCurrency();

    let ToCurrency: CurrencyTo = {
      _id: liquidityObj.toCurrency,
      currency_image: liquidityObj.toCurrency_i,
      contract_address: liquidityObj.toCurrency_address,
      currency_type: liquidityObj.toCurrency_type,
      decimal: liquidityObj.toCurrency_decimal,
      amount: 0,
      amountCal: 0,
      pair: liquidityObj.pair,
      pair_address: liquidityObj.pair_address,
    };

    await this.selectionType("to");
    await this.selectToken(ToCurrency);
  }

  // Add Liqudiy Sections

  toggleAddLiquidity() {
    this.setParm("");
    this.addLiquidityToCurrencyClear();
    this.addLiquidityFromCurrencyClear();
    this.isAddLiquidity = !this.isAddLiquidity;
  }

  async isFormChecking() {
    if (
      +this.addLiquidityFromCurrency.amount > +this.fromCurrencyMainBalance ||
      +this.addLiquidityToCurrency.amount > +this.toCurrencyMainBalance ||
      !this.addLiquidityFromCurrency.currency_type ||
      !this.addLiquidityToCurrency.currency_type
    ) {
      this.isFormValid = false;

      +this.addLiquidityFromCurrency.amount > +this.fromCurrencyMainBalance;
    } else {
      if (
        +this.addLiquidityFromCurrency.amount == 0 ||
        +this.addLiquidityToCurrency.amount == 0
      ) {
        this.isFormValid = false;
      } else {
        this.isFormValid = true;
      }
    }
  }

  async selectionType(type) {
    this.getPairCurrencyService && this.getPairCurrencyService.unsubscribe();
    this.getBaseCurrencyService && this.getBaseCurrencyService.unsubscribe();

    this.liqudityType = type;
    if (type == "to") {
      this.getPairCurrency();
    } else {
      this.getBaseCurrency();
    }
  }

  //  Meta Mask Common

  checkChainId() {
    return this.metamaskService
      .checkChainId()
      .then(async (result) => {
        console.log(result, "result");
        if (result.status) {
          return true;
        } else {
          this.toasterService.show(false, result.message);
          return false;
        }
      })
      .catch((error) => {
        this.toasterService.show(false, error);
        return false;
      });
  }

  getBaseCurrency() {
    this.isGetBaseCurrencyLoading = true;
    this.addLiquidityCurrencies = [];

    this.getBaseCurrencyService = this.dataService
      .getRequest("pool/getbasecurrency")
      .subscribe((suc) => {
        let responseData: any = suc;

        if (responseData.status) {
          this.addLiquidityFromCurrencies = responseData.data;
          this.addLiquidityCurrencies = this.addLiquidityFromCurrencies;
        }
        this.isGetBaseCurrencyLoading = false;
      });
  }

  async getPairCurrency() {
    this.isGetBaseCurrencyLoading = true;
    this.addLiquidityCurrencies = [];

    this.getPairCurrencyService = this.dataService
      .postRequest("pool/getpairdetails", {
        basecurrency: this.addLiquidityFromCurrency._id,
      })
      .subscribe((suc) => {
        let responseData: any = suc;
        this.addLiquidityToCurrencies = responseData.data;

        const map1 = this.addLiquidityToCurrencies.map((x) => {
          let token: CurrencyTo = {
            _id: x.toCurrency,
            currency_image: x.toCurrency_i,
            contract_address: x.toCurrency_address,
            currency_type: x.toCurrency_type,
            decimal: x.toCurrency_decimal,
            amount: "",
            pair_address: x.pair_address,
            amountCal: "",
            pair: x.pair,
          };
          this.addLiquidityCurrencies.push(token);
        });
        this.isGetBaseCurrencyLoading = false;

        console.log(this.addLiquidityCurrencies, "this.addLiquidityCurrencies");
      });
  }

  getUserBalance(value: Currency) {
    console.log(value, "value");
    return this.commonContractService
      .GetTokenbalance(
        value.contract_address,
        this.dataService.metaDeatails.account
      )
      .then(async (result) => {
        let responseData: any = result;
        if (responseData.status) {
          if (value.decimal == 18) {
            let balance = await window.web3.utils.fromWei(
              responseData.rawbalance.toString(),
              "ether"
            );
            console.log(this.rounds(balance, 4), "this.rounds(balance, 4)");
            return this.rounds(balance, 4);
          } else {
            let decimal = Math.pow(10, +value.decimal);
            let balance = responseData.rawbalance / decimal;
            return this.rounds(balance, 4);
          }
        } else {
          this.toasterService.show(false, responseData.message);
        }
      })
      .catch((err) => {
        this.toasterService.show(false, err.message);
      });
  }

  async getPairaddValue() {
    if (this.addLiquidityToCurrency.pair_address) {
      // this.addlq_textcalculation = true;
      this.liqudityService
        .GetReserves(
          this.addLiquidityToCurrency.pair_address,
          this.dataService.metaDeatails.account,
          this.addLiquidityFromCurrency.contract_address
        )
        .then(async (result) => {
          console.log(result, "+++++++++++++++++++ result");
          if (result.status) {
            // this.pairamount_cal = true;
            let fromAmount = result.from_amount;
            let toAmount = result.to_amount;

            if (this.addLiquidityFromCurrency.decimal == "18") {
              this.pairFromAmount = window.web3.utils.fromWei(
                fromAmount.toString(),
                "ether"
              );
            } else {
              let decimal = Math.pow(10, this.addLiquidityFromCurrency.decimal);
              this.pairFromAmount = fromAmount / decimal;
            }

            if (this.addLiquidityToCurrency.decimal == "18") {
              this.pairToAmount = window.web3.utils.fromWei(
                toAmount.toString(),
                "ether"
              );
            } else {
              let decimal = Math.pow(10, this.addLiquidityToCurrency.decimal);
              this.pairToAmount = toAmount / decimal;
            }
            this.calculatedAmount = this.pairFromAmount / this.pairToAmount;
          } else {
            this.toasterService.show(false, result.message);
          }
        })
        .catch((error) => {
          this.toasterService.show(false, error);
        });
    }
  }

  rounds(n, decimal) {
    n = parseFloat(n);
    n = n.toString();
    if (n.indexOf(".") == -1) {
      n = (+n).toFixed(decimal);
      return n;
    } else {
      n = n.slice(0, n.indexOf(".") + (decimal + 1));
      n = (+n).toFixed(decimal);
      return n;
    }
  }

  async selectToken(addLiquidityCurrencyObj) {
    if (this.liqudityType == "from") {
      if (
        this.addLiquidityFromCurrency.contract_address.toLowerCase() !=
        addLiquidityCurrencyObj.contract_address.toLowerCase()
      ) {
        this.addLiquidityToCurrencyClear();

        this.addLiquidityFromCurrency = addLiquidityCurrencyObj;

        this.getPairCurrencyService &&
          this.getPairCurrencyService.unsubscribe();
        this.getBaseCurrencyService &&
          this.getBaseCurrencyService.unsubscribe();

        await this.getPairCurrency();

        //  Balance Get From Currency
        if (this.addLiquidityFromCurrency.currency_type == "token") {
          this.fromCurrencyMainBalance = await this.getUserBalance(
            addLiquidityCurrencyObj
          );
        } else {
          let balance = this.dataService.metaDeatails.balance;
          this.fromCurrencyMainBalance = this.rounds(balance, 4);
        }
      }
    } else {
      if (
        this.addLiquidityToCurrency.contract_address.toLowerCase() !=
        addLiquidityCurrencyObj.contract_address.toLowerCase()
      ) {
        this.addLiquidityToCurrency = addLiquidityCurrencyObj;

        //  Balance Get To Currency
        if (this.addLiquidityToCurrency.currency_type == "token") {
          this.toCurrencyMainBalance = await this.getUserBalance(
            addLiquidityCurrencyObj
          );
        } else {
          let balance = this.dataService.metaDeatails.balance;
          this.toCurrencyMainBalance = this.rounds(balance, 4);
        }

        if (this.addLiquidityToCurrency.pair_address) {
          this.isAleradyPaired = true;
          await this.getPairaddValue();
        } else {
          this.isAleradyPaired = false;
        }
        this.setParm(this.addLiquidityToCurrency.pair);
      }
    }
    await this.isFormChecking();
  }

  async amountCalculation(type) {
    await this.isFormChecking();
    if (this.isAleradyPaired && this.addLiquidityToCurrency.contract_address) {
      if (type == "from") {
        this.addLiquidityToCurrency.amount = (
          this.addLiquidityFromCurrency.amount / this.calculatedAmount
        ).toFixed(4);
        this.addLiquidityToCurrency.amountCal =
          this.addLiquidityFromCurrency.amount / this.calculatedAmount;
        await this.isFormChecking();
      } else if (type == "to") {
        this.addLiquidityFromCurrency.amount = (
          this.addLiquidityToCurrency.amount * this.calculatedAmount
        ).toFixed(4);
        this.addLiquidityFromCurrency.amount = (
          this.addLiquidityToCurrency.amount * this.calculatedAmount
        ).toFixed(4);
        await this.isFormChecking();
      }
    }
  }

  async addLiquidity() {
    if (this.dataService.metaDeatails.isMetaLogin) {
      let isChainId: any = await this.checkChainId();

      if (isChainId) {
        this.dataService.isOverlay = true;
        this.isAddLiquidityProcessing = true;

        if (!this.isApproved) {
          if (
            this.addLiquidityFromCurrency.currency_type == "token" &&
            this.addLiquidityToCurrency.currency_type == "token"
          ) {
            this.addLiquidityTokenToToken();
          } else {
            this.addLiquidityTokenToCoin();
          }
        } else {
          if (
            this.addLiquidityFromCurrency.currency_type == "token" &&
            this.addLiquidityToCurrency.currency_type == "token"
          ) {
            this.addLiquiditySupplyToken();
          } else {
            this.addLiquiditySupplyCoin();
          }
        }
      } else {
      }
    } else {
      this.dataService.showWalletList.emit(true);
      return;
    }
  }

  addLiquidityTokenToCoin() {
    // let contractAddress = this.addLiquidityFromCurrency.contract_address;
    // let decimal = this.addLiquidityFromCurrency.decimal;
    // let amount = this.addLiquidityFromCurrency.amount;

    let contractAddress: any;
    let decimal: any;
    let amount: any;

    if (this.addLiquidityFromCurrency.currency_type == "token") {
      contractAddress = this.addLiquidityFromCurrency.contract_address;
      decimal = this.addLiquidityFromCurrency.decimal;
      amount = this.addLiquidityFromCurrency.amount;
    } else {
      contractAddress = this.addLiquidityToCurrency.currency_type;
      decimal = this.addLiquidityToCurrency.decimal;
      amount = this.addLiquidityToCurrency.amount;
    }

    //  From Contract
    //  To Contract
    this.addLiquidityTokenApprove(contractAddress, decimal, amount).then(
      (suc) => {
        let responseData: any = suc;
        this.dataService.isOverlay = false;
        if (responseData.status) {
          this.dataService.isOverlay = false;
          this.isApproved = true;
          this.toasterService.show(true, "Approved Successfully");
        } else {
          this.isAddLiquidityProcessing = false;
        }
      }
    );
  }

  addLiquidityTokenToToken() {
    let contractAddress = this.addLiquidityFromCurrency.contract_address;
    let decimal = this.addLiquidityFromCurrency.decimal;
    let amount = this.addLiquidityFromCurrency.amount;

    //  From Contract
    this.addLiquidityTokenApprove(contractAddress, decimal, amount)
      .then((suc) => {
        let responseData: any = suc;
        if (responseData.status) {
          let contractAddress = this.addLiquidityToCurrency.contract_address;
          let decimal = this.addLiquidityToCurrency.decimal;
          let amount = this.addLiquidityToCurrency.amount;

          //  To Contract
          this.addLiquidityTokenApprove(contractAddress, decimal, amount)
            .then((suc) => {
              let responseData: any = suc;
              if (responseData.status) {
                this.dataService.isOverlay = false;
                this.isApproved = true;
                this.toasterService.show(true, "Approved Successfully");
              }
            })
            .catch((err) => {
              this.dataService.isOverlay = false;
              this.isAddLiquidityProcessing = false;
              this.addLiquidityToCurrencyClear();
              this.addLiquidityFromCurrencyClear();
            });
        }
      })
      .catch((err) => {
        this.dataService.isOverlay = false;
        this.isAddLiquidityProcessing = false;
        this.addLiquidityToCurrencyClear();
        this.addLiquidityFromCurrencyClear();
      });
  }

  addLiquidityTokenApprove(contractAddress, decimal, amount) {
    let amountCal = 0;
    if (decimal == "18") {
      amountCal = window.web3.utils.toWei(amount.toString(), "ether");
    } else {
      let decimalVal = Math.pow(10, decimal);
      amountCal = amount * +decimalVal;
      amountCal = Math.trunc(amountCal);
    }

    return this.liqudityService
      .ApproveFunction(contractAddress, amountCal)
      .then(async (result) => {
        return result;
      })
      .catch((error) => {
        this.toasterService.show(false, "Please Try Agian Later");
        this.dataService.isOverlay = false;
        this.isAddLiquidityProcessing = false;
        this.addLiquidityToCurrencyClear();
        this.addLiquidityFromCurrencyClear();
      });
  }

  async addLiquiditySupplyToken() {
    let tokenFrom = this.addLiquidityFromCurrency.contract_address;
    let tokenTo = this.addLiquidityToCurrency.contract_address;

    let amountADesired = 0;
    if (this.addLiquidityFromCurrency.decimal == "18") {
      amountADesired = window.web3.utils.toWei(
        this.addLiquidityFromCurrency.amount.toString(),
        "ether"
      ); //toekn from amount (mul with decimal )
    } else {
      let decimal = Math.pow(10, this.addLiquidityFromCurrency.decimal);
      amountADesired = this.addLiquidityFromCurrency.amount * decimal;
      amountADesired = Math.trunc(amountADesired);
    }

    let amountBDesired = 0;
    if (this.addLiquidityToCurrency.decimal == "18") {
      amountBDesired = window.web3.utils.toWei(
        this.addLiquidityToCurrency.amount.toString(),
        "ether"
      ); //toekn from amount (mul with decimal )
    } else {
      let decimal = Math.pow(10, this.addLiquidityToCurrency.decimal);
      amountBDesired = this.addLiquidityToCurrency.amount * decimal;
      amountBDesired = Math.trunc(amountBDesired);
    }

    let amountAMin = 1;
    let amountBMin = 1;

    let to = this.dataService.metaDeatails.account;
    let date = new Date();
    let timestamp = date.getTime();
    let deadline = timestamp + 1000;

    await this.liqudityService
      .Addliquditytoken_to_token(
        tokenFrom,
        tokenTo,
        amountADesired,
        amountBDesired,
        amountAMin,
        amountBMin,
        to,
        deadline
      )
      .then(async (result) => {
        if (result.status) {
          this.successDataSend(result.result.transactionHash);
        } else {
          this.toasterService.show(false, result.message);
        }
      })
      .catch((error) => {
        this.dataService.isOverlay = false;
        this.toasterService.show(false, "OOPS!");
        this.isAddLiquidityProcessing = false;
        this.addLiquidityToCurrencyClear();
        this.addLiquidityFromCurrencyClear();
      });
  }

  async addLiquiditySupplyCoin() {
    let addLiquidityETH = 0;
    if (this.addLiquidityFromCurrency.currency_type == "coin") {
      addLiquidityETH = window.web3.utils.toWei(
        this.addLiquidityFromCurrency.amount.toString(),
        "ether"
      ); // eth from amount
    } else {
      addLiquidityETH = window.web3.utils.toWei(
        this.addLiquidityToCurrency.amount.toString(),
        "ether"
      ); // eth from amount
    }

    let token: any;
    if (this.addLiquidityFromCurrency.currency_type == "token") {
      token = this.addLiquidityFromCurrency.contract_address; // approve token contract address
    } else {
      token = this.addLiquidityToCurrency.contract_address; // approve token contract address
    }

    let amountTokenDesired = 0;
    if (this.addLiquidityFromCurrency.currency_type == "token") {
      if (this.addLiquidityFromCurrency.decimal == "18") {
        amountTokenDesired = window.web3.utils.toWei(
          this.addLiquidityFromCurrency.amount.toString(),
          "ether"
        ); //toekn from amount (mul with decimal )
      } else {
        let decimal = Math.pow(10, this.addLiquidityFromCurrency.decimal);
        amountTokenDesired = this.addLiquidityFromCurrency.amount * decimal;
        amountTokenDesired = Math.trunc(amountTokenDesired);
      }
    } else {
      if (this.addLiquidityToCurrency.decimal == "18") {
        amountTokenDesired = window.web3.utils.toWei(
          this.addLiquidityToCurrency.amount.toString(),
          "ether"
        ); //toekn from amount (mul with decimal )
      } else {
        let decimal = Math.pow(10, this.addLiquidityToCurrency.decimal);
        amountTokenDesired = this.addLiquidityToCurrency.amount * decimal;
        amountTokenDesired = Math.trunc(amountTokenDesired);
      }
    }

    if (this.isAleradyPaired) {
      // new cal
      // coin part
      if (this.addLiquidityFromCurrency.currency_type == "coin") {
        let min_ethamount =
          (this.addLiquidityFromCurrency.amount * min_percentage) / 100;
        min_ethamount = this.addLiquidityFromCurrency.amount - min_ethamount;
        let amountETHMin = window.web3.utils.toWei(
          min_ethamount.toString(),
          "ether"
        );
      } else {
        let min_ethamount =
          (this.addLiquidityFromCurrency.amount * min_percentage) / 100;
        min_ethamount = this.addLiquidityFromCurrency.amount - min_ethamount;
        let amountETHMin = window.web3.utils.toWei(
          min_ethamount.toString(),
          "ether"
        );
      }
      // token part
      if (this.addLiquidityFromCurrency.currency_type == "token") {
        let min_tokenamount =
          (this.addLiquidityFromCurrency.amount * min_percentage) / 100;
        min_tokenamount =
          this.addLiquidityFromCurrency.amount - min_tokenamount;
        if (this.addLiquidityFromCurrency.decimal == "18") {
          let amountTokenMin = window.web3.utils.toWei(
            min_tokenamount.toString(),
            "ether"
          ); //toekn from amount (mul with decimal )
        } else {
          let decimal = Math.pow(10, this.addLiquidityFromCurrency.amount);
          let amountTokenMin = min_tokenamount * decimal;
          amountTokenMin = Math.trunc(amountTokenMin);
        }
      } else {
        let min_tokenamount =
          (this.addLiquidityToCurrency.amount * min_percentage) / 100;
        min_tokenamount = this.addLiquidityToCurrency.amount - min_tokenamount;
        if (this.addLiquidityToCurrency.decimal == "18") {
          let amountTokenMin = window.web3.utils.toWei(
            min_tokenamount.toString(),
            "ether"
          ); //toekn from amount (mul with decimal )
        } else {
          let decimal = Math.pow(10, this.addLiquidityToCurrency.decimal);
          let amountTokenMin = min_tokenamount * decimal;
          amountTokenMin = Math.trunc(amountTokenMin);
        }
      }
      // new cal
    } else {
      let amountETHMin = addLiquidityETH;
      let amountTokenMin = amountTokenDesired;
    }

    let to = this.dataService.metaDeatails.account;
    let date = new Date();
    let timestamp = date.getTime();
    let deadline = timestamp + 1000;

    console.log(addLiquidityETH, "----------------> addLiquidityETH");
    console.log(token, "----------------> token");
    console.log(amountTokenDesired, "----------------> amountTokenDesired");
    console.log(to, "----------------> to");
    console.log(deadline, "----------------> deadline");

    await this.liqudityService
      .Addliquditycoin_to_token(
        addLiquidityETH,
        token,
        amountTokenDesired,
        1,
        1,
        to,
        deadline
      )
      .then(async (result) => {
        if (result.status) {
          this.successDataSend(result.result.transactionHash);
        } else {
          this.toasterService.show(false, result.message);
          this.isAddLiquidityProcessing = false;
          this.addLiquidityToCurrencyClear();
          this.addLiquidityFromCurrencyClear();
        }
      })
      .catch((error) => {
        this.toasterService.show(false, "OOPS!");
        this.dataService.isOverlay = false;
        this.isAddLiquidityProcessing = false;
        this.addLiquidityToCurrencyClear();
        this.addLiquidityFromCurrencyClear();
      });
  }

  async successDataSend(transactionHash) {
    this.toasterService.show(true, "After 2-3 mins Pool added successfully");
    var obj = {
      pair: this.addLiquidityToCurrency.pair,
      fromCurrency: this.addLiquidityFromCurrency._id,
      toCurrency_type: this.addLiquidityToCurrency.currency_type,
      fromCurrency_type: this.addLiquidityFromCurrency.currency_type,
      toCurrency: this.addLiquidityToCurrency._id,
      fromCurrency_address: this.addLiquidityFromCurrency.contract_address,
      toCurrency_address: this.addLiquidityToCurrency.contract_address,
      from_amount: this.addLiquidityFromCurrency.amount,
      to_amount: this.addLiquidityToCurrency.amount,
      user_address: this.dataService.metaDeatails.account,
      tx_id: transactionHash,
    };

    await this.dataService
      .postRequest("pool/create_pool_log", obj)
      .subscribe((suc: any) => {
        this.dataService.isOverlay = false;
        this.isAddLiquidityProcessing = false;
        this.isApproved = false;

        this.toggleAddLiquidity();
        this.getLiqudityList();

        let responseData: any = suc;
        if (responseData.status == true) {
          this.toasterService.show(true, responseData.message);
        } else {
        }
      });
  }

  // Remove Liqudity Sections

  isRemoveLiqudity = false;
  remove_liq_pair_from_amount: any;
  remove_liq_pair_to_amount: any;
  removePoolFormData: any = {
    from_amount: "",
    to_amount: "",
    one_fromAmount: "",
    to_fromAmount: "",
  };
  rawremove_lptoken_balance: any;
  remove_lptoken_balance: any;
  notEligibleForRemove = false;
  removeApproveSubmitted: any;
  progressValue = "100";
  selectedLiqudityObj: any;

  isRemoveTokenApproved = false;

  toggleRemoveLiquidity() {
    this.isRemoveLiqudity = false;
  }

  showRemoveLiqudity(liquidityObj) {
    this.isRemoveLiqudity = true;
    this.selectedLiqudityObj = liquidityObj;
    this.removeGetPairaddValue(liquidityObj);
    this.getUserBalanceRemove(liquidityObj);
  }

  getUserBalanceRemove(liquidityObj) {
    this.commonContractService
      .GetTokenbalance(
        liquidityObj.pair_address,
        this.dataService.metaDeatails.account
      )
      .then(async (result) => {
        if (result.status) {
          this.rawremove_lptoken_balance = result.rawbalance;
          this.remove_lptoken_balance = result.balance;
        } else {
          this.toasterService.show(false, result.message);
          this.remove_lptoken_balance = 0.0;
        }
      })
      .catch((error) => {
        this.toasterService.show(false, error);
      });
  }

  async removeGetPairaddValue(liquidityObj) {
    this.liqudityService
      .GetReserves(
        liquidityObj.pair_address,
        this.dataService.metaDeatails.account,
        liquidityObj.fromCurrency_address
      )
      .then(async (result) => {
        console.log(result, "_________________________ suc");

        let responseData: any = result;

        console.log(this.poolDetails, "this.poolDetails.totalShare");

        if (responseData.status) {
          let from_amount =
            (+responseData.from_amount * this.poolDetails.totalShare) / 100;
          let to_amount =
            (+responseData.to_amount * this.poolDetails.totalShare) / 100;

          this.remove_liq_pair_from_amount = await this.amountUnit(
            from_amount,
            liquidityObj.fromCurrency_decimal,
            "fromWei"
          );

          this.remove_liq_pair_to_amount = await this.amountUnit(
            to_amount,
            liquidityObj.toCurrency_decimal,
            "fromWei"
          );

          this.removePoolFormData.from_amount = this.remove_liq_pair_from_amount;

          this.removePoolFormData.to_amount = this.remove_liq_pair_to_amount;
          this.removePoolFormData.one_fromAmount =
            this.remove_liq_pair_to_amount / this.remove_liq_pair_from_amount;

          this.removePoolFormData.one_toAmount =
            this.remove_liq_pair_from_amount / this.remove_liq_pair_to_amount;

          console.log(this.removePoolFormData);

          await this.progressBar("100");
        }
      });
  }

  async progressBar(value) {
    if (this.notEligibleForRemove && value != "100") {
      this.toasterService.show(
        false,
        "Pool Balance is too low to remove less than 100%"
      );
    } else {
      this.removePoolFormData.from_amount = this.remove_liq_pair_to_amount;
      this.removePoolFormData.to_amount = this.remove_liq_pair_from_amount;
      let calculatedValue;
      switch (value) {
        case "25":
          calculatedValue = 0.75;
          break;
        case "50":
          calculatedValue = 0.5;
          break;
        case "75":
          calculatedValue = 0.25;
          break;
        case "100":
          calculatedValue = 0;
      }
      this.progressValue = value;
      this.removePoolFormData.to_amount =
        this.removePoolFormData.to_amount -
        this.removePoolFormData.to_amount * calculatedValue;
      this.removePoolFormData.from_amount =
        this.removePoolFormData.from_amount -
        this.removePoolFormData.from_amount * calculatedValue;
    }
  }

  removeLiqudity() {
    this.dataService.isOverlay = true;
    if (this.isRemoveTokenApproved) {
      this.removesubmit(this.selectedLiqudityObj);
    } else {
      this.rlq_approve_sumbit(this.selectedLiqudityObj);
    }
  }

  async rlq_approve_sumbit(liquidityObj) {
    this.removeApproveSubmitted = true;
    await this.checkChainId();
    if (this.remove_lptoken_balance <= 0.01) {
      this.notEligibleForRemove = true;
    }
    await this.liqudityService
      .ApproveFunction(
        liquidityObj.pair_address,
        this.rawremove_lptoken_balance
      )
      .then(async (result) => {
        console.log(" to result ---->", result);
        if (result.status) {
          this.toasterService.show(
            true,
            "Your requset has been send successfully"
          );
          this.isRemoveTokenApproved = true;
          setTimeout(() => {
            this.progressBar("25");
          }, 2000);
          this.dataService.isOverlay = false;
        } else {
          this.toasterService.show(false, result.message);
          this.dataService.isOverlay = false;
        }
      })
      .catch((error) => {
        this.toasterService.show(false, error);
        this.dataService.isOverlay = false;
      });
  }

  async removesubmit(liquidityObj) {
    await this.checkChainId();
    if (
      liquidityObj.fromCurrency_type == "token" &&
      liquidityObj.toCurrency_type == "token"
    ) {
      // token to token
      let calculatedValue;
      switch (this.progressValue) {
        case "25":
          calculatedValue = 0.25;
          break;
        case "50":
          calculatedValue = 0.5;
          break;
        case "75":
          calculatedValue = 0.75;
          break;
        case "100":
          calculatedValue = 1;
      }
      calculatedValue = this.notEligibleForRemove ? 1 : calculatedValue;
      let calculatedBal =
        calculatedValue == 1
          ? this.remove_lptoken_balance
          : this.toFixeds(this.remove_lptoken_balance * calculatedValue);

      let tokenA = liquidityObj.fromCurrency_address;
      let tokenB = liquidityObj.toCurrency_address;
      let liquidity = window.web3.utils.toWei(
        calculatedBal.toString(),
        "ether"
      );
      let amountAMin = 0;
      let amountBMin = 0;
      let to = this.dataService.metaDeatails.account; // metamask address
      let date = new Date();
      let timestamp = date.getTime();
      let deadline = timestamp + 1000; //time + 1000

      await this.liqudityService
        .Removeliquditytoken_to_token(
          ContractDetails.router_contract,
          RouterAbi,
          tokenA,
          tokenB,
          liquidity,
          amountAMin,
          amountBMin,
          to,
          deadline
        )
        .then(async (result) => {
          if (result.status) {
            this.toasterService.show(
              true,
              "Your requset has been send successfully"
            );
            await this.insertRemoveLiq(
              result.result.transactionHash,
              liquidityObj
            );
            // this.removeapproveshow = true;
            // this.removesupplyshow = false;
          } else {
            // this.removepoolsubmitted = false;
            this.dataService.isOverlay = false;
            this.toasterService.show(false, result.message);
          }
        })
        .catch((error) => {
          // this.removepoolsubmitted = false;
          this.dataService.isOverlay = false;
          this.toasterService.show(false, error);
        });
    } else {
      // coin to token
      // this.removepoolsubmitted = true;
      let calculatedValue;

      switch (this.progressValue) {
        case "25":
          calculatedValue = 0.25;
          break;
        case "50":
          calculatedValue = 0.5;
          break;
        case "75":
          calculatedValue = 0.75;
          break;
        case "100":
          calculatedValue = 1;
      }
      calculatedValue = this.notEligibleForRemove ? 1 : calculatedValue;
      let calculatedBal =
        calculatedValue == 1
          ? this.remove_lptoken_balance
          : this.toFixeds(this.remove_lptoken_balance * calculatedValue);

      let token_address = liquidityObj.fromCurrency_address;
      let liquidity = await window.web3.utils.toWei(
        calculatedBal.toString(),
        "ether"
      );
      liquidityObj.afterBal = liquidity;
      liquidityObj.beforeBal = this.remove_lptoken_balance; // pairaddress balance
      // let amountTokenMin = this.removepair_response.from_aamt;
      // let amountETHMin = this.removepair_response.to_aamt;

      let to = this.dataService.metaDeatails.account; // metamask address
      let date = new Date();
      let timestamp = date.getTime();
      let deadline = timestamp + 1000; //time + 1000

      await this.liqudityService
        .Removeliquditycoin_to_token(
          ContractDetails.router_contract,
          RouterAbi,
          token_address,
          liquidity,
          0,
          0,
          to,
          deadline
        )
        .then(async (result) => {
          if (result.status) {
            this.toasterService.show(
              true,
              "Your requset has been send successfully"
            );
            await this.insertRemoveLiq(
              result.result.transactionHash,
              liquidityObj
            );
            // this.removeapproveshow = true;
            // this.removesupplyshow = false;
          } else {
            // this.removepoolsubmitted = false;
            this.dataService.isOverlay = false;
            this.toasterService.show(false, result.message);
          }
        })
        .catch((error) => {
          // this.removepoolsubmitted = false;
          this.dataService.isOverlay = false;
          this.toasterService.show(false, error);
        });
    }
  }

  async insertRemoveLiq(txhash, liquidityObj) {
    let data = {
      pair: liquidityObj.pair,
      fromCurrency: liquidityObj.fromCurrency,
      toCurrency: liquidityObj.toCurrency,
      fromCurrency_address: liquidityObj.fromCurrency_address,
      toCurrency_address: liquidityObj.toCurrency_address,
      percentage: this.progressValue,
      balance: liquidityObj.afterBal,
      user_address: this.dataService.metaDeatails.account,
      tx_id: txhash,
    };
    await this.dataService
      .postRequest("pool/add_remove_pool", data)
      .subscribe((res: any) => {
        this.isRemoveLiqudity = false;
        this.getLiqudityList();
        this.dataService.isOverlay = false;
        console.log(res, "result");
      });
  }

  toFixeds(x) {
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split("e-")[1]);
      if (e) {
        x *= Math.pow(10, e - 1);
        x = "0." + new Array(e).join("0") + x.toString().substring(2);
      }
    } else {
      var e = parseInt(x.toString().split("+")[1]);
      if (e > 20) {
        e -= 20;
        x /= Math.pow(10, e);
        x += new Array(e + 1).join("0");
      }
    }
    return x;
  }
}
