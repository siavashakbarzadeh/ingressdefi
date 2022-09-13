import { Injectable } from "@angular/core";
import { DataService } from "../../api/data.service";
import { ContractDetails } from 'src/assets/files/contract';
import { TokenAbi } from 'src/assets/files/token_abi';
declare let window: any;

@Injectable({
  providedIn: "root",
})
export class VoteService {
  constructor(private dataService: DataService) {}

  public async Delegatee(): Promise<any> {
    let Contract = ContractDetails.governance_token_contract;
    let Abi_array = TokenAbi;

    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let UserAddress = this.dataService.metaDeatails.account;
        // new
        let contract = new window.web3.eth.Contract(Abi_array, Contract);
        await contract.methods
          .delegate(UserAddress)
          .send({ from: UserAddress })
          .on("transactionHash", (hash) => {
            // console.log("a ------>",hash);
          })
          .on("receipt", async (Harvestresult) => {
            console.log(Harvestresult , "Harvestresult")
            const sucMsg = {
              status: true,
              message: "Successfully Harvest",
              tx_id: Harvestresult.transactionHash,
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
        // new

        // old
        // let vote_contract = new window.web3.eth.Contract(Abi_array, Contract);
        // await vote_contract.methods
        //   .delegate(this.dataService.metaDeatails.account)
        //   .call(async (err, result) => {
        //     console.log(result, "____________________ result");
        //     console.log(err, "____________________ result");
        //     if (result) {
        //       const sucMsg = {
        //         status: true,
        //         message: "Delegated Successfully",
        //         tx_id: result.result.transactionHash,
        //       };
        //       resolve(sucMsg);
        //     } else {
        //       const sucMsg = {
        //         status: false,
        //         message: "Got error",
        //         data: err,
        //       };
        //       resolve(sucMsg);
        //     }
        //   });
        // old
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
