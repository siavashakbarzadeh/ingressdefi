import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../../api/data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'translate',
  pure: true,
})
export class TranslatePipe implements PipeTransform {
  getLang: any;
  constructor(public data: DataService) {
    console.log('yes called');

  }

  transform(value: string) {
    localStorage.getItem('menu')
  }

  // transform(value: string): Observable<string> {
  //   return this.data.jsonFile().pipe(
  //     map((menus) => {

  //       let splitVal = value.split('.', 2);
  //       let firstKey = splitVal[0];
  //       let secondKey = splitVal[1];

  //       if (firstKey !== undefined && secondKey != undefined) {
  //         let getVal = menus[firstKey][secondKey];
  //         return getVal;
  //       } else {
  //         return value;
  //       }

  //     })
  //   );
  // }
}
