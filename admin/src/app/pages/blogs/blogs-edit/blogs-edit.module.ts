import { NgModule } from '@angular/core';
import { BlogsEditComponent } from './blogs-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';

import { FirstModule } from 'src/app/common/modules/first/first.module';
import { ImgCropperModule } from 'src/app/common/img-cropper/img-cropper.module';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: BlogsEditComponent,
  },
];

@NgModule({
  declarations: [BlogsEditComponent],
  imports: [
    FirstModule,
    EditorModule,
    ImgCropperModule,
    MatDialogModule,
    RouterModule.forChild(routes),
  ],
})
export class BlogsEditModule {}
