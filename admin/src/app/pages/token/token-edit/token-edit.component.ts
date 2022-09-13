import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/common/api/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/common/services/general/general.service';
import { environment } from 'src/environments/environment';
import { AppRoutes } from 'src/app/common/routes/app-url';

@Component({
  selector: 'app-token-edit',
  templateUrl: './token-edit.component.html',
  styleUrls: ['./token-edit.component.scss'],
})
export class TokenEditComponent implements OnInit {
  editObj: any;

  statuses = ['In Active', 'Active'];

  isGetSingleDataLoading = true;
  isDataPassing = false;
  isFormSubmitted: boolean = false;

  @ViewChild('editForm', { static: false, read: NgForm }) editForm: any;

  routes: any;
  imgfile: any;

  isPairTokenToToken = false;

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
    this.setEditObj();

    this.editObj.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.editObj.id == 'new') {
      this.isGetSingleDataLoading = false;
    } else {
      this.getSingleData();
    }
  }

  setEditObj() {
    this.editObj = {
      currencyName: '',
      currencySymbol: '',
      currency_type: 'token',
      contract_address: '',
      currency_decimal: '',
      currency_image: '',
    };
  }

  getSingleData(): void {
    this.isGetSingleDataLoading = true;
    this.dataService
      .postRequest('currency/single_currency_data' + this.editObj.id, {})
      .subscribe((success) => {
        let reponseData: any = success;
        this.isGetSingleDataLoading = false;

        if (reponseData.status) {
          this.editObj = reponseData.data;
        } else {
          this.dataService.openAlert(reponseData.status, reponseData.message);
        }
      });
  }

  formSubmit() {
    let formData;
    this.editForm.submitted = true;
    this.isFormSubmitted = true;

    if (this.editForm.valid) {
      /*if (this.imgfile && this.imgfile.file) {
        this.imageUplodApi();
      } else {
        this.ediObjSubmit();
      }*/
      this.ediObjSubmit();

      this.isDataPassing = true;
    }
  }

  imageUplodApi() {
    let formData = new FormData();

    if (this.imgfile && this.imgfile.file) {
      formData.append('uploads[]', this.imgfile.file, 'img');
    }

    this.dataService
      .filePostRequest('uploadsmulti', formData)
      .subscribe(async (suc: any) => {
        if (suc.status) {
          let files = suc.value;
          for (var i = 0; i < files.length; i++) {
            var value = await files[i];
            var urlSplit = await value.split(',');
            if (urlSplit[0] == 'img') {
              this.editObj.currency_image = urlSplit[1];
            }
          }

          this.ediObjSubmit();
        }
      });
  }

  ediObjSubmit() {
    this.dataService
      .postRequest(
        this.editObj.id == 'new'
          ? 'currency/insert_currency'
          : 'admin/updatetoken',
        this.editObj
      )
      .subscribe((success) => {
        let reponseData: any = success;
        this.isDataPassing = false;

        if (reponseData.status) {
          // if (this.editObj.id) {
          this.router.navigateByUrl(
            environment.baseUrl + '/' + AppRoutes.token_list
          );
          // }
        }

        this.dataService.openAlert(reponseData.status, reponseData.msg);
      });
  }
}
