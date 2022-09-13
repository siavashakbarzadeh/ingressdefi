import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { TabsModule } from "ngx-bootstrap/tabs";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { FormsModule } from "@angular/forms";
import { TooltipModule } from "ngx-bootstrap/tooltip/";
import { LoaderModule } from "src/app/common/loader/loader.module";

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    LoaderModule,
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
  ],
})
export class ProfileModule {}
