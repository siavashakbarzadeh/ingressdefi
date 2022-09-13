import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImportPollComponent } from "./import-poll.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { FormsModule } from "@angular/forms";
import { SearchFilterModule } from "src/app/common/pipes/search-filter/search-filter.module";
import { TooltipModule } from "ngx-bootstrap/tooltip";

@NgModule({
  declarations: [ImportPollComponent],

  imports: [
    CommonModule,
    FormsModule,
    SearchFilterModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [ImportPollComponent],
  entryComponents: [ImportPollComponent],
})
export class ImportPollModule {}
