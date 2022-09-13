import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formError',
  pure : false,
})
export class FormErrorPipe implements PipeTransform {
  transform(val: any, val2?: any, pattern?: String): any {
    if (val.errors.hasOwnProperty('required')) {
      return val2 + ' is required';
    } else if (val.errors.hasOwnProperty('email')) {
      return 'Please enter a valid email address';
    } else if (val.errors.pattern) {
      if (pattern == 'specialChar') {
        return 'Special characters not allowed';
      } else if (pattern == 'password') {
        return 'Password must contain atleast one uppercase, One lowercase, One numeric digit, One special character, 8 characters';
      } else if (pattern == 'cPassword') {
        return 'Password Mismatch';
      } else if (pattern == 'number') {
        return val2 + ' should be numerical';
      } else if (pattern == 'alphaNumeric') {
        return (
          val2 +
          ' contain only Alphanumeric characters and atleast one character'
        );
      }
    } else if (val.errors.minlength) {
      return 'Min length is ' + val.errors.minlength.requiredLength;
    } else if (val.errors.whitespace) {
      return 'White Space ';
    } else if (val.errors.matDatepickerMin) {
      return 'Date is expired ';
    }
  }

 
}
