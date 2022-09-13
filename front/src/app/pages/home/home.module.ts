import { NgxPaginationModule } from 'ngx-pagination';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip/';
import { LoaderModule } from './../../common/loader/loader.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  ];
  
  @NgModule({
    declarations: [HomeComponent],
    imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    LoaderModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),  
    TabsModule.forRoot(),
    NgxPaginationModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ],
  })
export class HomeModule { }
