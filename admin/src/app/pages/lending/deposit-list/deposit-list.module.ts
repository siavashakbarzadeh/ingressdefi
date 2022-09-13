import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DepositListComponent } from './deposit-list.component';
import { FirstModule } from 'src/app/common/modules/first/first.module';
import { ListTableModule } from 'src/app/common/list-table/list-table.module';


const routes: Routes = [
  { path: '', component: DepositListComponent }
];

@NgModule({
  declarations: [DepositListComponent],
  imports: [
    CommonModule,
    FirstModule,
    ListTableModule,
    RouterModule.forChild(routes)
  ]
})
export class DepositListModule { }
