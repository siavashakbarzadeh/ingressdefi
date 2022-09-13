import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { StakingComponent } from "./staking.component";
import { Staking2Module } from "../staking2/staking2.module";
import { LoaderModule } from "src/app/common/loader/loader.module";

const routes: Routes = [
  {
    path: "",
    component: StakingComponent,
  },
];

@NgModule({
  declarations: [StakingComponent],
  imports: [
    CommonModule,
    Staking2Module,
    LoaderModule,
    RouterModule.forChild(routes),
  ],
})
export class StakingModule {}


