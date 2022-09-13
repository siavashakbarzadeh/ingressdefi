import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DataService } from "src/app/common/services/api/data.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
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
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

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
  limit = 6;
  skip = 6;
  modalRef?: BsModalRef | null;
  msubmitted = false;
  saletype:String = 'fixed';
  currencies: any;
  selectcurr:String = "";
  buycurr:String = "";
  buytokenaddr:String = "";
  publishData: any = {};
  submitted = false;

  constructor(
   private activatedRoute: ActivatedRoute,
   private route: Router,
   public service: DataService, 
   private toasterService: ToasterService, 
   private modalService: BsModalService,
   private nftService: NftService,
   ) { }

  ngOnInit() {
    this.endminDate = new Date();
    this.endmaxDate = new Date();
    this.endminDate.setDate(this.endminDate.getDate());
    this.endmaxDate.setDate(this.endmaxDate.getDate() + 7);


    this.itemObj.pagekey = this.activatedRoute.snapshot.queryParamMap.get('id');
    var collectionId = decodeURIComponent(this.itemObj.pagekey);
    this.pageKey = collectionId;
    this.getItems(collectionId);
    this.getCurrency();
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
      this.route.navigate(['collection']);
    }
  }

  saleItem(itemId) {
    console.log(itemId);
    if(itemId) {
      this.service.postRequest("collection/getItem", { id: itemId }).subscribe((suc) => {
        let responseData: any = suc;
        if (responseData.status) {
          this.sItem = responseData.data;
          console.log(this.sItem, 'getItem');
          console.log(responseData.data, 'responseData');
        }
      });
    } else {
      this.toasterService.show(false, 'Something went wrong');
      this.route.navigate(['collection']);
    }
  }

  getCurrency() {
    this.service.postRequest('collection/getNftCurrency', {}).subscribe((success) => {
      let reponse: any = success;
      if (reponse.status) {
        this.currencies = reponse.data;

        console.log("this.currenciesthis.currenciesthis.currencies",this.currencies)

      } else {
        this.toasterService.show(false, reponse.msg);
      }
    });
  }

  myFunc(cid: any){
    this.route.navigate(['/create-item'], {queryParams:{id: encodeURIComponent(cid)}});
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
    console.log('selected', val);
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

   // console.log("Sample[0]Sample[0]Sample[0]",Sample[0])

    this.submitted = true;
    this.msubmitted = true;
    let datas = values;
    var buycurr = 'WBNB';//datas.buycurrency;
    var sellcurr = 'ERC721'; //this.sItem.currency;
    console.log(this.sItem, 'values');
    let account = this.service.metaDeatails.account;
    if (!account) {
      this.toasterService.show(false, 'Please login with metamask');
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
      'startdate': datas.sdate,
      'starttime': datas.starttime,
      'enddate': datas.endate,
      'endtime': datas.endtime,
    };
   /* console.log(itemArr, 'itemArr');
    return false;*/
    this.publishData.saletype = this.saletype;
    this.publishData.itemid = this.sItem.itemId;
    this.publishData.edition = 1/*datas.edition*/;
    this.publishData.house = this.sItem.house/*creator id*/;
    this.publishData.rent = this.sItem.rent/*owner id*/;
    this.service.filePostRequest('collection/updateItem', itemArr).subscribe((reqData: any) => {
      if(reqData.status) {
        console.log('reqData', this.saletype);


        if (this.saletype == 'private') {
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
        this.toasterService.show(false, reqData.msg);
      }
      this.route.navigate(['collection']);
    });
  }

  privatesale(address, itemId){ 
    if (address && itemId) {
      var Data = {'address': address};
      this.service.postRequest('checkuser', Data).subscribe((result:any)=>{
        if(result.status){ 
          this.service.postRequest("collection/getItem", { id: itemId }).subscribe((suc: any) => {
            if (!suc.status) {
              return this.toasterService.show(false, 'Item not found.');
            }
            let itemData = suc.data;
            console.log(itemData, 'itemDataaaaa');
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
                        console.log(cdata.contract, 'cdata.contract');
                        console.log(cdata.abi, 'cdata.abi');
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
                    this.toasterService.show(false, error.message);
                }
           }) ()
          });
        }else{ 
          this.toasterService.show(false, 'No Such User Found');
          return;
        }
      })
    }
  }

 /* fixedSale(itemId) {
    if (itemId) {
      this.service.postRequest("collection/getItem", { id: itemId }).subscribe((suc: any) => {
        if (!suc.status) {
          return this.toasterService.show(false, 'Item not found.');
        }
        let itemData = suc.data;
        console.log(itemData, 'itemDataaaaa1');
        (async() => {
            try {

                let account = this.service.metaDeatails.account;
                if (!account) {
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
                      console.log(cdata.contract, 'cdata.contract');
                      console.log(cdata.abi, 'cdata.abi');
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
                    currency = 'ERC721';
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
                this.toasterService.show(false, error.message);
            }
       }) ()
      });
    }
  }*/


  fixedSale(itemId) {
    if (itemId) {
      this.service.postRequest("collection/getItem", { id: itemId }).subscribe((suc: any) => {
        if (!suc.status) {
          return this.toasterService.show(false, 'Item not found.');
        }
        let itemData = suc.data;
        (async() => {
            try {  
                let account = this.service.metaDeatails.account;
                if (!account) {
                  return this.toasterService.show(false, "Please connect metamask");
                }
                let token = ContractDetails.nft_exchange_token;
                let token_abi = NftExchangeAbi;
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
                let verify = await this.nftService.verifyOwner(this.apprToken, this.apprTokenABI, itemData.selltokenid);
                if (verify.result != account) {
                  this.toasterService.show(false, 'Invalid Owner Address, Please Verify Metamask Address');
                  return;
                }
                let approve = await this.nftService.approveSellFun(this.apprToken, this.apprTokenABI, itemData.selltokenid, account);
                if (approve.result) {
                  window.web3 = window.web3.currentProvider;
                  window.web3 = new window.Web3(window.ethereum); 
                  let exchangeContract = new window.web3.eth.Contract(token_abi, token);
                  let pub_price  =  await this.nftService.getweiValue(itemData.price);
                  
                  let bb = new Date(itemData.enddate); 
                  let salt = Math.floor((Math.random() * ((new Date()).getTime())));
                  let order = [[account,["0x76dbb555c3bb4d985e93567670093f68bf12bca8", itemData.selltokenid, "1"],["0xae13d989dac2f0debff460ac112a837c89baa7cd", (0.1e18).toString(), "0"]], (itemData.spid).toString(), (0.1e18).toString(), '40', salt.toString(), (bb.getTime()).toString(), '1'];  
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
                        this.route.navigate(['collection']);
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
                  this.route.navigate(['/collection']);
                  return;
                }
                return
            }
            catch (error) {
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
            return this.toasterService.show(false, 'Item not found.');
          }
          let itemData = suc.data;
          console.log(itemData, 'itemDataaaaa2');
          (async() => {
              try {
                let account = this.service.metaDeatails.account;
                  if (!account) {
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
                      console.log(cdata.contract, 'cdata.contract');
                      console.log(cdata.abi, 'cdata.abi');
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
                  this.toasterService.show(false, error.message);
              }
         }) ()
        });
     
    }
  }


  async contractFixed(apprToken, apprTokenABI, itemData) {


    console.log("itemDataitemDataitemDataitemData",itemData);
    return false;

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
          
          let bb = new Date(itemData.enddate); 
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
                this.route.navigate(['collection']);
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
        this.route.navigate(['/collection']);
        return;
      }
      return
    }
    catch(e) {
      this.toasterService.show(false, e);
      this.route.navigate(['/collection']);
    }
  }

   saleItemnew(items){
    if(items) {

       let account = this.service.metaDeatails.account;
        let currency = items.currency;
        console.log("Sample[0][currency].address",Sample[0][currency].address)
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
        
    } else {
      this.toasterService.show(false, 'Something went wrong');
      this.route.navigateByUrl('market');
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
        let bb = new Date(itemData.enddate); 
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
              this.route.navigate(['collection']);
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
        this.route.navigate(['/collection']);
        return;
      }
      return
    }
    catch(e) {

    }
  }





  async Offlinesalefn(apprToken, apprTokenABI, itemData) {

    
console.log("apprTokenABIIapprTokenABII0",apprTokenABI)
    
   //   let apprTokenABII = JSON.parse(apprTokenABI);



      let account = this.service.metaDeatails.account;
      let token = ContractDetails.nft_exchange_token;
      /*let verify = await this.nftService.verifyOwner(apprToken, apprTokenABII, itemData.selltokenid);
      if (verify.result != account) {
        this.toasterService.show(false, 'Invalid Owner Address, Please Verify Metamask Address');
        return;
      }*/
      let approve = await this.nftService.approveSellFun(apprToken, apprTokenABI, itemData.selltokenid, account);
      
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
        
        let bb = new Date(itemData.enddate); 
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
              this.route.navigate(['collection']);
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
        this.route.navigate(['/collection']);
        return;
      }
      return
    }
    catch(e) {

    }
  }
  
}


