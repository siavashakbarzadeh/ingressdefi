import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CmsEditComponent } from './cms-edit.component';
import { FirstModule } from 'src/app/common/modules/first/first.module';
import { EditorModule } from '@tinymce/tinymce-angular';

const routes: Routes = [{ path: '', component: CmsEditComponent }];

@NgModule({
  declarations: [CmsEditComponent],
  imports: [
    CommonModule,
    FirstModule,
    EditorModule,
    RouterModule.forChild(routes),
  ],
})
export class CmsEditModule {}
