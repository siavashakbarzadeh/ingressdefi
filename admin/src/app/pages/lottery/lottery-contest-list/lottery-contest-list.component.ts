import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './lottery-contest-list.table';
import { DataService } from 'src/app/common/api/data.service';
import { LotteryService } from 'src/app/common/services/metamask/lottery/lottery.service';

@Component({
  selector: 'app-lottery-contest-list',
  templateUrl: './lottery-contest-list.component.html',
  styleUrls: ['./lottery-contest-list.component.scss'],
})
export class LotteryContestListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'lottery/contest_list',
  };
  isShowCreateContest = false;
  constructor(
    private dataService: DataService,
    private lotteryService: LotteryService
  ) {
    this.getContest();
  }

  ngOnInit(): void {}

  getContest() {
    this.dataService.getRequest('lottery/get_contest').subscribe((suc: any) => {
      console.log(suc, 'suc');
      if (suc.status) {
        this.isShowCreateContest = false;
      } else {
        this.isShowCreateContest = true;
      }
    });
  }

  isLoign() {
    if (this.dataService.metaDetails.isMetaLogin) {
      return true;
    } else {
      this.dataService.openAlert(false, 'Please Login to Further Action');
      return false;
    }
  }

  async reset() {
    let isLoign = await this.isLoign();
    if (!isLoign) {
      return;
    }
    this.dataService.isOverlay = true;
    this.lotteryService
      .reset()
      .then((suc) => {
        if (suc.status) {
          console.log(suc, '________________ suc');

          this.lotteryService.GetContestNumber().then((suceess) => {
            console.log(suceess, '________________ suceess');

            if (suceess.status) {
              let obj = {
                userAddress: this.dataService.metaDetails.account,
                contest_id: suceess.result,
                start_tx_id: suc.result,
              };

              this.dataService
                .postRequest('lottery/insert_contest', obj)
                .subscribe((suceess: any) => {
                  this.dataService.isOverlay = false;
                  if (suceess.status) {
                    this.dataService.openAlert(
                      true,
                      'successfully Contest Stoped'
                    );
                    this.isShowCreateContest = false;
                  }
                });
            }
          });
        } else {
          this.dataService.isOverlay = false;
        }

        console.log(suc, '________________ suc');
      })
      .catch((err) => {
        this.dataService.isOverlay = false;
      });
  }
}
