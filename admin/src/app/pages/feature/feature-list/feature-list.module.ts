import { NgModule } from '@angular/core';
import { FeatureListComponent } from './feature-list.component';
import { Routes, RouterModule } from '@angular/router';

import { FirstModule } from 'src/app/common/modules/first/first.module';
import { ListTableModule } from 'src/app/common/list-table/list-table.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: FeatureListComponent,
  },
];

@NgModule({
  declarations: [FeatureListComponent],
  imports: [FirstModule, ListTableModule, RouterModule.forChild(routes)],
})
export class FeatureListModule {}
