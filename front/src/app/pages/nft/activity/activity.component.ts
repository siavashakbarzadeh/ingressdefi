import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/common/services/api/data.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { Router } from "@angular/router";

@Component({
	selector: 'app-activity',
	templateUrl: './activity.component.html',
	styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

	limit = 6;
	skip = 6;
	activity = [];
	artist = [];
	topcollectors = [];
	constructor(
		public service: DataService, 
		private toasterService: ToasterService, 
		private route: Router,
		) { }

	ngOnInit() {
		this.getActivity();
		this.topCollectors();
		this.trendings();
	}


	getActivity() {
		this.service.postRequest("getActivity", { skip : 0,limit : this.limit }).subscribe((suc) => {
			let responseData: any = suc;
			if (responseData.status) {
				this.activity = responseData.data;
			}
		});
	}

	trendings() {
		this.service.getRequest("topartist").subscribe((suc) => {
			let responseData: any = suc;
			if (responseData.status) {
				this.artist = responseData.data;
			}
		});	
	}

	topCollectors() {
		this.service.getRequest("topcollectors").subscribe((suc) => {
			let responseData: any = suc;
			if (responseData.status) {
				this.topcollectors = responseData.data;
			}
		});
	}

	myFunc(Id) {
		console.log(Id, 'id');
		console.log(encodeURIComponent(Id), 'encid');
		this.route.navigate(['/user'], {queryParams:{id: encodeURIComponent(Id)}});
	}

	loadmore(skip){
		this.service.postRequest('getActivity',{ skip : this.skip,limit : this.limit }).subscribe((res: any) => { 
			this.activity.push(...res.data); 
			this.skip=this.skip+this.limit;
		})
	}
}
