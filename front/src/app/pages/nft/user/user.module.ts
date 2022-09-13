import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TooltipModule } from "ngx-bootstrap/tooltip/";
import { LoaderModule } from "src/app/common/loader/loader.module";
import { ModalModule } from "ngx-bootstrap/modal";
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

const routes: Routes = [
{
  path: "",
  component: UserComponent,
},
];

@NgModule({
  declarations: [UserComponent],
  imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forChild(routes),
  LoaderModule,
  TooltipModule.forRoot(),
  ModalModule.forRoot(),  
  TabsModule.forRoot(),
  BsDatepickerModule.forRoot(),
  TimepickerModule.forRoot(),
  ],
})
export class UserModule {}
