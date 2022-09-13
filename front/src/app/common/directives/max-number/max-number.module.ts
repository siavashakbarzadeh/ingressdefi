import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaxNumberDirective } from "./max-number.directive";

@NgModule({
  declarations: [MaxNumberDirective],
  imports: [CommonModule],
  exports: [MaxNumberDirective]
})
export class MaxNumberModule {}
