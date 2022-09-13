import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from "src/app/common/services/api/data.service";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  navbarCollapsed = true;url = "";
  toggleNavbarCollapsing() { this.navbarCollapsed = !this.navbarCollapsed; }
  constructor(
    public dataService: DataService,
    private router: Router,
    )
  { 
    var path = window.location.pathname;
    this.sideclick(path.substr(1));
    this.dataService.actUrl.subscribe((res: any) => {
      this.url = res;
    });
  }

  sideclick(val) {
    this.dataService.activeUrl(val);
  }
  
  ngOnInit() {
  }

  logout() {
    this.dataService.metaLogout();
    localStorage.clear();
    this.router.navigateByUrl("/");
  }

}
