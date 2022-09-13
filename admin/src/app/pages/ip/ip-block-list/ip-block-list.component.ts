import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './ip_block-list.table';

@Component({
  selector: 'app-ip-block-list',
  templateUrl: './ip-block-list.component.html',
  styleUrls: ['./ip-block-list.component.scss'],
})
export class IpBlockListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'admin/IPblockhistory',
  };

  constructor() {}

  ngOnInit(): void {}
}
