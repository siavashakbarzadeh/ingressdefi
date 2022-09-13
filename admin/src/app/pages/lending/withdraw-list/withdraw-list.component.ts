import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './withdraw-list.table';

@Component({
  selector: 'app-withdraw-list',
  templateUrl: './withdraw-list.component.html',
  styleUrls: ['./withdraw-list.component.scss']
})
export class WithdrawListComponent implements OnInit {


  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'lending/lending_withdraw_list',
  };


  constructor() { }

  ngOnInit(): void {
  }

}
