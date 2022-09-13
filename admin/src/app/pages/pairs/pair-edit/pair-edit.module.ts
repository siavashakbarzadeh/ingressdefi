import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PairEditComponent } from './pair-edit.component';
import { FirstModule } from 'src/app/common/modules/first/first.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FilterModule } from 'src/app/common/pipes/filter/filter.module';

const routes: Routes = [{ path: ':id', component: PairEditComponent }];

@NgModule({
  declarations: [PairEditComponent],
  imports: [
    CommonModule,
    FirstModule,
    MatAutocompleteModule,
    FilterModule,
    RouterModule.forChild(routes),
  ],
})
export class PairEditModule {}
