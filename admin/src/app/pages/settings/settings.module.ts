import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { FirstModule } from 'src/app/common/modules/first/first.module';
import { AppRouterModule } from 'src/app/common/pipes/app-router/app-router.module';

const routes: Routes = [
  {
    path: ':type',
    component: SettingsComponent,
    children: [
      {
        path: 'site_basic_settings',
        loadChildren: () =>
          import('./site-basic-settings/site-basic-settings.module').then(
            (m) => m.SiteBasicSettingsModule
          ),
      },
      {
        path: 'site_information',
        loadChildren: () =>
          import('./site-information/site-information.module').then(
            (m) => m.SiteInformationModule
          ),
      },
      {
        path: 'site_maintaince',
        loadChildren: () =>
          import('./site-maintaince/site-maintaince.module').then(
            (m) => m.SiteMaintainceModule
          ),
      },
      {
        path: 'pattern_setting',
        loadChildren: () =>
          import('./pattern-settings/pattern-settings.module').then(
            (m) => m.PatternSettingsModule
          ),
      },
      {
        path: 'password_portal',
        loadChildren: () =>
          import('./change-password/change-password.module').then(
            (m) => m.ChangePasswordModule
          ),
      },
      {
        path: 'tfa_settings',
        loadChildren: () =>
          import('./tfa-settings/tfa-settings.module').then(
            (m) => m.TfaSettingsModule
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'sbs/site_basic_settings',
  },
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    FirstModule,
    AppRouterModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class SettingsModule {}
