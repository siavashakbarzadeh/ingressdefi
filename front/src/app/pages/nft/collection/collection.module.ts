import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { CollectionComponent } from "./collection.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TooltipModule } from "ngx-bootstrap/tooltip/";
import { LoaderModule } from "src/app/common/loader/loader.module";
import { ModalModule } from "ngx-bootstrap/modal";

const routes: Routes = [
{
  path: "",
  component: CollectionComponent,
},
];

@NgModule({
  declarations: [CollectionComponent],
  imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forChild(routes),
  LoaderModule,
  ModalModule.forRoot(),
  TooltipModule.forRoot(),
  ],
})
export class CollectionModule {}
