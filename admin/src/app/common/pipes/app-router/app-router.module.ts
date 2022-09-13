import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouterPipe } from './app-router.pipe';

@NgModule({
  declarations: [AppRouterPipe],
  imports: [CommonModule],
  exports: [AppRouterPipe],
})
export class AppRouterModule {}
