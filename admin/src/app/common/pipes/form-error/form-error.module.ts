import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorPipe } from './form-error.pipe';



@NgModule({
  declarations: [FormErrorPipe],
  imports: [CommonModule],
  exports: [FormErrorPipe],
})
export class FormErrorModule {}
