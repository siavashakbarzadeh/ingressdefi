import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './unstake-list.table';

@Component({
  selector: 'app-unstake-list',
  templateUrl: './unstake-list.component.html',
  styleUrls: ['./unstake-list.component.scss'],
})
export class UnstakeListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'withdraw/withdrawlist',
  };

  constructor() {}

  ngOnInit(): void {}
}
