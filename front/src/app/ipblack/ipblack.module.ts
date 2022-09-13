import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpblackRoutingModule } from './ipblack-routing.module';
import { IpblackComponent } from './ipblack.component';


@NgModule({
  declarations: [IpblackComponent],
  imports: [
    CommonModule,
    IpblackRoutingModule
  ]
})
export class IpblackModule { }
