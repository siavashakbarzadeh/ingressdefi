import { Component, OnInit, ViewChild } from '@angular/core';
import { DisplayedDatas, DisplayedColumns } from './feature-list.table';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
})
export class FeatureListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'admin/featureslist',
  };

  constructor() {}

  ngOnInit(): void {}
}
