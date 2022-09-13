import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingsService } from '../settings.service';
import { DataService } from 'src/app/common/api/data.service';
import { GeneralService } from 'src/app/common/services/general/general.service';

@Component({
  selector: 'app-site-information',
  templateUrl: './site-information.component.html',
  styleUrls: ['./site-information.component.scss'],
})
export class SiteInformationComponent implements OnInit {
  siteObj: any;
  isShowSiteObj = false;

  isGetSingleDataLoading = true;
  isDataPassing = false;

  constructor(
    private dataService: DataService,
    public general: GeneralService
  ) {}

  ngOnInit(): void {
    this.getSiteObj();
  }
  ngOnDestroy(): void {}

  async setSiteObj(siteObj?: any) {
    this.siteObj = {
      address: siteObj.address,
      mail: siteObj.mail,
      skype: siteObj.skype,
      phone: siteObj.phone,
      facebook: siteObj.facebook,
      videolink: siteObj.videolink,
      twitter: siteObj.twitter,
      instagram: siteObj.instagram,
      page: 'social',
      vote_percentage: siteObj.vote_percentage,
      referal_percentage: siteObj.referal_percentage,
    };
    this.isShowSiteObj = true;
  }

  getSiteObj() {
    this.dataService.getRequest('admin/siteinform').subscribe((suc: any) => {
      this.setSiteObj(suc.data);
      this.isGetSingleDataLoading = false;
    });
  }

  formSubmit() {
    this.updateSiteObj();
  }

  updateSiteObj() {
    this.dataService
      .postRequest('admin/sitesettingupdate', this.siteObj)
      .subscribe((suc: any) => {
        if (suc.status) {
          this.dataService.openAlert(true, 'Successfully Updated');
        } else {
          this.setSiteObj(suc.data);
        }

        this.isGetSingleDataLoading = false;
      });
  }
}
