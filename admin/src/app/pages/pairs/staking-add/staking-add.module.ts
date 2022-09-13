import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StakingAddComponent } from './staking-add.component';
import { MatButtonModule } from '@angular/material/button';
import { FirstModule } from 'src/app/common/modules/first/first.module';

@NgModule({
  declarations: [StakingAddComponent],
  imports: [CommonModule, FirstModule],
  exports: [StakingAddComponent],
  entryComponents: [StakingAddComponent],
})
export class StakingAddModule {}
