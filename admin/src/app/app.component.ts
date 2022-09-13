import { Component, ChangeDetectorRef } from '@angular/core';
import { DataService } from './common/api/data.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MetamaskService } from './common/services/metamask/common/metamask.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin';

  isLoginPermit = false;

  constructor(
    public dataService: DataService,
    private router: Router,
    private metaMaskService: MetamaskService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    // this.dataService.getRequest('admin/blockip').subscribe((reqData: any) => {
    //   if (reqData.status == false) {
    //     this.router.navigate(['/ipblock']);
    //   }
    // });
    let isLoginPermit: any = localStorage.getItem('isLoginPermit');

    if (isLoginPermit) {
      this.isLoginPermit = true;
      this.connectionMetaMask();
    }
  }

  checkChainId() {
    this.metaMaskService.checkChainId().then((suc) => {
      let responseData = suc;
      console.log(responseData, '_________ sucess');

      if (responseData.status) {
      } else {
        this.metaMaskService.addNetwork().then((suc) => {
          console.log(suc, '_________ sucess');
        });
      }
    });
  }

  connectionMetaMask() {
    this.metaMaskService.connectMetaMask().then((suc) => {
      let responseData: any = suc;

      if (!responseData.status) {
        this.dataService.openAlert(false, responseData.message);
        setTimeout(() => {
          this.changeDetectorRef.detectChanges();
        }, 3000);
      } else {
      }
      this.changeDetectorRef.detectChanges();
    });
  }
}
