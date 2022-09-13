import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { DataService } from "../../api/data.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
declare let window: any;

@Injectable({
  providedIn: "root",
})
export class MetamaskService {
  constructor(
    public dataService: DataService,
    public toasterService: ToasterService,
    private router: Router,
  ) {
    if (window.ethereum === undefined) {
      // this.toastr.errorToastr('Non-Ethereum browser detected. Install MetaMask', 'OOPS!');
    } else {
      this.sleep(3000);
      console.clear();
      console.log(
        "check wallet type ----->",
        sessionStorage.getItem("Wallettype")
      );
      let wallet_type = localStorage.getItem("Wallettype");
      if (wallet_type == "metamask") {
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum);
      } else if (wallet_type == "binanceconnect") {
        window.web3 = new window.Web3(window.BinanceChain);
      } else if (wallet_type == "walletconnect") {
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum);
      } else {
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum);
      }

      let _this = this;
      window.ethereum.on("accountsChanged", function (accounts) {
        _this.logout();
        console.log(accounts, "_____________ accounts");
        if (accounts[0]) {
          dataService.isMetaLogin = true;
          dataService.metaDeatails.account = accounts[0];
        } else {
          console.log("yes no account");
          dataService.metaLogout();
        }
        dataService.accountsChanged.emit(true);
        dataService.isMetaReady.emit(true);
      });

      window.ethereum.on("networkChanged", function (netId) {
        console.log(netId, "_____________ accounts");
        _this.logout();
        dataService.networkChanged.emit(netId);
      });
    }
  }

  logout() {
    this.dataService.metaLogout();
    localStorage.clear();
    this.toasterService.show(false, "Please login to continue");
    this.router.navigateByUrl("/");
  }

  checkChainIdCall() {
    return this.checkChainId()
      .then(async (result) => {
        if (result.status) {
          console.log(result, "result");
          return true;
        } else {
          this.toasterService.show(false, result.message);
          return false;
        }
      })
      .catch((error) => {
        this.toasterService.show(false, error);
        return false;
      });
  }

  public async checkChainId(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        window.web3.eth.getChainId((err, netId) => {
          console.log("netId ----->", netId);
          if (netId == environment.chainid) {
            const sucMsg = {
              status: true,
              message: "Correct Network",
            };
            resolve(sucMsg);
          } else {
            console.log("else   ----->", netId);
            localStorage.clear();
            const sucMsg = {
              status: false,
              message: "Kindly Change Binance Mainnet",
            };
            resolve(sucMsg);
          }
        });
      } else {
        console.log("hole else   ----->");
        const failMsg = {
          status: false,
          message: "Metamask extension not added on your browser",
        };
        resolve(failMsg);
      }
    }) as Promise<any>;
  }


async addNetwork() {
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      if (typeof window.web3 !== "undefined") {
        const wasAdded = await window.ethereum.request({
          method: "wallet_addEthereumChain",
          chainId: "0x38",
          params: [
            {
              chainId: "0x38",
              chainName: "Biance Mainnet",
              blockExplorerUrls: ["https://bsc-dataseed.binance.org/"],
              nativeCurrency: {
                name: "Biance Mainnet",
                decimals: 18,
                symbol: "BNB",
              },
              rpcUrls: ["https://bsc-dataseed.binance.org/"],
            },
          ],
        });
        if (wasAdded) {
          let msg = {
            status: true,
            message: "Check Your Meta Mask",
          };
          return msg;
        }
      } else {
        const failMsg = {
          status: false,
          message: "Metamask extension not added on your browser",
        };
        return failMsg;
      }
    } catch (error) {
      let msg = {
        status: false,
        message: "Please try again",
      };
      return msg;
    }
  }

  loginMetaMask() {
    this.connectMetaMask().then((suc) => {
      let responseData: any = suc;
      this.toasterService.show(responseData.status, responseData.message);

      if (responseData.status) {
        sessionStorage.setItem("isMetaLogin", "true");
      }
    });
  }

  public async connectMetaMask(type?: any): Promise<any> {
    await this.sleep(1000);
    return new Promise((resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        this.checkChainId()
          .then(async (result) => {
            if (result.status) {
              await window.ethereum
                .enable()
                .then((suc) => {})
                .catch((err) => {
                  const sucMsg = {
                    status: false,
                    message: err.message,
                  };
                  resolve(sucMsg);
                });
              window.web3.eth.getAccounts(async (err, retAccount) => {
                if (retAccount.length > 0) {
                  // localStorage.setItem("account", retAccount[0]);
                  this.dataService.metaDeatails.account = retAccount[0];
                  this.dataService.metaDeatails.isMetaLogin = true;
                  console.log(
                    this.dataService.metaDeatails.isMetaLogin,
                    "this.dataService.metaDeatails.isMetaLogin"
                  );

                  let first = retAccount[0].substring(0, 3);
                  let last = retAccount[0].substring(38, 42);
                  this.dataService.metaDeatails.accountShort = `${first}...${last}`;

                  this.dataService.isMetaReady.emit(true);

                  localStorage.setItem("isLoginPermit", "true");

                  const sucMsg = {
                    status: true,
                    message: "Login successfully",
                  };
                  resolve(sucMsg);
                } else {
                  const failMsg = {
                    status: false,
                    message: "No account found",
                  };
                  resolve(failMsg);
                }
                if (err != null) {
                  const failMsg = {
                    status: false,
                    message: "Error retrieving account",
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
              message: "Network Error",
            };
            resolve(failMsg);
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

  public async GetEbalance(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (typeof window.web3 !== "undefined") {
        let account = this.dataService.metaDeatails.account;
        this.checkChainId()
          .then((result) => {
            if (result.status) {
              window.web3.eth.getBalance(account, function (err, balance) {
                localStorage.setItem("rawethbalance", balance);
                let convert_balance = window.web3.utils.fromWei(
                  balance.toString(),
                  "ether"
                );
                localStorage.setItem("ethbalance", convert_balance);
                let date_for = new Date();
                let date_data: any = date_for.getTime();
                localStorage.setItem("dtime", date_data);
                const sucMsg = {
                  status: true,
                  message: "Get your balance",
                  rawbalance: balance,
                  balance: convert_balance,
                };
                resolve(sucMsg);
              });
            } else {
              resolve(result);
            }
          })
          .catch((error) => {
            console.log(error, "______________ error");
            const failMsg = {
              status: false,
              message: "Network Error",
            };
            resolve(failMsg);
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


   // walletconnect 

  async checkWallet() {
    let obj = {};
    let chainId = 56;
    obj[chainId] = "https://bsc-dataseed1.ninicoin.io"
    let configWallet = {
      infuraId: "9aa3d95b3bc440fa88ea12eaa4456161",
      rpc: obj,
      chainId: chainId
    }
    const WalletConnectProvider = window.WalletConnectProvider.default;
    let ropstenProvider = new WalletConnectProvider(configWallet);
    await ropstenProvider.enable();
    window.web3 = new window.Web3(ropstenProvider);
  }
  async connectWallet() {
    await this.checkWallet();
    await this.sleep(1000);
    const sucMsg = {
      status: true,
      message: "connected Successfully",
    };
    return sucMsg;
  }

}


