import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/api/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipblack',
  templateUrl: './ipblack.component.html',
  styleUrls: ['./ipblack.component.scss'],
})
export class IpblackComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {
    this.dataService.getRequest('admin/blockip').subscribe((reqData: any) => {
      if (reqData.status == true) {
        this.router.navigate(['/404']);
      }
    });
  }

  ngOnInit(): void {}
}
