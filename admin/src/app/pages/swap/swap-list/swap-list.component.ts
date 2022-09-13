import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './swap-list.table';

@Component({
  selector: 'app-swap-list',
  templateUrl: './swap-list.component.html',
  styleUrls: ['./swap-list.component.scss'],
})
export class SwapListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'exchange/exchangelist',
  };

  constructor() {}

  ngOnInit(): void {}
}
