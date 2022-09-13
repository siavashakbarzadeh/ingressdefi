import { Injectable } from "@angular/core";
import { DataService } from "../../api/data.service";
import { PairAbi } from 'src/assets/files/pair_abi';
import { TokenAbi } from 'src/assets/files/token_abi';
import { ContractDetails } from 'src/assets/files/contract';
import { RouterAbi } from 'src/assets/files/router_abi';
declare let window: any;



@Injectable({
  providedIn: "root",
})
export class LiqudityService {
  constructor(private dataService: DataService) {
    if (window.ethereum === undefined) {
      // this.toastr.errorToastr('Non-Ethereum browser detected. Install MetaMask', 'OOPS!');
    } else {
      window.web3 = window.web3.currentProvider;
      window.web3 = new window.Web3(window.ethereum);
    }
  }

  // get reserves method
  public async GetReserves(
    Contract: any,
    UserAddress: any,
    PairValue: any
  ): Promise<any> {
    console.log("UserAddress ----->", UserAddress);
    console.log("Contract ----->", Contract);
    console.log("PairValue ----->", PairValue);

    let Abi_array = PairAbi;

    console.log("PairAbi ----->", Abi_array);

    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let pair_contract = new window.web3.eth.Contract(Abi_array, Contract);
        await pair_contract.methods
          .getReserves()
          .call({ from: UserAddress }, async (err, getReservesResult) => {
            console.log(getReservesResult,'getReservesResult');
            if (getReservesResult) {
              let from_add = await pair_contract.methods.token0().call();
              let from_amount = 0;
              let to_amount = 0;
              if (from_add.toLowerCase() == PairValue.toLowerCase()) {
                from_amount = getReservesResult[0];
                to_amount = getReservesResult[1];
              } else {
                from_amount = getReservesResult[1];
                to_amount = getReservesResult[0];
              }
              const sucMsg = {
                status: true,
                message: "Getreserves Result",
                resultamount: getReservesResult,
                from_amount: from_amount,
                to_amount: to_amount,
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

  // approve section
  public async ApproveFunction(Contract: any, Amount: any): Promise<any> {
    let Abi_array = TokenAbi;
    let SpenderAddress: any = ContractDetails.router_contract;
    let UserAddress: any = this.dataService.metaDeatails.account;

    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let contract = new window.web3.eth.Contract(Abi_array, Contract);

        console.log(contract, "contract");

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
                this.dataService.isOverlay = false;
                await resolve(sucMsg);
              } else {
                // approve section
                await contract.methods
                  .approve(SpenderAddress, Amount)
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
                    console.log("user cancel");
                    this.dataService.isOverlay = false;
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

  // add liqudity section
  // token to token
  public async Addliquditytoken_to_token(
    tokenA: any,
    tokenB: any,
    amountADesired: any,
    amountBDesired: any,
    amountAMin: any,
    amountBMin: any,
    to: any,
    deadline: any
  ): Promise<any> {
    console.log("tokenA ----->", tokenA);
    console.log("tokenB ----->", tokenB);
    console.log("amountADesired ----->", amountADesired);
    console.log("amountBDesired ----->", amountBDesired);
    console.log("amountAMin ----->", amountAMin);
    console.log("amountBMin ----->", amountBMin);
    console.log("to ----->", to);
    console.log("deadline ----->", deadline);

    let Abi_array = RouterAbi;
    let Contract: any = ContractDetails.router_contract;

    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let contract = new window.web3.eth.Contract(Abi_array, Contract);
        // addLiquidity section
        await contract.methods
          .addLiquidity(
            tokenA,
            tokenB,
            amountADesired,
            amountBDesired,
            amountAMin,
            amountBMin,
            to,
            deadline
          )
          .send({ from: to })
          .on("transactionHash", (hash) => {
            console.log("a ------>", hash);
          })
          .on("receipt", async (Liquidityresult) => {
            const sucMsg = {
              status: true,
              message: "Successfully approved",
              result: Liquidityresult,
            };
            resolve(sucMsg);
          })
          .on("confirmation", (confirmationNumber, Liquidityresult) => {})
          .on("error", async (error) => {
            this.dataService.isOverlay = false;

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
        // addLiquidity section
      } else {
        const failMsg = {
          status: false,
          message: "Metamask extension not added on your browser",
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }

  // coin to token
  public async Addliquditycoin_to_token(
    addLiquidityETH: any,
    token: any,
    amountTokenDesired: any,
    amountTokenMin: any,
    amountETHMin: any,
    to: any,
    deadline: any
  ): Promise<any> {
    console.log("addLiquidityETH ----->", addLiquidityETH);
    console.log("token ----->", token);
    console.log("amountTokenDesired ----->", amountTokenDesired);
    console.log("amountTokenMin ----->", amountTokenMin);
    console.log("amountETHMin ----->", amountETHMin);
    console.log("to ----->", to);
    console.log("deadline ----->", deadline);

    let Abi_array = RouterAbi;
    let Contract: any = ContractDetails.router_contract;

    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let contract = new window.web3.eth.Contract(Abi_array, Contract);
        // addLiquidity section
        await contract.methods
          .addLiquidityETH(
            token,
            amountTokenDesired,
            amountTokenMin,
            amountETHMin,
            to,
            deadline
          )
          .send({ from: to, value: addLiquidityETH })
          .on("transactionHash", (hash) => {
            console.log("a ------>", hash);
          })
          .on("receipt", async (Liquidityresult) => {
            const sucMsg = {
              status: true,
              message: "Successfully approved",
              result: Liquidityresult,
            };
            resolve(sucMsg);
          })
          .on("confirmation", (confirmationNumber, Liquidityresult) => {})
          .on("error", async (error) => {
            this.dataService.isOverlay = false;

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
        // addLiquidity section
      } else {
        const failMsg = {
          status: false,
          message: "Metamask extension not added on your browser",
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }

  // token to token
  public async Removeliquditytoken_to_token(
    Contract: any,
    Abi_array: any,
    tokenA: any,
    tokenB: any,
    Liquidity: any,
    amountAMin: any,
    amountBMin: any,
    to: any,
    deadline: any
  ): Promise<any> {
    console.log("Contract ----->", Contract);
    console.log("tokenA ----->", tokenA);
    console.log("tokenB ----->", tokenB);
    console.log("Liquidity ----->", Liquidity);
    console.log("amountAMin ----->", amountAMin);
    console.log("amountBMin ----->", amountBMin);
    console.log("to ----->", to);
    console.log("deadline ----->", deadline);
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let contract = new window.web3.eth.Contract(Abi_array, Contract);
        // addLiquidity section
        await contract.methods
          .removeLiquidity(
            tokenA,
            tokenB,
            Liquidity,
            amountAMin,
            amountBMin,
            to,
            deadline
          )
          .send({ from: to })
          .on("transactionHash", (hash) => {
            console.log("a ------>", hash);
          })
          .on("receipt", async (Liquidityresult) => {
            const sucMsg = {
              status: true,
              message: "Successfully approved",
              result: Liquidityresult,
            };
            resolve(sucMsg);
          })
          .on("confirmation", (confirmationNumber, Liquidityresult) => {})
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
        // addLiquidity section
      } else {
        const failMsg = {
          status: false,
          message: "Metamask extension not added on your browser",
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }

  public async Removeliquditycoin_to_token(
    Contract: any,
    Abi_array: any,
    TokenAddress: any,
    Liquidity: any,
    amountTokenMin: any,
    amountETHMin: any,
    to: any,
    deadline: any
  ): Promise<any> {
    console.log("Contract ----->", Contract);
    console.log("TokenAddress ----->", TokenAddress);
    console.log("Liquidity ----->", Liquidity);
    console.log("amountTokenMin ----->", amountTokenMin);
    console.log("amountETHMin ----->", amountETHMin);
    console.log("to ----->", to);
    console.log("deadline ----->", deadline);
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let contract = new window.web3.eth.Contract(Abi_array, Contract);
        // addLiquidity section
        await contract.methods
          .removeLiquidityETH(
            TokenAddress,
            Liquidity,
            amountTokenMin,
            amountETHMin,
            to,
            deadline
          )
          .send({ from: to })
          .on("transactionHash", (hash) => {
            console.log("a ------>", hash);
          })
          .on("receipt", async (Liquidityresult) => {
            const sucMsg = {
              status: true,
              message: "Successfully approved",
              result: Liquidityresult,
            };
            resolve(sucMsg);
          })
          .on("confirmation", (confirmationNumber, Liquidityresult) => {})
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
        // addLiquidity section
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
