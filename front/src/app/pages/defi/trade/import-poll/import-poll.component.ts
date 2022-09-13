import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";
import { DataService } from "src/app/common/services/api/data.service";
import { MetamaskService } from "src/app/common/services/metamask/common/metamask.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { LiqudityService } from "src/app/common/services/metamask/liqudity/liqudity.service";
import { CommonContractService } from "src/app/common/services/metamask/common-contract/common-contract.service";
import { StakeService } from "src/app/common/services/metamask/stake/stake.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

import * as _ from "lodash";
import { Route } from "@angular/compiler/src/core";
import { Observable, of } from "rxjs";
import { TokenAbi } from 'src/assets/files/token_abi';

declare let window: any;
let min_percentage = 0.5;

export interface Currency {
  _id: String;
  currency_image: String;
  contract_address: String;
  currency_type: String;
  decimal: any;
}

export interface CurrencyTo {
  _id: String;
  currency_image: String;
  contract_address: String;
  currency_type: String;
  decimal: any;
}

interface Pizza {
  id: string;
  name: string;
  price: number;
}

@Component({
  selector: "app-import-poll",
  templateUrl: "./import-poll.component.html",
  styleUrls: ["./import-poll.component.scss"],
})
export class ImportPollComponent implements OnInit {
  @Output() public showImportPool = new EventEmitter();

  // Add Liqudiy Sections

  //  getPizzas$: Observable<Pizza[]> = of([
  //   { id: "j8P9sz", name: "Pepperoni", price: 899 },
  //   { id: "tMot06", name: "Supreme", price: 999 },
  //   { id: "x9sD3g", name: "Sizzler", price: 899 },
  // ]);

  //  Common
  liquidityCurrencies: any = [];
  liquidityCurrencies$: Observable<Currency[]> = of([]);
  liqudityType = "from";
  searchCtrl = "";
  isAleradyPaired = false;
  isFormValid = false;

  getBaseCurrencyService: any;
  getPairCurrencyService: any;

  //  From Currency
  isGetBaseCurrencyLoading = false;
  addLiquidityFromCurrencies = [];

  addLiquidityFromCurrency: Currency = {
    _id: "",
    currency_image: "",
    contract_address: "",
    currency_type: "",
    decimal: "",
  };

  filterData = { count: 0, isNot: false };

  // To Currency
  addLiquidityToCurrencies = [];

  addLiquidityToCurrency: CurrencyTo = {
    _id: "",
    currency_image: "",
    contract_address: "",
    currency_type: "",
    decimal: "",
  };
  pairToAmount: any;
  pairObj: any;

  // Remove Liqudity Sections

  @Output() emitFun = new EventEmitter();

  isNoAddress: any;

