import { Component, OnInit, HostListener, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/common/api/data.service';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { AppRoutes } from 'src/app/common/routes/app-url';

declare let window: any;

// @ts-ignore
import PatternLock from 'patternlock';
import { GeneralService } from 'src/app/common/services/general/general.service';

export interface User {
  emailid: String;
  password: String;
  patternlock: any;
  otp: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  btnClicked: boolean = false;
  responseData: any;
  hide = true;
  isForget = false;
  isSubmitted = false;
  isLoginShow = false;

  isOtpSection = false;
  isTfaSection = false;
  otpClicked = false;

  user: User = {
    password: '',
    emailid: '',
    patternlock: '',
    otp: '',
  };


  constructor(
    public router: Router,
    public general: GeneralService,
    private dataService: DataService
    ) {
    // let checkImage = localStorage.getItem('isImage');

    // if (checkImage != 'true') {
    //   this.router.navigateByUrl(environment.baseUrl + '/auth/');
    // } else {
      this.getIpDetails();
    // }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    var lock = new PatternLock('#patternContainer', {
      onDraw: function (patterncode: any) {
        var pat = lock.getPattern();
        this.patterncode = pat;
        window.patternCodeGet = this.patterncode;
      },
    });
  }

  getIpDetails() {
    this.dataService.getRequest('crons/getaccdetails').subscribe((suc: any) => {
      if (!suc.status) {
        this.router.navigateByUrl('/404');
      } else {
        let localValue = localStorage.getItem('bootManager');

        if (localValue) {
          this.router.navigateByUrl(
            environment.baseUrl + '/' + AppRoutes.dashboard
            );
        } else {
          this.isLoginShow = true;
        }
      }
    });
  }

  onSubmit(l: any) {
    this.isSubmitted = true;

    if (l.valid) {
      if (this.isForget) {
        this.btnClicked = true;

        this.goForget();
      } else {
        if (window.patternCodeGet && window.patternCodeGet.length > 3) {
          this.btnClicked = true;

          this.user.patternlock = window.patternCodeGet;
          this.goLogin();
        } else {
          this.dataService.openAlert(false, 'Please Draw Valid Pattern');
        }
      }
    } else {
    }
  }

  goForget() {}

  goLogin() {
    this.dataService
    .postRequest('admin/admin_login', this.user)
    .subscribe((success) => {
      let responseData: any = success;
      if (responseData.status == '401') {
        this.dataService.openAlert(false, responseData.message);
        this.router.navigateByUrl('/ipblock');
      } else if (responseData.status == 'blocked') {
        this.dataService.openAlert(false, responseData.error);
        this.router.navigateByUrl('/ipblock');
      }  else {
        if (responseData.status && responseData.status != '401') {
          if (responseData.tfa) {
            this.isTfaSection = true;
            this.btnClicked = false;
          } else {
            if (responseData.otp_options == false) {
              localStorage.setItem('bootManager', responseData.session);
              localStorage.setItem('key', responseData.session);
              this.loginSucees();
            } else {
              this.dataService.openAlert(true, 'Your OTP sent to your mail id successfully!');
              this.isOtpSection = true;
              this.btnClicked = false;
            }
          }
        } else {
          this.btnClicked = false;
          this.dataService.openAlert(false, responseData.error);
        }
      }
    });
  }

  submitOtp() {
    var data = {
      otp: this.user.otp,
      emailid: this.user.emailid,
    };

    let apiUrl = `admin/${this.isTfaSection ? 'tfavalidate' : 'otpvalidate'}`;

    console.log("data   ---->",data);
    console.log("apiUrl   ---->",apiUrl);
    this.dataService.postRequest(apiUrl, data).subscribe((success) => {
      let responseData: any = success;

      if (responseData.status == '401') {
        this.dataService.openAlert(false, responseData.message);
        this.router.navigateByUrl('/ipblock');
      } else {
        if (responseData.status && responseData.status != '401') {
          localStorage.setItem('bootManager', responseData.session);
          localStorage.setItem('datetime', responseData.date);
          localStorage.setItem('key', responseData.session);
          this.loginSucees();
        } else {
          this.btnClicked = false;
          this.dataService.openAlert(false, responseData.message);
        }
      }
    });
  }

  loginSucees() {
    this.dataService.openAlert(true, 'You are logged in Successfully');
    this.router.navigateByUrl(environment.baseUrl + '/' + AppRoutes.dashboard);
  }

  getCurrentUser(curUser: any) {}
}
