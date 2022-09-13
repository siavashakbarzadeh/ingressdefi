import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/api/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ipwhite',
  templateUrl: './ipwhite.component.html',
  styleUrls: ['./ipwhite.component.scss']
})
export class IpwhiteComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
     this.dataService.getRequest('VYbe2FnA2L').subscribe((reqData: any) => {

     if (reqData.status == true) {
        this.router.navigate(['/VfFEGVbytZ/auth/login']);
      }
    });
  }

}
