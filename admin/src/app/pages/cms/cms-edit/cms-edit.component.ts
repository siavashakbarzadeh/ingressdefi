import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/common/api/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/common/services/general/general.service';
import { environment } from 'src/environments/environment';
import { AppRoutes } from 'src/app/common/routes/app-url';

@Component({
  selector: 'app-cms-edit',
  templateUrl: './cms-edit.component.html',
  styleUrls: ['./cms-edit.component.scss'],
})
export class CmsEditComponent implements OnInit {
  editObj: any;

  statuses = ['In Active', 'Active'];

  isGetDataLoading = true;

  //  Image Upload
  imageUrl: any;
  imgName: any;
  newImg: any;

  isDataPassing = false;
  isBlogSrc = true;

  isFormSubmitted: boolean = false;

  @ViewChild('blogForm', { static: false, read: NgForm }) blogForm: any;

  routes: any;

  isMiniAlert: boolean = false;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    public general: GeneralService,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      // On Page reload call this function;
      this.loadConstructor();
    });
    // this.routes = AppRoutes;
  }

  ngOnInit(): void {}

  loadConstructor() {
    this.setBlogObj();

    this.editObj.pagekey = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.editObj.pagekey == 'new') {
      this.isGetDataLoading = false;
    } else {
      this.getSingleData();
    }
  }

  setBlogObj() {
    this.editObj = {
      title: '',
      pagecontent: '',
      pagekey: 'new',
      status: 1,
    };
  }

  getSingleData(): void {
    this.isGetDataLoading = true;
    this.dataService
      .postRequest('admin/getcms', { pagekey: this.editObj.pagekey })
      .subscribe((success) => {
        let reponseData: any = success;
        this.isGetDataLoading = false;

        if (reponseData.status) {
          this.editObj = reponseData.data;
        } else {
          this.dataService.openAlert(reponseData.status, reponseData.message);
        }
      });
  }

  onSubmit() {
    this.dataService
      .postRequest(
        this.editObj.pagekey == 'new' ? 'admin/addcms ' : 'admin/editcms',
        this.editObj
      )
      .subscribe((success) => {
        let reponseData: any = success;
        this.isDataPassing = false;

        if (reponseData.status) {
          this.router.navigateByUrl(
            environment.baseUrl + '/' + AppRoutes.cms_list
          );
        }
        this.dataService.openAlert(reponseData.status, reponseData.message);
      });
  }
}
