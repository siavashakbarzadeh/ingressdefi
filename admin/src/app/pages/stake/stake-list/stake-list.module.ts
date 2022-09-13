import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StakeListComponent } from './stake-list.component';
import { ListTableModule } from 'src/app/common/list-table/list-table.module';
import { FirstModule } from 'src/app/common/modules/first/first.module';

const routes: Routes = [{ path: '', component: StakeListComponent }];

@NgModule({
  declarations: [StakeListComponent],
  imports: [CommonModule, FirstModule, ListTableModule,  RouterModule.forChild(routes)],
})
export class StakeListModule {}
