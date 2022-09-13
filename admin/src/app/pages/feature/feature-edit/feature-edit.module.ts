import { NgModule } from '@angular/core';
import { FeatureEditComponent } from './feature-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';

import { FirstModule } from 'src/app/common/modules/first/first.module';
import { ImgCropperModule } from 'src/app/common/img-cropper/img-cropper.module';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: FeatureEditComponent,
  },
];

@NgModule({
  declarations: [FeatureEditComponent],
  imports: [
    FirstModule,
    EditorModule,
    ImgCropperModule,
    MatDialogModule,
    RouterModule.forChild(routes),
  ],
})
export class FeatureEditModule {}
