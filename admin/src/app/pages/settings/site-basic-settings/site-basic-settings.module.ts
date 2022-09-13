import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteBasicSettingsComponent } from './site-basic-settings.component';
import { Routes, RouterModule } from '@angular/router';
import { FirstModule } from 'src/app/common/modules/first/first.module';
import { ImageUploadModule } from 'src/app/common/image-upload/image-upload.module';

const routes: Routes = [
  {
    path: '',
    component: SiteBasicSettingsComponent,
  },
];

@NgModule({
  declarations: [SiteBasicSettingsComponent],
  imports: [
    CommonModule,
    FirstModule,
    ImageUploadModule,
    RouterModule.forChild(routes),
  ],
})
export class SiteBasicSettingsModule {}
