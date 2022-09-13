import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { BlogdetailsComponent } from "./blogdetails.component";
import { TabsModule } from "ngx-bootstrap/tabs";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TooltipModule } from "ngx-bootstrap/tooltip/";
import { LoaderModule } from "src/app/common/loader/loader.module";

const routes: Routes = [
  {
    path: "",
    component: BlogdetailsComponent,
  },
];

@NgModule({
  declarations: [BlogdetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    LoaderModule,
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
  ],
})
export class BlogDetailsModule {}
