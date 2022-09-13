import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnDestroy,
} from '@angular/core';
import { DataService } from 'src/app/common/api/data.service';
import { GeneralService } from 'src/app/common/services/general/general.service';
import { SettingsService } from '../settings.service';
import { ImagesFields } from 'src/app/common/image-upload/image-upload.component';

@Component({
  selector: 'app-site-basic-settings',
  templateUrl: './site-basic-settings.component.html',
  styleUrls: ['./site-basic-settings.component.scss'],
})
export class SiteBasicSettingsComponent implements OnInit, OnDestroy {
  siteObj: any;
  isShowSiteObj = false;

  isGetSingleDataLoading = true;
  isDataPassing = false;

  files = [];

  siteLogofile: any;
  siteFaviconFile: any;

  constructor(
    private dataService: DataService,
    public general: GeneralService,
    public settingsService: SettingsService
    ) {}

  ngOnInit(): void {
    this.getSiteObj();
  }
  ngOnDestroy(): void {}

  async setSiteObj(siteObj?: any) {
    this.siteObj = {
      site_name: siteObj.site_name,
      site_logo: siteObj.site_logo,
      site_favicon: siteObj.site_favicon,
      copyrights: siteObj.copyrights,
    };
    this.isShowSiteObj = true;
  }

  getSiteObj() {
    this.dataService.getRequest('admin/siteinform').subscribe((suc: any) => {
      this.setSiteObj(suc.data);
      this.isGetSingleDataLoading = false;
    });
  }

  changeEvent(event: ImagesFields, type: string) {
    if (type == 'site_logo') {
      this.files;
    }
  }

  formSubmit() {
    let formData = new FormData();
    var _this = this;
    Object.keys(_this.siteObj).forEach(function(key) {
      if (key != "site_logo" && key != "site_favicon") {
        formData.append(key, _this.siteObj[key]);
      }
    });

    if (this.siteFaviconFile && this.siteFaviconFile.file) {
      var fileName = this.siteFaviconFile.file['name'];
      var filenames = fileName.split('.');
      var lastValue = filenames.length - 1;
      var FileName = 'site_favicon.' + filenames[lastValue];
      formData.append('uploads[]', this.siteFaviconFile.file, FileName);
    }

    if (this.siteLogofile && this.siteLogofile.file) {
      var fileName = this.siteLogofile.file['name'];
      var filenames = fileName.split('.');
      var lastValue = filenames.length - 1;
      var FileName = 'site_logo.' + filenames[lastValue];
      formData.append('uploads[]', this.siteLogofile.file, FileName);
    }

    this.dataService.filePostRequest('admin/sitesettingupdate', formData).subscribe((suc: any) => {
      if (suc.status) {
        this.dataService.openAlert(true, 'Successfully Updated');
      } else {
        this.setSiteObj(suc.data);
      }
      this.isGetSingleDataLoading = false;
    });
  }
}
