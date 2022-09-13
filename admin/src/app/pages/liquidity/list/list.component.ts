import { Component, OnInit } from '@angular/core';
import { DisplayedDatas, DisplayedColumns } from './list.table';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'pool/poollist',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
