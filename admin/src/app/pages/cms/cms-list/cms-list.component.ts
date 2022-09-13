import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './cms-list.table';

@Component({
  selector: 'app-cms-list',
  templateUrl: './cms-list.component.html',
  styleUrls: ['./cms-list.component.scss'],
})
export class CmsListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'admin/cmslist',
  };

  constructor() {}

  ngOnInit(): void {}
}
