import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InnerHeaderComponent } from "./inner-header.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [InnerHeaderComponent,],
  imports: [CommonModule, ModalModule.forRoot(), CollapseModule.forRoot(),
    RouterModule],
  exports: [InnerHeaderComponent],
  entryComponents: [InnerHeaderComponent],
})
export class InnerHeaderModule {}
