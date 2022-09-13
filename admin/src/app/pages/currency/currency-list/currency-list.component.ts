import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './currency-list.table';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss'],
})
export class CurrencyListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'admin/currencyList',
  };

  constructor() {}

  ngOnInit(): void {}
}
