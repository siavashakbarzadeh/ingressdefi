import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './stake-list.table';

@Component({
  selector: 'app-stake-list',
  templateUrl: './stake-list.component.html',
  styleUrls: ['./stake-list.component.scss'],
})
export class StakeListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'deposit/depositlist',
  };

  constructor() {}

  ngOnInit(): void {}
}
