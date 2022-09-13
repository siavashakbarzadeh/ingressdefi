import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/common/services/api/data.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	profile: any = {};
	favorites: any = {};
	favoriteslength = 0;

	constructor(
		private activatedRoute: ActivatedRoute,
		private route: Router,
		public service: DataService, 
		private toasterService: ToasterService, 
		) { }

	ngOnInit() {
		this.getProfile();
		this.countCollection();
		this.getSaved();
	}	

	getProfile() {
		this.service.getRequest("users/getuser").subscribe((suc:any) => {
			if (suc.status) {
				this.profile = suc.data;
			}
		});
	}

	countCollection() {
		this.service.getRequest("collection/userNft").subscribe((suc:any) => {
			if (suc.status) {
				this.profile.count = suc.data;
			} else {
				this.profile.count = 0;
			}
		});
	}

	getSaved(){
		this.service.getRequest('users/favorites').subscribe((res:any) => {
			if (res.status == true) { 
				this.favorites = res.data;
				this.favoriteslength = this.favorites.length;
				console.log('this.favoriteslength', this.favoriteslength);
			} 
		})
	}

}
