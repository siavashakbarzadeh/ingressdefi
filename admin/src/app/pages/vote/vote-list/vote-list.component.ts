import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './vote-list.table';

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.scss'],
})
export class VoteListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'vote/proposal_list',
  };

  constructor() {}

  ngOnInit(): void {}
}
