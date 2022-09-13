import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [HeaderComponent,],
  imports: [CommonModule, ModalModule.forRoot(), CollapseModule.forRoot(),
    RouterModule],
  exports: [HeaderComponent],
  entryComponents: [HeaderComponent],
})
export class HeaderModule {}