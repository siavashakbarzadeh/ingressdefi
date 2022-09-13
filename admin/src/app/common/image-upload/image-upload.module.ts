import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './image-upload.component';
import { FirstModule } from '../modules/first/first.module';

@NgModule({
  declarations: [ImageUploadComponent],
  imports: [CommonModule, FirstModule],
  exports: [ImageUploadComponent],
  entryComponents: [ImageUploadComponent],
})
export class ImageUploadModule {}
