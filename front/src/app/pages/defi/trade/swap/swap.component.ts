import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { DataService } from "src/app/common/services/api/data.service";
import { MetamaskService } from "src/app/common/services/metamask/common/metamask.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { LiqudityService } from "src/app/common/services/metamask/liqudity/liqudity.service";
import { CommonContractService } from "src/app/common/services/metamask/common-contract/common-contract.service";
import { SwapService } from "src/app/common/services/metamask/swap/swap.service";
import { ContractDetails } from 'src/assets/files/contract';

declare let window: any;
let min_percentage = 0.5;

export type SwapBaseTypes = "coinTotoken" | "tokenTotoken";

export interface Currency {
  _id: String;
  currency_image: String;
  contract_address: String;
  currency_type: String;
  decimal: any;
  amount: any;
  amountCal: any;
  pair_address: any;
  pair: any;
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
  selector: "app-swap",
  templateUrl: "./swap.component.html",
  styleUrls: ["./swap.component.scss"],
})
export class SwapComponent implements OnInit, OnDestroy {
  // Add Swap Sections

  //  Common
  swapBaseType: SwapBaseTypes;
  currencies: Currency[] = [];
  swapType = "from";
  searchCtrl = "";
  isAleradyPaired = false;
  isApproved = false;
  isFormValid = false;
  isFormRotated = false;
  isAddSwapProcessing = false;

  getBaseCurrencyService: any;
  getPairCurrencyService: any;

  exchangeTokenApiValue: any;
  exchangeEthApiValue: any;

  calculatedAmount: any;
  filterData = { count: 0, isNot: false };

  //  From Currency
  fromCurrencyMainBalance: any;
  isGetBaseCurrencyLoading = false;
  addSwapFromCurrencies = [];

  pairFromAmount: any;

