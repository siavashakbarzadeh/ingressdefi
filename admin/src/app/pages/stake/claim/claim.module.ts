import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClaimComponent } from './claim.component';
import { FirstModule } from 'src/app/common/modules/first/first.module';
import { ListTableModule } from 'src/app/common/list-table/list-table.module';


const routes: Routes = [
  { path: '', component: ClaimComponent }
];

@NgModule({
  declarations: [ClaimComponent],
  imports: [CommonModule, FirstModule, ListTableModule,  RouterModule.forChild(routes)],

})
export class ClaimModule { }
