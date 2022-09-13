import { Pipe, PipeTransform } from '@angular/core';
import { AppRoutes } from '../../routes/app-url';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'appRouter',
})
export class AppRouterPipe implements PipeTransform {
  childElement: any;

  transform(value: any): any {
    if (value) {
      // console.log(AppRoutes[value], 'AppRoutes[value]');
      return '/' + environment.baseUrl + '/' + AppRoutes[value];
    }
  }
}
