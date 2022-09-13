import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ItemsComponent } from "./items.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TooltipModule } from "ngx-bootstrap/tooltip/";
import { LoaderModule } from "src/app/common/loader/loader.module";
import { ModalModule } from "ngx-bootstrap/modal";
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
// import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

const routes: Routes = [
{
  path: "",
  component: ItemsComponent,
},
];

@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    LoaderModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),  
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    // NgxMaterialTimepickerModule,
  ],
})
export class ItemsModule {}
