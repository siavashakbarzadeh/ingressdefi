import { Component, OnInit, ViewChild, TemplateRef  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { DataService } from "src/app/common/services/api/data.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { NftService } from "src/app/common/services/metamask/nft/nft.service";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as $ from "jquery";

declare let window: any;

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  itemObj: any = {
    item_image: ''
  };
  co_form: FormGroup;
  submitted = false;
  msubmitted = false;
  upload = false;
  fileerr = false;
  itemArr: any;
  pageKey: any;
  currencies: any;
  tabsingle = true;
  saletype:String = 'fixed';
  modalRef?: BsModalRef | null;
  network;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    public service: DataService, 
    private toasterService: ToasterService, 
    private nftService: NftService, 
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    ) { }

  ngOnInit() {
    this.service.isOverlay = false;
    this.co_form = this.formBuilder.group({  
      network: ['', Validators.required],
      contractaddr: ['', Validators.required],
    });
    this.itemObj.pagekey = this.activatedRoute.snapshot.queryParamMap.get('id');
    var collectionId = decodeURIComponent(this.itemObj.pagekey);
    this.pageKey = collectionId;
    this.getNetwork();
  }

  get f() {  return this.co_form.controls; }

  onSubmit() {
    this.submitted = true;
    console.log('form submited', this.co_form.value);
    if (this.co_form.invalid) {
      this.service.isOverlay = false;
      return;
    }
    var account = this.service.metaDeatails.account;
    this.msubmitted = true;
    this.service.isOverlay = true;
    let datas = this.co_form.value;
    console.log(datas, 'datas');
    let addrr = (datas.contractaddr).trim();

    if ((addrr).length != 42) {
      this.submitted = false;
      this.msubmitted = false;
      this.service.isOverlay = false;
      return this.toasterService.show(false, "Invalid contract address");
    }
    let obj = {
      "account" : account,
      "network" : datas.network,
      "token_currency" : this.itemObj.currency,
      "contract" : addrr,
    }
    var that = this;
    this.service.postRequest('users/importcontract', obj).subscribe(async function(reqData: any)  {
      console.log(reqData, 'reqData');
      if(reqData.status) {
        var contractId = reqData.contractId;
        var ABI = JSON.parse(reqData.data);
        var userContract = new window.web3.eth.Contract(ABI, datas.contractaddr);
        await userContract.methods.name().call(async (err,res) =>{ 
          console.log(err, 'method name error');
          let collectionObj = {
            "name" : res,
          }
          console.log(collectionObj, 'method name collectionObj');
          that.service.postRequest('users/createCollection', collectionObj).subscribe(async function(rData: any)  {
            console.log(rData, 'rData');
            if (rData.status) {
              that.onProcess(ABI, datas.contractaddr, rData.collectionId, contractId, that.itemObj.currency, datas.network);
            }
            else {
              that.msubmitted = false;
              that.service.isOverlay = false;
              that.toasterService.show(false, rData.msg);
            }
          });
        })
      } else {
        this.msubmitted = false;
        this.service.isOverlay = false;
        this.toasterService.show(false, reqData.msg);
      }
    });
  }

  async onProcess(ABI, addr, collectionId, contractId, currency, network) {
    var account = this.service.metaDeatails.account;
    let verify = await this.nftService.checkBal(addr, ABI, account);
    console.log("verify",verify);
    var that = this;
    if (verify.status && verify.result > 0) {
      var importstatus = false;
      for (let i = 0; i < verify.result; i++) {
        console.log ("Block statement execution no." + i);
        let tokenOfOwner = await that.nftService.tokenOfOwnerByIndex(addr, ABI, account, i.toString());
        if(tokenOfOwner.status) {
          console.log(tokenOfOwner, 'tokenOfOwner');
          let tokenURI = await that.nftService.tokenURI(addr, ABI, (tokenOfOwner.result).toString());
          console.log(tokenURI, 'tokenURI');
          console.log("tokenURI.statustokenURI.statustokenURI.status",tokenURI.status)
          if (tokenURI.status) {
            let params = {
              "tokenuri": tokenURI.result,
              "account": account,
              "contract": addr,
              "collectionId": collectionId,
              "currency": currency,
              "nftid": tokenOfOwner.result,
              "network": network,
              "contractId": contractId,
            }
            console.log(params, 'params');
            await that.service.postRequest('users/importobjectdata', params).subscribe((reqData: any) => {
              if (reqData.status) {
                  that.toasterService.show(true, "Successfully imported");
                importstatus = true;
                that.route.navigate(['user']);
              }
              else {
                that.submitted = false;
                that.msubmitted = false;
                that.service.isOverlay = false;
              }
            });
          }
          else {
            that.submitted = false;
            that.msubmitted = false;
            that.service.isOverlay = false;
            that.toasterService.show(false, "Sorry! Unable to get Token URI");
            that.route.navigate(['user']);
          }
        }
        else {
          that.submitted = false;
          that.msubmitted = false;
          that.service.isOverlay = false;
          that.toasterService.show(false, tokenOfOwner.message);  
        }
      }
      console.log(importstatus, 'importstatus');
      if (importstatus) {
        that.submitted = false;
        that.msubmitted = false;
        that.service.isOverlay = false;
        that.route.navigateByUrl('user'); 
        that.service.isOverlay = false;
        that.toasterService.show(true, 'Your NFT details imported Success');
        that.route.navigateByUrl('user');
      }
      else {
        that.submitted = false;
        that.msubmitted = false;
        that.service.isOverlay = false;
        that.route.navigateByUrl('user'); 
        that.service.isOverlay = false;
        that.toasterService.show(false, "Sorry failed to import your nft details");  
        that.route.navigate(['user']);
      }
    }
    else {
      that.msubmitted = false;
      that.service.isOverlay = false;
      that.toasterService.show(false, "Sorry No nft available to your account");
      that.route.navigateByUrl('/user');
    }
  }

  onChangeNetwork(curr) {
    this.itemObj.currency = curr;
  }

  getNetwork() {
    this.service.getRequest('users/getNetworks').subscribe((reqData: any) => {
      if (reqData.status) {
       this.network = reqData.data; 
      }
    });
  }
}
