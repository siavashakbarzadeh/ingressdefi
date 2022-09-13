import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ImportComponent } from "./import.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TooltipModule } from "ngx-bootstrap/tooltip/";
import { LoaderModule } from "src/app/common/loader/loader.module";
import { ModalModule } from "ngx-bootstrap/modal";

const routes: Routes = [
{
  path: "",
  component: ImportComponent,
},
];

@NgModule({
  declarations: [ImportComponent],
  imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forChild(routes),
  LoaderModule,
  TooltipModule.forRoot(),
  ModalModule.forRoot(),  
  ],
})
export class ImportModule {}