  constructor(
    public dataService: DataService,
    private metamaskService: MetamaskService,
    private toasterService: ToasterService,
    private liqudityService: LiqudityService,
    private commonContractService: CommonContractService,
    private activatedRoute: ActivatedRoute,
    private stakingService: StakeService,
    private router: Router
  ) {
    this.dataService.isMetaReady.subscribe((suc) => {
      if (suc) {
      } else {
      }
    });

    this.dataService.accountsChanged.subscribe((suc) => {
      if (suc) {
        this.loadconstructor();
      }
    });

    this.loadconstructor();
    this.getSearchContract();
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
        this.getPair(pair);
      }
    });
  }

  getSearchContract() {
    this.emitFun.subscribe((suc) => {
      if (suc) {
        this.pushSearchContact();
      } else {
        this.isNoAddress = false;
      }
    });
  }

  removeSameTokens() {}

  async pushSearchContact() {
    let isAddress = window.web3.utils.isAddress(this.searchCtrl);

    if (!isAddress) {
      this.isNoAddress = true;
      this.isGetBaseCurrencyLoading = false;

      return;
    } else {
      if (this.liqudityType == "from") {
        if (this.searchCtrl == this.addLiquidityToCurrency.contract_address) {
          this.toasterService.show(false, "The Contract Address is Same");
          return;
        }
      } else {
        if (this.searchCtrl == this.addLiquidityFromCurrency.contract_address) {
          this.toasterService.show(false, "The Contract Address is Same");
          return;
        }
      }

      this.isGetBaseCurrencyLoading = true;

      let contract = await new window.web3.eth.Contract(
        TokenAbi,
        this.searchCtrl
      );
      let decimals = await contract.methods.decimals().call();
      let symbol = await contract.methods.symbol().call();

      if (decimals) {
        let token: CurrencyTo = {
          _id: symbol,
          currency_image: "",
          contract_address: this.searchCtrl,
          currency_type: "token",
          decimal: decimals,
        };

        console.log(token, "token");

        this.liquidityCurrencies.push(token);
        this.liquidityCurrencies$ = of(this.liquidityCurrencies);

        setTimeout(() => {
          this.isGetBaseCurrencyLoading = false;
        }, 100);

        // this.liquidityCurrencies$.push(token);
        this.isNoAddress = false;
      } else {
        this.isGetBaseCurrencyLoading = false;
        this.isNoAddress = true;
      }
    }
  }

  ngOnInit() {
    if (this.dataService.metaDeatails.isMetaLogin) {
    }
  }

  addLiquidityToCurrencyClear() {
    this.addLiquidityToCurrency = {
      _id: "",
      currency_image: "",
      contract_address: "",
      currency_type: "",
      decimal: "",
    };
  }

  addLiquidityFromCurrencyClear() {
    this.addLiquidityFromCurrency = {
      _id: "",
      currency_image: "",
      contract_address: "",
      currency_type: "",
      decimal: "",
    };
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
          // this.setAddLiqudity(responseData.data);
        }
      });
  }

  // pool/get_pooldetails

  async showAddLiqudity(liquidityObj) {}

  toggleAddLiquidity() {
    this.showImportPool.emit(false);
    this.setParm("");
    this.addLiquidityToCurrencyClear();
    this.addLiquidityFromCurrencyClear();
  }

  async addPair() {
    await this.isFormChecking();
    if (this.dataService.metaDeatails.isMetaLogin) {
      let isChainId: any = await this.metamaskService.checkChainIdCall();

      if (isChainId) {
        this.dataService.isOverlay = true;

        this.pairObj = {
          // From

          fromCurrencyname: this.addLiquidityFromCurrency._id,
          fromCurrency: this.addLiquidityFromCurrency._id,
          fromCurrency_type: this.addLiquidityFromCurrency.currency_type,
          fromCurrency_address: this.addLiquidityFromCurrency.contract_address,
          fromCurrency_decimal: this.addLiquidityFromCurrency.decimal,
          fromCurrency_img: this.addLiquidityFromCurrency.currency_image,

          // to
          toCurrencyname: this.addLiquidityToCurrency._id,
          toCurrency: this.addLiquidityToCurrency._id,
          toCurrency_type: this.addLiquidityToCurrency.currency_type,
          toCurrency_address: this.addLiquidityToCurrency.contract_address,
          toCurrency_img: this.addLiquidityToCurrency.currency_image,
          toCurrency_decimal: this.addLiquidityToCurrency.decimal,
          contract_add_status: true,
        };

        console.log(this.pairObj, 'this.pairObj');

        for (let index = 0; index < 2; index++) {
          if (index == 1) {
            let obj = {
              // From
              currencyName: this.addLiquidityFromCurrency._id,
              currencySymbol: this.addLiquidityFromCurrency._id,
              currency_type: this.addLiquidityFromCurrency.currency_type,
              contract_address: this.addLiquidityFromCurrency.contract_address,
              currency_decimal: this.addLiquidityFromCurrency.decimal,
              currency_image: this.addLiquidityFromCurrency.currency_image,
            };
            this.createToken(obj, index);
          } else {
            let obj = {
              // From
              currencyName: this.addLiquidityToCurrency._id,
              currencySymbol: this.addLiquidityToCurrency._id,
              currency_type: this.addLiquidityToCurrency.currency_type,
              contract_address: this.addLiquidityToCurrency.contract_address,
              currency_decimal: this.addLiquidityToCurrency.decimal,
              currency_image: this.addLiquidityToCurrency.currency_image,
            };

            this.createToken(obj, index);
          }
        }
      } else {
      }
    } else {
      this.dataService.showWalletList.emit(true);
      return;
    }
  }

  createToken(obj, index) {
    console.log('createobject called', obj, index);
    this.dataService
      .postRequest("currency/insert_currency", obj)
      .subscribe((success_old) => {
        if (index == 1) {
          this.createPair(this.pairObj);
        }
      });
  }

  createPair(obj) {
    console.log('createpair', obj);
    this.dataService
      .postRequest("pool/createpair", obj)
      .subscribe((success: any) => {
        console.log(success, 'pair created success');
        this.toasterService.show(success.status, success.msg);
        this.dataService.isOverlay = false;

        if (success.status) {
            this.toggleAddLiquidity();
            this.setParm(success.data);
          }
      });
  }

  

  async isFormChecking() {
    if (
      !this.addLiquidityFromCurrency.currency_type ||
      !this.addLiquidityToCurrency.currency_type
    ) {
      this.isFormValid = false;
    } else {
      this.isFormValid = true;
    }
  }

  async selectionType(type) {
    this.getPairCurrencyService && this.getPairCurrencyService.unsubscribe();
    this.getBaseCurrencyService && this.getBaseCurrencyService.unsubscribe();

    this.liqudityType = type;
    if (type == "to") {
      this.getTokens();
    } else {
      this.getTokens();
    }
  }

  async getTokens() {
    this.searchCtrl = "";
    this.isGetBaseCurrencyLoading = true;
    this.liquidityCurrencies = [];
    this.liquidityCurrencies$ = of(this.liquidityCurrencies);

    let obj = {
      page: {
        size: 100000,
        totalElements: 0,
        totalPages: 0,
        pageNumber: 0,
      },
      sorting: {
        dir: "desc",
        prop: "created_date",
      },
      search: "",
    };

    this.getPairCurrencyService = this.dataService
      .postRequest("currency/currency_list", obj)
      .subscribe((suc) => {
        let responseData: any = suc;
        this.addLiquidityToCurrencies = responseData.data;

        const map1 = this.addLiquidityToCurrencies.map((x) => {
          let token: CurrencyTo = {
            _id: x.currencyName,
            currency_image: x.currency_image,
            contract_address: x.contract_address,
            currency_type: x.currency_type,
            decimal: x.currency_decimal,
          };

          if (this.liqudityType == "from") {
            if (
              token.contract_address !=
              this.addLiquidityToCurrency.contract_address
            ) {
              this.liquidityCurrencies.push(token);
              this.liquidityCurrencies$ = of(this.liquidityCurrencies);
            }
          } else {
            if (
              token.contract_address !=
              this.addLiquidityFromCurrency.contract_address
            ) {
              this.liquidityCurrencies.push(token);
              this.liquidityCurrencies$ = of(this.liquidityCurrencies);
            }
          }
        });
        console.log('this.liquidityCurrencies$', this.liquidityCurrencies$);
        this.isGetBaseCurrencyLoading = false;
      });
  }

  //  Meta Mask Common

  async selectToken(addLiquidityCurrencyObj) {
    console.log(this.liqudityType, 'this.liqudityType');
    if (this.liqudityType == "from") {
      console.log(addLiquidityCurrencyObj, 'addLiquidityCurrencyObj');
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

        // await this.getPairCurrency();
      }
    } else {
      if (
        this.addLiquidityToCurrency.contract_address.toLowerCase() !=
        addLiquidityCurrencyObj.contract_address.toLowerCase()
      ) {
        this.addLiquidityToCurrency = addLiquidityCurrencyObj;
        // this.setParm(this.addLiquidityToCurrency.pair);
      }
    }
    await this.isFormChecking();
  }
}
