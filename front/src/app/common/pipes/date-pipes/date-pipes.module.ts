import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePipesPipe } from "./date-pipes.pipe";

@NgModule({
  declarations: [DatePipesPipe],
  imports: [CommonModule],
  exports: [DatePipesPipe],
})
export class DatePipesModule {}
