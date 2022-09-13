import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgCropperComponent } from './img-cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ImgCropperComponent],
  imports: [
    CommonModule,
    ImageCropperModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [ImgCropperComponent],
  entryComponents: [ImgCropperComponent],
})
export class ImgCropperModule {}
