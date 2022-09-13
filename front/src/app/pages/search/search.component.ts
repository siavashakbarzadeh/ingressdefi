import { DataService } from './../../common/services/api/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  limit = 9;
	skip = 0;
  account = this.dataService.metaDeatails.account;

  nftCollections:any=[];
  searchText:string;
  isDataLoading = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCollections('');
  }

  getCollections(event:any){
    this.nftCollections=[];
    this.isDataLoading = true;
    let searchText = event;
    this.dataService.postRequest("collection/getMarketssearch", { skip : this.skip,limit : this.limit, account: this.account,search:searchText }).subscribe((suc) => {
			let responseData: any = suc;
      this.isDataLoading = false;
			if (responseData.status) {
				this.nftCollections = responseData.data;
			}else{
        this.nftCollections =[];
      }
		});
  }
}
