import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReferalListComponent } from './referal-list.component';
import { FirstModule } from 'src/app/common/modules/first/first.module';
import { ListTableModule } from 'src/app/common/list-table/list-table.module';

const routes: Routes = [{ path: '', component: ReferalListComponent }];

@NgModule({
  declarations: [ReferalListComponent],
  imports: [
    CommonModule,
    FirstModule,
    ListTableModule,
    RouterModule.forChild(routes),
  ],
})
export class ReferalListModule {}
