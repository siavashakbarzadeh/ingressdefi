import { Injectable } from "@angular/core";
import { DataService } from "../../api/data.service";
import { StakeAbi } from 'src/assets/files/stake_abi';
import { ContractDetails } from 'src/assets/files/contract';

declare let window: any;

@Injectable({
  providedIn: "root",
})
export class ReferalService {
  constructor(private dataService: DataService) {}

  public async GetReferalInfo(): Promise<any> {
    let Abi_array = StakeAbi;

    let UserAddress = this.dataService.metaDeatails.account;

    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let token_contract = new window.web3.eth.Contract(
          Abi_array,
          ContractDetails.master_stake_address
        );
        await token_contract.methods
          .refInfo(UserAddress)
          .call(async (err, info) => {
            if (info) {
              const sucMsg = {
                status: true,
                message: "Get your balance",
                info: info,
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

  public async AddReferal(address): Promise<any> {
    let Contract = ContractDetails.master_stake_address;
    let Abi_array = StakeAbi;

    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let UserAddress = this.dataService.metaDeatails.account;
        // new
        let contract = new window.web3.eth.Contract(Abi_array, Contract);
        await contract.methods
          .register(address)
          .send({ from: UserAddress })
          .on("transactionHash", (hash) => {
            // console.log("a ------>",hash);
          })
          .on("receipt", async (result) => {
            console.log(result, "result");
            const sucMsg = {
              status: true,
              message: "Successfully Referrals",
              tx_id: result.transactionHash,
            };
            resolve(sucMsg);
          })
          .on("confirmation", (confirmationNumber, result) => {})
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
