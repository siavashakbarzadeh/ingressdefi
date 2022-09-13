import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './liquidity-remove.table';

@Component({
  selector: 'app-liquidity-remove',
  templateUrl: './liquidity-remove.component.html',
  styleUrls: ['./liquidity-remove.component.scss']
})
export class LiquidityRemoveComponent implements OnInit {

  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'pool/remove_poollist',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
