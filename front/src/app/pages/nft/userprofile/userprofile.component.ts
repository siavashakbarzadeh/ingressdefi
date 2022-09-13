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
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  profile: any = {};
  userCollected:any=[];
  onSale:any=[];
  username:string;
  
  limit = 6;
  skip = 6;
  
  token = localStorage.getItem("Game-Token");

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    public service: DataService, 
    private toasterService: ToasterService 
    ) { 
      this.activatedRoute.paramMap.subscribe((params) => {
        this.username = this.activatedRoute.snapshot.paramMap.get('userName');
        this.getProfile();
        this.getUserCollected();
        this.getCollectionOnSale();
      });
    }

  ngOnInit() {
    this.service.isOverlay = false;
  }

  getProfile() {
      this.service.postRequest("users/otheruserproffile",{username:this.username}).subscribe((suc:any) => {
        if (suc.status) {
          this.profile = suc.data;
        }else{
          this.profile={};
        }
      })
  }

  getUserCollected() {
    this.service.postRequest("users/otherprofilecollect",{ skip : 0, limit : this.limit ,username:this.username}).subscribe((suc:any) => {
      if (suc.status) {
        this.userCollected = suc.data;
      }
    })
  }

  getCollectionOnSale() {
    this.service.postRequest("collection/onsaleothers",{ skip : 0, limit : this.limit ,username:this.username}).subscribe((suc:any) => {
      if (suc.status) {
        this.onSale = suc.data;
      }
    })
}

}
