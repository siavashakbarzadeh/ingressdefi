import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/common/services/api/data.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

	history: any = {};
  constructor(
  	private activatedRoute: ActivatedRoute,
    private route: Router,
    public service: DataService, 
    private toasterService: ToasterService,
  ) { }

  ngOnInit() {
  	this.getHistory();
  }

  getHistory() {
  	this.service.postRequest("users/history",{}).subscribe((suc:any) => {
	    if (suc.status) {
	      this.history = suc.data;
	    }
	})
  }

  txSubstring(str) {
  	let first = str.substring(0, 5);
    let last = str.substring(62, 66);
    var short = "";
    return  short = `${first}......${last}`;
  }

}
