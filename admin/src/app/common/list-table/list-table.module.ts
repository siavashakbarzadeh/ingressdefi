import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTableComponent } from './list-table.component';
import { FirstModule } from '../modules/first/first.module';
import { TableModule } from '../modules/table/table.module';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertBoxModule } from '../alert-box/alert-box.module';
import { TextHideModule } from '../pipes/text-hide/text-hide.module';

@NgModule({
  declarations: [ListTableComponent],
  imports: [
    CommonModule,
    FirstModule,
    TableModule,
    MatDialogModule,
    RouterModule,
    AlertBoxModule,
    TextHideModule,
  ],
  exports: [ListTableComponent],
  entryComponents: [ListTableComponent],
})
export class ListTableModule {}
