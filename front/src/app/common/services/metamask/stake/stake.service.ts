import { Injectable } from "@angular/core";
import { DataService } from "../../api/data.service";
import { StakeAbi } from "src/assets/files/stake_abi";
import { ContractDetails } from "src/assets/files/contract";
import { PairAbi } from "src/assets/files/pair_abi";
declare let window: any;

@Injectable({
  providedIn: "root",
})
export class StakeService {
  constructor(private dataService: DataService) {
    if (window.ethereum === undefined) {
      // this.toastr.errorToastr('Non-Ethereum browser detected. Install MetaMask', 'OOPS!');
    } else {
      window.web3 = window.web3.currentProvider;
      window.web3 = new window.Web3(window.ethereum);
    }
  }

  // get GetRewardamount method
  // public async GetRewardamount(Contract:any,Abi_array:any,UserAddress:any): Promise<any> {
  public async GetRewardamount(pId: any): Promise<any> {
    console.log('GetRewardamount', pId);
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let Abi_array = StakeAbi;
        let Contract = ContractDetails.master_stake_address;
        let UserAddress = this.dataService.metaDeatails.account;

        let stake_contract = new window.web3.eth.Contract(Abi_array, Contract);
        await stake_contract.methods
          .pendingCake(pId, UserAddress)
          .call(async (err, getearnedResult) => {
            if (getearnedResult) {
              const sucMsg = {
                status: true,
                message: "GetRewardamount Result",
                result: getearnedResult,
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

  // get GetStakedamount method
  // public async GetRewardamount(Contract:any,Abi_array:any,UserAddress:any): Promise<any> {
  public async GetStakedamount(pId: any): Promise<any> {
    console.log('GetStakedamount', pId);
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let Abi_array = StakeAbi;
        let Contract = ContractDetails.master_stake_address;
        let UserAddress = this.dataService.metaDeatails.account;

        let stake_contract = new window.web3.eth.Contract(Abi_array, Contract);
        await stake_contract.methods
          .userInfo(pId, UserAddress)
          .call(async (err, getuserinfoResult) => {
            if (getuserinfoResult) {
              const sucMsg = {
                status: true,
                message: "GetuserinfoResult Result",
                result: getuserinfoResult,
                amount: getuserinfoResult.amount,
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

  // approve section
  public async ApproveFunction(Contract: any, Amount: any): Promise<any> {
    console.log('ApproveFunction', Contract, Amount);
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let Abi_array = PairAbi;
        let UserAddress = this.dataService.metaDeatails.account;
        let SpenderAddress = ContractDetails.master_stake_address;
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

  // stake section
  // public async StakeFunction(Contract:any,Abi_array:any,Amount:any,UserAddress:any): Promise<any> {
  public async StakeFunction(pId: any, Amount: any): Promise<any> {
    console.log(pId, 'PID');
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let Abi_array = StakeAbi;
        let Contract = ContractDetails.master_stake_address;
        let UserAddress = this.dataService.metaDeatails.account;

        let contract = new window.web3.eth.Contract(Abi_array, Contract);
        // stake section
        await contract.methods
          .deposit(pId, Amount.toString())
          .send({ from: UserAddress })
          .on("transactionHash", (hash) => {
            // console.log("a ------>",hash);
          })
          .on("receipt", async (stakeresult) => {
            const sucMsg = {
              status: true,
              message: "Successfully staked",
              result: stakeresult,
            };
            resolve(sucMsg);
          })
          .on("confirmation", (confirmationNumber, stakeresult) => {})
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
        // stake section
      } else {
        const failMsg = {
          status: false,
          message: "Metamask extension not added on your browser",
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }

  public async addStakeing(pairAddress: any): Promise<any> {
    console.log('addStakeing called', pairAddress);
    //   let Abi_array = TokenAbi;
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== 'undefined') {
        let contract = new window.web3.eth.Contract(
          StakeAbi,
          ContractDetails.master_stake_address
        );
        const address = await contract.methods.owner().call();
        await contract.methods
          .add(100, pairAddress, false)
          .send({ from: address })
          .then(async function (result: any) {
            console.log(result, 'sucess');

            if (result.status) {
              const poolLength = await contract.methods.poolLength().call();

              console.log(poolLength, '___________ poolLength');

              const sucMsg = {
                status: true,
                message: 'Get your poll',
                data: poolLength - 1,
                txId: result.transactionHash,
              };
              resolve(sucMsg);
            } else {
              const sucMsg = {
                status: false,
                message: 'Got error',
                data: result,
              };
              resolve(sucMsg);
            }
          })
          .catch(async (err: any) => {
            const errMsg: any = {
              status: false,
              message: err.message,
              data: err,
            };
            await resolve(errMsg);

            const sucMsg = {
              status: false,
              message: 'Got error',
            };
            resolve(sucMsg);
          });
      } else {
        const failMsg = {
          status: false,
          message: 'Metamask extension not added on your browser',
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }

  // unstake section
  // public async UnstakeFunction(Contract:any,Abi_array:any,UserAddress:any): Promise<any> {
  public async UnstakeFunction(pId: any, Amount: any): Promise<any> {
    console.log('UnstakeFunction', pId, Amount);
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let Abi_array = StakeAbi;
        let Contract = ContractDetails.master_stake_address;
        let UserAddress = this.dataService.metaDeatails.account;

        let contract = new window.web3.eth.Contract(Abi_array, Contract);
        // unstake section
        await contract.methods
          .withdraw(pId, Amount)
          .send({ from: UserAddress })
          .on("transactionHash", (hash) => {
            // console.log("a ------>",hash);
          })
          .on("receipt", async (unstakeresult) => {
            const sucMsg = {
              status: true,
              message: "Successfully staked",
              result: unstakeresult,
            };
            resolve(sucMsg);
          })
          .on("confirmation", (confirmationNumber, unstakeresult) => {})
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
        // unstake section
      } else {
        const failMsg = {
          status: false,
          message: "Metamask extension not added on your browser",
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }

  // harvest section
  // public async HarvestFunction(Contract:any,Abi_array:any,UserAddress:any): Promise<any> {
  public async HarvestFunction(pId: any): Promise<any> {
    console.log('HarvestFunction', pId);
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let Abi_array = StakeAbi;
        let Contract = ContractDetails.master_stake_address;
        let UserAddress = this.dataService.metaDeatails.account;
        let Amount = 0;

        let contract = new window.web3.eth.Contract(Abi_array, Contract);
        // Harvestresult section
        await contract.methods
          .withdraw(pId, Amount)
          .send({ from: UserAddress })
          .on("transactionHash", (hash) => {
            // console.log("a ------>",hash);
          })
          .on("receipt", async (Harvestresult) => {
            const sucMsg = {
              status: true,
              message: "Successfully Harvest",
              result: Harvestresult,
            };
            resolve(sucMsg);
          })
          .on("confirmation", (confirmationNumber, Harvestresult) => {})
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
        // Harvestresult section
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

  public async GetPoolInfo(poolId): Promise<any> {
    let Abi_array = StakeAbi;
    console.log('GetPoolInfo', poolId);
    let Contract = ContractDetails.master_stake_address;

    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let token_contract = new window.web3.eth.Contract(Abi_array, Contract);
        await token_contract.methods.poolInfo(poolId).call((err, result) => {
          if (result) {
            const sucMsg = {
              status: true,
              message: "Got Result",
              shareRaw: result.accGoldPerShare,
              share: window.web3.utils.fromWei(
                result.accGoldPerShare.toString(),
                "ether"
              ),
              allocPoint: result.allocPoint,
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

  public async GetReferrerReward(txId): Promise<any> {
    console.log('GetReferrerReward', txId);
    let Abi_array = StakeAbi;
    let Contract = ContractDetails.master_stake_address;

    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let token_contract = await new window.web3.eth.Contract(
          Abi_array,
          Contract
        );

        return await token_contract.events
          .referrerReward(
            {
              filter: {
                user: this.dataService.metaDeatails.account,
              },
              fromBlock: 0,
              toBlock: "latest",
            },
            function (error, event) {
              // console.log(event);
              // console.log(error);
              if (event.transactionHash == txId) {
                // console.log("yes here");
                resolve(event);
              }
            }
          )
          .on("data", function (event) {
            console.log(event); // same results as the optional callback above
            console.log(event.transactionHash, txId); // same results as the optional callback above

            if (event.transactionHash == txId) {
              console.log("yes here1");

              resolve(event);
            }
          })
          .on("changed", function (event) {
            // remove event from local database
          })
          .on("error", function (err) {
            console.log(err);
          });

        // await token_contract.methods.poolInfo(txId).call((err, result) => {
        //   if (result) {
        //     const sucMsg = {
        //       status: true,
        //       message: "Got Result",
        //       shareRaw: result.accGoldPerShare,
        //       share: window.web3.utils.fromWei(
        //         result.accGoldPerShare.toString(),
        //         "ether"
        //       ),
        //       allocPoint: result.allocPoint,
        //     };
        //     resolve(sucMsg);
        //   } else {
        //     const sucMsg = {
        //       status: false,
        //       message: "Got error",
        //       data: err,
        //     };
        //     resolve(sucMsg);
        //   }
        // });
      } else {
        // const failMsg = {
        //   status: false,
        //   message: "Metamask extension not added on your browser",
        // };
        // resolve(failMsg);
      }
    }) as Promise<any>;
  }

  // public async GetRefAmount(poolId): Promise<any> {
  //   myContract.events
  //     .MyEvent(
  //       {
  //         filter: {
  //           myIndexedParam: [20, 23],
  //           myOtherIndexedParam: "0x123456789...",
  //         }, // Using an array means OR: e.g. 20 or 23
  //         fromBlock: 0,
  //       },
  //       function (error, event) {
  //         console.log(event);
  //       }
  //     )
  //     .on("data", function (event) {
  //       console.log(event); // same results as the optional callback above
  //     })
  //     .on("changed", function (event) {
  //       // remove event from local database
  //     })
  //     .on("error", console.error);
  // }
}
