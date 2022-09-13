import { Component, OnInit } from '@angular/core';
import { DisplayedDatas, DisplayedColumns } from './list.table';
import { StakingAddComponent } from '../staking-add/staking-add.component';
import { MatDialog } from '@angular/material/dialog';
import { AlertBoxComponent } from 'src/app/common/alert-box/alert-box.component';
import { StakingService } from 'src/app/common/services/metamask/staking/staking.service';
import { DataService } from 'src/app/common/api/data.service';
import { ListTableService } from 'src/app/common/list-table/list-table.service';

@Component({
  selector: 'app-pairs-list',
  templateUrl: './pairs-list.component.html',
  styleUrls: ['./pairs-list.component.scss'],
})
export class PairsListComponent implements OnInit {
  tableData: any = {
    displayedColumns: DisplayedColumns,
    displayedDatas: DisplayedDatas,
    getAllApi: 'admin/pairslist',
  };

  constructor(
    private dialog: MatDialog,
    private stakingService: StakingService,
    private dataService: DataService,
    private listTableService: ListTableService
  ) {}

  ngOnInit(): void {}

  openAlertBox(valueObj: any): void {
    let msg: any;
    console.log(valueObj, '_____________ ');

    msg = `Are you sure want staking ${valueObj.pair}`;

    const dialogRef = this.dialog.open(AlertBoxComponent, {
      // width: window.innerWidth > 400 ? "30%" : "100%",
      disableClose: true,
      panelClass: 'theme_card',
      hasBackdrop: true,
      width: '500px',
      data: {
        message: msg,
        title: 'Add Staking',
      },
      position: {
        top: '10px',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.approveStaking(valueObj);
      }
    });
  }

  approveStaking(obj: any) {
    this.dataService.isOverlay = true;
    this.stakingService
      .addStakeing(obj.pair_address)
      .then((suc) => {
        console.log(suc);

        if (suc.status) {
          this.dataService
            .postRequest('farming/updateAddContractStatus', {
              id: obj._id,
              poolId: suc.data,
              pair_stack_tx_id: suc.txId,
            })
            .subscribe((suc: any) => {
              if (suc.status) {
                this.listTableService.tableDataLoad.emit(true);
              }
            });
        }
        this.dataService.isOverlay = false;
      })
      .catch((err) => {
        this.dataService.isOverlay = false;
      });
  }

  metaFun(event: any) {
    console.log(event);

    if (event.data.contract_add_status) {
      this.dataService.openAlert(
        false,
        'Already Contract was added for this pair'
      );
    } else {
      this.openAlertBox(event.data);
    }
  }
}
