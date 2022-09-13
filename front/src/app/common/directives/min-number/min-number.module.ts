import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MinNumberDirective } from "./min-number.directive";

@NgModule({
  declarations: [MinNumberDirective],
  imports: [CommonModule],
  exports: [MinNumberDirective]
})
export class MinNumberModule {}
