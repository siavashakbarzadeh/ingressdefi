import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CounterPipe } from "./counter.pipe";

@NgModule({
  declarations: [CounterPipe],
  imports: [CommonModule],
  exports: [CounterPipe],
})
export class CounterModule {}
