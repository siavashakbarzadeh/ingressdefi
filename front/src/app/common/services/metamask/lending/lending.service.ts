import { Injectable } from "@angular/core";
import { DataService } from "../../api/data.service";
import { LendingPoolProxyAbi } from "src/assets/files/lending_pool_proxy_abi";
import { ContractDetails } from "src/assets/files/contract";
import { LendingDataProviderAbi } from "src/assets/files/lending_data_provider_abi";
import { TokenAbi } from "src/assets/files/token_abi";
declare let window: any;

// import { TokenAbi } from "../files/token_abi";
// import { ContractDetails } from "../files/contract";
// import { PairAbi } from "../files/pair_abi";
// import { LendingPoolProxyAbi } from "../files/lending_pool_proxy_abi";
// import { LendingDataProviderAbi } from "../files/lending_data_provider_abi";

@Injectable({
  providedIn: "root",
})
export class LendingService {
  constructor(private dataService: DataService) {
    if (window.ethereum === undefined) {
      // this.toastr.errorToastr('Non-Ethereum browser detected. Install MetaMask', 'OOPS!');
    } else {
      window.web3 = window.web3.currentProvider;
      window.web3 = new window.Web3(window.ethereum);
    }
  }

  // get asset list
  public async GetAssetsList(): Promise<any> {
    console.log("GetAssetsList ---->");
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let Abi_array = LendingPoolProxyAbi;
        let Contract = ContractDetails.lending_pool_proxy;

        let lending_proxy_contract = new window.web3.eth.Contract(
          Abi_array,
          Contract
        );
        await lending_proxy_contract.methods
          .getReservesList()
          .call(async (err, getreserveslistResult) => {
            if (getreserveslistResult) {
              const sucMsg = {
                status: true,
                message: "getreserveslistResult Result",
                result: getreserveslistResult,
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

  public async GetReserveData(assetAddress): Promise<any> {
    console.log("GetAssetsList ---->");
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let Abi_array = LendingDataProviderAbi;
        let Contract = ContractDetails.lending_data_provider;

        let lending_data_provider_contract = new window.web3.eth.Contract(
          Abi_array,
          Contract
        );
        await lending_data_provider_contract.methods
          .getReserveData(assetAddress)
          .call(async (err, getReserveDataResult) => {
            if (getReserveDataResult) {
              const sucMsg = {
                status: true,
                message: "getReserveDataResult Result",
                rawresult: getReserveDataResult,
                result: window.web3.utils.fromWei(
                  getReserveDataResult.availableLiquidity.toString(),
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

  public async GetReserveConfigurationData(assetAddress): Promise<any> {
    console.log("GetAssetsList ---->");
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let Abi_array = LendingDataProviderAbi;
        let Contract = ContractDetails.lending_data_provider;

        let lending_data_provider_contract = new window.web3.eth.Contract(
          Abi_array,
          Contract
        );
        await lending_data_provider_contract.methods
          .getReserveConfigurationData(assetAddress)
          .call(async (err, GetReserveConfigurationDataResult) => {
            if (GetReserveConfigurationDataResult) {
              const sucMsg = {
                status: true,
                message: "GetReserveConfigurationDataResult Result",
                result: GetReserveConfigurationDataResult,
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

  // get user lending amount
  public async GetLendingAmount(assetAddress): Promise<any> {
    console.log("GetLendingAmount ---->");
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let Abi_array = LendingDataProviderAbi;
        let Contract = ContractDetails.lending_data_provider;
        let UserAddress = this.dataService.metaDeatails.account;

        let lending_data_provider_contract = new window.web3.eth.Contract(
          Abi_array,
          Contract
        );
        await lending_data_provider_contract.methods
          .getUserReserveData(assetAddress, UserAddress)
          .call(async (err, getUserReserveDataResult) => {
            if (getUserReserveDataResult) {
              const sucMsg = {
                status: true,
                message: "getUserReserveDataResult Result",
                result: getUserReserveDataResult,
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

  // deposit (lending)
  public async DoLending(Asset: any, Amount: any): Promise<any> {
    console.log("DoLending ------>");
    // asset 			-----> asset address
    // amount 			-----> amount
    // onBehalfOf 		-----> user address
    // referralCode 	-----> referralCode (always 0)
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let Abi_array = LendingPoolProxyAbi;
        let Contract = ContractDetails.lending_pool_proxy;

        let referralCode = 0;

        let onBehalfOf = this.dataService.metaDeatails.account;

        let lending_proxy_contract = new window.web3.eth.Contract(
          Abi_array,
          Contract
        );
        // lending section
        await lending_proxy_contract.methods
          .deposit(Asset, Amount, onBehalfOf, referralCode)
          .send({ from: onBehalfOf })
          .on("transactionHash", (hash) => {})
          .on("receipt", async (depositresult) => {
            const sucMsg = {
              status: true,
              message: "Successfully DoLending",
              result: depositresult.transactionHash,
            };
            resolve(sucMsg);
          })
          .on("confirmation", (confirmationNumber, depositresult) => {})
          .on("error", async (error) => {
            let message =
              error.message ==
              "MetaMask Tx Signature: User denied transaction signature"
                ? "Transaction Rejected !"
                : "Something went wrong try after Sometime";
            const sucMsg = {
              status: false,
              message: error.message,
            };
            await resolve(sucMsg);
          });
        // lending section
      } else {
        const failMsg = {
          status: false,
          message: "Metamask extension not added on your browser",
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }

  // approve function
  public async ApproveFunction(Contract: any, Amount: any): Promise<any> {
    console.log("contract ---->", Contract);
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let Abi_array = TokenAbi;
        let UserAddress = this.dataService.metaDeatails.account;
        let SpenderAddress = ContractDetails.lending_pool_proxy;
        let contract = new window.web3.eth.Contract(Abi_array, Contract);
        // allowance section
        await contract.methods
          .allowance(UserAddress, SpenderAddress)
          .call({ from: UserAddress }, async (err, getAllowanceResult) => {
            if (getAllowanceResult) {
              if (+getAllowanceResult > +Amount) {
                const sucMsg = {
                  status: true,
                  message: "Successfully approved",
                  result: "No need to approve",
                };
                await resolve(sucMsg);
              } else {
                // approve section
                await contract.methods
                  .approve(SpenderAddress, Amount)
                  .send({ from: UserAddress })
                  .on("transactionHash", (hash) => {
                    // console.log("a ------>",hash);
                  })
                  .on("receipt", async (approveresult) => {
                    const sucMsg = {
                      status: true,
                      message: "Successfully approved",
                      result: approveresult,
                    };
                    resolve(sucMsg);
                  })
                  .on("confirmation", (confirmationNumber, approveresult) => {})
                  .on("error", async (error) => {
                    let message =
                      error.message ==
                      "MetaMask Tx Signature: User denied transaction signature"
                        ? "Transaction Rejected !"
                        : "Something went wrong try after Sometime";
                    const sucMsg = {
                      status: false,
                      message: error.message,
                      data: err,
                    };
                    await resolve(sucMsg);
                  });
                // approve section
              }
            } else {
              const sucMsg = {
                status: false,
                message: "Got error approve",
                data: err,
              };
              resolve(sucMsg);
            }
          });
        // allowance section
      } else {
        const failMsg = {
          status: false,
          message: "Metamask extension not added on your browser",
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }
  // approve function

  // withdraw (borrow)
  public async DoBorrow(Asset: any, Amount: any): Promise<any> {
    console.log("DoBorrow ---->");
    // asset 				-----> asset address
    // amount 				-----> amount
    // interestRateMode 	-----> 1 or 2
    // referralCode 		-----> referralCode (always 0)
    // onBehalfOf 			-----> user address
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let Abi_array = LendingPoolProxyAbi;
        let Contract = ContractDetails.lending_pool_proxy;
        let onBehalfOf = this.dataService.metaDeatails.account;

        let interestRateMode = 2;
        let referralCode = 0;

        let lending_proxy_contract = new window.web3.eth.Contract(
          Abi_array,
          Contract
        );
        // borrow section
        await lending_proxy_contract.methods
          .borrow(Asset, Amount, interestRateMode, referralCode, onBehalfOf)
          .send({ from: onBehalfOf })
          .on("transactionHash", (hash) => {})
          .on("receipt", async (borrowresult) => {
            const sucMsg = {
              status: true,
              message: "Successfully staked",
              result: borrowresult.transactionHash,
            };
            resolve(sucMsg);
          })
          .on("confirmation", (confirmationNumber, borrowresult) => {})
          .on("error", async (error) => {
            let message =
              error.message ==
              "MetaMask Tx Signature: User denied transaction signature"
                ? "Transaction Rejected !"
                : "Something went wrong try after Sometime";
            const sucMsg = {
              status: false,
              message: error.message,
            };
            await resolve(sucMsg);
          });
        // borrow section
      } else {
        const failMsg = {
          status: false,
          message: "Metamask extension not added on your browser",
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }

  // withdraw (retrive lending amount)
  public async DoWithdraw(Asset: any, Amount: any): Promise<any> {
    console.log("DoWithdraw ---->");
    // asset 				-----> asset address
    // amount 				-----> amount
    // to 					-----> user address
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let Abi_array = LendingPoolProxyAbi;
        let Contract = ContractDetails.lending_pool_proxy;

        let interestRateMode = 1;
        let referralCode = 0;
        let To = this.dataService.metaDeatails.account;

        let lending_proxy_contract = new window.web3.eth.Contract(
          Abi_array,
          Contract
        );
        // withdraw section
        await lending_proxy_contract.methods
          .withdraw(Asset, Amount, To)
          .send({ from: To })
          .on("transactionHash", (hash) => {})
          .on("receipt", async (withdrawresult) => {
            const sucMsg = {
              status: true,
              message: "Successfully Withdraw",
              result: withdrawresult.transactionHash,
            };
            resolve(sucMsg);
          })
          .on("confirmation", (confirmationNumber, withdrawresult) => {})
          .on("error", async (error) => {
            let message =
              error.message ==
              "MetaMask Tx Signature: User denied transaction signature"
                ? "Transaction Rejected !"
                : "Something went wrong try after Sometime";
            const sucMsg = {
              status: false,
              message: error.message,
            };
            await resolve(sucMsg);
          });
        // withdraw section
      } else {
        const failMsg = {
          status: false,
          message: "Metamask extension not added on your browser",
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }
}
