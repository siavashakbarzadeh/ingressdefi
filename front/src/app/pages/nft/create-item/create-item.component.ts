import { Component, OnInit, ViewChild, TemplateRef  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { DataService } from "src/app/common/services/api/data.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { NftService } from "src/app/common/services/metamask/nft/nft.service";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

declare let window: any;

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
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
    this.co_form = this.formBuilder.group({  
        item_name: ['', Validators.required],
        item_img: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        caddress:[""],
        /*properties: this.formBuilder.array([]),
        stats: this.formBuilder.array([]),*/
    });
    this.itemObj.pagekey = this.activatedRoute.snapshot.queryParamMap.get('id');
    var collectionId = decodeURIComponent(this.itemObj.pagekey);
    this.pageKey = collectionId;
    this.getCollection(collectionId);

    
  }

  get f() {  return this.co_form.controls; }

  changeTab(type) {
    console.log(type, 'tab type');
    this.tabsingle = (type == 'single') ? true : false; 
  }

  saleType(val) {
    console.log(val, 'sale');
    this.saletype = val;
    console.log(this.saletype, 'sale');
  }

  quantities() : FormArray {  
    return this.co_form.get("properties") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.formBuilder.group({  
      name: '',  
      value: '',  
    })  
  }  
     
  addQuantity() {  
    this.quantities().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.quantities().removeAt(i);  
  }

  quantities1() : FormArray {  
    return this.co_form.get("stats") as FormArray  
  }  
     
  newQuantity1(): FormGroup {  
    return this.formBuilder.group({  
      name: '',  
      value: '',  
    })  
  }  
     
  addQuantity1() {  
    this.quantities1().push(this.newQuantity1());  
  }  
     
  removeQuantity1(i:number) {  
    this.quantities1().removeAt(i);  
  }
  
  getCollection(collectionId: any) {
    if(collectionId) {
      this.service.postRequest('collection/findCollection', { id: collectionId }).subscribe((success) => {
        let reponseData: any = success;
        if (reponseData.status) {
        } else {
          this.toasterService.show(false, reponseData.msg);
        }
      });
    } else {
      this.toasterService.show(false, 'Something went wrong');
      this.route.navigate(['collection']);
    }
  }

  

  onChanged(event: any) {
    let reader = new FileReader();
    const name = event.target.name;
    const file = event.target.files[0];
    let typeFile = event.target.files[0].type;
    let file_size = event.target.files[0].size / 720 / 720;

    if(typeFile != "image/png" && typeFile != "image/jpg" && typeFile != "image/jpeg") {
      this.fileerr = true;
      return;
    }

    if(file_size >= 2) {
      this.fileerr = true;
      return;
    }

    reader.onload = (e: any) => {
      var img = new Image();
      img.src = e.target.result;
      this.itemObj.image = e.target.result;
    }
    this.fileerr = false;    
    this.upload = true;    
    reader.readAsDataURL(file); 
    this.itemObj.item_image = file;
  }

  onSubmit() {
    this.submitted = true;
    console.log('form submited', this.co_form.value);
    if (this.co_form.invalid) {
        return;
    }
    this.msubmitted = true;
    let datas = this.co_form.value;
    console.log(datas, 'datas')
    const formData = new FormData();
    if (datas.properties != undefined && datas.properties.length) {
      console.log('yes properties');
      var propaToS = JSON.stringify(Object.assign({}, datas.properties));
      formData.append('properties', propaToS);
    }

    if (datas.stats != undefined && datas.stats.length) {
      console.log('yes stats');
      var StatsaToS = JSON.stringify(Object.assign({}, datas.stats));
      formData.append('stats', StatsaToS);
    }
    this.itemObj.caddress = this.service.metaDeatails.account;
    formData.append('collectionId', this.pageKey);
    formData.append('name', this.itemObj.item_name);
    formData.append('description', this.itemObj.description);
    formData.append('external_link', this.itemObj.external_link);
    formData.append('metadata', this.itemObj.metadata);
    formData.append('content', this.itemObj.content);
    formData.append('price', this.itemObj.price);
    formData.append('objtype', (this.tabsingle == true) ? 'single' : 'multiple');
    if(typeof this.itemObj.item_image['name'] != 'undefined' && typeof this.itemObj.item_image['name'] != undefined) {   
      formData.append('item_img', this.itemObj.item_image);
    } else {
      formData.append('item_img', this.itemObj.item_image);
    }
    var add : any = this.service.metaDeatails.account;
    this.itemObj.caddress = this.service.metaDeatails.account;

    console.log(this.service.metaDeatails.account , "++++ this.service.metaDeatails.account")

    formData.append('caddress',this.itemObj.caddress);

    console.log(formData ,"}}}}}}}} formData")
   // formData.append('caddress': this.service.metaDeatails.account );
    console.log("this.service.metaDeatails.accountthis.service.metaDeatails.accountthis.service.metaDeatails.account",this.service.metaDeatails.account)
    //this.itemArr = formData;
    //this.itemArr.push({'caddress':this.service.metaDeatails.account});
    // this.itemArr.push({"caddress": this.itemObj.caddress});
    //this.itemArr.caddress  =  this.service.metaDeatails.account; 
    
    
   
    this.service.filePostRequest('collection/createItem', formData).subscribe((reqData: any) => {
      console.log(reqData, 'reqData');
      if(reqData.status) {
        console.log('before nft service call');
        /*this.nftService.GetTokenURI(reqData.allowed).then((suc: any) => {
          console.log(suc, 'nftservice suc');
        });*/
        console.log('after nft service call');
        this.toasterService.show(true, reqData.msg);
      } else {
        this.toasterService.show(false, reqData.msg);
      }
      this.route.navigate(['collection']);
    });
  }
}
