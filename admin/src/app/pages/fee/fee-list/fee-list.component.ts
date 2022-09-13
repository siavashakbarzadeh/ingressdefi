import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './fee-list.table';

@Component({
  selector: 'app-fee-list',
  templateUrl: './fee-list.component.html',
  styleUrls: ['./fee-list.component.scss'],
})
export class FeeListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'admin/feeList',
  };

  constructor() {}

  ngOnInit(): void {}
}
