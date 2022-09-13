import { Injectable } from "@angular/core";
import { DataService } from "../../api/data.service";
import { StakeAbi } from "src/assets/files/stake_abi";
import { NftExchangeAbi } from "src/assets/files/nft_abi";
import { ContractDetails } from "src/assets/files/contract";
import { PairAbi } from "src/assets/files/pair_abi";
declare let window: any;

@Injectable({
	providedIn: "root",
})
export class NftService {
	constructor(private dataService: DataService) {
		if (window.ethereum === undefined) {
		} 
		else {
			window.web3 = window.web3.currentProvider;
			window.web3 = new window.Web3(window.ethereum);
		}
	}

  /*nft checkBal function start*/
  public async tokenURI(Token, Abi, itemid): Promise<any> {
    console.log('nft service function called', Token);
    return new Promise(async (resolve, reject) => {
      console.log('nft service function called inside...');
      if (typeof window.web3 !== "undefined") {
        console.log('inside if condition');
        console.log(Token, Abi, itemid);
        let exchange_contract = new window.web3.eth.Contract(Abi, Token);
        await exchange_contract.methods
        .tokenURI(itemid)
        .call(async (err, getResult) => {
          console.log(err, 'geterror');
          console.log(getResult, 'getResult');
          if (getResult) {
            const sucMsg = {
              status: true,
              message: "tokenURI Result",
              result: getResult,
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
        console.log('else condition');
        const failMsg = {
          status: false,
          message: "Metamask extension not added on your browser",
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }
  /*nft checkBal function end*/

    /*nft prepareBuyerFeeMessage function start*/
    public async buyerFeeSign(Tuple, Fees): Promise<any> {
      console.log('nft service function called', Tuple);
      return new Promise(async (resolve, reject) => {
        console.log('nft service function called inside...');
        if (typeof window.web3 !== "undefined") {
          console.log('inside if condition');
          let Abi_array = NftExchangeAbi;
          let Contract = ContractDetails.nft_exchange_token;

          let exchange_contract = new window.web3.eth.Contract(Abi_array, Contract);
          await exchange_contract.methods
          .prepareBuyerFeeMessage(Tuple, Fees)
          .call(async (err, getResult) => {
            console.log(err, 'geterror');
            console.log(getResult, 'getResult');
            if (getResult) {
              const sucMsg = {
                status: true,
                message: "PrepareBuyerFeeMessage Result",
                result: getResult,
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
          console.log('else condition');
          const failMsg = {
            status: false,
            message: "Metamask extension not added on your browser",
          };
          resolve(failMsg);
        }
      }) as Promise<any>;
    }
    /*nft prepareBuyerFeeMessage function end*/


    /*nft validatesign function start*/
    public async validatesign(Tuple, Fees): Promise<any> {
      console.log('nft service function called', Tuple);
      return new Promise(async (resolve, reject) => {
        console.log('nft service function called inside...');
        if (typeof window.web3 !== "undefined") {
          console.log('inside if condition');
          let Abi_array = NftExchangeAbi;
          let Contract = ContractDetails.nft_exchange_token;

          let exchange_contract = new window.web3.eth.Contract(Abi_array, Contract);
          await exchange_contract.methods
          .validateOrderSignatureView(Tuple, Fees)
          .call(async (err, getResult) => {
            console.log(err, 'geterror');
            console.log(getResult, 'getResult');
            if (getResult) {
              const sucMsg = {
                status: true,
                message: "validateOrderSignatureView Result",
                result: getResult,
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
          console.log('else condition');
          const failMsg = {
            status: false,
            message: "Metamask extension not added on your browser",
          };
          resolve(failMsg);
        }
      }) as Promise<any>;
    }
    /*nft prepareBuyerFeeMessage function end*/


    /*nft validateBuyerSign function start*/
    public async validateBuyerSign(Tuple, Fees, Sig): Promise<any> {
      console.log('nft service function called', Tuple);
      return new Promise(async (resolve, reject) => {
        console.log('nft service function called inside...');
        if (typeof window.web3 !== "undefined") {
          console.log('inside if condition');
          let Abi_array = NftExchangeAbi;
          let Contract = ContractDetails.nft_exchange_token;

          let exchange_contract = new window.web3.eth.Contract(Abi_array, Contract);
          await exchange_contract.methods
          .validateBuyerFeeSigView(Tuple, Fees, Sig)
          .call(async (err, getResult) => {
            console.log(err, 'geterror');
            console.log(getResult, 'getResult');
            if (getResult) {
              const sucMsg = {
                status: true,
                message: "validateOrderSignatureView Result",
                result: getResult,
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
          console.log('else condition');
          const failMsg = {
            status: false,
            message: "Metamask extension not added on your browser",
          };
          resolve(failMsg);
        }
      }) as Promise<any>;
    }
    /*nft validateBuyerSign function end*/


    /*nft checkBal function start*/
    public async checkBal(Token, Abi, address): Promise<any> {
      console.log('nft service function called', Token);
      return new Promise(async (resolve, reject) => {
        console.log('nft service function called inside...');
        if (typeof window.web3 !== "undefined") {
          console.log('inside if condition');
          console.log(Token, Abi, address);
          let exchange_contract = new window.web3.eth.Contract(Abi, Token);
          await exchange_contract.methods
          .balanceOf(address)
          .call(async (err, getResult) => {
            console.log(err, 'geterror');
            console.log(getResult, 'getResult');
            if (getResult) {
              const sucMsg = {
                status: true,
                message: "validateOrderSignatureView Result",
                result: getResult,
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
          console.log('else condition');
          const failMsg = {
            status: false,
            message: "Metamask extension not added on your browser",
          };
          resolve(failMsg);
        }
      }) as Promise<any>;
    }
    /*nft checkBal function end*/


    /*nft checkBal function start*/
    public async tokenOfOwnerByIndex(Token, Abi, addr, index): Promise<any> {
      console.log('nft service function called', Token);
      return new Promise(async (resolve, reject) => {
        console.log('nft service function called inside...');
        if (typeof window.web3 !== "undefined") {
          console.log('inside if condition');
          let exchange_contract = new window.web3.eth.Contract(Abi, Token);
          await exchange_contract.methods
          .tokenOfOwnerByIndex(addr, index)
          .call(async (err, getResult) => {
            console.log(err, 'geterror');
            console.log(getResult, 'getResult');
            if (getResult) {
              const sucMsg = {
                status: true,
                message: "tokenOfOwnerByIndex Result",
                result: getResult,
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
          console.log('else condition');
          const failMsg = {
            status: false,
            message: "Metamask extension not added on your browser",
          };
          resolve(failMsg);
        }
      }) as Promise<any>;
    }
    /*nft checkBal function end*/

    /*nft checkBal function start*/
    public async verifyOwner(Token, Abi, NftId): Promise<any> {
      console.log('nft service function called', Token);
      return new Promise(async (resolve, reject) => {
        console.log('nft service function called inside...');
        if (typeof window.web3 !== "undefined") {
          console.log('inside if condition');
          let exchange_contract = new window.web3.eth.Contract(Abi, Token);
          await exchange_contract.methods
          .ownerOf(NftId)
          .call(async (err, getResult) => {
            console.log(err, 'geterror');
            console.log(getResult, 'getResult');
            if (getResult) {
              const sucMsg = {
                status: true,
                message: "validateOrderSignatureView Result",
                result: getResult,
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
          console.log('else condition');
          const failMsg = {
            status: false,
            message: "Metamask extension not added on your browser",
          };
          resolve(failMsg);
        }
      }) as Promise<any>;
    }
    /*nft checkBal function end*/


    /*nft seller approve function start*/
    public async approveSellFun(Token, TokenABI, TokenId, Address): Promise<any> {
      console.log('nft service function called', TokenId);
      return new Promise((resolve, reject) => {
        console.log('inside function');
        let exchangeContract = new window.web3.eth.Contract(TokenABI, Token);

        exchangeContract.methods
            .approve(ContractDetails.nft_exchange_token, TokenId)
            .send({ from: Address })
            .on("transactionHash", hash => {
              console.log('ontransactionhash', hash);
            })
            .on('receipt', receipt => {
              console.log('onreceipt', receipt);
               if (receipt) {
                 let sucMsg = {
                    status: true,
                    message: "PrepareBuyerFeeMessage Result",
                    result: receipt,
                 }
                 resolve(sucMsg);
               }
               else {
                 let failMsg = {
                    status: false,
                    message: "Something went wrong",
                 }
                 resolve(failMsg);
               }
            })
            .on('error', error =>  reject(new Error('Failed to submit the Transaction to the contract admins')));
      });
    }
    /*nft seller approve function end*/


    /*nft buyer approve function start*/
    public async approveBuyFun(Token, TokenABI, Amount, Address): Promise<any> {
      console.log('nft service function called', Amount);
      console.log('nft service params', Token, TokenABI, Amount, Address, 'params');
      return new Promise((resolve, reject) => {
        console.log('inside function');
        let exchangeContract = new window.web3.eth.Contract(TokenABI, '0xae13d989dac2f0debff460ac112a837c89baa7cd');

        exchangeContract.methods
            .approve(ContractDetails.nft_exchange_token, Amount.toString())
            .send({ from: Address })
            .on("transactionHash", hash => {
              console.log('ontransactionhash', hash);
            })
            .on('receipt', receipt => {
              console.log('onreceipt', receipt);
               if (receipt) {
                 let sucMsg = {
                    status: true,
                    message: "PrepareBuyerFeeMessage Result",
                    result: receipt,
                 }
                 resolve(sucMsg);
               }
               else {
                 let failMsg = {
                    status: false,
                    message: "Something went wrong",
                 }
                 resolve(failMsg);
               }
            })
            .on('error', error =>  reject(new Error('Failed to submit the Transaction to the contract admins')));
      });
    }
    /*nft buyer approve function end*/



    /*nft callsell function start*/
    public async callSell(price, order,sellsign,buyFeesign,fee, userAddr)
    {   
      console.log('1.',price, '2.',order,'3.',sellsign,'4.',buyFeesign,'5.',fee,'6.', userAddr);
        return new Promise((resolve, reject) => {
          console.log('inside function');
          let Abi_array = NftExchangeAbi;
          let Contract = ContractDetails.nft_exchange_token;
          let exchangeContract = new window.web3.eth.Contract(Abi_array, Contract);

          exchangeContract.methods
              .sell(order,sellsign,buyFeesign,fee)
              .send({value:1,from: userAddr })
              .on("transactionHash", hash => {
                console.log('ontransactionhash', hash);
              })
              .on('receipt', receipt => {
                console.log('onreceipt', receipt);
                 if (receipt) {
                   let sucMsg = {
                      status: true,
                      message: "PrepareBuyerFeeMessage Result",
                      result: receipt.transactionHash,
                   }
                   resolve(sucMsg);
                 }
                 else {
                   let failMsg = {
                      status: false,
                      message: "Something went wrong",
                   }
                   resolve(failMsg);
                 }
              })
              .on('error', error =>  reject(new Error('Failed to submit the Transaction to the contract admins')));
          });
    }
    /*nft callsell function end*/

    /*nft callbuy function start*/
    public async callBuy(price, order, sig, buyerFeeSig, fees, userAddr)
    {   
      console.log('function callBuy called');
      console.log(price, order, sig, buyerFeeSig, fees, userAddr);
        return new Promise((resolve, reject) => {
          console.log('inside function');
          let Abi_array = NftExchangeAbi;
          let Contract = ContractDetails.nft_exchange_token;
          let exchangeContract = new window.web3.eth.Contract(Abi_array, Contract);

          exchangeContract.methods
              .buy(order, sig, buyerFeeSig, fees)
              .send({ from: userAddr })
              .on('error', error =>  reject(new Error('Failed to submit the Transaction to the contract admins')))
              .on("transactionHash", hash => {
                console.log('ontransactionhash', hash);
              })
              .on('receipt', receipt => {
                console.log('onreceipt', receipt);
                 if (receipt) {
                   let sucMsg = {
                      status: true,
                      message: "PrepareBuyerFeeMessage Result",
                      result: receipt.transactionHash,
                   }
                   resolve(sucMsg);
                 }
                 else {
                   let failMsg = {
                      status: false,
                      message: "Something went wrong",
                   }
                   resolve(failMsg);
                 }
              });
          });
    }
    /*nft callbuy function end*/


    /*nft callbid function start*/
    public async callBid(order, sig, buyerSig, buyerFeeSig, buyer, buyingAmount, fees, userAddr)
    {   
      console.log('function callBid called');
      console.log('order:', order,'sig:', sig,'buyerSig:', buyerSig,'buyerFeeSig:', buyerFeeSig,'buyer:', buyer,'buyingAmount:', buyingAmount,'fees:', fees,'userAddr:', userAddr);
        return new Promise((resolve, reject) => {
          console.log('inside function');
          let Abi_array = NftExchangeAbi;
          let Contract = ContractDetails.nft_exchange_token;
          let exchangeContract = new window.web3.eth.Contract(Abi_array, Contract);

          exchangeContract.methods
              .bid(order, sig, buyerSig, buyerFeeSig, buyer, buyingAmount, fees)
              .send({ from: userAddr })
              .on('error', error =>  reject(new Error('Failed to submit the Transaction to the contract admins')))
              .on("transactionHash", hash => {
                console.log('ontransactionhash', hash);
              })
              .on('receipt', receipt => {
                console.log('onreceipt', receipt);
                 if (receipt) {
                   let sucMsg = {
                      status: true,
                      message: "PrepareBuyerFeeMessage Result",
                      result: receipt.transactionHash,
                   }
                   resolve(sucMsg);
                 }
                 else {
                   let failMsg = {
                      status: false,
                      message: "Something went wrong",
                   }
                   resolve(failMsg);
                 }
              });
          });
    }
    /*nft callbuy function end*/

    /*nft callcancel function start*/
    public async callCancel(order, userAddr)
    {   
      console.log('function callCancel called');
        return new Promise((resolve, reject) => {
          console.log('inside function');
          let Abi_array = NftExchangeAbi;
          let Contract = ContractDetails.nft_exchange_token;
          let exchangeContract = new window.web3.eth.Contract(Abi_array, Contract);

          exchangeContract.methods
              .cancel(order)
              .send({ from: userAddr})
              .on('error', error =>  reject(new Error('Failed to submit the Transaction to the contract admins')))
              .on("transactionHash", hash => {
                console.log('ontransactionhash', hash);
              })
              .on('receipt', receipt => {
                console.log('onreceipt', receipt);
                 if (receipt) {
                   let sucMsg = {
                      status: true,
                      message: "PrepareBuyerFeeMessage Result",
                      result: receipt.transactionHash,
                   }
                   resolve(sucMsg);
                 }
                 else {
                   let failMsg = {
                      status: false,
                      message: "Something went wrong",
                   }
                   resolve(failMsg);
                 }
              });
          });
    }
    /*nft callbuy function end*/


    /*nft prepareOrderHash function start*/
    public async orderHash(order:any): Promise<any> {
      let Abi_array = NftExchangeAbi;
      let Contract = ContractDetails.nft_exchange_token;

      return new Promise(async (resolve, reject) => {
        if (typeof window.web3 !== "undefined") {
          let token_contract = new window.web3.eth.Contract(Abi_array, Contract);
          await token_contract.methods.prepareOrderHash(order).call(async (err, result) => {
            if (result) {
              console.log('result', result);
              const sucMsg = {
                status: true,
                message: "Got Result",
                result: result,
              };
              resolve(sucMsg);
            } else {
              console.log('error', err);
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
    /*nft prepareOrderHash function end*/

    /*nft prepareBidOrderHash function start*/
    public async bidOrderHash(order:any, bidder: any, amount:any): Promise<any> {
      let Abi_array = NftExchangeAbi;
      let Contract = ContractDetails.nft_exchange_token;

      return new Promise(async (resolve, reject) => {
        if (typeof window.web3 !== "undefined") {
          let token_contract = new window.web3.eth.Contract(Abi_array, Contract);
          await token_contract.methods.prepareBidOrderHash(order, bidder, amount).call(async (err, result) => {
            if (result) {
              console.log('result', result);
              const sucMsg = {
                status: true,
                message: "Got Result",
                result: result,
              };
              resolve(sucMsg);
            } else {
              console.log('error', err);
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
    /*nft prepareBidOrderHash function end*/


    async getweiValue(getAmount)
    {
        return window.web3.utils.toWei(getAmount.toString())
    }

}