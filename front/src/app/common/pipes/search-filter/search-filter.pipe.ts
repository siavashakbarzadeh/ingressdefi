import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchFilter",
})
export class SearchFilterPipe implements PipeTransform {
  // transform(value: any, args?: any): any {
  //   // return null;
  //    if(!args)
  //    return value;
  //   return value.filter(
  //     item => item.restaurantname.toLowerCase().indexOf(args.toLowerCase()) > -1
  //  );
  // }

  // transform(items: any[], searchText: string, filterMetadata: any): any[] {

  //   if(!items) return [];
  //   if(!searchText) {
  //     console.log(filterMetadata)
  //     filterMetadata.count = items.length;
  //     return items;
  //   }
  //   searchText = searchText.toLowerCase();

  //   let filteredItems = items.filter( it => {
  //     return it.toLowerCase().includes(searchText);
  //   });
  //   filterMetadata.count = filteredItems.length;
  //   return filteredItems;

  //   }

  transform(
    arr: any[],
    searchText: string,
    filterData: any,
    fieldName?: string,
    fieldNameA?: string,
    emitFun?: any
  ): any[] {
    if (!arr) return [];

    if (!searchText) {
      filterData.count = arr.length;
      return arr;
    }

    searchText = searchText.toString().toLowerCase();
    let filteredItems = arr.filter((it: any) => {
      if (typeof it == "string") {
        return it.toLowerCase().includes(searchText);
      } else if (typeof it == "number") {
        return it.toString().toLowerCase().includes(searchText);
      } else {
        if (fieldNameA) {
          return (
            (it[fieldName] &&
              it[fieldName].toString().toLowerCase().includes(searchText)) ||
            (it[fieldNameA] &&
              it[fieldNameA].toString().toLowerCase().includes(searchText))
          );
        } else {
          return (
            it[fieldName] &&
            it[fieldName].toString().toLowerCase().includes(searchText)
          );
        }
      }
    });

    filterData.count = filteredItems.length;

    if (filterData.count == 0) {
      filterData.isNot = true;

      if (emitFun) {
        emitFun.emit(true);
      }
    } else {
      filterData.isNot = false;
      if (emitFun) {
        emitFun.emit(false);
      }
    }

    return filteredItems;
  }
}
