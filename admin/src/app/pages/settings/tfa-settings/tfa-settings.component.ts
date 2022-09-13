import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/common/api/data.service';
import { GeneralService } from 'src/app/common/services/general/general.service';
import { SettingsService } from '../settings.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tfa-settings',
  templateUrl: './tfa-settings.component.html',
  styleUrls: ['./tfa-settings.component.scss'],
})
export class TfaSettingsComponent implements OnInit {
  editObj: any; postRequest = ''; tfaLoader = false;
  isPasswordObj = false;
  modelProfile : any = {};
  isGetSingleDataLoading = true;
  isDataPassing = false;
  TfaStatus = false;
  @ViewChild('editForm', { static: false, read: NgForm }) editForm: any;

  constructor(
    private dataService: DataService,
    public general: GeneralService,
    public settingsService: SettingsService
    ) {}

  ngOnInit(): void { 
    this.geteditObj();
  }
  ngOnDestroy(): void {}

  geteditObj() {
    this.dataService.getRequest('admin/adminDetails').subscribe((suc: any) => {
      this.editObj = suc.data;
      console.log("editObj   ----->",this.editObj.tfastatus);
      if(this.editObj.tfastatus == "Deactive"){
        this.TfaStatus = false;
      }else{
        this.TfaStatus = true;
      }
      this.isGetSingleDataLoading = false;
    });
  }

  formSubmit() {
    this.updatePasswordObj();
  }

  updatePasswordObj() {
    this.editForm.submitted = true;
    console.log(this.editObj, '+__________ this.editObj');
    if (this.editForm.valid) {
      this.isDataPassing = true;
      this.dataService
      .postRequest('admin/tfaupdate', this.editObj)
      .subscribe((suc: any) => {
        this.editObj.tfacode = '';
        this.dataService.openAlert(suc.status, suc.msg);
        this.isDataPassing = false;
        if (suc.status) {
          this.editForm.reset();
          this.geteditObj();
        }
      });
    }
  }

  tfaStatus() {
    if(this.editObj.tfacode == undefined){
    return this.dataService.openAlert(false, 'Invalid Code');
    }
    this.tfaLoader = true;
    this.dataService.postRequest('admin/tfaupdate', {"tfacode":this.editObj.tfacode}).subscribe((res: any) => {
      if (res.status == true) {
        var response = res.result;
        this.editObj.tfastatus = response.tfastatus;
        this.editObj.secret = response.secret;
        this.editObj.tfaurl = response.tfaurl;
        this.editObj.tfacode = '';
        response.tfa_status == 1 ? this.dataService.openAlert(true,'TFA enabled successfully') :this.dataService.openAlert(true,'TFA disabled successfully');
      } else {
        this.dataService.openAlert(true, res.msg);
      }
      this.tfaLoader = false;
    })
  }
}
