import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { Staking2Component } from "./staking2.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [Staking2Component],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [Staking2Component],
  entryComponents: [Staking2Component],
})
export class Staking2Module {}
