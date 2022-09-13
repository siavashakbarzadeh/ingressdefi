import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/common/services/api/data.service";
import { Router } from "@angular/router";
import { ToasterService } from "src/app/common/toaster/toaster.service";



@Component({
	selector: 'app-market',
	templateUrl: './market.component.html',
	styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

	itemObj: any = {};
	items = [];
	limit = 9;
	skip = 0;
	account = this.service.metaDeatails.account;

	constructor(private service: DataService, private route: Router, private toasterService: ToasterService,) { }

	ngOnInit() {

		/*if (!this.account) {
			this.toasterService.show(false, 'Please login to continue');
			this.route.navigate(['/']);
		}*/


		this.service.isOverlay = false;
		this.getItems();
	}

	myFunc(_id: any) {

		
		this.route.navigate(['/item-details1/'], {queryParams:{id: encodeURIComponent(_id)}});
	}

	myFunc1(_id: any) {

		
		this.route.navigate(['/item-details/'], {queryParams:{id: encodeURIComponent(_id),'type':0}});
	}

	getUserFunc(user_id: any) {
		this.route.navigate(['/user/'], {queryParams:{id: encodeURIComponent(user_id)}});
	}

	getItems() {
		this.service.postRequest("collection/getMarkets", { skip : this.skip,limit : this.limit, account: this.account }).subscribe((suc) => {
			let responseData: any = suc;
			if (responseData.status) {
				this.items = responseData.data;
			}
		});
	}

	addLike(itemData: any) {
		var obj = {
			type: "Liked",
			objectId: itemData.itemId,
			creatorId: itemData.userId,
			ownerId: itemData.ownerId,
			image: itemData.image,
			objectName: itemData.name,
		}
		this.service.postRequest('users/addActivity', obj).subscribe((res:any) => {
			if (res.status == true) {
			} 
		})
	}

	loadmore(skip){
		this.service.postRequest("collection/getMarkets", { skip : this.skip,limit : this.limit }).subscribe((res: any) => {
			this.items.push(...res.data); 
			this.skip=this.skip+this.limit;
		})
	}

}
