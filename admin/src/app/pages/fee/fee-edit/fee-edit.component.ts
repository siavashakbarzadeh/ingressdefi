import {  Component,  OnInit,  Output,  EventEmitter,  Input,  OnDestroy,  ViewChild} from '@angular/core';
import { DataService } from 'src/app/common/api/data.service';
import { GeneralService } from 'src/app/common/services/general/general.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AppRoutes } from 'src/app/common/routes/app-url';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fee-edit',
  templateUrl: './fee-edit.component.html',
  styleUrls: ['./fee-edit.component.scss'],
})
export class FeeEditComponent implements OnInit {
  statuses = ['In Active', 'Active'];

  editObj: any = {};
  isShowEditObj = false;

  isGetSingleDataLoading = true;
  isDataPassing = false;

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

  getEditObj() {
    this.dataService
    .postRequest('admin/get_single_fee', { _id: this.editObj._id })
    .subscribe((suc: any) => {
      this.isGetSingleDataLoading = false;
      if (suc.status) {
        this.editObj = suc.data;
      }
    });
  }

  formSubmit() {
    this.editForm.submitted = true;
    if (this.editForm.valid) {
     this.isDataPassing = true;

     let objData = {
      fee_type: this.editObj.fee_type,
      address: this.editObj.address,
      fee: this.editObj.fee,
      _id: this.editObj._id,
    };

    this.dataService
    .postRequest('admin/updateFees', objData)
    .subscribe((suc: any) => {
      this.isDataPassing = false;

      if (suc.status) {
        this.router.navigateByUrl(
          environment.baseUrl + '/' + AppRoutes.fee_list
          );
      }

      this.dataService.openAlert(suc.status, 'Updated Successfully');
    });
  }
}
}
