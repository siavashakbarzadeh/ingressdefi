import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/api/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ipstatus',
  templateUrl: './ipstatus.component.html',
  styleUrls: ['./ipstatus.component.scss'],
})
export class IpstatusComponent implements OnInit {
  id: any;

  constructor(
    private dataService: DataService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.getIpDetails();
  }

  ngOnInit(): void {}

  getIpDetails() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataService.getRequest(this.id).subscribe((suc: any) => {
      if (!suc.status) {
        this.router.navigateByUrl('/404');
      } else {
        console.log('okay')
        this.router.navigate(['/admin/auth/login']);
      }
    });
  }
}
