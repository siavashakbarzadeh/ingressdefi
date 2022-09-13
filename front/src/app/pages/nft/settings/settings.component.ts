import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from "src/app/common/services/api/data.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { Router } from "@angular/router";

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

	submitted = false;
	settings: any = {};
	list: any = {};

	constructor(
		public service: DataService, 
		private toasterService: ToasterService, 
		private route: Router,
		) { }

	ngOnInit() {
		this.getMySettings();
	}

	getMySettings() {
		this.service.getRequest('users/getMySettings').subscribe((res: any) => { 
			if (res.status) {
				console.log(res.data, 'response');
				if (res.data != null) {
					let data = res.data;
					this.settings = { 
						'transnotify': (data.transnotify == undefined || data.transnotify == "0" || data.transnotify == false) ? false : true,
						'followernotify': (data.followernotify == undefined || data.followernotify == "0" || data.followernotify == false) ? false : true,
						'artnotify': (data.artnotify == undefined || data.artnotify == "0" || data.artnotify == false) ? false : true,
						'noisenotify': (data.noisenotify == undefined || data.noisenotify == "0" || data.noisenotify == false) ? false : true,
						'bid': data.bid,
					};
				}
				console.log(this.settings, 'settings');
			}
		})
	}

	onSubmit(value) {
		console.log(value, 'values');
		if (value.bid == undefined || value.bid == "") {
			this.toasterService.show(false, "Bid Amount is Required");
			return;			
		}
		let obj = {
			'transnotify': (value.transnotify == undefined || value.transnotify == "0" || value.transnotify == false) ? 0 : 1,
			'followernotify': (value.followernotify == undefined || value.followernotify == "0" || value.followernotify == false) ? 0 : 1,
			'artnotify': (value.artnotify == undefined || value.artnotify == "0" || value.artnotify == false) ? 0 : 1,
			'noisenotify': (value.noisenotify == undefined || value.noisenotify == "0" || value.noisenotify == false) ? 0 : 1,
			'bid': value.bid,
		};
		console.log(obj, 'obj');
		this.service.postRequest('users/usersettings', obj).subscribe((res: any) => { 
			this.toasterService.show(res.status, res.message);
		})


	}

}
