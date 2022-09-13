import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextHidePipe } from './text-hide.pipe';

@NgModule({
  declarations: [TextHidePipe],
  imports: [CommonModule],
  exports: [TextHidePipe],
})
export class TextHideModule {}
