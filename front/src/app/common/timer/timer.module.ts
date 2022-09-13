import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimerComponent } from "./timer.component";
import { DatePipesModule } from "../pipes/date-pipes/date-pipes.module";

@NgModule({
  declarations: [TimerComponent],
  imports: [CommonModule, DatePipesModule],
  exports: [TimerComponent],
  entryComponents: [TimerComponent],
})
export class TimerModule {}
