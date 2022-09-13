import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TfaSettingsComponent } from './tfa-settings.component';
import { FirstModule } from 'src/app/common/modules/first/first.module';

const routes: Routes = [{ path: '', component: TfaSettingsComponent }];

@NgModule({
  declarations: [TfaSettingsComponent],
  imports: [CommonModule, FirstModule, RouterModule.forChild(routes)],
})
export class TfaSettingsModule {}
