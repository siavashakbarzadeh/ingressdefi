import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss'],
})
export class AlertBoxComponent implements OnInit {
  message: any;
  title: any;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
    public dataService : DataService
  ) {}

  ngOnInit() {
    let dialogData: any = this.dialogData;

    this.title = dialogData.title;
    this.message = dialogData.message;
  }

  closeBox(val: boolean) {
    this.dialogRef.close(val);
  }
}

export interface DialogData {
  message: string;
}
