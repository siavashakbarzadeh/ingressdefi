import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SiteInformationComponent } from './site-information.component';
import { FirstModule } from 'src/app/common/modules/first/first.module';

const routes: Routes = [{ path: '', component: SiteInformationComponent }];

console.log('dksdk')

@NgModule({
  declarations: [SiteInformationComponent],
  imports: [CommonModule, FirstModule, RouterModule.forChild(routes)],
})
export class SiteInformationModule {}
