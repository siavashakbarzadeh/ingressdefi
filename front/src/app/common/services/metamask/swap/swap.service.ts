import { Injectable } from "@angular/core";
import { DataService } from "../../api/data.service";
import { RouterAbi } from 'src/assets/files/router_abi';
import { ContractDetails } from 'src/assets/files/contract';
import { TokenAbi } from 'src/assets/files/token_abi';
import { PairAbi } from 'src/assets/files/pair_abi';

declare let window: any;

@Injectable({
  providedIn: "root",
})
export class SwapService {
  constructor(private dataService: DataService) {
    if (window.ethereum === undefined) {
      // this.toastr.errorToastr('Non-Ethereum browser detected. Install MetaMask', 'OOPS!');
    } else {
      window.web3 = window.web3.currentProvider;
      window.web3 = new window.Web3(window.ethereum);
    }
  }

  // get equalamount
  // getAmountsIn
  public async getAmountsIn(AmountOut: any, Path: any): Promise<any> {
    console.log('getAmountsIn called');
    let Contract = ContractDetails.router_contract;
    let Abi_array = RouterAbi;

    console.log( AmountOut, "___________________ AmountOut")
    console.log( Path, "___________________ Path")

    // let Path = [
    //   PairAddress,
    //   ToContract ? ToContract : ContractDetails.WBNB_contract,
    // ];
    console.log("here in");

    return new Promise(async (resolve, reject) => {
      console.log("typeof window.web3", typeof window.web3);
      if (typeof window.web3 !== "undefined") {
        console.log("Contract", Contract);
        console.log("params", AmountOut, Path);
        let pair_contract = new window.web3.eth.Contract(Abi_array, Contract);
        await pair_contract.methods
          .getAmountsIn(AmountOut, Path)
          .call(async (err, getamountsInresult) => {
            console.log('err getamountsInresult',err)
            console.log('getamountsInresult getAmountsOut',getamountsInresult)
            if (getamountsInresult) {
              const sucMsg = {
                status: true,
                message: "GetamountsInresult Result",
                resultamount: getamountsInresult,
              };
              resolve(sucMsg);
            } else {
              const sucMsg = {
                status: false,
                message: "Got error",
                data: err,
              };
              console.log('got error getAmountsIn');
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

  // getAmountsOut
  public async getAmountsOut(AmountIn: any, Path: any): Promise<any> {
    console.log("here out");
    let Contract = ContractDetails.router_contract;
    let Abi_array = RouterAbi;

    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let pair_contract = new window.web3.eth.Contract(Abi_array, Contract);
        await pair_contract.methods
          .getAmountsOut(AmountIn, Path)
          .call(async (err, getamountsOutresult) => {
            console.log('err getAmountsOut',err)
            console.log('getamountsOutresult getAmountsOut',getamountsOutresult)
            if (getamountsOutresult) {
              const sucMsg = {
                status: true,
                message: "getamountsOutresult Result",
                resultamount: getamountsOutresult,
              };
              console.log('getamountsOutresult', getamountsOutresult);
              resolve(sucMsg);
            } else {
              const sucMsg = {
                status: false,
                message: "Got error",
                data: err,
              };
              console.log('getamountsOut error');
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

  // approve section
  public async ApproveFunction(Contract: any, Amount: any): Promise<any> {
    let Abi_array = TokenAbi;
    let SpenderAddress: any = ContractDetails.router_contract;
    let UserAddress: any = this.dataService.metaDeatails.account;

    console.log("into approve function ------>");
    console.log("Contract ------>", Contract);
    console.log("SpenderAddress ------>", SpenderAddress);
    console.log("Amount ------>", Amount);
    console.log("UserAddress ------>", UserAddress);
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let contract = new window.web3.eth.Contract(Abi_array, Contract);
        // allowance section
        await contract.methods
          .allowance(UserAddress, SpenderAddress)
          .call({ from: UserAddress }, async (err, getAllowanceResult) => {
            if (getAllowanceResult) {
              console.log("getAllowanceResult ----->", getAllowanceResult);
              console.log("Amount ----->", Amount);
              if (+getAllowanceResult > +Amount) {
                const sucMsg = {
                  status: true,
                  message: "Successfully approved",
                  result: "No need to approve",
                };
                await resolve(sucMsg);
              } else {
                // approve section
                Amount = +Amount + 100000000000000000000;
                console.log("Amount ----->", Amount);
                await contract.methods
                  .approve(SpenderAddress, Amount.toString())
                  .send({ from: UserAddress })
                  .on("transactionHash", (hash) => {
                    console.log("a ------>", hash);
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
                message: "Got error",
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

  // token_to_coin section
  public async swapExactTokensForETH(
    AmountIn: any,
    AmountOutMin: any,
    contractAddress: any,
    Path: any
  ): Promise<any> {
    console.log("into swapExactTokensForETH function ------>");
    // console.log("contractAddress ------>", contractAddress);
    console.log("AmountIn ------>", AmountIn);
    console.log("AmountOutMin ------>", AmountOutMin);

    let date = new Date();
    let timestamp = date.getTime();
    let Deadline = timestamp + 1000;

    let Abi_array = RouterAbi;
    let Contract: any = ContractDetails.router_contract;
    let UserAddress: any = this.dataService.metaDeatails.account;
    let To: any = this.dataService.metaDeatails.account;

    console.log(Path, "-------------------> Path");
    console.log(To, "-------------------> To");
    console.log(Deadline, "-------------------> Deadline");

    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let contract = new window.web3.eth.Contract(Abi_array, Contract);
        await contract.methods
          .swapExactTokensForETH(AmountIn, AmountOutMin, Path, To, Deadline)
          .send({ from: To })
          .on("transactionHash", (hash) => {
            console.log("a ------>", hash);
          })
          .on("receipt", async (approveresult) => {
            const sucMsg = {
              status: true,
              message: "Successfully swap",
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
              data: error,
            };
            await resolve(sucMsg);
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

  // coin_to_token section
  public async swapExactETHForTokens(
    swapExactETHForTokens: any,
    AmountOut: any,
    contractAddress: any,
    Path: any
  ): Promise<any> {
    console.log("into swapExactETHForTokens function ------>");

    let date = new Date();
    let timestamp = date.getTime();
    let Deadline = timestamp + 1000;

    let Abi_array = RouterAbi;
    let Contract: any = ContractDetails.router_contract;
    let UserAddress: any = this.dataService.metaDeatails.account;
    let To: any = this.dataService.metaDeatails.account;

    console.log("Contract ------>", Contract);
    console.log("swapExactETHForTokens ------>", swapExactETHForTokens);
    console.log("AmountOut ------>", AmountOut);
    console.log("Path ------>", Path);
    console.log("To ------>", To);
    console.log("Deadline ------>", Deadline);

    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let contract = new window.web3.eth.Contract(Abi_array, Contract);
        await contract.methods
          .swapExactETHForTokens(AmountOut, Path, To, Deadline)
          .send({ from: To, value: swapExactETHForTokens })
          .on("transactionHash", (hash) => {
            console.log("a ------>", hash);
          })
          .on("receipt", async (approveresult) => {
            const sucMsg = {
              status: true,
              message: "Successfully swap",
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
              data: error,
            };
            await resolve(sucMsg);
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

  // token_to_token section
  public async swapExactTokensForTokens(
    AmountIn: any,
    AmountOutMin: any,
    contractAddress: any,
    Path: any
  ): Promise<any> {
    let date = new Date();
    let timestamp = date.getTime();
    let Deadline = timestamp + 1000;

    let Abi_array = RouterAbi;
    let Contract: any = ContractDetails.router_contract;
    let To: any = this.dataService.metaDeatails.account;

    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let contract = new window.web3.eth.Contract(Abi_array, Contract);
        await contract.methods
          .swapExactTokensForTokens(AmountIn, AmountOutMin, Path, To, Deadline)
          .send({ from: To })
          .on("transactionHash", (hash) => {
            console.log("a ------>", hash);
          })
          .on("receipt", async (approveresult) => {
            const sucMsg = {
              status: true,
              message: "Successfully swap",
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
              data: error,
            };
            await resolve(sucMsg);
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

  public async getAmountsInOld(
    Contract: any,
    Abi_array: any,
    AmountOut: any,
    Path: any
  ): Promise<any> {
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let pair_contract = new window.web3.eth.Contract(Abi_array, Contract);
        await pair_contract.methods
          .getAmountsIn(AmountOut, Path)
          .call(async (err, getamountsInresult) => {
            if (getamountsInresult) {
              const sucMsg = {
                status: true,
                message: "GetamountsInresult Result",
                resultamount: getamountsInresult,
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

  // getAmountsOut
  public async getAmountsOutOld(
    Contract: any,
    Abi_array: any,
    AmountIn: any,
    Path: any
  ): Promise<any> {
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
    console.log('getAmountsOutOld called', Abi_array, Contract);
        let pair_contract = new window.web3.eth.Contract(Abi_array, Contract);
        await pair_contract.methods
          .getAmountsOut(AmountIn, Path)
          .call(async (err, getamountsOutresult) => {
            if (getamountsOutresult) {
              const sucMsg = {
                status: true,
                message: "getamountsOutresult Result",
                resultamount: getamountsOutresult,
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

  public async GetReserves(pairAddress): Promise<any> {
    let Contract = pairAddress;
    let Abi_array = PairAbi;

    console.log("here in", Contract);

    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let pair_contract = new window.web3.eth.Contract(Abi_array, Contract);
        await pair_contract.methods.getReserves().call(async (err, result) => {
          if (result) {
            const sucMsg = {
              status: true,
              message: "getReserves Result",
              resultamount: result,
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
}
