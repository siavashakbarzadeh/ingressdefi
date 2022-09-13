import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './claim-list.table';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {

  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'harvest/harvestlist',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
