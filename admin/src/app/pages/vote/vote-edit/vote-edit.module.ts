import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VoteEditComponent } from './vote-edit.component';
import { FirstModule } from 'src/app/common/modules/first/first.module';
import { TableModule } from 'src/app/common/modules/table/table.module';


const routes: Routes = [{ path: ':id', component: VoteEditComponent }];

@NgModule({
  declarations: [VoteEditComponent],
  imports: [
    CommonModule,
    FirstModule,
    TableModule,
    RouterModule.forChild(routes),
  ],
})
export class VoteEditModule {}
