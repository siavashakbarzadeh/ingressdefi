import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[numbersonly]'
})
export class NumbersOnlyDirective {

  constructor(private elRef: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    console.log(event , "oka")
    const initalValue = this.elRef.nativeElement.value;
    this.elRef.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if ( initalValue !== this.elRef.nativeElement.value) {
      event.stopPropagation(); 
    }
  }

}
