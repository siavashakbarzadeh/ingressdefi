import { Injectable } from '@angular/core';
import { ContractDetails } from 'src/assets/meta/files/contract';
import { StakeAbi } from 'src/assets/meta/files/masterChef_contract_abi';

declare let window: any;

@Injectable({
  providedIn: 'root',
})
export class StakingService {
  masterChefContract = ContractDetails.masterChef_contract;

  constructor() {}

  // public async GetTokenbalance(Contract: any, UserAddress: any): Promise<any> {
  //   let Abi_array = TokenAbi;
  //   return new Promise(async (resolve, reject) => {
  //     if (typeof window.web3 !== "undefined") {
  //       let token_contract = new window.web3.eth.Contract(Abi_array, Contract);
  //       await token_contract.methods
  //         .balanceOf(UserAddress)
  //         .call(async (err, balance) => {
  //           if (balance) {
  //             const sucMsg = {
  //               status: true,
  //               message: "Get your balance",
  //               rawbalance: balance,
  //               balance: await window.web3.utils.fromWei(balance.toString(), 'ether')
  //             };
  //             resolve(sucMsg);
  //           } else {
  //             const sucMsg = {
  //               status: false,
  //               message: "Got error",
  //               data: err,
  //             };
  //             resolve(sucMsg);
  //           }
  //         });
  //     } else {
  //       const failMsg = {
  //         status: false,
  //         message: "Metamask extension not added on your browser",
  //       };
  //       resolve(failMsg);
  //     }
  //   }) as Promise<any>;
  // }

  public async addStakeing(pairAddress: any): Promise<any> {
    //   let Abi_array = TokenAbi;
    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== 'undefined') {
        let contract = new window.web3.eth.Contract(
          StakeAbi,
          this.masterChefContract
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
}
