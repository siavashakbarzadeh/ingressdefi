import { Component, OnInit, ViewChild } from '@angular/core';
import { DisplayedDatas, DisplayedColumns } from './blogs-list.table';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss'],
})
export class BlogsListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'admin/bloglist',
  };

  constructor() {}

  ngOnInit(): void {}
}
