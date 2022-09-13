import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SiteMaintainceComponent } from './site-maintaince.component';


const routes: Routes = [
  { path: '', component: SiteMaintainceComponent }
];

@NgModule({
  declarations: [SiteMaintainceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SiteMaintainceModule { }
