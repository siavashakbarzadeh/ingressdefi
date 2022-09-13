import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FarmComponent } from "./farm.component";
import { TabsModule } from "ngx-bootstrap/tabs";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { FormsModule } from "@angular/forms";
import { TooltipModule } from "ngx-bootstrap/tooltip/";
import { LoaderModule } from "src/app/common/loader/loader.module";
import { Staking2Module } from "../staking2/staking2.module";

const routes: Routes = [
  {
    path: "",
    component: FarmComponent,
  },
];

@NgModule({
  declarations: [FarmComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    Staking2Module,
    LoaderModule,
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
  ],
})
export class FarmModule {}
