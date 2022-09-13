import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IpblackComponent } from './ipblack.component';

const routes: Routes = [{ path: '', component: IpblackComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpblackRoutingModule { }
