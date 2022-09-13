import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/common/api/data.service';
import { GeneralService } from 'src/app/common/services/general/general.service';
import { SettingsService } from '../settings.service';
import { NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppRoutes } from 'src/app/common/routes/app-url';

let isConfirmPasswordValid = false;
export class MyErrorStateMatcherPassword implements ErrorStateMatcher {
  isErrorState(): boolean {
    return isConfirmPasswordValid;
  }
}

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  isPasswordObj = false;

  isGetSingleDataLoading = false;
  isDataPassing = false;

  hideCurrent = true;
  hide = true;

  editObj = {
    currentpwd: '',
    newpwd: '',
    confirmpwd: '',
  };

  isConfirmPasswordError = false;
  isConfirmPassword = new MyErrorStateMatcherPassword();

  @ViewChild('editForm', { static: false, read: NgForm }) editForm: any;

  constructor(
    private dataService: DataService,
    public general: GeneralService,
    public settingsService: SettingsService,
    public router: Router
  ) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  isConfirmPasswordValidMethod(value: boolean) {
    isConfirmPasswordValid = value;
    this.isConfirmPasswordError = value;
    this.isConfirmPassword.isErrorState();
  }

  passwordCheck() {
    if (this.editObj.newpwd && this.editObj.confirmpwd) {
      if (this.editObj.newpwd === this.editObj.confirmpwd) {
        this.isConfirmPasswordValidMethod(false);
      } else {
        this.isConfirmPasswordValidMethod(true);
      }
    } else {
      if (!this.editObj.confirmpwd) {
        this.isConfirmPasswordValidMethod(true);
      }
    }
  }

  formSubmit() {
    this.editForm.submitted = true;
    this.editObj.confirmpwd == '' || null
      ? this.isConfirmPasswordValidMethod(true)
      : '';
    if (this.editForm.valid && !this.isConfirmPasswordError) {
      this.updatePasswordObj();
    }
  }

  updatePasswordObj() {
    this.isDataPassing = true;
    this.dataService
      .postRequest('admin/changepassword', this.editObj)
      .subscribe((suc: any) => {
        this.isDataPassing = false;
        this.editForm.reset();

        if (suc.status) {
          this.dataService.openAlert(suc.status, suc.data.message);
          localStorage.removeItem('key');
          localStorage.removeItem('bootManager');
          localStorage.removeItem('datetime');
          console.log(AppRoutes.login, ' AppRoutes.login');
          this.router.navigateByUrl(environment.baseUrl + AppRoutes.login);
        } else {
          this.dataService.openAlert(suc.status, suc.error);
        }
      });
  }
}
