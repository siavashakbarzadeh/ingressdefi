import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './history-list.table';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss'],
})
export class HistoryListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'admin/transactions_list',
  };
  constructor() {}

  ngOnInit(): void {}
}
