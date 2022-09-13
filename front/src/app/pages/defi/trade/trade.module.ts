import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { TradeComponent } from "./trade.component";
import { TabsModule } from "ngx-bootstrap/tabs";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { FormsModule } from "@angular/forms";
import { TooltipModule } from "ngx-bootstrap/tooltip/";
import { LoaderModule } from "src/app/common/loader/loader.module";
import { LiquidityComponent } from "./liquidity/liquidity.component";
import { SwapComponent } from "./swap/swap.component";
import { PollShareModule } from "./poll-share/poll-share.module";
import { ImportPollModule } from './import-poll/import-poll.module';
import { ModalModule } from "ngx-bootstrap/modal";
import { SearchFilterModule } from "src/app/common/pipes/search-filter/search-filter.module";
import { NumbersOnlyModule } from "src/app/common/directives/numbers-only/numbers-only.module";
import { MinNumberModule } from "src/app/common/directives/min-number/min-number.module";
import { MaxNumberModule } from "src/app/common/directives/max-number/max-number.module";

const routes: Routes = [
  {
    path: "",
    component: TradeComponent,
  },
];

@NgModule({
  declarations: [TradeComponent, LiquidityComponent, SwapComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
    LoaderModule,
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    PollShareModule, 
    ImportPollModule,
    SearchFilterModule,
    NumbersOnlyModule,
    MinNumberModule,
    MaxNumberModule,
  ],
})
export class TradeModule {}

