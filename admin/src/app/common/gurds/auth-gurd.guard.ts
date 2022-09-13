import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGurdService } from './auth-gurd.service';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/common/api/data.service';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class AuthGurdGuard implements CanActivate {
  constructor(private authService: AuthGurdService, private router: Router,  private dataService: DataService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log('yes more yimr')
    let localValue = localStorage.getItem('key');
    return this.dataService.checkIp().pipe(map(res => {
      if (res.status) {
        this.router.navigateByUrl('/ipblock');
        return false;
      } else {
        if (localValue == 'undefined') {
          this.router.navigate(['/', environment.baseUrl, 'auth']);
          return false;
        } else {
          if (!this.authService.isTokenExpired(localValue)) {
            return true;
          } else {
            this.router.navigate(['/', environment.baseUrl]);
            return false;
          }
        }
      }
    }));
  }
}
