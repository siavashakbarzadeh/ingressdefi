import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TokenEditComponent } from './token-edit.component';
import { FirstModule } from 'src/app/common/modules/first/first.module';
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
} from '@angular/material/progress-spinner';
import { ImageUploadModule } from 'src/app/common/image-upload/image-upload.module';

const routes: Routes = [{ path: ':id', component: TokenEditComponent }];

@NgModule({
  declarations: [TokenEditComponent],
  imports: [
    CommonModule,
    FirstModule,
    MatProgressSpinnerModule,
    ImageUploadModule,
    RouterModule.forChild(routes),
  ],
})
export class TokenEditModule {}
