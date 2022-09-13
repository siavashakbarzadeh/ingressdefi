import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PollShareComponent } from "./poll-share.component";

@NgModule({
  declarations: [PollShareComponent],
  imports: [CommonModule],
  exports: [PollShareComponent],
  entryComponents: [PollShareComponent],
})
export class PollShareModule {}
