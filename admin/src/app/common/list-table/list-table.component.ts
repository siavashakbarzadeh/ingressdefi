import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { ListTableService } from './list-table.service';
import { DataService } from '../api/data.service';
import { GeneralService } from '../services/general/general.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertBoxComponent } from '../alert-box/alert-box.component';
import { MetamaskService } from '../services/metamask/common/metamask.service';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss'],
})
export class ListTableComponent implements OnInit {
  searchData: any;

  dataSource: any;

  isLoading = true;

  displayedColumns: any;
  displayedDatas: any;

  @Input() tableData: any;

  @ViewChild(MatPaginator) 'paginator': MatPaginator;
  @ViewChild(MatSort) 'matSort': MatSort;

  @Output() metaFun = new EventEmitter();

  resultsLength: any;

  constructor(
    public dataService: DataService,
    public general: GeneralService,
    public dialog: MatDialog,
    public MetamaskService: MetamaskService,
    public listTableService: ListTableService
  ) {
    this.listTableService.tableDataLoad.subscribe((suc: boolean) => {
      if (suc) {
        this.getTableData();
      }
    });
  }

  ngOnInit(): void {
    this.displayedColumns = this.tableData.displayedColumns;
    this.displayedDatas = this.tableData.displayedDatas;
    this.getTableData();
  }

  applyFilter() {
    this.dataSource.filter = this.searchData.trim().toLowerCase();
  }

  getTableData(): void {
    this.isLoading = true;

    let obj = {
      page: {
        size: 100000,
        totalElements: 0,
        totalPages: 0,
        pageNumber: 0,
      },
      sorting: {
        dir: 'desc',
        prop: 'created_date',
      },
      search: '',
      contest_id: this.tableData.contest_id,
    };

    this.dataService
      .postRequest(this.tableData.getAllApi, obj)
      .subscribe((success) => {
        let responseData: any = success;
        this.isLoading = false;
        this.setTable(responseData.data);
      });
  }

  setTable(tableData: any) {
    if (tableData) {
      this.dataSource = new MatTableDataSource(tableData);

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matSort;
      });
    } else {
      this.dataSource = new MatTableDataSource([]);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    }
  }

  openAlertBox(valueObj: any, type: any): void {
    let msg: any;

    if (type == 'statusChange') {
      msg =
        valueObj.status == 1
          ? 'Are You Sure Want to De-Active'
          : 'Are You Sure Want to Active';
    } else {
      msg = 'Are  You Sure Want to Delete';
    }

    const dialogRef = this.dialog.open(AlertBoxComponent, {
      // width: window.innerWidth > 400 ? "30%" : "100%",
      disableClose: true,
      panelClass: 'theme_card',
      hasBackdrop: true,
      width: '500px',
      data: {
        message: msg,
        title: 'Alert',
      },
      position: {
        top: '10px',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        if (type == 'statusChange') {
          this.changeStatus(valueObj);
        } else {
          this.deleteObj(valueObj);
        }
      }
    });
  }

  changeStatus(valueObj: any) {
    let obj = {
      _id: valueObj._id,
      status: valueObj.status == 1 ? 0 : 1,
    };
    this.dataService
      .postRequest(this.tableData.stausChangeApi, obj)
      .subscribe((success) => {
        let responseData: any = success;
        this.dataService.openAlert(responseData.status, responseData.message);
        this.getTableData();
      });
  }

  deleteObj(valueObj: any) {
    this.dataService
      .getRequest(this.tableData.stausChangeApi + '/' + valueObj._id)
      .subscribe((success) => {
        let responseData: any = success;
        this.dataService.openAlert(responseData.status, responseData.message);
        this.getTableData();
      });
  }

  goTo(type: any, value: any) {
    let url = `https://bscscan.com/${type}/${value}`;
    window.open(url, '_blank');
  }

  copyText(value: any) {
    console.log(value, '___________ value');
    let copyText: any = value;
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = copyText;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.dataService.openAlert(true, 'Copied Suceedfully');
  }

  metaFunction(value: any, element: any) {
    if (this.dataService.metaDetails.isMetaLogin) {
      let data = {
        eventName: value,
        status: true,
        data: element,
      };

      this.metaFun.emit(data);
    } else {
      this.dataService.openAlert(false, 'Please Login to Further Action');
    }
  }
}
