import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './itemlist.table';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent implements OnInit {
tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'admin/itemlist',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
