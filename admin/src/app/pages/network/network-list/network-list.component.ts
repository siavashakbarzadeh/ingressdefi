import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './network-list.table';

@Component({
  selector: 'app-network-list',
  templateUrl: './network-list.component.html',
  styleUrls: ['./network-list.component.scss'],
})
export class NetworkListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'admin/networkList',
  };

  constructor() {}

  ngOnInit(): void {}
}
