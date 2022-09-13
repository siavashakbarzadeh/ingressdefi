import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/common/api/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/common/services/general/general.service';
import { environment } from 'src/environments/environment';
import { AppRoutes } from 'src/app/common/routes/app-url';
import { DisplayedColumns, DisplayedDatas } from './vote_edit-list.table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vote-edit',
  templateUrl: './vote-edit.component.html',
  styleUrls: ['./vote-edit.component.scss'],
})
export class VoteEditComponent implements OnInit {
  editObj: any;

  statuses = ['In Active', 'Active'];

  isGetSingleDataLoading = true;
  isDataPassing = false;
  isFormSubmitted: boolean = false;

  displayedDatas = DisplayedDatas;
  displayedColumns = DisplayedColumns;

  routes: any;

  isPairTokenToToken = false;

  dataSource: any;
  posstiveCount: any;
  negativeCount: any;
  isLoading = true;

  isGetSingleProposalData = false;

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

  goTo(type: any, value: any) {
    let url = `https://bscscan.com/${type}/${value}`;
    window.open(url, '_blank');
  }

  copyText(value: any) {
    console.log(value, '___________ value');
    let copyText: any = value;
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = copyText;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  loadConstructor() {
    this.setEditObj();
    this.editObj.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getSingleData();
    this.getSingleProposalData();
  }

  setEditObj() {
    this.editObj = {
      id: '',
      description: '',
      votes: '',
    };
  }

  getShort(val: any) {
    if (val) {
      let first = val.substring(0, 3);
      let last = val.substring(38, 42);
      return `${first}...${last}`;
    } else {
      return val;
    }
  }

  getSingleData(): void {
    this.isGetSingleDataLoading = true;
    this.dataService
      .postRequest('vote/proposal_details', { _id: this.editObj.id })
      .subscribe((success) => {
        let reponseData: any = success;
        this.isGetSingleDataLoading = false;

        if (reponseData.status) {
          this.editObj.votes = reponseData.data;
          this.dataSource = new MatTableDataSource(this.editObj.votes);
          this.getCount();
          console.log(this.dataSource, 'this.editObj.votes');
        } else {
          this.dataSource = new MatTableDataSource([]);
        }
      });
  }

  async getCount() {
    this.posstiveCount = this.editObj.votes.filter(function (item: any) {
      return item.vote == true;
    }).length;
    this.negativeCount = this.editObj.votes.filter(function (item: any) {
      return item.vote == false;
    }).length;
  }

  getSingleProposalData(): void {
    this.isGetSingleProposalData = true;
    this.dataService
      .postRequest('vote/single_proposal', { _id: this.editObj.id })
      .subscribe((success) => {
        let reponseData: any = success;
        this.isGetSingleProposalData = false;

        if (reponseData.status) {
          this.editObj = reponseData.data;
        } else {
          this.dataService.openAlert(reponseData.status, reponseData.message);
        }
      });
  }

  formSubmit(status: any) {
    let formData;

    this.isFormSubmitted = true;

    this.ediObjSubmit(status);
    this.isDataPassing = true;
  }

  ediObjSubmit(status: any) {
    let dataObj = {
      _id: this.editObj._id,
      status: status,
    };

    this.dataService
      .postRequest('vote/update_proposal_status', dataObj)
      .subscribe((success) => {
        let reponseData: any = success;
        this.isDataPassing = false;

        if (reponseData.status) {
          // if (this.editObj.id) {
          this.router.navigateByUrl(
            environment.baseUrl + '/' + AppRoutes.vote_list
          );
          this.dataService.openAlert(reponseData.status, 'Sucessfully Updated');

          // }
        } else {
          this.dataService.openAlert(false, 'Please Try Agian Later');
        }
      });
  }
}
