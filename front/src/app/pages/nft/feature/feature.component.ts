import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/common/services/api/data.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { Router } from "@angular/router";

@Component({
	selector: 'app-feature',
	templateUrl: './feature.component.html',
	styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

	limit = 6;
	skip = 6;
	features: any;
	constructor(
		public service: DataService, 
		private toasterService: ToasterService, 
		private route: Router,
	) { }

	ngOnInit() {
		this.getFeatures();
	}

	getFeatures() {
		this.service.postRequest("getFeatures", { skip : 0,limit : this.limit }).subscribe((suc) => {
			let responseData: any = suc;
			if (responseData.status) {
				this.features = responseData.data;
			}
		});
	}

}
