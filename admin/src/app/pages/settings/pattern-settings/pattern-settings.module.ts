import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PatternSettingsComponent } from './pattern-settings.component';


const routes: Routes = [
  { path: '', component: PatternSettingsComponent }
];

@NgModule({
  declarations: [PatternSettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PatternSettingsModule { }
