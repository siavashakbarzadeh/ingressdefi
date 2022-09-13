import { Injectable } from '@angular/core';
import { ContractDetails } from 'src/assets/meta/files/contract';
import { adminAbi } from 'src/assets/meta/files/admin _mint_abi';
import { DataService } from 'src/app/common/api/data.service';
declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class AdminMintService {



  constructor(private dataService:DataService) {
  }


    public async SafeMINTFunction(account:any): Promise<any> {
        var user_address = account.creater_address;
       

    return new Promise(async (resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let Abi_array    = adminAbi;
        let Contract     =  ContractDetails.admin_mint;
        console.log("his.dataService.metaDeatailshis.dataService.metaDeatails",this.dataService)
        let AdminAddress  =  this.dataService.metaDetails.account;
        var user_address = account.creater_address;
        let presale_contract = new window.web3.eth.Contract(Abi_array, Contract);
        // buyTokens section
        await presale_contract.methods
        .safeMint(user_address)
        .send({ from: AdminAddress})
        .on("transactionHash", (hash:any) => {
        })
        .on("receipt", async (buyresult:any) => {
          const sucMsg = {
            status: true,
            message: "Successfully buy",
            result: buyresult,
          };
          resolve(sucMsg);
        })
        .on("confirmation", (confirmationNumber:any, buyresult:any) => {})
        .on("error", async (error:any) => {
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
        // claimReward section
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
