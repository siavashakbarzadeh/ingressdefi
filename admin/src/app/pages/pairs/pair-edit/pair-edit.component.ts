import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/common/api/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/common/services/general/general.service';
import { environment } from 'src/environments/environment';
import { AppRoutes } from 'src/app/common/routes/app-url';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

@Component({
  selector: 'app-pair-edit',
  templateUrl: './pair-edit.component.html',
  styleUrls: ['./pair-edit.component.scss'],
})
export class PairEditComponent implements OnInit {
  editObj: any;

  statuses = ['In Active', 'Active'];

  isGetSingleDataLoading = true;
  isDataPassing = false;
  isFormSubmitted: boolean = false;

  searchData: any;
  searchDataTo: any;

  @ViewChild('editForm', { static: false, read: NgForm }) editForm: any;

  routes: any;
  tokensList: any;

  isPairTokenToToken = false;

  @ViewChild(MatAutocompleteTrigger, { static: false })
  'autocomplete': MatAutocompleteTrigger;

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

  ngOnInit(): void {
    this.getTokens();
  }

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
      // From

      fromCurrencyname: '',
      fromCurrency: '',
      fromCurrency_type: 'token',
      fromCurrency_address: '',
      fromCurrency_decimal: '',

      // to
      toCurrencyname: '',
      toCurrency: '',
      toCurrency_type: '',
      toCurrency_address: '',
      toCurrency_decimal: '',
      id: 'new',
      status: 1,
      currencyType: 'coin',
    };

    this.setCoinData();
  }

  setCoinData() {
    this.editObj.toCurrency_address =
      '0x0000000000000000000000000000000000000000';
    this.editObj.toCurrency_type = 'coin';
    this.editObj.toCurrency = 'BNB';
    this.editObj.toCurrency_decimal = 18;
    this.editObj.toCurrencyname = 'Biance Mainnet';
  }

  currencyTypeChange() {
    if (this.editObj.currencyType == 'token') {
      this.isPairTokenToToken = true;
      this.editObj.toCurrency_address = '';
      this.editObj.toCurrency_type = 'token';
      this.editObj.toCurrency = '';
      this.editObj.toCurrency_decimal = '';
      this.editObj.toCurrencyname = '';
    } else {
      this.isPairTokenToToken = false;
      this.setCoinData();
    }
  }

  getSingleData(): void {
    this.isGetSingleDataLoading = true;
    this.dataService
      .postRequest('edit/pair/' + this.editObj.id, {})
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

  closePanel(obj: any, type: string) {
    this.autocomplete.closePanel();

    if (type == 'from') {
      this.searchData = obj.currencyName;
      this.editObj.fromCurrencyname = obj.currencyName;
      this.editObj.fromCurrency = obj.currencySymbol;
      this.editObj.fromCurrency_type = 'token';
      this.editObj.fromCurrency_address = obj.contract_address;
      this.editObj.fromCurrency_decimal = obj.currency_decimal;
      this.editObj.fromCurrency_img = obj.currency_image;
    } else {
      this.searchDataTo = obj.currencyName;
      this.editObj.toCurrencyname = obj.currencyName;
      this.editObj.toCurrency = obj.currencySymbol;
      this.editObj.toCurrency_type = 'token';
      this.editObj.toCurrency_address = obj.contract_address;
      this.editObj.toCurrency_decimal = obj.currency_decimal;
      this.editObj.toCurrency_img = obj.currency_image;
    }
  }

  getTokens(): void {
    let obj = {
      page: {
        size: 100000,
        totalElements: 0,
        totalPages: 0,
        pageNumber: 0,
      },
      sorting: {
        dir: 'desc',
        prop: 'created_date',
      },
      search: '',
    };

    this.isGetSingleDataLoading = true;
    this.dataService
      .postRequest('currency/currency_list', obj)
      .subscribe((success) => {
        let reponseData: any = success;
        this.isGetSingleDataLoading = false;

        if (reponseData.status) {
          this.tokensList = reponseData.data;
          console.log(this.tokensList, 'this.tokensList ');
        } else {
        }
      });
  }

  formSubmit() {
    let formData;

    this.editForm.submitted = true;

    if (this.editObj.currencyType == 'coin') {
      this.setCoinData();
    }

    this.isFormSubmitted = true;

    if (this.editForm.valid) {
      this.ediObjSubmit();
      this.isDataPassing = true;
    }
  }

  ediObjSubmit() {
    this.dataService
      .postRequest(
        this.editObj.id == 'new' ? 'admin/createpair' : 'cms/blogupdate',
        this.editObj
      )
      .subscribe((success) => {
        let reponseData: any = success;
        this.isDataPassing = false;

        if (reponseData.status) {
          // if (this.editObj.id) {
          this.router.navigateByUrl(
            environment.baseUrl + '/' + AppRoutes.pairs_list
          );
          // }
        }

        this.dataService.openAlert(reponseData.status, reponseData.msg);
      });
  }
}
