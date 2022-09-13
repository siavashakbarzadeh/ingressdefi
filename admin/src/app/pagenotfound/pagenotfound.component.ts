import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/api/data.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss'],
})
export class PagenotfoundComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {
    // this.dataService.getRequest('admin/blockip').subscribe((reqData: any) => {
    //   if (reqData.status == false) {
    //     this.router.navigate([environment.baseUrl]);
    //   }
    // });
  }

  ngOnInit(): void {}
}
