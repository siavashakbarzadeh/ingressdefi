import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, FormControl } from "@angular/forms";

@Directive({
  selector:
    "[appmin][formControlName],[appmin][formControl],[appmin][ngModel]",
  providers: [
    { provide: NG_VALIDATORS, useExisting: MinNumberDirective, multi: true }
  ]
})
export class MinNumberDirective {
  constructor() {}

  @Input()
  appmin: number;

  validate(c: FormControl): { [key: string]: any } {
    let v = c.value;
    return v < this.appmin ? { appmin: true } : null;
  }
}
