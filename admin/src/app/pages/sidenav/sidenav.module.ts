import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'src/app/common/pipes/translate/translate.module';

@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, MatIconModule, TranslateModule, RouterModule],
  exports: [SidenavComponent],
  entryComponents: [SidenavComponent],
})
export class SidenavModule {}
