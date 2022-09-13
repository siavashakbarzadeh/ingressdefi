import { Directive , Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[appmax][formControlName],[appmax][formControl],[appmax][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: MaxNumberDirective, multi: true}]
})
export class MaxNumberDirective {

  constructor() { }

  @Input()
  appmax: number;
  
  validate(c: FormControl): {[key: string]: any} {
      let v = c.value;
      return ( v > this.appmax)? {"appmax": true} : null;
  }

}
