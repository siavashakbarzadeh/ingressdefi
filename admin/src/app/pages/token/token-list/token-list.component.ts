import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './token-list.table';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.scss'],
})
export class TokenListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'currency/currency_list',
  };
  constructor() {}

  ngOnInit(): void {}
}
