import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListTableModule } from 'src/app/common/list-table/list-table.module';
import { FirstModule } from 'src/app/common/modules/first/first.module';
import { SwapListComponent } from './swap-list.component';


const routes: Routes = [
  {
    path: '',
    component: SwapListComponent,
  },
];

@NgModule({
  declarations: [SwapListComponent],
  imports: [
    CommonModule,
    FirstModule,
    ListTableModule,
    RouterModule.forChild(routes),
  ],
})
export class SwapListModule {}
