import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpwhiteComponent } from './ipwhite.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: IpwhiteComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IpwhiteComponent],
  
})
export class IpwhiteModule { }
