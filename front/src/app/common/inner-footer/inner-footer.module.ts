import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InnerFooterComponent } from "./inner-footer.component";

@NgModule({
  declarations: [InnerFooterComponent],
  imports: [CommonModule],
  exports: [InnerFooterComponent],
  entryComponents: [InnerFooterComponent],
})
export class InnerFooterModule {}
