import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { Routes, RouterModule } from '@angular/router';
import { ListTableModule } from 'src/app/common/list-table/list-table.module';
import { FirstModule } from 'src/app/common/modules/first/first.module';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
];

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    FirstModule,
    ListTableModule,
    RouterModule.forChild(routes),
  ],
})
export class ListModule {}
