import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textHide',
})
export class TextHidePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    if (!value) {
      return value;
    }

    let first = value.substring(0, 4);
    let last = value.substring(value.length - 4);


    return `${first}...${last}`;
  }
}
