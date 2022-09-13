import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { DataService } from 'src/app/common/api/data.service';
import { GeneralService } from 'src/app/common/services/general/general.service';
import { ImagesFields } from 'src/app/common/image-upload/image-upload.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AppRoutes } from 'src/app/common/routes/app-url';
import { AlertBoxComponent } from 'src/app/common/alert-box/alert-box.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ip-block-edit',
  templateUrl: './ip-block-edit.component.html',
  styleUrls: ['./ip-block-edit.component.scss'],
})
export class IpBlockEditComponent implements OnInit {
  statuses = ['In Active', 'Active'];

  editObj: any = {
    user_ip: '',
    _id: '',
    file: '',
    status: 1,
  };
  isShowEditObj = false;

  isGetSingleDataLoading = true;
  isDataPassing = false;

  files = [];

  editFile: any;
  @ViewChild('editForm', { static: false, read: NgForm }) editForm: any;

  constructor(
    private dataService: DataService,
    public general: GeneralService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      // On Page reload call this function;
      this.loadConstructor();
    });
  }

  loadConstructor() {
    this.editObj._id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.editObj._id == 'new') {
      this.isGetSingleDataLoading = false;
    } else {
      this.getEditObj();
    }
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  getEditObj() {
    this.dataService
      .postRequest('admin/get_single_ip', { _id: this.editObj._id })
      .subscribe((suc: any) => {
        this.isGetSingleDataLoading = false;
        if (suc.status) {
          this.editObj = suc.data;
        }
      });
  }

  changeEvent(event: ImagesFields, type: string) {
    if (type == 'site_logo') {
      this.files;
    }
  }

  formSubmit() {
    console.log(this.editFile, 'this.siteFaviconFile    ');
    this.editForm.submitted = true;

    if (this.editForm.valid) {
      if (this.editFile) {
        this.imageUplodApi();
      } else {
        if (this.editObj._id == 'new') {
          this.addIp();
        } else {
          this.updateEditObj();
        }
      }
    }
  }

  imageUplodApi() {
    let formData = new FormData();

    if (this.editFile && this.editFile.file) {
      formData.append('uploads[]', this.editFile.file, 'edit_file');
    }

    this.dataService
      .filePostRequest('uploadsmulti', formData)
      .subscribe(async (suc: any) => {
        if (suc.status) {
          let files = suc.value;
          for (var i = 0; i < files.length; i++) {
            var value = await files[i];
            var urlSplit = await value.split(',');
            if (urlSplit[0] == 'edit_file') {
              this.editFile.file = urlSplit[1];
            }
          }

          this.addIp();
        }
      });
  }

  addIp() {
    this.isDataPassing = true;

    let objData = {
      user_ip: this.editObj.user_ip,
      status: 1,
    };

    this.dataService
      .postRequest('admin/addIpToBlock', objData)
      .subscribe((suc: any) => {
        this.isDataPassing = false;

        if (suc.status) {
          this.router.navigateByUrl(
            environment.baseUrl + '/' + AppRoutes.ip_block_list
          );
        }

        this.dataService.openAlert(suc.status, suc.msg);
      });
  }

  updateEditObj() {
    this.isDataPassing = true;

    let objData = {
      status: this.editObj.status,
      _id: this.editObj._id,
    };

    this.dataService
      .postRequest('admin/ipstatus', objData)
      .subscribe((suc: any) => {
        this.isDataPassing = false;

        if (suc.status) {
          this.router.navigateByUrl(
            environment.baseUrl + '/' + AppRoutes.ip_block_list
          );
        }

        this.dataService.openAlert(suc.status, 'Updated Successfully');
      });
  }

  openAlertBox(): void {
    let msg: any = 'Are You Sure Want Un-Block';

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
        this.deleteEditObj();
      }
    });
  }

  deleteEditObj() {
    this.isDataPassing = true;
    this.dataService
      .postRequest('admin/deleteip', this.editObj)
      .subscribe((suc: any) => {
        this.isDataPassing = false;
        this.router.navigateByUrl(
          environment.baseUrl + '/' + AppRoutes.ip_block_list
        );
        this.dataService.openAlert(suc.status, suc.msg);
      });
  }
}
