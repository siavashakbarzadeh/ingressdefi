import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../common/services/api/data.service";

@Component({
  selector: "app-ipblack",
  templateUrl: "./ipblack.component.html",
  styleUrls: ["./ipblack.component.scss"],
})
export class IpblackComponent implements OnInit {
  isIpBlocked = false;
  constructor(private dataService: DataService, private router: Router) {
    this.getIp();
  }

  getIp() {
    this.dataService
    .postRequest("admin/chkipaddress", {})
    .subscribe((resData: any) => {
      if (resData.status == true) {
        this.isIpBlocked = true;
        localStorage.clear();        
      } else {
        this.router.navigate(["/"]);
      }
    });
  }

  ngOnInit(): void {}
}
