import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmsListComponent } from './cms-list.component';
import { FirstModule } from 'src/app/common/modules/first/first.module';
import { TableModule } from 'src/app/common/modules/table/table.module';
import { ListTableModule } from 'src/app/common/list-table/list-table.module';

const routes: Routes = [{ path: '', component: CmsListComponent }];

@NgModule({
  declarations: [CmsListComponent],
  imports: [
    CommonModule,
    FirstModule,
    ListTableModule,
    RouterModule.forChild(routes),
  ],
})
export class CmsListModule {}
