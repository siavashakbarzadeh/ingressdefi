import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router , UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from "./common/services/api/data.service";
import { ToasterService } from "./common/toaster/toaster.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private dataService: DataService, 
    private route: Router,
    private toasterService: ToasterService, 
    ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    return this.dataService.checkProfile().pipe(map(res => {
      if (res.success == 1) {
        return true;
      } else  if (res.success == 2) {
        this.toasterService.show(false, 'Please fill your profile details');
        this.route.navigate(['edit-profile']);
        return false;
      } else if (res.success == 3) {
        this.route.navigate(['/']);
        return false;
      } else {
        return false;
      }
    }));

    // return true;
  }
  
}
