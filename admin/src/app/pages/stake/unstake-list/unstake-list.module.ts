import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UnstakeListComponent } from './unstake-list.component';
import { FirstModule } from 'src/app/common/modules/first/first.module';
import { ListTableModule } from 'src/app/common/list-table/list-table.module';

const routes: Routes = [{ path: '', component: UnstakeListComponent }];

@NgModule({
  declarations: [UnstakeListComponent],
  imports: [
    CommonModule,
    FirstModule,
    ListTableModule,
    RouterModule.forChild(routes),
  ],
})
export class UnstakeListModule {}
