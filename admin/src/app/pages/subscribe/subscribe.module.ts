import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe.component';

import { Routes, RouterModule } from '@angular/router';
import { ListTableModule } from 'src/app/common/list-table/list-table.module';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

const routes: Routes = [
  {
    path: '',
    component: SubscribeComponent
  }
];

@NgModule({
  declarations: [SubscribeComponent],
  imports: [CommonModule, ListTableModule, FormsModule, EditorModule, RouterModule.forChild(routes)]
})
export class SubscribeModule {}
