import { Injectable } from "@angular/core";
declare let window: any;
import { DataService } from "../../api/data.service";
import { ContractDetails } from 'src/assets/files/contract';
import { TokenAbi } from 'src/assets/files/token_abi';
import { PairAbi } from 'src/assets/files/pair_abi';


@Injectable({
  providedIn: "root",
})
export class CommonContractService {
  constructor(private dataService: DataService) {
    if (window.ethereum === undefined) {
      // this.toastr.errorToastr('Non-Ethereum browser detected. Install MetaMask', 'OOPS!');
    } else {
      window.web3 = window.web3.currentProvider;
      window.web3 = new window.Web3(window.ethereum);
    }
  }

  checkAddress(address) {
    return new Promise(async (resolve, reject) => {
      resolve(window.web3.utils.isAddress(address));
    });
  }

  async amountUnit(amount: any, decimal, type?: any, isTrunc?: boolean) {

    //fromWei mean divde the values - to display 
    //toWei mean multiplay the values - to contarct 

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
        if (type == "fromWei") {
          amount = amount / +decimal;
        } else {
          amount = amount * +decimal;
        }

        return Math.trunc(amount);
      } else {
        if (type == "fromWei") {
          return (amount / decimalCal).toFixed(4);
        } else {
          return amount * decimalCal;
        }
      }
    }
  }

  getGovernanceTokenBalance() {
    this.GetTokenbalance(ContractDetails.governance_token_contract).then((suc) => {
      if (suc.balance) {
        this.dataService.metaDeatails.governanceTokenBalance = suc.balance;
      } else {
        this.dataService.metaDeatails.governanceTokenBalance = 0;
      }
    });
  }

  public async GetTokenbalance(Contract: any, UserAddress?: any): Promise<any> {
    console.log(Contract, 'GetTokenbalance contract');
    let Abi_array = TokenAbi;
    console.log('called1');

    if (!UserAddress) {
      UserAddress = this.dataService.metaDeatails.account;
    }

    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let token_contract = new window.web3.eth.Contract(Abi_array, Contract);
        console.log('UserAddress', UserAddress);
        await token_contract.methods
          .balanceOf(UserAddress)
          .call(async (err, balance) => {
            if (balance) {
              const sucMsg = {
                status: true,
                message: "Get your balance",
                rawbalance: balance,
                balance: await window.web3.utils.fromWei(
                  balance.toString(),
                  "ether"
                ),
              };
              resolve(sucMsg);
            } else {
              const sucMsg = {
                status: false,
                message: "Got error",
                data: err,
              };
              resolve(sucMsg);
            }
          });
      } else {
        const failMsg = {
          status: false,
          message: "Metamask extension not added on your browser",
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }

  public async GetTotalSupply(Contract: any): Promise<any> {
    console.log("into GetTotalSupply");

    let Abi_array = PairAbi;

    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let token_contract = new window.web3.eth.Contract(Abi_array, Contract);
        await token_contract.methods.totalSupply().call((err, totalsupply) => {
          if (totalsupply) {
            const sucMsg = {
              status: true,
              message: "Got Totalsupply",
              rawtotalsupply: totalsupply,
              totalsupply: window.web3.utils.fromWei(
                totalsupply.toString(),
                "ether"
              ),
            };
            resolve(sucMsg);
          } else {
            const sucMsg = {
              status: false,
              message: "Got error",
              data: err,
            };
            resolve(sucMsg);
          }
        });
      } else {
        const failMsg = {
          status: false,
          message: "Metamask extension not added on your browser",
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
