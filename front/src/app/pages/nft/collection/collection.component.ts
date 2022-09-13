import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from "src/app/common/services/api/data.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { Router } from "@angular/router";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-collection',
	templateUrl: './collection.component.html',
	styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit {

	@ViewChild("connectModal", { static: false }) connectModal: any;
	
	collectionForm: FormGroup;
	submitted = false;
	upload = false;
	fileerr = false;
	cobj: any = {
		collection_image: ''
	};
	collectionId = '';
	collections = [];
	user: any = {};
	modalRef?: BsModalRef | null;
	modalRef2?: BsModalRef;
	limit = 6;
	skip = 6;

	constructor(
		private formBuilder: FormBuilder, 
		public service: DataService, 
		private toasterService: ToasterService, 
		private route: Router,
		private modalService: BsModalService,
		) { }

	ngOnInit() {
		this.collectionForm = this.formBuilder.group({
			name: ['', Validators.required],
			description: ['', Validators.required],
			image: ['', Validators.required],
		});
		this.getCollections();
		this.userDetails();
	}

	get f() { return this.collectionForm.controls; }

	openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template);
	}

	openModal2(template: TemplateRef<any>) {
		this.modalRef.hide();
		this.modalRef2 = this.modalService.show(template);
	}

	onSubmit() {
		this.submitted = true;
        const formData = new FormData();
        formData.append('name', this.cobj.name);
        formData.append('description', this.cobj.description);
        if(typeof this.cobj.collection_image['name'] != 'undefined' && typeof this.cobj.collection_image['name'] != undefined) {   
        	formData.append('collection_img', this.cobj.collection_image);
        } else {
        	formData.append('collection_img', this.cobj.collection_image);
        }
        this.service.filePostRequest('collection/createCollection', formData).subscribe((reqData: any) => {
        	if(reqData.status == true) {
        		this.modalRef2.hide();
        		this.collectionId = reqData.collectionId;
        		this.toasterService.show(true, reqData.msg);
        		this.route.navigate(['items'], {queryParams: {id: encodeURIComponent(this.collectionId)}});
        	} else {
        		this.toasterService.show(false, reqData.msg);
        	}
        });
    }

    onReset() {
    	this.submitted = false;
    	this.collectionForm.reset();
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
    		this.cobj.image = e.target.result;
    	}
    	this.fileerr = false;    
    	this.upload = true;    
    	reader.readAsDataURL(file); 
    	this.cobj.collection_image = file;
    }

    getCollections() {
    	this.service.postRequest("collection/getCollections", { skip : 0,limit : this.limit }).subscribe((suc) => {
    		let responseData: any = suc;
    		if (responseData.status) {
    			this.collections = responseData.data;
    		}
    	});
    }

     userDetails() {
    	this.service.getRequest("users/get_profile_data").subscribe((suc) => {
    		let responseData: any = suc;
    		if (responseData.status) {
    			this.user.username = responseData.data.username;
    			console.log('this.user', this.user.username);
    		}
    	});
    }

    myFunc(cid: any){
    	this.route.navigate(['/items'], {queryParams:{id: encodeURIComponent(cid)}});
    }

    loadmore(skip){
    	this.service.postRequest('collection/getCollections',{ skip : this.skip,limit : this.limit }).subscribe((res: any) => { 
    		this.collections.push(...res.data); 
    		this.skip=this.skip+this.limit;
    	})
    }
}
