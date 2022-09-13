import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DataService } from "src/app/common/services/api/data.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { NftService } from "src/app/common/services/metamask/nft/nft.service";
import { ContractDetails } from "src/assets/files/contract";
import { NftExchangeAbi } from "src/assets/files/nft_abi";
import { NFT_721_Token_ABI } from "src/assets/files/127cre_abi";
import { NFT_1155_Token_ABI } from "src/assets/files/5511cre_abi";
import { NFT_20_Token_ABI } from "src/assets/files/20cre_abi";
import * as moment from 'moment';
import { Sample } from "src/assets/files/currencyType";

declare let window: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  profile: any = {};
  favorites: any = {};
  owned: any = {};
  created: any = {};
  favoriteslength = 0;
  userId : any = {};
  limit = 6;
  skip = 6;

  bsValue = new Date();
   bsRangeValue: Date[];
   maxDate = new Date();
   minDate = new Date(); 
   starttime: Date = new Date(); 
   endtime: Date = new Date();   
   startDate = new Date();   
   startminDate: Date;   
   startmaxDate : Date;
   endDate = new Date();   
   endminDate: Date;   
   endmaxDate:Date;   
   selectedFromDate: any;   
   selectedEndDate: any;
   apprToken: any = {};
  apprTokenId: any = {};
  apprTokenABI: any = {};
  token = localStorage.getItem("Game-Token");

  itemObj: any = {};
  items = [];
  pageKey: any;
  sItem: any = {};
  sItemObj: any = {}; 
  modalRef?: BsModalRef | null;
  msubmitted = false;
  saletype:String = 'fixed';
  currencies: any;
  selectcurr:String = "";
  buycurr:String = "";
  buytokenaddr:String = "";
  publishData: any = {};
  submitted = false;
  privateitems: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    public service: DataService, 
    private toasterService: ToasterService, 
    private modalService: BsModalService,
    private nftService: NftService,
    ) { }

  ngOnInit() {

    this.service.isOverlay = false;
    this.endminDate = new Date();
    this.endmaxDate = new Date();
    this.endminDate.setDate(this.endminDate.getDate());
    this.endmaxDate.setDate(this.endmaxDate.getDate() + 7);

    this.getProfile();
    this.getCollections();
    this.getOnSale();
    this.getSaved();
    this.getCurrency();
    this.getOnSalePrivate();
  }

  getProfile() {
      this.service.postRequest("users/user",{}).subscribe((suc:any) => {
        if (suc.status) {
          this.profile = suc.data;
        }
        else {
          this.toasterService.show(suc.status, suc.msg);
          this.route.navigateByUrl('/market');
        }
      })
  }

  getCurrency() {
    this.service.postRequest('collection/getNftCurrency', {}).subscribe((success) => {
      let reponse: any = success;
      if (reponse.status) {
        this.currencies = reponse.data;
      } else {
        this.toasterService.show(false, reponse.msg);
      }
    });
  }

  getCollections() {
      this.service.postRequest("users/userCollected", { skip : 0, limit : this.limit }).subscribe((suc: any) => {
        let responseData: any = suc;
        if (responseData.status) {


          this.owned = responseData.data;
        }
      });
  }

  getOnSale() {
      this.service.postRequest("collection/userItems", { skip : 0, limit : this.limit }).subscribe((suc: any) => {
        let responseData: any = suc;
        if (responseData.status) {


          console.log("responseData.dataresponseData.data",responseData.data)

          this.created = responseData.data;
        }
      });
  }

  getOnSalePrivate() {
      this.service.postRequest("collection/getmyprivate", { skip : 0, limit : this.limit }).subscribe((suc: any) => {
        let responseData: any = suc;
        if (responseData.status) {
          this.privateitems = responseData.data;
        }
      });
  }

  getSaved(){
      this.service.postRequest('users/userfavorites',{skip : 0, limit : this.limit}).subscribe((res:any) => {
        if (res.status == true) { 
          this.favorites = res.data;
        }
        else {
          this.toasterService.show(res.status, res.msg);
          this.route.navigateByUrl('/market');
        } 
      })
  }

  myFunc(item_id: any) {
    this.route.navigate(['/item-details/'], {queryParams:{id: encodeURIComponent(item_id),"type":0}});
  }


   myFunc1(item_id: any) {
    this.route.navigate(['/item-details/'], {queryParams:{id: encodeURIComponent(item_id),"type":1}});
  }


  openModal(template: TemplateRef<any>) {
    if(this.sItem.item_name != '' && this.sItem.description != '' && this.sItem.item_image != '' ) {
      var modRef = true;
    } else {
      var modRef = false;
    }
    if(modRef) {
      this.modalRef = this.modalService.show(template);
    }
  }

  getItems(collectionId: any) {
    if(collectionId) {
      this.service.postRequest("collection/getItems", { id: collectionId, skip : 0,limit : this.limit }).subscribe((suc) => {
        let responseData: any = suc;
        if (responseData.status) {
          this.items = responseData.data;
        }
      });
    } else {
      this.toasterService.show(false, 'Something went wrong');
      this.route.navigateByUrl('market');
    }
  }

   saleItemnew(items){

    

    if(items) {

       if(items.type == 'import'){
          let cobj = {
                      "contractid": items.contractId,
                    }
                 this.service.postRequest('users/getContract', cobj).subscribe((reqData: any) => {
                  if (reqData.status) {
                    let cdata = reqData.data;
                    
                    this.apprToken = cdata.contract;
                    this.apprTokenABI = cdata.abi;
                     this.Offlinesalefn(this.apprToken, this.apprTokenABI, items);
                  }
                })
       }else{
           let account = this.service.metaDeatails.account;
           let currency = items.currency;
            this.apprToken = Sample[0][currency].address;
            this.apprTokenId = Sample[0][currency].tokenid;
            if (currency == 'ERC721') {
             this.apprTokenABI = NFT_721_Token_ABI;
            }
            else if(currency == 'WBNB') {
              this.apprTokenABI = NFT_1155_Token_ABI;
            }
            else if(currency == 'ERC20') {
              this.apprTokenABI = NFT_20_Token_ABI;
            }
             this.Offlinesalefn(this.apprToken, this.apprTokenABI, items);
       }
     

       
       
        
    } else {
      this.toasterService.show(false, 'Something went wrong');
      this.route.navigateByUrl('market');
    }
    
  }


 async Offlinesalefn(apprToken, apprTokenABI, itemData) {




      if(itemData.type == 'add'){
         var  apprTokenABII = apprTokenABI;
      }else{
         var apprTokenABII = JSON.parse(apprTokenABI);
      }
    
     



      let account = this.service.metaDeatails.account;
      let token = ContractDetails.nft_exchange_token;


      let approve = await this.nftService.approveSellFun(apprToken, apprTokenABII, itemData.selltokenid, account);
      
    


      if (approve.result) {
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum); 
        let pub_price  =  await this.nftService.getweiValue(itemData.price);
        
       // let bb = new Date(itemData.enddate); 
        var expiryTime = await window.web3.eth.getBlockNumber();
        var bb = Number(expiryTime) + Number(10);

         let dead_time =  15 * 60000;
        let date = new Date();
        let timestamp = date.getTime();
        let deadline = timestamp + dead_time;

        let salt = Math.floor((Math.random() * ((new Date()).getTime())));
        let order = [[account,[apprToken, itemData.selltokenid, "1"],["0xae13d989dac2f0debff460ac112a837c89baa7cd", (itemData.price*1e18).toString(), "0"]], (itemData.spid).toString(), (itemData.price*1e18).toString(), '40', salt.toString(),deadline, '1'];  

      

        // let order = [['0xc84928f94462F530a83A8D8E8e1FF4851255b335', [ContractDetails.nft_exchange_token, '1', 0], [ContractDetails.nft_exchange_token, '1', 1]], 1, 0.e18, 40, 1, n, 0];
        
        let orderHash = await this.nftService.orderHash(order);
        let sig1 =  await window.web3.eth.personal.sign(orderHash.result, account,''); 
        let r = sig1.slice(0, 66);
        let s = '0x' + sig1.slice(66, 130)
        let v = '0x' + sig1.slice(130, 132) 
        let SellergetVRS = [v, r, s];
        if(orderHash && SellergetVRS) {          
          let contractData = { order : order, vrs : SellergetVRS };
           var sellorder = contractData;

            this.service.postRequest("collection/offlinesale", { id: itemData.itemId,"sellorder":contractData }).subscribe((suc) => {
            let responseData: any = suc;
            if (responseData.status) {
              this.sItem = responseData.data;
               this.toasterService.show(true, responseData.msg);
            }else{
              this.toasterService.show(false, responseData.msg);
            }
            this.route.navigateByUrl('market');
          });


         
        }else{
          this.toasterService.show(false, 'Unable to sell, please try again');
        }
        return;
      }
      else {
        this.toasterService.show(false, "Something went wrong, Please Try Again.");
        this.route.navigate(['/collection']);
        return;
      }
      return
   
  }

  saleItem(itemId) {
    if(itemId) {
      this.service.postRequest("collection/getItem", { id: itemId }).subscribe((suc) => {
        let responseData: any = suc;
        if (responseData.status) {
          this.sItem = responseData.data;
        }
      });
    } else {
      this.toasterService.show(false, 'Something went wrong');
      this.route.navigateByUrl('market');
    }
  }

  loadmore(skip){
    this.service.postRequest('collection/getItems',{ id: this.pageKey, skip : this.skip,limit : this.limit }).subscribe((res: any) => { 
      this.items.push(...res.data); 
      this.skip=this.skip+this.limit;
    })
  }

  saleType(val) {
    this.saletype = val;
    if (val == 'auction') {
      this.startminDate = new Date();
      this.startmaxDate = new Date();
      this.startminDate.setDate(this.startminDate.getDate());
      this.startmaxDate.setDate(this.startmaxDate.getDate() + 30);
      this.endminDate.setDate(this.endminDate.getDate() + 7);
      this.endmaxDate.setDate(this.endminDate.getDate() + 7);
    }
    else {
      this.endminDate = new Date();
      this.endmaxDate = new Date();
      this.endminDate.setDate(this.endminDate.getDate());
      this.endmaxDate.setDate(this.endmaxDate.getDate()+7);
    }
  }


  changeCurr(val) {
    this.selectcurr = val;
  }

  changeBuyCurr(val) {
    this.buycurr = val;
  }

  selectDate(val, opt) {
    if (opt == 'from') {
      this.selectedFromDate = val;
      this.endminDate = new Date();
      this.endmaxDate = new Date();
      this.endmaxDate.setDate(val.getDate() + 1);
      this.endmaxDate.setDate(val.getDate() + 7);
    }
    else {
      this.selectedEndDate = val;
      this.startminDate = new Date();
      this.startmaxDate = new Date();
      this.startminDate.setDate(this.selectedEndDate.getDate()-7);
      this.startmaxDate.setDate(this.selectedEndDate.getDate()-1);
    }
  }

  async onModalSubmit(values) {



    this.submitted = true;
    this.msubmitted = true;
    this.service.isOverlay = true;
    let datas = values;
    var buycurr = 'WBNB'/*datas.buycurrency*/;
    var sellcurr = this.sItem.currency;
    let account = this.service.metaDeatails.account;
    if (!account) {
      this.toasterService.show(false, 'Please login with metamask');
      this.service.isOverlay = false;
      return;
    }
    let itemArr = {
      'bid': (datas.bid ? datas.bid : ""),
      'supply': (this.sItem.objtype != 'single' && this.sItem.objtype != ''  && datas.supply != undefined && datas.supply != "") ? datas.supply : 1,
      'toprivate': (datas.address ? datas.address : ""),
      'saletype': this.saletype,
      'currency': this.sItem.currency,
      'tocurrency': buycurr,
      'sellnftid': this.sItem.selltokenid,
      'sellnftaddr': this.sItem.selltoken,
      'sellassettype': Sample[0][sellcurr].astype,
      'buytokenid': Sample[0][buycurr].tokenid,
      'buytokenadr': Sample[0][buycurr].address,
      'buyassettype': Sample[0][buycurr].astype,
      'price': datas.price,
      'itemId': this.sItem.itemId,
      'startdate': (datas.sdate != "" && datas.sdate != null && datas.sdate != undefined) ? datas.sdate : "",
      'starttime': (datas.starttime != "" && datas.starttime != null && datas.starttime != undefined) ? datas.starttime : "",
      'enddate': (datas.endate != "" && datas.endate != null && datas.endate != undefined) ? datas.endate : "",
      'endtime': (datas.endtime != "" && datas.endtime != null && datas.endtime != undefined) ? datas.endtime : "",
    };
    this.publishData.saletype = this.saletype;
    this.publishData.itemid = this.sItem.itemId;
    this.publishData.edition = 1/*datas.edition*/;
    this.publishData.house = this.sItem.house/*creator id*/;
    this.publishData.rent = this.sItem.rent/*owner id*/;
    this.service.filePostRequest('collection/updateItem', itemArr).subscribe((reqData: any) => {
      if(reqData.status) {
        if (this.saletype == 'private') {
          this.publishData.toprivate = (datas.address ? datas.address : "");
          this.privatesale(datas.address, this.sItem.itemId);
        }
        else if(this.saletype == 'fixed') {
          this.fixedSale(this.sItem.itemId);
        }
        else {

          this.auctionSale(this.sItem.itemId);
        }
        this.modalRef.hide();
      } 
      else {
        this.service.isOverlay = false;
        this.toasterService.show(false, reqData.msg);
      }
    });
  }

  privatesale(address, itemId){ 
    if (address && itemId) {
      var Data = {'address': address};
      this.service.postRequest('checkuser', Data).subscribe((result:any)=>{
        if(result.status){ 
          this.service.postRequest("collection/getItem", { id: itemId }).subscribe((suc: any) => {
            if (!suc.status) {
              this.service.isOverlay = false;
              return this.toasterService.show(false, 'Item not found.');
            }
            let itemData = suc.data;
            (async() => {
                try {  
                  if (itemData.imported == 1) {
                    let cobj = {
                      "contractid": itemData.contractId,
                    }
                    this.publishData.imported = 1;
                    this.publishData.contractId = itemData.contractId;
                    await this.service.postRequest('users/getContract', cobj).subscribe((reqData: any) => {
                      if (reqData.status) {
                        let cdata = reqData.data;
                        this.apprToken = cdata.contract;
                        this.apprTokenABI = cdata.abi;
                        this.contractPrivate(this.apprToken, this.apprTokenABI, itemData);
                      }
                    })
                  }
                  else {
                    this.publishData.imported = 0;
                    this.publishData.contractId = "";
                    let account = this.service.metaDeatails.account;
                    if (!account) {
                      this.service.isOverlay = false;
                      return this.toasterService.show(false, "Please connect metamask");
                    }
                    let currency = itemData.currency;
                    this.apprToken = Sample[0][currency].address;
                    this.apprTokenId = Sample[0][currency].tokenid;
                    if (currency == 'ERC721') {
                      this.apprTokenABI = NFT_721_Token_ABI;
                    }
                    else if(currency == 'WBNB') {
                      this.apprTokenABI = NFT_1155_Token_ABI;
                    }
                    else if(currency == 'ERC20') {
                      this.apprTokenABI = NFT_20_Token_ABI;
                    }
                    this.contractPrivate(this.apprToken, this.apprTokenABI, itemData);
                  }
                    
                }
                catch (error) {
                    this.service.isOverlay = false;
                    this.toasterService.show(false, error.message);
                }
           }) ()
          });
        }else{ 
          this.service.isOverlay = false;
          this.toasterService.show(false, 'No Such User Found');
          return;
        }
      })
    }
  }

  fixedSale(itemId) {
    if (itemId) {
      this.service.postRequest("collection/getItem", { id: itemId }).subscribe((suc: any) => {
        if (!suc.status) {
          this.service.isOverlay = false;
          return this.toasterService.show(false, 'Item not found.');
        }
        let itemData = suc.data;
        (async() => {
            try {

                let account = this.service.metaDeatails.account;
                if (!account) {
                  this.service.isOverlay = false;
                  return this.toasterService.show(false, "Please connect metamask");
                }
                
                if (itemData.imported == 1) {
                  let cobj = {
                    "contractid": itemData.contractId,
                  }
                  this.publishData.imported = 1;
                  this.publishData.contractId = itemData.contractId;
                  await this.service.postRequest('users/getContract', cobj).subscribe((reqData: any) => {
                    if (reqData.status) {
                      let cdata = reqData.data;
                      this.apprToken = cdata.contract;
                      this.apprTokenABI = cdata.abi;
                      this.contractFixed(this.apprToken, this.apprTokenABI, itemData);
                    }
                  })
                }
                else {
                    this.publishData.imported = 0;
                    this.publishData.contractId = "";
                    let currency = itemData.currency;
                    this.apprToken = Sample[0][currency].address;
                    this.apprTokenId = Sample[0][currency].tokenid;
                    if (currency == 'ERC721') {
                      this.apprTokenABI = NFT_721_Token_ABI;
                    }
                    else if(currency == 'WBNB') {
                      this.apprTokenABI = NFT_1155_Token_ABI;
                    }
                    else if(currency == 'ERC20') {
                      this.apprTokenABI = NFT_20_Token_ABI;
                    }

                    this.contractFixed(this.apprToken, this.apprTokenABI, itemData);
                }  
            }
            catch (error) {
              this.service.isOverlay = false;
                this.toasterService.show(false, error.message);
            }
       }) ()
      });
    }
  }

  auctionSale(itemId) {

    if ( itemId) {
     
        this.service.postRequest("collection/getItem", { id: itemId }).subscribe((suc: any) => {
          if (!suc.status) {
            this.service.isOverlay = false;
            return this.toasterService.show(false, 'Item not found.');
          }
          let itemData = suc.data;
          (async() => {
              try {
                let account = this.service.metaDeatails.account;
                  if (!account) {
                    this.service.isOverlay = false;
                    return this.toasterService.show(false, "Please connect metamask");
                  }


                if (itemData.imported == 1) {
                  let cobj = {
                    "contractid": itemData.contractId,
                  }
                  this.publishData.imported = 1;
                  this.publishData.contractId = itemData.contractId;
                  await this.service.postRequest('users/getContract', cobj).subscribe((reqData: any) => {
                    if (reqData.status) {
                      let cdata = reqData.data;
                      this.apprToken = cdata.contract;
                      this.apprTokenABI = cdata.abi;
                      this.contractAuction(this.apprToken, this.apprTokenABI, itemData);
                    }
                  })
                }
                else {
                  this.publishData.imported = 0;
                  this.publishData.contractId = "";
                  let currency = itemData.currency;
                  this.apprToken = Sample[0][currency].address;
                  this.apprTokenId = Sample[0][currency].tokenid;
                  if (currency == 'ERC721') {
                    this.apprTokenABI = NFT_721_Token_ABI;
                  }
                  else if(currency == 'WBNB') {
                    this.apprTokenABI = NFT_1155_Token_ABI;
                  }
                  else if(currency == 'ERC20') {
                    this.apprTokenABI = NFT_20_Token_ABI;
                  }
                  this.contractAuction(this.apprToken, this.apprTokenABI, itemData);
                }  
                  

                  
              }
              catch (error) {
                this.service.isOverlay = false;
                  this.toasterService.show(false, error.message);
              }
         }) ()
        });
     
    }
  }


  async contractFixed(apprToken, apprTokenABI, itemData) {
    try{
      let apprTokenABII = JSON.parse(apprTokenABI);
        let account = this.service.metaDeatails.account;
        let token = ContractDetails.nft_exchange_token;
        /*let verify = await this.nftService.verifyOwner(apprToken, apprTokenABII, itemData.selltokenid);
        if (verify.result != account) {
          this.toasterService.show(false, 'Invalid Owner Address, Please Verify Metamask Address');
          return;
        }*/
        let approve = await this.nftService.approveSellFun(apprToken, apprTokenABII, itemData.selltokenid, account);
        if (approve.result) {
          window.web3 = window.web3.currentProvider;
          window.web3 = new window.Web3(window.ethereum); 
          let pub_price  =  await this.nftService.getweiValue(itemData.price);
          
          let bb = new Date(); 
          let salt = Math.floor((Math.random() * ((new Date()).getTime())));
          let order = [[account,[apprToken, itemData.selltokenid, "1"],["0xae13d989dac2f0debff460ac112a837c89baa7cd", (itemData.price*1e18).toString(), "0"]], (itemData.spid).toString(), (itemData.price*1e18).toString(), '40', salt.toString(), (bb.getTime()).toString(), '2'];  
          // let order = [['0xc84928f94462F530a83A8D8E8e1FF4851255b335', [ContractDetails.nft_exchange_token, '1', 0], [ContractDetails.nft_exchange_token, '1', 1]], 1, 0.e18, 40, 1, n, 0];
          
          let orderHash = await this.nftService.orderHash(order);
          let sig1 =  await window.web3.eth.personal.sign(orderHash.result, account,''); 
          let r = sig1.slice(0, 66);
          let s = '0x' + sig1.slice(66, 130)
          let v = '0x' + sig1.slice(130, 132) 
          let SellergetVRS = [v, r, s];
          if(orderHash && SellergetVRS) {          
            let contractData = { order : order, vrs : SellergetVRS };
            this.publishData.sellorder = contractData;
            this.service.postRequest('collection/fixedsale',this.publishData).subscribe((result:any)=>{
              if(result.status){ 
                this.toasterService.show(result.status,result.msg);
                this.route.navigateByUrl('/market');
              }else{       
                this.toasterService.show(result.status, result.msg);
              }
            })
          }else{
            this.service.isOverlay = false;
            this.toasterService.show(false, 'Unable to sell, please try again');
          }
          return;
      }
      else {
        this.service.isOverlay = false;
        this.toasterService.show(false, "Something went wrong, Please Try Again.");
        this.route.navigateByUrl('/market');
        return;
      }
      return
    }
    catch(e) {
      this.toasterService.show(false, e);
      this.route.navigateByUrl('/market');
    }
  }


  async contractAuction(apprToken, apprTokenABI, itemData) {
    try {
      let apprTokenABII = JSON.parse(apprTokenABI);
      let account = this.service.metaDeatails.account;
      let token = ContractDetails.nft_exchange_token;
      /*let verify = await this.nftService.verifyOwner(apprToken, apprTokenABII, itemData.selltokenid);
      if (verify.result != account) {
        this.toasterService.show(false, 'Invalid Owner Address, Please Verify Metamask Address');
        return;
      }*/
      let approve = await this.nftService.approveSellFun(apprToken, apprTokenABII, itemData.selltokenid, account);
      if (approve.result) {
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum); 
        let pub_price  =  await this.nftService.getweiValue(itemData.price);
        let bb = new Date(); 
        let salt = Math.floor((Math.random() * ((new Date()).getTime())));
        let order = [[account,[apprToken, itemData.selltokenid, "1"],["0xae13d989dac2f0debff460ac112a837c89baa7cd", (itemData.price*1e18).toString(), "0"]], (itemData.spid).toString(), (itemData.price*1e18).toString(), '40', salt.toString(), (bb.getTime()).toString(), '3'];  
        // let order = [['0xc84928f94462F530a83A8D8E8e1FF4851255b335', [ContractDetails.nft_exchange_token, '1', 0], [ContractDetails.nft_exchange_token, '1', 1]], 1, 0.e18, 40, 1, n, 0];
        
        let orderHash = await this.nftService.orderHash(order);
        let sig1 =  await window.web3.eth.personal.sign(orderHash.result, account,''); 
        let r = sig1.slice(0, 66);
        let s = '0x' + sig1.slice(66, 130)
        let v = '0x' + sig1.slice(130, 132) 
        let SellergetVRS = [v, r, s];
        if(orderHash && SellergetVRS) {          
          let contractData = { order : order, vrs : SellergetVRS };
          this.publishData.sellorder = contractData;
          this.service.postRequest('collection/privatesale',this.publishData).subscribe((result:any)=>{
            if(result.status){ 
              this.toasterService.show(result.status,result.msg);
              this.route.navigateByUrl('market');
            }else{       
              this.toasterService.show(result.status, result.msg);
            }
          })
        }else{
          this.toasterService.show(false, 'Unable to sell, please try again');
        }
        return;
      }
      else {
        this.toasterService.show(false, "Something went wrong, Please Try Again.");
        this.route.navigateByUrl('/market');
        return;
      }
      return
    }
    catch(e) {

    }
  }

  async contractPrivate(apprToken, apprTokenABI, itemData) {
    try {
      let apprTokenABII = JSON.parse(apprTokenABI);
      let account = this.service.metaDeatails.account;
      let token = ContractDetails.nft_exchange_token;
      /*let verify = await this.nftService.verifyOwner(apprToken, apprTokenABII, itemData.selltokenid);
      if (verify.result != account) {
        this.toasterService.show(false, 'Invalid Owner Address, Please Verify Metamask Address');
        return;
      }*/
      let approve = await this.nftService.approveSellFun(apprToken, apprTokenABII, itemData.selltokenid, account);
      if (approve.result) {
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum); 
        let pub_price  =  await this.nftService.getweiValue(itemData.price);
        
        let bb = new Date(); 
        let salt = Math.floor((Math.random() * ((new Date()).getTime())));
        let order = [[account,[apprToken, itemData.selltokenid, "1"],["0xae13d989dac2f0debff460ac112a837c89baa7cd", (itemData.price*1e18).toString(), "0"]], (itemData.spid).toString(), (itemData.price*1e18).toString(), '40', salt.toString(), (bb.getTime()).toString(), '1'];  
        // let order = [['0xc84928f94462F530a83A8D8E8e1FF4851255b335', [ContractDetails.nft_exchange_token, '1', 0], [ContractDetails.nft_exchange_token, '1', 1]], 1, 0.e18, 40, 1, n, 0];
        
        let orderHash = await this.nftService.orderHash(order);
        let sig1 =  await window.web3.eth.personal.sign(orderHash.result, account,''); 
        let r = sig1.slice(0, 66);
        let s = '0x' + sig1.slice(66, 130)
        let v = '0x' + sig1.slice(130, 132) 
        let SellergetVRS = [v, r, s];
        if(orderHash && SellergetVRS) {          
          let contractData = { order : order, vrs : SellergetVRS };
          this.publishData.sellorder = contractData;
          this.service.postRequest('collection/privatesale',this.publishData).subscribe((result:any)=>{
            if(result.status){ 
              this.toasterService.show(result.status,result.msg);
              this.route.navigateByUrl('market');
            }else{       
              this.toasterService.show(result.status, result.msg);
            }
          })
        }else{
          this.toasterService.show(false, 'Unable to sell, please try again');
        }
        return;
      }
      else {
        this.toasterService.show(false, "Something went wrong, Please Try Again.");
        this.route.navigateByUrl('/market');
        return;
      }
      return
    }
    catch(e) {

    }
  }

}
