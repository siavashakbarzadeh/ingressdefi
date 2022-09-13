import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { TabsModule } from "ngx-bootstrap/tabs";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { ReferenceLinksComponent } from "./reference-links.component";
import { FormsModule } from "@angular/forms";
import { LoaderModule } from "src/app/common/loader/loader.module";

const routes: Routes = [
  {
    path: "",
    component: ReferenceLinksComponent,
  },
];

@NgModule({
  declarations: [ReferenceLinksComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoaderModule,
    RouterModule.forChild(routes),
    PaginationModule.forRoot(),
  ],
})
export class ReferralModule {}
