import { Pipe, PipeTransform } from '@angular/core';
import { Menus } from './menus';

@Pipe({
  name: 'routes',
})
export class RoutesPipe implements PipeTransform {
  childElement: any;

  transform(value: any): any {
    for (let index = 0; index < Menus.length; index++) {
      const element: any = Menus[index];

      if (element.state == value) {
        return element.url;
      }

      if (element.childs) {
        for (let x = 0; x < element.childs.length; x++) {
          this.childElement = element.childs[x];
          if (this.childElement.state == value) {
            return this.childElement.url;
          }
        }
      }
    }
  }
}
