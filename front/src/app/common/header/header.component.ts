import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { MetamaskService } from "src/app/common/services/metamask/common/metamask.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { Template } from "@angular/compiler/src/render3/r3_ast";
import { DataService } from "src/app/common/services/api/data.service";
import { CommonContractService } from "src/app/common/services/metamask/common-contract/common-contract.service";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import WalletConnect from "@walletconnect/browser";
// import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";
import { ContractDetails } from 'src/assets/files/contract';

declare let window: any;

interface Wallet {
  [index: number]: { name: string; img: string; id: string };
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	openMenu: boolean = true;
  isCollapsed = true;
  isMobile: boolean = false;
  width: number = window.innerWidth;
  height: number = window.innerHeight;
  mobileWidth: number = 768;
  modalRef?: BsModalRef;
  submitted = false;
  mail = true;
  uname = true;
  cansubmit = false;
  editObj: any = {};
  balance:any;
  accountShort:any;
  isLogin;

  governanceTokenBalance: any;

  wallets: Wallet = [
  {
    name: "Meta Mask",
    img: "assets/images/wallet1.png",
    id: "metamask",
  },
  {
    name: "Trust Wallet",
    img: "assets/images/wallet2.png",
    id: "trustwallet",
  },
  {
    name: "Math Wallet",
    img: "assets/images/wallet3.png",
    id: "mathwallet",
  },
  {
    name: "Wallet Connect",
    img: "assets/images/wallet4.png",
    id: "walletconnect",
  },
  {
    name: "Binance Chain Wallet",
    img: "assets/images/wallet5.png",
    id: "binanceconnect",
  },
  ];

  @ViewChild("connectModal", { static: false }) connectModal: any;
  @ViewChild("template", { static: false }) template: any;

  constructor(
    private metamaskService: MetamaskService,
    private toasterService: ToasterService,
    public dataService: DataService,
    public commonContractService: CommonContractService, 
    private modalService: BsModalService,
    private router: Router,
    private changeDetectorRef:ChangeDetectorRef
    ) { 
      this.dataService.modelSignup.subscribe((suc:any)=> {
        this.openModal(this.template);
      });
    }

  ngOnInit() {
    this.dataService.isOverlay = false;
    this.isLogin = localStorage.getItem('Game-Token');
  	this.isMobile = this.width < this.mobileWidth;
    const bodycls = document.getElementsByTagName("body")[0];
    if (this.isMobile === true) {
      bodycls.classList.remove("menuopen");
      bodycls.classList.remove("menuopencollapse");
      bodycls.classList.add("mobmenuclose");
      this.openMenu = false;
    } else {
      this.openMenu = true;
      bodycls.classList.remove("mobmenumpen");
      bodycls.classList.remove("mobmenuclose");
      bodycls.classList.add("menuopen");
    }
    // this.getGovernanceTokenBalance();
    if (this.isLogin) {
      console.log('logged in', this.dataService.metaDeatails.accountShort);
      this.accountShort = this.dataService.metaDeatails.accountShort;
      this.balance = this.dataService.metaDeatails.balance;
    }
    else {
      console.log('not logged in');
    }
  }

  openModal(template: TemplateRef<any>) {
   this.modalRef = this.modalService.show(template);
 }

