import { Injectable } from '@angular/core';
import { DataService } from 'src/app/common/api/data.service';
import { LotteryMainProxyAbi } from 'src/assets/meta/files/lottery_main_proxy_abi';
import { ContractDetails } from 'src/assets/meta/files/contract';

declare let window: any;

@Injectable({
  providedIn: 'root',
})
export class LotteryService {
  constructor(private dataService: DataService) {}

  // set winning number drawing
  public async Drawing(RandomNumber: any): Promise<any> {
    //   let Abi_array = TokenAbi;
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== 'undefined') {
        let contract = new window.web3.eth.Contract(
          LotteryMainProxyAbi,
          ContractDetails.lottery_main_proxy
        );
        const address = await contract.methods.owner().call();
        let self = this;

        // const address = admin_address;

        await contract.methods
          .drawing(RandomNumber)
          .send({ from: address })
          .then(async function (result: any) {
            console.log(result, 'sucess');

            if (result.status) {
              var winning_value: any = [];

              for (let index = 0; index < 4; index++) {
                self.winningNumbers(index).then((suc) => {
                  console.log(suc, 'suc');
                  if (suc.status) {
                    winning_value.push(suc.result);

                    if (index == 3) {
                      const sucMsg = {
                        status: true,
                        message: 'Get your Drawing',
                        txId: result.transactionHash,
                        winning_value,
                      };
                      resolve(sucMsg);
                    }
                  }
                });
              }
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
  // drawing

  // get winning number
  public async winningNumbers(Arraypalce: any): Promise<any> {
    console.log('winningNumbers ---->');
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== 'undefined') {
        let Abi_array = LotteryMainProxyAbi;
        let contract = ContractDetails.lottery_main_proxy;

        let lottery_main_contract = new window.web3.eth.Contract(
          Abi_array,
          contract
        );
        const address = await lottery_main_contract.methods.owner().call();
        // winningNumbers section
        await lottery_main_contract.methods
          .winningNumbers(Arraypalce)
          .call(async (err: any, winningNumbersresult: any) => {
            if (winningNumbersresult) {
              const sucMsg = {
                status: true,
                message: 'winningNumbers Result',
                result: winningNumbersresult,
              };
              resolve(sucMsg);
            } else {
              const sucMsg = {
                status: false,
                message: 'Got error',
                data: err,
              };
              resolve(sucMsg);
            }
          });
        // winningNumbers section
      } else {
        const failMsg = {
          status: false,
          message: 'Metamask extension not added on your browser',
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }
  // get winning number

  // reset
  public async reset(): Promise<any> {
    console.log('reset ---->');
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== 'undefined') {
        let Abi_array = LotteryMainProxyAbi;
        let Contract = ContractDetails.lottery_main_proxy;

        let lottery_main_contract = new window.web3.eth.Contract(
          Abi_array,
          Contract
        );
        const address = await lottery_main_contract.methods.owner().call();
        this.dataService.metaDetails.account = address;
        // winningNumbers section
        await lottery_main_contract.methods
          .reset()
          .send({ from: address })
          .on('transactionHash', (hash: any) => {})
          .on('receipt', async (resetresult: any) => {
            const sucMsg = {
              status: true,
              message: 'Successfully reset',
              result: resetresult.transactionHash,
            };
            resolve(sucMsg);
          })
          .on('confirmation', (confirmationNumber: any, resetresult: any) => {})
          .on('error', async (error: any) => {
            let message =
              error.message ==
              'MetaMask Tx Signature: User denied transaction signature'
                ? 'Transaction Rejected !'
                : 'Something went wrong try after Sometime';
            const sucMsg = {
              status: false,
              message: error.message,
            };
            await resolve(sucMsg);
          });
        // winningNumbers section
      } else {
        const failMsg = {
          status: false,
          message: 'Metamask extension not added on your browser',
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }
  // reset

  // Stop buy
  public async stopBuy(): Promise<any> {
    console.log('stopBuy ---->');
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== 'undefined') {
        let Abi_array = LotteryMainProxyAbi;
        let contract = ContractDetails.lottery_main_proxy;

        let lottery_main_contract = new window.web3.eth.Contract(
          Abi_array,
          contract
        );
        const address = await lottery_main_contract.methods.owner().call();
        console.clear();
        console.log("contract ----->", contract);
        console.log("address ----->", address);
        // enterDrawingPhase section
        await lottery_main_contract.methods
          .enterDrawingPhase()
          .send({ from: address })
          .on('transactionHash', (hash: any) => {})
          .on('receipt', async (enterDrawingPhaseresult: any) => {
            const sucMsg = {
              status: true,
              message: 'Successfully stop buy',
              result: enterDrawingPhaseresult.transactionHash,
            };
            resolve(sucMsg);
          })
          .on(
            'confirmation',
            (confirmationNumber: any, enterDrawingPhaseresult: any) => {}
          )
          .on('error', async (error: any) => {
            let message =
              error.message ==
              'MetaMask Tx Signature: User denied transaction signature'
                ? 'Transaction Rejected !'
                : 'Something went wrong try after Sometime';
            const sucMsg = {
              status: false,
              message: error.message,
            };
            await resolve(sucMsg);
          });
        // enterDrawingPhase section
      } else {
        const failMsg = {
          status: false,
          message: 'Metamask extension not added on your browser',
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }

  // Stop buy

  // get contest number
  public async GetContestNumber(): Promise<any> {
    console.log('GetContestNumber ---->');
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== 'undefined') {
        let Abi_array = LotteryMainProxyAbi;
        let Contract = ContractDetails.lottery_main_proxy;

        let lottery_main_contract = new window.web3.eth.Contract(
          Abi_array,
          Contract
        );
        // userInfo section
        await lottery_main_contract.methods
          .issueIndex()
          .call(async (err: any, issueIndexresult: any) => {
            if (issueIndexresult) {
              const sucMsg = {
                status: true,
                message: 'issueIndex Result',
                result: issueIndexresult,
              };
              resolve(sucMsg);
            } else {
              const sucMsg = {
                status: false,
                message: 'Got error',
                data: err,
              };
              resolve(sucMsg);
            }
          });
        // userInfo section
      } else {
        const failMsg = {
          status: false,
          message: 'Metamask extension not added on your browser',
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }
  // get contest number

  // get winning history
  public async historyNumbers(
    ContestNumber: any,
    IndexNumber: any
  ): Promise<any> {
    console.log('historyNumbers ---->');
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== 'undefined') {
        let Abi_array = LotteryMainProxyAbi;
        let Contract = ContractDetails.lottery_main_proxy;

        let lottery_main_contract = new window.web3.eth.Contract(
          Abi_array,
          Contract
        );
        // historyNumbersresult section
        await lottery_main_contract.methods
          .historyNumbers(ContestNumber, IndexNumber)
          // .winningNumbers(IndexNumber)
          .call(async (err: any, historyNumbersresult: any) => {
            if (historyNumbersresult) {
              const sucMsg = {
                status: true,
                message: 'historyNumbers Result',
                result: historyNumbersresult,
              };
              resolve(sucMsg);
            } else {
              const sucMsg = {
                status: false,
                message: 'Got error',
                data: err,
              };
              resolve(sucMsg);
            }
          });
        // historyNumbersresult section
      } else {
        const failMsg = {
          status: false,
          message: 'Metamask extension not added on your browser',
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }
  // get winning history

  // get winning amount details
  public async historyAmounts(
    ContestNumber: any,
    IndexNumber: any
  ): Promise<any> {
    console.log('historyNumbers ---->');
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== 'undefined') {
        let Abi_array = LotteryMainProxyAbi;
        let Contract = ContractDetails.lottery_main_proxy;

        let lottery_main_contract = new window.web3.eth.Contract(
          Abi_array,
          Contract
        );
        // historyNumbersresult section
        await lottery_main_contract.methods
          .historyAmount(ContestNumber, IndexNumber)
          .call(async (err: any, historyAmountresult: any) => {
            if (historyAmountresult) {
              const sucMsg = {
                status: true,
                message: 'historyAmount Result',
                result: historyAmountresult,
              };
              resolve(sucMsg);
            } else {
              const sucMsg = {
                status: false,
                message: 'Got error',
                data: err,
              };
              resolve(sucMsg);
            }
          });
        // historyNumbersresult section
      } else {
        const failMsg = {
          status: false,
          message: 'Metamask extension not added on your browser',
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }
  // get winning amount details
}
