import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password.component';
import { FormsModule } from '@angular/forms';
import { FirstModule } from 'src/app/common/modules/first/first.module';

const routes: Routes = [{ path: '', component: ChangePasswordComponent }];

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [CommonModule, FirstModule, RouterModule.forChild(routes)],
})
export class ChangePasswordModule {}