  addSwapFromCurrency: Currency = {
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

  // To Currency
  toCurrencyMainBalance: any;
  addSwapToCurrencies = [];

  addSwapToCurrency: CurrencyTo = {
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

  impactPrice: any;
  isShowImpactPrice = false;
  impactFor = "to";

  constructor(
    public dataService: DataService,
    private metamaskService: MetamaskService,
    private toasterService: ToasterService,
    private liqudityService: LiqudityService,
    private commonContractService: CommonContractService,
    private swapService: SwapService
  ) {}

  ngOnInit() {}

  // Add Liqudiy Sections

  ngOnDestroy() {
    this.resetAll();
  }

  resetAll() {
    this.isAddSwapProcessing = false;
    this.isApproved = false;
    this.addSwapFromCurrencyClear();
    this.addSwapToCurrencyClear();
    this.dataService.isOverlay = false;
    this.isPoolPrice = false;
  }

  async isFormChecking() {
    console.log(
      this.addSwapToCurrency.currency_type,
      "this.addSwapToCurrency.currency_type"
    );
    // +this.addSwapToCurrency.amount > +this.toCurrencyMainBalance ||
    if (
      +this.addSwapFromCurrency.amount > +this.fromCurrencyMainBalance ||
      !this.addSwapFromCurrency.currency_type ||
      !this.addSwapToCurrency.currency_type
    ) {
      this.isFormValid = false;

      +this.addSwapFromCurrency.amount > +this.fromCurrencyMainBalance;
    } else {
      if (
        +this.addSwapFromCurrency.amount == 0 ||
        +this.addSwapToCurrency.amount == 0
      ) {
        this.isFormValid = false;
      console.log('isFormValid false', this.addSwapFromCurrency.amount, '--', this.addSwapToCurrency.amount);
      } else {
        console.log('isFormValid true');
        this.isFormValid = true;
      }
    }
  }

  changeForm() {
    [
      this.fromCurrencyMainBalance,
      this.toCurrencyMainBalance,
      this.addSwapFromCurrency,
      this.addSwapToCurrency,
    ] = [
      this.toCurrencyMainBalance,
      this.fromCurrencyMainBalance,
      this.addSwapToCurrency,
      this.addSwapFromCurrency,
    ];

    this.isShowImpactPrice = false;
    this.addSwapFromCurrency.amount = "";
    this.addSwapToCurrency.amount = "";

    this.isFormRotated = !this.isFormRotated;

    //  getPollPrice Area
    this.setPricePollShare();
  }

  async selectionType(type) {
    console.log('selectionType called', type);
    this.swapType = type;

    this.getBaseCurrencyService && this.getBaseCurrencyService.unsubscribe();
    this.getPairCurrencyService && this.getPairCurrencyService.unsubscribe();

    if (type == "to") {
      this.getPairCurrency();
    } else {
      this.getBaseCurrency();
    }
  }

  async amountUnit(amount: any, decimal, type?: any, isTrunc?: boolean) {
    if (!type) {
      type = "fromWei";
    }

    if (amount) {
      if (decimal == "18") {
        let out = await window.web3.utils[type](amount.toString(), "ether");
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
    } else {
      return;
    }
  }

  addSwapToCurrencyClear() {
    this.addSwapToCurrency = {
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

  addSwapFromCurrencyClear() {
    this.addSwapFromCurrency = {
      _id: "",
      currency_image: "",
      contract_address: "",
      currency_type: "",
      decimal: "",
      amount: "",
      amountCal: "",
      pair_address: "",
      pair: "",
    };
    this.fromCurrencyMainBalance = "";
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
    console.log('getBaseCurrency called');
    this.isGetBaseCurrencyLoading = true;
    this.currencies = [];

    this.getBaseCurrencyService = this.dataService
      .getRequest("exchange/get_sw_basecurrency")
      .subscribe((suc) => {
        let responseData: any = suc;
        if (responseData.status) {
          this.addSwapFromCurrencies = responseData.data;
        console.log('this.addSwapFromCurrencies', this.addSwapFromCurrencies);
          this.currencies = this.addSwapFromCurrencies;
        }
        this.isGetBaseCurrencyLoading = false;
      });
  }

  async getPairCurrency() {
    console.log('getPairCurrency called');
    this.isGetBaseCurrencyLoading = true;
    this.currencies = [];

    this.getPairCurrencyService = this.dataService
      .postRequest("pool/get_swap_pairdetails", {
        basecurrency: this.addSwapFromCurrency._id,
      })
      .subscribe((suc) => {
        let responseData: any = suc;
        this.addSwapToCurrencies = responseData.data;
        console.log('this.addSwapToCurrencies', this.addSwapToCurrencies);
        const map1 = this.addSwapToCurrencies.map((x) => {
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
          this.currencies.push(token);
        });
        this.isGetBaseCurrencyLoading = false;

        console.log(this.currencies, "this.currencies");
        console.log('map1', map1);
      });
  }

  getUserBalance(value: Currency) {
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

  async selectToken(addSwapCurrencyObj) {
    console.log('selectToken called', this.swapType);
    if (this.swapType == "from") {
      if (
        this.addSwapFromCurrency.contract_address.toLowerCase() !=
        addSwapCurrencyObj.contract_address.toLowerCase()
      ) {
        this.isPoolPrice = false;
        this.addSwapFromCurrencyClear();
        this.addSwapToCurrencyClear();

        this.addSwapFromCurrency = addSwapCurrencyObj;
        console.log('select token this.addSwapFromCurrency', this.addSwapFromCurrency);

        this.getBaseCurrencyService &&
          this.getBaseCurrencyService.unsubscribe();
        this.getPairCurrencyService &&
          this.getPairCurrencyService.unsubscribe();

        await this.getPairCurrency();

        //  Balance Get From Currency
        if (this.addSwapFromCurrency.currency_type == "token") {
          this.fromCurrencyMainBalance = await this.getUserBalance(
            addSwapCurrencyObj
          );
        } else {
          let balance = this.dataService.metaDeatails.balance;
          this.fromCurrencyMainBalance = this.rounds(balance, 4);
        }
      }
    } else {
      if (
        this.addSwapToCurrency.contract_address.toLowerCase() !=
        addSwapCurrencyObj.contract_address.toLowerCase()
      ) {
        this.addSwapToCurrency = addSwapCurrencyObj;

        //  Balance Get To Currency
        if (this.addSwapToCurrency.currency_type == "token") {
          this.toCurrencyMainBalance = await this.getUserBalance(
            addSwapCurrencyObj
          );
        } else {
          let balance = this.dataService.metaDeatails.balance;
          this.toCurrencyMainBalance = this.rounds(balance, 4);
        }

        if (this.addSwapToCurrency.pair_address) {
          this.isAleradyPaired = true;
          // await this.getPairaddValue();
        } else {
          this.isAleradyPaired = false;
        }

        await this.setPricePollShare();
      }
    }
    console.log('select token end called');
    await this.isFormChecking();
  }

  public fullPairData;
  public isPoolPrice = false;
  async setPricePollShare() {
    this.isPoolPrice = false;

    let FullPairData: any = {
      fromCurrency_address: this.addSwapFromCurrency.contract_address,
      fromCurrency_decimal: this.addSwapFromCurrency.decimal,
      fromCurrency_type: this.addSwapFromCurrency.currency_type,
      fromCurrency: this.addSwapFromCurrency._id,
      pair: this.addSwapToCurrency.pair,
      pair_address: this.addSwapToCurrency.pair_address,
      toCurrency_address: this.addSwapToCurrency.contract_address,
      toCurrency_decimal: this.addSwapToCurrency.decimal,
      toCurrency_type: this.addSwapToCurrency.currency_type,
      toCurrency: this.addSwapToCurrency._id,
    };

    if (this.isFormRotated) {
      FullPairData.pair = this.addSwapFromCurrency.pair;
      FullPairData.pair_address = this.addSwapFromCurrency.pair_address;
    }

    console.log(FullPairData, "_____________ data");

    this.fullPairData = FullPairData;

    setTimeout(() => {
      this.isPoolPrice = true;
    });
  }

  async getImpactPrice(amount, type) {
    // (to_token_input * 100)/getreserve_to_token_val;

    let to_token_input = amount;
    let getreserve_to_token_val: any;

    await this.swapService
      .GetReserves(this.fullPairData.pair_address)
      .then(async (suc) => {
        if (suc.status) {
          this.commonContractService
            .amountUnit(
              suc.resultamount[this.isFormRotated ? 0 : 1],
              this.addSwapToCurrency.decimal,
              "fromWei"
            )
            .then((amount) => {
              this.impactPrice = (+to_token_input * 100) / +amount;
              this.isShowImpactPrice = true;
            })
            .catch((err) => {
              this.isShowImpactPrice = false;
            });
        }
      });
  }

  async amountCalculation(type) {
    this.impactFor = type;
    await this.isFormChecking();

    // let swapType: SwapBaseTypes;
    console.log("not valid", this.addSwapToCurrency.currency_type);

    if (
      !this.addSwapFromCurrency.currency_type ||
      !this.addSwapToCurrency.currency_type
    ) {
      console.log("not valid");
      return false;
    }

    if (
      this.addSwapFromCurrency.currency_type ==
      this.addSwapToCurrency.currency_type
    ) {
      this.swapBaseType = "tokenTotoken";
    } else {
      this.swapBaseType = "coinTotoken";
    }
    console.log('before getAmount', this.addSwapFromCurrency)
    if (type == "from") {
      if (this.addSwapFromCurrency.amount != 0) {
        await this.getAmount(
          this.addSwapFromCurrency.amount,
          this.addSwapFromCurrency.decimal,
          this.addSwapFromCurrency.contract_address,
          type
        );
          console.log('getAmount function called')
      }
    } else {
      if (this.addSwapToCurrency.amount != 0) {
        await this.getAmount(
          this.addSwapToCurrency.amount,
          this.addSwapToCurrency.decimal,
          this.addSwapFromCurrency.contract_address,
          type
        );
          console.log('this.addSwapToCurrency getAmount function called')
      }
    }
  }

  async getAmount(amount, decimal, contractAddress, type) {
    console.log('getAmount', amount, decimal, contractAddress, type);
    let amountIn: any = await this.amountUnit(amount, decimal, "toWei");
    console.log('amountIn', amountIn);
    let path: any;

    if (this.swapBaseType == "tokenTotoken") {
      path = [
        contractAddress,
        this.addSwapToCurrency.contract_address
          ? this.addSwapToCurrency.contract_address
          : ContractDetails.WBNB_contract,
      ];
    } else {
      path = [contractAddress, ContractDetails.WBNB_contract];

      if (this.isFormRotated) {
        path = [
          ContractDetails.WBNB_contract,
          this.addSwapToCurrency.contract_address,
        ];
      }
    }

    this.swapService[type == "from" ? "getAmountsOut" : "getAmountsIn"](
      amountIn,
      path
    ).then(async (result) => {
      console.log('type:',type,'decimal:', decimal,'result:', result);
      if (result.status) {
        if (decimal == "18") {
          let updateAmt = (
            result.resultamount[type == "from" ? 1 : 0] / 1000000000000000000
          ).toFixed(4);

          if (type == "from") {
            this.addSwapToCurrency.amount = updateAmt;
          } else {
            this.addSwapFromCurrency.amount = updateAmt;
          }
        } else {
          let decimalCal = Math.pow(10, decimal);
          let updateAmt = (
            result.resultamount[type == "from" ? 1 : 0] / decimalCal
          ).toFixed(4);

          if (type == "from") {
            this.addSwapToCurrency.amount = updateAmt;
          } else {
            this.addSwapFromCurrency.amount = updateAmt;
          }
        }

        this.exchangeEthApiValue = result.resultamount[1]; // to
        this.exchangeTokenApiValue = result.resultamount[0]; // from
        console.log('this.exchangeTokenApiValue',result);
      } else {
        if (type == "from") {
          this.addSwapToCurrency.amount = 0.0;

          let tosatData = {
            type: false,
            title:
              "Enough liquidity not available for this pair either Add liquidity to perform Swap",
            kill: false,
          };

          this.toasterService.show(
            false,
            "Enough liquidity not available for this pair either Add liquidity to perform Swap"
          );
          this.isShowImpactPrice = false;
        } else {
          this.addSwapFromCurrency.amount = 0.0;
          this.toasterService.show(
            false,
            "Enough liquidity not available for this pair either Add liquidity to perform Swap"
          );
          this.isShowImpactPrice = false;
        }
      }

      await this.getImpactPrice(this.addSwapToCurrency.amount, type);

      await this.isFormChecking();
    });
  }

  async addSwap() {
    console.log('add swap method called');
    if (this.dataService.metaDeatails.isMetaLogin) {
      let isChainId: any = await this.checkChainId();

      if (isChainId) {
        this.dataService.isOverlay = true;
        this.isAddSwapProcessing = true;

        if (!this.isFormRotated || this.isFormRotated) {
          if (
            this.addSwapFromCurrency.currency_type !=
            this.addSwapToCurrency.currency_type
          ) {
            console.log('this.addSwapTokenToCoin called');
            this.addSwapTokenToCoin();
          } else {
            console.log('this.addSwapTokenToToken called');
            this.addSwapTokenToToken();
          }
        } else {
        }
      } else {
      }
    } else {
      this.dataService.showWalletList.emit(true);
      return;
    }
  }

  async addSwapTokenToCoin() {
    let contractAddress: any = this.addSwapFromCurrency.contract_address;
    let decimal: any = this.addSwapFromCurrency.decimal;
    let amount: any = this.addSwapFromCurrency.amount;

    if (this.isFormRotated) {
      contractAddress = this.addSwapToCurrency.contract_address;
      amount = this.addSwapToCurrency.amount;
      decimal = this.addSwapToCurrency.decimal;
    }

    console.log(contractAddress, "_______ contractAddress");

    //  From Contract
    this.addSwapTokenApprove(contractAddress, decimal, amount).then((suc) => {
      let responseData: any = suc;
      console.log('this.addSwapTokenApprove', responseData);
      if (responseData.status) {
        this.dataService.isOverlay = false;
        this.toasterService.show(true, "Approved Successfully");
        this.addSwapConfirmCall();
      } else {
        this.resetAll();
      }
    });
  }

  addSwapTokenToToken() {
    let contractAddress = this.addSwapFromCurrency.contract_address;
    let decimal = this.addSwapFromCurrency.decimal;
    let amount = this.addSwapFromCurrency.amount;

    //  From Contract
    this.addSwapTokenApprove(contractAddress, decimal, amount).then((suc) => {
      let responseData: any = suc;
      if (responseData.status) {
        let contractAddress = this.addSwapToCurrency.contract_address;
        let decimal = this.addSwapToCurrency.decimal;
        let amount = this.addSwapToCurrency.amount;

        //  To Contract
        this.addSwapTokenApprove(contractAddress, decimal, amount).then(
          (suc) => {
            let responseData: any = suc;
            console.log('this.addSwapTokenApprove', responseData);
            if (responseData.status) {
              this.isApproved = true;
              this.toasterService.show(true, "Approved Successfully");
              this.addSwapConfirmCall();
            }
          }
        );
      } else {
        this.resetAll();
      }
    });
  }

  async addSwapConfirmCall() {
    console.log('swap confirm called', this.exchangeTokenApiValue);
    let amountIn = this.exchangeTokenApiValue; // eth from amount
    let min_amount = (this.exchangeEthApiValue * min_percentage) / 100;
    min_amount = this.exchangeEthApiValue - min_amount;
    min_amount = Math.trunc(min_amount);
    let amountOutMin = min_amount.toString(); //toekn from amount (mul with decimal )
    // let path         = [this.sw_fullpair_data.fromCurrency_address,wethaddress]; // array values
    // let to         = this.commonservice.metaDetails.account;
    console.log('swap confirm called1', amountOutMin);

    let path;

    if (this.swapBaseType == "tokenTotoken") {
      path = [
        this.addSwapFromCurrency.contract_address,
        this.addSwapToCurrency.contract_address
          ? this.addSwapToCurrency.contract_address
          : ContractDetails.WBNB_contract,
      ];
    } else {
      path = [
        this.addSwapFromCurrency.contract_address,
        ContractDetails.WBNB_contract,
      ];

      if (this.isFormRotated) {
        path = [
          ContractDetails.WBNB_contract,
          this.addSwapToCurrency.contract_address,
        ];
      }
    }

    let apiPath: any;
    if (this.swapBaseType == "tokenTotoken") {
      apiPath = "swapExactTokensForTokens";
    } else {
      if (this.isFormRotated) {
        apiPath = "swapExactETHForTokens";
      } else {
        apiPath = "swapExactTokensForETH";
      }
    }
    console.log('swap confirm called', apiPath);
    console.log('path', path);
    console.log('details', amountIn, amountOutMin, this.addSwapFromCurrency.contract_address);
    this.dataService.isOverlay = true;
    await this.swapService[apiPath](
      amountIn,
      amountOutMin,
      this.addSwapFromCurrency.contract_address,
      path
    )
      .then(async (result) => {
        console.log('swapService result', result);
        if (result.status) {
          this.dataService.isOverlay = false;
          this.toasterService.show(true, "Swap Successfully Completed");
          await this.successDataSend(result.result.transactionHash);
        } else {
          this.dataService.isOverlay = false;
          this.toasterService.show(false, result.message);
          this.resetAll();
        }
      })
      .catch((error) => {
        this.dataService.isOverlay = false;
        this.toasterService.show(false, error);
        this.resetAll();
      });
  }

  async addSwapTokenApprove(contractAddress, decimal, amount) {
    let amountCal = await this.amountUnit(amount, decimal, "toWei", true);

    return this.swapService
      .ApproveFunction(contractAddress, amountCal)
      .then(async (result) => {
        return result;
      })
      .catch((error) => {
        this.toasterService.show(false, "Please Try Agian Later");
        this.resetAll();
      });
  }

  async successDataSend(transactionHash) {
    var obj = {
      userAddress: this.dataService.metaDeatails.account,
      type: this.swapBaseType,
      amountETH: this.addSwapFromCurrency.amount,
      amountToken: this.addSwapToCurrency.amount,
      pair: this.addSwapToCurrency.pair,
      txId: transactionHash,
    };

    await this.dataService
      .postRequest("exchange/createExchange", obj)
      .subscribe((suc: any) => {
        this.dataService.isOverlay = false;

        let responseData: any = suc;
        if (responseData.status == true) {
          // this.toasterService.show(true, responseData.message);
          this.resetAll();
        } else {
        }
      });
  }
}
