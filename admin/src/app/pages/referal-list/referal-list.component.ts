import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './referal-list.table';

@Component({
  selector: 'app-referal-list',
  templateUrl: './referal-list.component.html',
  styleUrls: ['./referal-list.component.scss']
})
export class ReferalListComponent implements OnInit {

  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'referal/referal_list',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
