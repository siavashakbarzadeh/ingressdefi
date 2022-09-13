import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NetworkEditComponent } from './network-edit.component';
import { FirstModule } from 'src/app/common/modules/first/first.module';
import { ImageUploadModule } from 'src/app/common/image-upload/image-upload.module';
import { AlertBoxModule } from 'src/app/common/alert-box/alert-box.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [{ path: '', component: NetworkEditComponent }];

@NgModule({
  declarations: [NetworkEditComponent],
  imports: [
    CommonModule,
    FirstModule,
    ImageUploadModule,
    AlertBoxModule,
    MatDialogModule,
    RouterModule.forChild(routes),
  ],
})
export class NetworkEditModule {}
