import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBoxComponent } from './alert-box.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [AlertBoxComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDividerModule],
  exports: [AlertBoxComponent],
  entryComponents: [AlertBoxComponent],
})
export class AlertBoxModule {}
