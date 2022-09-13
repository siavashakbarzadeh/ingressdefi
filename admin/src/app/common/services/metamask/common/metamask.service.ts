import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/common/api/data.service';
declare let window: any;

@Injectable({
  providedIn: 'root',
})
export class MetamaskService {
  constructor(private dataService: DataService) {
    if (window.ethereum === undefined) {
      // this.toastr.errorToastr('Non-Ethereum browser detected. Install MetaMask', 'OOPS!');
    } else {
      this.sleep(3000);
      console.log(
        'check wallet type ----->',
        sessionStorage.getItem('Wallettype')
      );
      let wallet_type = localStorage.getItem('Wallettype');
      if (wallet_type == 'metamask') {
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum);
      } else if (wallet_type == 'binanceconnect') {
        window.web3 = new window.Web3(window.BinanceChain);
      } else {
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum);
      }

      let _this = this;
      window.ethereum.on('accountsChanged', function (accounts: any) {
        console.log(accounts, '_____________ accounts');
        if (accounts[0]) {
          dataService.metaDetails.isMetaLogin = true;
        } else {
          console.log('yes no account');
          // dataService.metaLogout();
        }
        // dataService.accountsChanged.emit(true);
        // dataService.isMetaReady.emit(true);
      });

      window.ethereum.on('networkChanged', function (netId: any) {
        dataService.metaDetails.isMetaLogin = false;
        // dataService.networkChanged.emit(netId);
      });
    }
  }

  public async checkChainId(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (typeof window.web3 !== 'undefined') {
        window.web3.eth.getChainId((err: any, netId: any) => {
          console.log('netId ----->', netId);
          if (netId == environment.chainid) {
            const sucMsg = {
              status: true,
              message: 'Correct Network',
            };
            resolve(sucMsg);
          } else {
            console.log('else   ----->', netId);
            // localStorage.clear();
            const sucMsg = {
              status: false,
              message: 'Kindly Change Binance Testnet',
            };
            resolve(sucMsg);
          }
        });
      } else {
        console.log('hole else   ----->');
        const failMsg = {
          status: false,
          message: 'Metamask extension not added on your browser',
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }

  // @ts-ignore
  async addNetwork() {
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.

      if (typeof window.web3 !== 'undefined') {
        const wasAdded = await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          chainId: '0x61',
          params: [
            {
              chainId: '0x61',
              chainName: 'Biance Mainnet',
              blockExplorerUrls: ['https://bsc-dataseed.binance.org/'],
              nativeCurrency: {
                name: 'Biance Mainnet',
                decimals: 18,
                symbol: 'BNV',
              },
              rpcUrls: ['https://bsc-dataseed.binance.org/'],
            },
          ],
        });

        console.log(wasAdded, 'wasAdded');

        if (wasAdded) {
          let msg = {
            status: true,
            message: 'Check Your Meta Mask',
          };
          return msg;
        }
      } else {
        console.log(window.web3, 'window.web3');
        const failMsg = {
          status: false,
          message: 'Metamask extension not added on your browser',
        };
        return failMsg;
      }
    } catch (error) {
      console.log(error);
      let msg = {
        status: false,
        message: 'Please try again',
      };
      return msg;
    }
  }

  loginMetaMask() {
    this.connectMetaMask().then((suc) => {
      let responseData: any = suc;

      this.dataService.openAlert(responseData.status, responseData.message);
      if (responseData.status) {
        sessionStorage.setItem('isMetaLogin', 'true');
      }
    });
  }

  public async connectMetaMask(type?: any): Promise<any> {
    await this.sleep(1000);
    return new Promise((resolve, reject) => {
      if (typeof window.web3 !== 'undefined') {
        this.checkChainId()
          .then((result) => {
            if (result.status) {
              window.ethereum.enable();
              window.web3.eth.getAccounts(async (err: any, retAccount: any) => {

                console.log("retAccountretAccountretAccount",retAccount)

                if (retAccount.length > 0) {
                  let adminAccount = environment.adminAccount;
                  console.log("adminAccountadminAccount",adminAccount)
                  let account: any = retAccount[0];

                  if (account.toLowerCase() == adminAccount.toLowerCase()) {
                    localStorage.setItem('account', retAccount[0]);
                    this.dataService.metaDetails.account = retAccount[0];
                    this.dataService.metaDetails.isMetaLogin = true;

                    let first = retAccount[0].substring(0, 3);
                    let last = retAccount[0].substring(38, 42);
                    this.dataService.metaDetails.accountShort = `${first}...${last}`;

                    // this.dataService.isMetaReady.emit(true);

                    localStorage.setItem('isLoginPermit', 'true');

                    const sucMsg = {
                      status: true,
                      message: 'Login successfully',
                    };
                    resolve(sucMsg);
                  } else {
                    const sucMsg = {
                      status: false,
                      message: 'Account not authenticated',
                    };
                    resolve(sucMsg);
                  }
                } else {
                  const failMsg = {
                    status: false,
                    message: 'No account found',
                  };
                  resolve(failMsg);
                }
                if (err != null) {
                  const failMsg = {
                    status: false,
                    message: 'Error retrieving account',
                  };
                  resolve(failMsg);
                }
              });
            } else {
              resolve(result);
            }
          })
          .catch((error) => {
            const failMsg = {
              status: false,
              message: 'Network Error',
            };
            resolve(failMsg);
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

  sleep(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
