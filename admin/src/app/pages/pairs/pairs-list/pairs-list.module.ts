import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListTableModule } from 'src/app/common/list-table/list-table.module';
import { FirstModule } from 'src/app/common/modules/first/first.module';
import { PairsListComponent } from './pairs-list.component';
import { StakingAddModule } from '../staking-add/staking-add.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertBoxModule } from 'src/app/common/alert-box/alert-box.module';

const routes: Routes = [
  {
    path: '',
    component: PairsListComponent,
  },
];

@NgModule({
  declarations: [PairsListComponent],
  imports: [
    CommonModule,
    FirstModule,
    ListTableModule,
    MatDialogModule,
    AlertBoxModule,
    RouterModule.forChild(routes),
  ],
})
export class PairsListModule {}
