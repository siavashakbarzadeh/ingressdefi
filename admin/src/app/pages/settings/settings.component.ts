import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/api/data.service';
import { GeneralService } from 'src/app/common/services/general/general.service';
import { Router, ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { SettingsService } from './settings.service';
import { environment } from 'src/environments/environment';
import { AppRoutes } from 'src/app/common/routes/app-url';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  SettingsType: any = '';

  isDataPassing = false;

  buttonName: any = '';
  navigationName: any = '';
  menus = [
    {
      displayName: 'Site Basic Settings',
      id: 'sbs',
      isActive: true,
      name: 'site_basic_settings',
      buttonName: 'Update Settings',
      navigationName: 'Site Basic Settings',
    },
    {
      displayName: 'Site Information',
      id: 'si',
      isActive: false,
      name: 'site_information',
      buttonName: 'Update Information',
      navigationName: 'Site Basic Information',
    },
    {
      displayName: 'Change Password',
      id: 'si',
      isActive: false,
      name: 'password_portal',
      buttonName: 'Update Password',
      navigationName: 'Password Portal',
    },
    {
      displayName: 'TFA Settings',
      id: 'si',
      isActive: false,
      name: 'tfa_settings',
      navigationName: 'TFA Settings',
    },
    // {
    //   displayName: 'Site Maintaince',
    //   id: 'sm',
    //   isActive: false,
    //   name: 'site_maintaince',
    //   buttonName: 'Update Maintaince',
    //   navigationName: 'Site Maintaince',
    // },
    // {
    //   displayName: 'Pattern Setting',
    //   id: 'ps',
    //   isActive: false,
    //   name: 'pattern_setting',
    //   buttonName: 'Update Pattern',
    //   navigationName: 'Admin Pattern',
    // },
  ];

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private settingsService: SettingsService
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      // On Page reload call this function;
      this.loadConstructor();
    });
  }

  ngOnInit(): void {}

  loadConstructor() {
    this.SettingsType = this.activatedRoute.snapshot.paramMap.get('type');

    if (this.SettingsType) {
      let menuObj = {
        id: this.SettingsType,
      };
      this.getDetails(menuObj);
    } else {
      this.router.navigate([
        environment.baseUrl,
        AppRoutes.settings,
        '/sbs/site_basic_settings',
      ]);
    }
  }

  getDetails(menuObj: any) {
    for (let index = 0; index < this.menus.length; index++) {
      const element = this.menus[index];

      if (element.id == menuObj.id) {
        this.buttonName = element.buttonName;
        this.navigationName = element.navigationName;
      }
    }
  }

  showForm(menuObj: any) {
    this.router.navigate([
      environment.baseUrl,
      AppRoutes.settings,
      menuObj.id,
      menuObj.name,
    ]);
    // for (let index = 0; index < this.menus.length; index++) {
    //   const element = this.menus[index];

    //   if (element.name == menuObj.name) {
    //     this.menus[index].isActive = true;

    //     this.router.navigate(['/admin/settings', element.name]);
    //   } else {
    //     this.menus[index].isActive = false;
    //   }
    // }
  }
}
