import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(arr: any[], searchText: String, filedName?: any): any {
    if (!arr) return [];
    if (!searchText) return arr;

    let searchData = searchText && searchText.toLowerCase().trim();

    if (filedName) {
      return arr.filter((it: any) => {
        if (typeof it[filedName] == 'string') {
          return it[filedName].toLowerCase().trim().includes(searchData);
        } else if (typeof it[filedName] == 'number') {
          return it[filedName]
            .toString()
            .toLowerCase()
            .trim()
            .includes(searchData);
        }
      });
    } else {
      return arr.filter((it: any): any => {
        if (typeof it == 'string') {
          return it.toLowerCase().includes(searchData);
        } else if (typeof it == 'number') {
          return it.toString().toLowerCase().includes(searchData);
        }
      });
    }
  }
}
