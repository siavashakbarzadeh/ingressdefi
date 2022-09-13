import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from 'src/app/common/alert-box/alert-box.component';
import { DataService } from 'src/app/common/api/data.service';

@Component({
  selector: 'app-staking-add',
  templateUrl: './staking-add.component.html',
  styleUrls: ['./staking-add.component.scss'],
})
export class StakingAddComponent implements OnInit {
  stakingData: any;

  constructor(
    public dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
    public dialogRef: MatDialogRef<any>
  ) {}

  ngOnInit(): void {
    console.log(this.dialogData, 'dialogData');
    this.stakingData = this.dialogData;
  }

  closeBox(val: boolean) {
    this.dialogRef.close(val);
  }
}
