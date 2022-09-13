import { Component, OnInit } from '@angular/core';
import { DisplayedColumns, DisplayedDatas } from './lottery-list.table';
import { LotteryService } from 'src/app/common/services/metamask/lottery/lottery.service';
import { DataService } from 'src/app/common/api/data.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lottery-list',
  templateUrl: './lottery-list.component.html',
  styleUrls: ['./lottery-list.component.scss'],
})
export class LotteryListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'lottery/lottery_ticket_list',
    contest_id: '',
  };

  showTable = true;
  contestDetails: any;
  constructor(
    private lotteryService: LotteryService,
    public dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      // On Page reload call this function;
      this.loadConstructor();
    });
  }

  ngOnInit(): void {}

  getContest() {
    this.dataService
      .postRequest('lottery/get_single_contest', {
        contest_id: this.tableData.contest_id,
      })
      .subscribe((suc: any) => {
        console.log(suc, 'suc');
        if (suc.status) {
          this.contestDetails = suc.data;
        }
      });
  }

  loadConstructor() {
    this.tableData.contest_id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.tableData.contest_id == 'new') {
    } else {
      this.getContest();
    }
  }

  isLoign() {
    if (this.dataService.metaDetails.isMetaLogin) {
      return true;
    } else {
      this.dataService.openAlert(false, 'Please Login to Further Action');
      return false;
    }
  }

  async stopBuy() {
    let isLoign = await this.isLoign();
    if (!isLoign) {
      return;
    }

    this.dataService.isOverlay = true;
    this.lotteryService
      .stopBuy()
      .then((suc) => {
        if (suc.status) {
          this.dataService.isOverlay = false;
          this.dataService
            .postRequest('lottery/update_contest', {
              _id: this.contestDetails._id,
              stop_tx_id: suc.result,
            })
            .subscribe((suceess: any) => {
              if (suceess.status) {
                this.getContest();
                this.dataService.isOverlay = false;
                this.dataService.openAlert(true, 'successfully Contest Stoped');
              }
            });
        }

        console.log(suc, '________________ suc');
      })
      .catch((err) => {
        this.dataService.isOverlay = false;
      });
  }

  getRandom() {
    let no = [];

    no[0] = (Math.floor(Math.random() * 14) + 1).toString().trim();
    no[1] = (Math.floor(Math.random() * 14) + 1).toString().trim();
    no[2] = (Math.floor(Math.random() * 14) + 1).toString().trim();
    no[3] = (Math.floor(Math.random() * 14) + 1).toString().trim();
    return no;
  }

  async drawing() {
    let isLoign = await this.isLoign();
    if (!isLoign) {
      return;
    }
    this.dataService.isOverlay = true;

    let ticketNumbers = await new Date().getTime();
    console.log(ticketNumbers, 'ticketNumbers');
    this.lotteryService.Drawing(ticketNumbers).then((suc) => {
      if (suc.status) {
        console.log(suc, '______________ suc');
        this.setWinningContestApiCall(suc.txId);
      }
    });
  }

  async setWinningContestApiCall(txId: any) {
    let winning_value: any = [];
    let historyAmountsValues: any = [];

    for (let index = 0; index < 4; index++) {
      // Loop For get winning_value
      await this.lotteryService
        .historyNumbers(this.contestDetails.contest_id, index)
        .then(async (suc) => {
          console.log(suc, '______________ suc');
          if (suc.status) {
            await winning_value.push(suc.result);

            if ((await index) == 3) {
              for (
                let winningIndex = 0;
                winningIndex < winning_value.length;
                winningIndex++
              ) {
                // Loop For get total_amount
                const element = winning_value[winningIndex];
                await this.lotteryService
                  .historyAmounts(this.contestDetails.contest_id, winningIndex)
                  .then(async (winningSucess) => {
                    await historyAmountsValues.push(winningSucess.result);

                    console.log(
                      historyAmountsValues,
                      '______________ historyAmountsValues'
                    );

                    if ((await winningIndex) == 3) {
                      let total_amount = await (
                        +historyAmountsValues[0] / 1000000000000000000
                      ).toFixed(0);

                      let winner1 = await (
                        +historyAmountsValues[1] / 1000000000000000000
                      ).toFixed(0);
                      let winner2 = await (
                        +historyAmountsValues[2] / 1000000000000000000
                      ).toFixed(0);
                      let winner3 = await (
                        +historyAmountsValues[3] / 1000000000000000000
                      ).toFixed(0);

                      console.log(winner3, '____________ winner3');

                      let price1 = await (
                        (parseInt(total_amount) * 50) /
                        100
                      ).toFixed(0);
                      let price2 = await (
                        (parseInt(total_amount) * 20) /
                        100
                      ).toFixed(0);
                      let price3 = await (
                        (parseInt(total_amount) * 10) /
                        100
                      ).toFixed(0);
                      let burned = await (
                        (parseInt(total_amount) * 10) /
                        100
                      ).toFixed(0);
                      let poll_size = await (
                        parseInt(total_amount) - parseInt(burned)
                      ).toFixed(0);

                      let obj = {
                        _id: this.contestDetails._id,
                        winning_value: winning_value,
                        txId: txId,

                        total_amount: total_amount,
                        winner1: winner1,
                        winner2: winner2,
                        winner3: winner3,
                        burned: burned,
                        poll_size: poll_size,
                        price1: price1,
                        price2: price2,
                        price3: price3,
                      };

                      this.dataService.isOverlay = false;

                      console.log('set_winning_contest obj =====>', obj);

                      await this.dataService
                        .postRequest('lottery/set_winning_contest', obj)
                        .subscribe((suceess: any) => {
                          if (suceess.status) {
                            this.getContest();
                            this.dataService.openAlert(
                              true,
                              'successfully Contest Stoped'
                            );
                          }
                        });
                    }
                  });
              }
            }
          }
        });
    }
  }

  async setHistry() {
    let winning_value: any = [];

    for (let index = 0; index < 4; index++) {
      this.lotteryService.historyNumbers(0, index).then((suc) => {
        console.log(suc, '___________________ suc');

        if (suc.status) {
          winning_value.push(suc.result);

          console.log(index, '________ index');

          if (index == 3) {
            let obj = {
              _id: this.contestDetails._id,
              winning_value,
            };

            console.log(obj, '________ index');

            this.dataService
              .postRequest('lottery/set_winning_contest', obj)
              .subscribe((suceess: any) => {
                if (suceess.status) {
                  this.dataService.openAlert(
                    true,
                    'successfully Contest Stoped'
                  );
                }
              });
          }
        }
      });
    }
  }
}
