import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './borrow-list.table';

@Component({
  selector: 'app-borrow-list',
  templateUrl: './borrow-list.component.html',
  styleUrls: ['./borrow-list.component.scss'],
})
export class BorrowListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'lending/lending_borrow_list',
  };

  constructor() {}

  ngOnInit(): void {}
}
