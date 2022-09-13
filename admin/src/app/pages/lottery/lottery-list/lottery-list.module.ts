import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LotteryListComponent } from './lottery-list.component';
import { FirstModule } from 'src/app/common/modules/first/first.module';
import { ListTableModule } from 'src/app/common/list-table/list-table.module';
import { TextHideModule } from 'src/app/common/pipes/text-hide/text-hide.module';

const routes: Routes = [{ path: ':id', component: LotteryListComponent }];

@NgModule({
  declarations: [LotteryListComponent],
  imports: [
    CommonModule,
    FirstModule,
    ListTableModule,
    TextHideModule,
    RouterModule.forChild(routes),
  ],
})
export class LotteryListModule {}
