import { Injectable } from '@angular/core';
import { DataService } from "../../api/data.service";
declare let window: any;



import { CommonContractService } from "src/app/common/services/metamask/common-contract/common-contract.service";
import { LotteryMainProxyAbi } from 'src/assets/files/lottery_main_proxy_abi';
import { ContractDetails } from 'src/assets/files/contract';
import { LotteryNftAbi } from 'src/assets/files/lottery_nft_abi';
import { PairAbi } from 'src/assets/files/pair_abi';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {

  	constructor(private dataService: DataService) { 
  		if (window.ethereum === undefined) {
	      	// this.toastr.errorToastr('Non-Ethereum browser detected. Install MetaMask', 'OOPS!');
	    } else {
	      	window.web3 = window.web3.currentProvider;
	      	window.web3 = new window.Web3(window.ethereum);
	    }
  	}

  // get contest number
  	public async GetContestNumber(TicketId : any): Promise<any> {
		console.log("GetContestNumber ---->");
		return new Promise(async (resolve, reject) => {
	      if (typeof window.web3 !== "undefined") {
	        let Abi_array 		= LotteryMainProxyAbi;
	        let Contract 		= ContractDetails.lottery_main_proxy;
	        let UserAddress 	= this.dataService.metaDeatails.account;
	        
	        let lottery_main_contract = new window.web3.eth.Contract(Abi_array, Contract);
	        // issueIndex section
		        await lottery_main_contract.methods
		          .issueIndex(UserAddress, TicketId)
		          .call(async (err, issueIndexresult) => {
		            if (issueIndexresult) {
		              const sucMsg = {
		                status: true,
		                message: "issueIndex Result",
		                result: issueIndexresult,
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
		    // issueIndex section
	      } else {
	        const failMsg = {
	          status: false,
	          message: "Metamask extension not added on your browser",
	        };
	        resolve(failMsg);
	      }
	    }) as Promise<any>;
	}
  // get contest number


  // buy ticket 
  	public async BuyTicket(Price: any, Numbers: any): Promise<any> {
		console.log("BuyTicket ---->");
		console.log("_price ---->",Price);
		console.log("_numbers ---->",Numbers);

		return new Promise(async (resolve, reject) => {
	      if (typeof window.web3 !== "undefined") {
	        let Abi_array 		= LotteryMainProxyAbi;
	        let Contract 		= ContractDetails.lottery_main_proxy;
	        let UserAddress 	= this.dataService.metaDeatails.account;
	        
	        let lottery_main_contract = new window.web3.eth.Contract(Abi_array, Contract);
	        // buy section
		        await lottery_main_contract.methods
		          .buy(Price, Numbers)
		          .send({ from: UserAddress })
		          .on("transactionHash", (hash) => {
		          })
		          .on("receipt", async (buyresult) => {
	          		this.GetTicketId().then(async (TicketId)=>{
	           			console.log("TicketId ---->",TicketId);
	           			// this.GetUserInfo(parseInt(TicketId.result)).then(async (GetUserInfo)=>{
		           			// console.log("GetUserInfo ---->",GetUserInfo);
          					// send response
					            const sucMsg = {
					              status: true,
					              message: "Successfully Buy",
					              buyresult: buyresult.transactionHash,
					              ticket_id: TicketId.result,
					              // userinfo: GetUserInfo,
					            };
					            resolve(sucMsg);
          					// send response
		           		// })
      				})
	          	  })
		          .on("confirmation", (confirmationNumber, buyresult) => {})
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
		    // buy section
	      } else {
	        const failMsg = {
	          status: false,
	          message: "Metamask extension not added on your browser",
	        };
	        resolve(failMsg);
	      }
	    }) as Promise<any>;
	}
  // buy ticket

  // multibuy ticket 
  	public async MultiBuyTicket(Pirce: any, Numbers: any): Promise<any> {
		console.log("BuyTicket ---->");
		console.log("_price ---->",Pirce);
		console.log("_numbers ---->",Numbers);
	    return new Promise(async (resolve, reject) => {
	      if (typeof window.web3 !== "undefined") {
	        let Abi_array 		= LotteryMainProxyAbi;
	        let Contract 		= ContractDetails.lottery_main_proxy;
	        let UserAddress 	= this.dataService.metaDeatails.account;
	        
	        let lottery_main_contract = new window.web3.eth.Contract(Abi_array, Contract);
	        // multiBuy section
		        await lottery_main_contract.methods
		          .multiBuy(Pirce, Numbers)
		          .send({ from: UserAddress })
		          .on("transactionHash", (hash) => {
		          })
		          .on("receipt", async (multiBuyresult) => {
		            const sucMsg = {
		              status: true,
		              message: "Successfully Multibuy",
		              result: multiBuyresult,
		            };
		            resolve(sucMsg);
		          })
		          .on("confirmation", (confirmationNumber, multiBuyresult) => {})
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
		    // multiBuy section
	      } else {
	        const failMsg = {
	          status: false,
	          message: "Metamask extension not added on your browser",
	        };
	        resolve(failMsg);
	      }
	    }) as Promise<any>;
	}
  // multibuy ticket 

  // get ticketid 
  	public async GetTicketId(): Promise<any> {
		console.log("GetTicketId ---->");
		return new Promise(async (resolve, reject) => {
	      if (typeof window.web3 !== "undefined") {
	        let Abi_array 		= LotteryNftAbi;
	        let Contract 		= ContractDetails.lottery_nft;
	        
	        let lottery_nft_contract = new window.web3.eth.Contract(Abi_array, Contract);
	        // totalSupply section
		        await lottery_nft_contract.methods
		          .totalSupply()
		          .call(async (err, totalSupplyResult) => {
		            if (totalSupplyResult) {
		              const sucMsg = {
		                status: true,
		                message: "totalSupply Result",
		                result: totalSupplyResult,
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
		    // totalSupply section
	      } else {
	        const failMsg = {
	          status: false,
	          message: "Metamask extension not added on your browser",
	        };
	        resolve(failMsg);
	      }
	    }) as Promise<any>;
	}
  // get ticketid 

  // get user info
  	public async GetUserInfo(TicketId : any): Promise<any> {
		console.log("GetUserInfo ---->");
		return new Promise(async (resolve, reject) => {
	      if (typeof window.web3 !== "undefined") {
	        let Abi_array 		= LotteryMainProxyAbi;
	        let Contract 		= ContractDetails.lottery_main_proxy;
	        let UserAddress 	= this.dataService.metaDeatails.account;
	        
	        let lottery_main_contract = new window.web3.eth.Contract(Abi_array, Contract);
	        // userInfo section
		        await lottery_main_contract.methods
		          .userInfo(UserAddress, TicketId)
		          .call(async (err, userInforesult) => {
		            if (userInforesult) {
		              const sucMsg = {
		                status: true,
		                message: "userInfo Result",
		                result: userInforesult,
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
		    // userInfo section
	      } else {
	        const failMsg = {
	          status: false,
	          message: "Metamask extension not added on your browser",
	        };
	        resolve(failMsg);
	      }
	    }) as Promise<any>;
	}
  // get user info

  // approve section
	  public async ApproveFunction(Contract: any, Amount: any): Promise<any> {
	  	console.log("contract ---->",Contract);
	  	return new Promise(async (resolve, reject) => {
	      if (typeof window.web3 !== "undefined") {
	        let Abi_array = PairAbi;
	        let UserAddress = this.dataService.metaDeatails.account;
	        let SpenderAddress = ContractDetails.lottery_main_proxy;
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

  // claim section 
  	// claim function
  		public async ClaimRewards(ticketId: any): Promise<any> {
			console.log("ClaimRewards ---->");
			console.log("ticketId ---->",ticketId);
			return new Promise(async (resolve, reject) => {
		      if (typeof window.web3 !== "undefined") {
		        let Abi_array 		= LotteryMainProxyAbi;
		        let Contract 		= ContractDetails.lottery_main_proxy;
		        let UserAddress 	= this.dataService.metaDeatails.account;
		        
		        let lottery_main_contract = new window.web3.eth.Contract(Abi_array, Contract);
		        // claimReward section
			        await lottery_main_contract.methods
			          .claimReward(ticketId)
			          .send({ from: UserAddress })
			          .on("transactionHash", (hash) => {
			        })
			        .on("receipt", async (claimRewardresult) => {
			            const sucMsg = {
			              status: true,
			              message: "Successfully Claim",
			              result: claimRewardresult.transactionHash,
			            };
			            resolve(sucMsg);
			        })
			        .on("confirmation", (confirmationNumber, claimRewardresult) => {})
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
  	// claim function

  	// get reward amount
  		public async GetRewardamount(TicketId : any): Promise<any> {
			console.log("GetRewardamount ---->" , TicketId);
			return new Promise(async (resolve, reject) => {
		      if (typeof window.web3 !== "undefined") {
		        let Abi_array 		= LotteryMainProxyAbi;
		        let Contract 		= ContractDetails.lottery_main_proxy;
		        let UserAddress 	= this.dataService.metaDeatails.account;
		        
		        let lottery_main_contract = new window.web3.eth.Contract(Abi_array, Contract);
		        // userInfo section
			        await lottery_main_contract.methods
			          .getRewardView(TicketId)
			          .call(async (err, getRewardViewresult) => {
			            if (getRewardViewresult) {
			              const sucMsg = {
			                status: true,
			                message: "getRewardView Result",
			                result: getRewardViewresult,
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
			    // userInfo section
		      } else {
		        const failMsg = {
		          status: false,
		          message: "Metamask extension not added on your browser",
		        };
		        resolve(failMsg);
		      }
		    }) as Promise<any>;
		}

  	// get reward amount
  // claim section 

}