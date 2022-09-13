import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './deposit-list.table';

@Component({
  selector: 'app-deposit-list',
  templateUrl: './deposit-list.component.html',
  styleUrls: ['./deposit-list.component.scss'],
})
export class DepositListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'lending/lending_list',
  };

  constructor() {}

  ngOnInit(): void {}
}
