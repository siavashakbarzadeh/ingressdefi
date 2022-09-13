import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SidemenuComponent } from "./sidemenu.component";
// import { InnerFooterModule } from "../../../common/inner-footer/inner-footer.module";

@NgModule({
  declarations: [SidemenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidemenuComponent],
  entryComponents: [SidemenuComponent],
})
export class SidemenuModule {}