 openBsc(): any {
  this.dataService.openBscScan(this.dataService.metaDeatails.account);
}
copyAddress() {
  let copyText: any = this.dataService.metaDeatails.account.toString();
  let selBox = document.createElement("textarea");
  selBox.style.position = "fixed";
  selBox.style.left = "0";
  selBox.style.top = "0";
  selBox.style.opacity = "0";
  selBox.value = copyText;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand("copy");
  document.body.removeChild(selBox);
  this.toasterService.show(true, "Address Copied !");
}

logout() {
  this.dataService.metaLogout();
  // this.modalRef.hide();
  localStorage.clear();
  sessionStorage.clear();
  // this.router.navigateByUrl("/");
  location.reload();
}

getGovernanceTokenBalance() {
  this.commonContractService
  .GetTokenbalance(ContractDetails.governance_token_contract)
  .then((suc) => {
    if (suc.balance) {
      this.governanceTokenBalance = suc.balance;
    } else {
      this.governanceTokenBalance = 0;
    }
  });
}

menuToggle() {
  const bodycls = document.getElementsByTagName("body")[0];
  this.openMenu = !this.openMenu;
  if (this.isMobile === false) {
      //desktop menu

      if (this.openMenu == true) {
        bodycls.classList.add("menuopen");
        bodycls.classList.remove("menuopencollapse");
      } else {
        bodycls.classList.add("menuopencollapse");
        bodycls.classList.remove("menuopen");
      }
    } else {
      //mobile menu

      if (this.openMenu == true) {
        bodycls.classList.add("mobmenumpen");
        bodycls.classList.remove("mobmenuclose");
      } else {
        bodycls.classList.add("mobmenuclose");
        bodycls.classList.remove("mobmenumpen");
      }
    }
  }

  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
    const bodycls = document.getElementsByTagName("body")[0];
    if (this.isMobile === true) {
      bodycls.classList.remove("menuopen");
      bodycls.classList.remove("menuopencollapse");
      bodycls.classList.add("mobmenuclose");
      this.openMenu = false;
    } else {
      this.openMenu = true;
      bodycls.classList.remove("mobmenumpen");
      bodycls.classList.remove("mobmenuclose");
      bodycls.classList.add("menuopen");
    }
  }
  connector:any;
  async connctEwallet(walletname: any, type) {
    this.dataService.isOverlay = true;
    switch (walletname) {
      case "metamask":
      sessionStorage.setItem("Wallettype", "metamask");
      localStorage.setItem("Wallettype", "metamask");true
      window.web3 = window.web3.currentProvider;
      window.web3 = new window.Web3(window.ethereum);
        // code block
        break;
        case "trustwallet":
        sessionStorage.setItem("Wallettype", "trustwallet");
        localStorage.setItem("Wallettype", "trustwallet");
       /* window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum);*/
        const WalletConnectProvider = window.WalletConnectProvider.default;

        // e8e762395a9efa832e0efe9c2c71f82b

        var providerType = new WalletConnectProvider({
          infuraId: "70d5d454064e41b9af24a64296e22c89",
          rpc: { 97: "https://data-seed-prebsc-1-s1.binance.org:8545/" },
        });

        sessionStorage.setItem("Wallettype", "walletconnect");
        localStorage.setItem("Wallettype", "walletconnect");

        window.web3 = new window.Web3(providerType);
        // code block
        break;
        case "mathwallet":
        sessionStorage.setItem("Wallettype", "mathwallet");
        localStorage.setItem("Wallettype", "mathwallet");
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum);
        // code block
        break;
        case "walletconnect":
        // this.connector = new WalletConnect({
        //   bridge: "https://bridge.walletconnect.org" // Required
        // });
        
        sessionStorage.setItem("Wallettype", "walletconnect");
        localStorage.setItem("Wallettype", "walletconnect");
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum);
        // code block
        break;
        case "binanceconnect":
        sessionStorage.setItem("Wallettype", "binanceconnect");
        localStorage.setItem("Wallettype", "binanceconnect");
        // await BinanceChain.enable();
        window.web3 = new window.Web3(window.BinanceChain);
        // code block
        break;
        default:
      // code block
    }



    if(walletname == "metamask") {
  /*  this.metamaskService.connectMetaMask("clicked").then((suc) => {
let responseData: any = suc;
this.toaster.success(responseData.message);
if (responseData.status) {
this.GetANTNbalance();
sessionStorage.setItem("isMetaLogin", "true");
this.connectModal.hide();
}
});*/
// return false;
    this.metamaskService.connectMetaMask("clicked").then((suc) => {
      let responseData: any = suc;
      if (responseData.status) {
        if (type == 'login') {
          this.dataService.postRequest('users/checksignin', {key: this.dataService.metaDeatails.account}).subscribe(async(res:any) => {
            if (res.status) {
              localStorage.setItem("Game-Token", res.gametoken);
              this.toasterService.show(res.status, res.message);
              await this.GetEbalance();
              this.accountShort = this.dataService.metaDeatails.accountShort;
              this.balance = this.dataService.metaDeatails.balance;
              sessionStorage.setItem("isMetaLogin", "true");
              this.dataService.isOverlay = false;
              this.modalRef.hide();
              this.closeAllModals();
              this.changeDetectorRef.detectChanges();
            }
            else {
              this.dataService.isOverlay = false;
              this.toasterService.show(false, 'Invalid User Address. Please Signup');
            }
          })
        }
      }
    });
} else if(walletname == "binanceconnect"){
  this.metamaskService.connectMetaMask("clicked").then((suc) => {
      let responseData: any = suc;
      if (responseData.status) {
        if (type == 'login') {
          this.dataService.postRequest('users/checksignin', {key: this.dataService.metaDeatails.account}).subscribe(async(res:any) => {
            if (res.status) {
              localStorage.setItem("Game-Token", res.gametoken);
              this.toasterService.show(res.status, res.message);
              await this.GetEbalance();
              this.accountShort = this.dataService.metaDeatails.accountShort;
              this.balance = this.dataService.metaDeatails.balance;
              sessionStorage.setItem("isMetaLogin", "true");
              this.dataService.isOverlay = false;
              this.modalRef.hide();
              this.closeAllModals();
              this.changeDetectorRef.detectChanges();
            }
            else {
              this.dataService.isOverlay = false;
              this.toasterService.show(false, 'Invalid User Address. Please Signup');
            }
          })
        }
      }
    });
}else {
  providerType.enable().then((accounts: any) => {
    this.dataService.metaDeatails.account = accounts[0];
    this.GetEbalance();
    this.balance = this.dataService.metaDeatails.balance;
    let first = accounts[0].substring(0, 3);
    let last = accounts[0].substring(38, 42);
    this.dataService.metaDeatails.accountShort = `${first}...${last}`;
    this.dataService.metaDeatails.isMetaLogin = true;
    this.dataService.isMetaReady.emit(true);
    this.accountShort = this.dataService.metaDeatails.accountShort;
     localStorage.setItem("isLoginPermit", "true");
    
          this.dataService.postRequest('users/checksignin', {key: this.dataService.metaDeatails.account}).subscribe(async(res:any) => {
            if (res.status) {
              localStorage.setItem("Game-Token", res.gametoken);
              this.toasterService.show(res.status, res.message);
              await this.GetEbalance();
              this.accountShort = this.dataService.metaDeatails.accountShort;
              this.balance = this.dataService.metaDeatails.balance;
              sessionStorage.setItem("isMetaLogin", "true");
              this.dataService.isOverlay = false;
              this.modalRef.hide();
              this.closeAllModals();
              this.changeDetectorRef.detectChanges();
            }
            else {
              this.dataService.isOverlay = false;
              this.toasterService.show(false, 'Invalid User Address. Please Signup');
            }
          })  

  })

}


    
  }

  async onSubmit(val) {
    let obj = {};
    this.dataService.isOverlay = true;
    if (!this.dataService.metaDeatails.account) {
      this.metamaskService.connectMetaMask("clicked").then((suc) => {
        let responseData: any = suc;
        if (responseData.status) {
          obj = {
            'auth': val.auth,
            'username': val.username,
            'address': this.dataService.metaDeatails.account
          }
        }
        else {
          this.dataService.isOverlay = false;
          this.toasterService.show(responseData.status, responseData.message);
        }
      })
      
    }
    else {
      obj = {
        'auth': val.auth,
        'username': val.username,
        'address': this.dataService.metaDeatails.account
      }
      // this.toasterService.show(false, 'Something went wrong, Please Try again.');
    }
    console.log(obj, 'check obj');
    this.dataService.postRequest('users/createProfile', obj).subscribe((res:any) => {
      if (res.status) {
        localStorage.setItem("Game-Token", res.gametoken);
        this.toasterService.show(res.status, res.message);
        this.GetEbalance();
        this.accountShort = this.dataService.metaDeatails.accountShort;
        this.balance = this.dataService.metaDeatails.balance;
        sessionStorage.setItem("isMetaLogin", "true");
        this.dataService.isOverlay = false;
        this.modalRef.hide();
        this.closeAllModals();
      }
      else {
        this.dataService.isOverlay = false;
        this.toasterService.show(res.status, res.message);
      }
    })
  }

  checkUsername(val) {
    this.dataService.postRequest('users/checkuserData', {'username': val}).subscribe((res:any) => {
      if (res.status) {
        this.uname = true;
        this.cansubmit = true;
        console.log('true..', this.uname);
      }
      else {
        this.uname = false;
        this.cansubmit = false;
        console.log('false..', this.uname);
      }
    })
  }

  checkUsermail(val) {
    this.dataService.postRequest('users/checkuserData', {'auth': val}).subscribe((res:any) => {
      if (res.status) {
        this.mail = true;
        this.cansubmit = true;
      }
      else {
        this.mail = false;
        this.cansubmit = false;
      }
    })
  }  

  async GetEbalance() {
    this.metamaskService
    .GetEbalance()
    .then(async (result) => {
      if (result.status) {
        this.dataService.metaDeatails.balance = result.balance;
        this.router.navigate(["dashboard"]);
        this.dataService.activeUrl('dashboard');        
      } else {
      }
    })
    .catch((error) => {});
  }

  closeAllModals() {
    for (let i = 1; i <= this.modalService.getModalsCount(); i++) {
      this.modalService.hide();
    }
  }

}
