import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/api/data.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MetamaskService } from 'src/app/common/services/metamask/common/metamask.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  showFiller: any;
  modeType: any;
  autosize: any;

  constructor(
    public dataService: DataService,
    private router: Router,
    private metamaskService: MetamaskService
  ) {
    let localValue = localStorage.getItem('bootManager');

    if (!localValue) {
      this.router.navigateByUrl(environment.baseUrl + '/auth');
    }
  }

  ngOnInit(): void {}

  openSideNav(): void {
    console.log(this.showFiller, this.modeType);

    if (!this.showFiller) {
      this.modeType = 'over';
      this.showFiller = !this.showFiller;
      this.autosize = true;
    }
  }

  closeSideNav(): void {
    if (this.showFiller) {
      this.modeType = 'side';
      this.showFiller = !this.showFiller;
      this.autosize = true;
    }
  }

  goto() {
    let url = `https://bscscan.com/address/${this.dataService.metaDetails.account}`;
    window.open(url, '_blank');
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate([environment.baseUrl + '/auth/login']);
  }

  loginMetaMask() {
    this.metamaskService.loginMetaMask();
  }
}
