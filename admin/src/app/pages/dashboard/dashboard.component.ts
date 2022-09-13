import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/api/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  referalCount: any;
  blockCount: any;
  swapCount: any;
  pairsCount: any;
  tokenCount: any;
  stakeCount: any;
  subscribeCount: any;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getCount();
  }

  getCount() {
    this.dataService.getRequest('admin/dashboard').subscribe((reqData:any) => {
      if(reqData.status) {
        this.referalCount = reqData.referalCount;
        this.blockCount = reqData.blockCount;
        this.swapCount = reqData.swapCount;
        this.pairsCount = reqData.pairsCount;
        this.tokenCount = reqData.currencyCount;
        this.stakeCount = reqData.depositCount;
        this.subscribeCount = reqData.subscribeCount;
      }
    });
  }
}
