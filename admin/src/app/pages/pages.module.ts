import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { SidenavModule } from './sidenav/sidenav.module';
import { AppRoutes } from '../common/routes/app-url';


const routes: Routes = [
{
  path: '',
  component: LayoutComponent,
  children: [
  {
    path: 'dashboard',
    loadChildren: () =>
    import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: AppRoutes.liquidity_add_list,
    loadChildren: () =>
    import('./liquidity/list/list.module').then((m) => m.ListModule),
  },
  {
    path: AppRoutes.liquidity_remove_list,
    loadChildren: () =>
    import('./liquidity/liquidity-remove/liquidity-remove.module').then(
      (m) => m.LiquidityRemoveModule
      ),
  },

  {
    path: 'pairs/list',
    loadChildren: () =>
    import('./pairs/pairs-list/pairs-list.module').then(
      (m) => m.PairsListModule
      ),
  },
  {
    path: AppRoutes.pairs_edit,
    loadChildren: () =>
    import('./pairs/pair-edit/pair-edit.module').then(
      (m) => m.PairEditModule
      ),
  },
  {
    path: AppRoutes.swap_list,
    loadChildren: () =>
    import('./swap/swap-list/swap-list.module').then(
      (m) => m.SwapListModule
      ),
  },
  {
    path: AppRoutes.stake_list,
    loadChildren: () =>
    import('./stake/stake-list/stake-list.module').then(
      (m) => m.StakeListModule
      ),
  },
  {
    path: AppRoutes.unstake_list,
    loadChildren: () =>
    import('./stake/unstake-list/unstake-list.module').then(
      (m) => m.UnstakeListModule
      ),
  },
  {
    path: AppRoutes.stake_claim,
    loadChildren: () =>
    import('./stake/claim/claim.module').then((m) => m.ClaimModule),
  },
  {
    path: AppRoutes.token_list,
    loadChildren: () =>
    import('./token/token-list/token-list.module').then(
      (m) => m.TokenListModule
      ),
  },
  {
    path: AppRoutes.token_edit,
    loadChildren: () =>
    import('./token/token-edit/token-edit.module').then(
      (m) => m.TokenEditModule
      ),
  },
  {
    path: AppRoutes.vote_list,
    loadChildren: () =>
    import('./vote/vote-list/vote-list.module').then(
      (m) => m.VoteListModule
      ),
  },

  {
    path: AppRoutes.vote_edit,
    loadChildren: () =>
    import('./vote/vote-edit/vote-edit.module').then(
      (m) => m.VoteEditModule
      ),
  },
  {
    path: AppRoutes.settings,
    loadChildren: () =>
    import('./settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: AppRoutes.referal_list,
    loadChildren: () =>
    import('./referal-list/referal-list.module').then(
      (m) => m.ReferalListModule
      ),
  },
  {
    path: AppRoutes.lottery_list,
    loadChildren: () =>
    import('./lottery/lottery-list/lottery-list.module').then(
      (m) => m.LotteryListModule
      ),
  },
  {
    path: AppRoutes.lottery_contest_list,
    loadChildren: () =>
    import(
      './lottery/lottery-contest-list/lottery-contest-list.module'
      ).then((m) => m.LotteryContestListModule),
  },
  {
    path: AppRoutes.lending_deposit_list,
    loadChildren: () =>
    import('./lending/deposit-list/deposit-list.module').then(
      (m) => m.DepositListModule
      ),
  },
  {
    path: AppRoutes.lending_withdraw_list,
    loadChildren: () =>
    import('./lending/withdraw-list/withdraw-list.module').then(
      (m) => m.WithdrawListModule
      ),
  },
  {
    path: AppRoutes.lending_borrow_list,
    loadChildren: () =>
    import('./lending/borrow-list/borrow-list.module').then(
      (m) => m.BorrowListModule
      ),
  },
  {
    path: AppRoutes.cms_list,
    loadChildren: () =>
    import('./cms/cms-list/cms-list.module').then((m) => m.CmsListModule),
  },
  {
    path: AppRoutes.cms_edit + '/:id',
    loadChildren: () =>
    import('./cms/cms-edit/cms-edit.module').then((m) => m.CmsEditModule),
  },
  {
    path: AppRoutes.blogs_list,
    loadChildren: () =>
    import('./blogs/blogs-list/blogs-list.module').then((m) => m.BlogsListModule),
  },
   {
    path: 'itemlist',
    loadChildren: () =>
    import('./itemlist/itemlist.module').then(
      (m) => m.ItemlistModule
      ),
  },
  {
    path: AppRoutes.itemlistedit + "/:id",
    loadChildren: () =>
    import('./itemlistedit/itemlistedit.module').then(
      (m) => m.ItemlisteditModule
      ),
  },
  {
    path: AppRoutes.features_list,
    loadChildren: () =>
    import('./feature/feature-list/feature-list.module').then((m) => m.FeatureListModule),
  },
  {
    path: AppRoutes.features_edit + '/:id',
    loadChildren: () =>
    import('./feature/feature-edit/feature-edit.module').then((m) => m.FeatureEditModule),
  },
  {
    path: AppRoutes.blogs_edit + '/:id',
    loadChildren: () =>
    import('./blogs/blogs-edit/blogs-edit.module').then((m) => m.BlogsEditModule),
  },
  {
    path: AppRoutes.ip_block_list,
    loadChildren: () =>
    import('./ip/ip-block-list/ip-block-list.module').then(
      (m) => m.IpBlockListModule
      ),
  },
  {
    path: AppRoutes.ip_block_edit + "/:id",
    loadChildren: () =>
    import('./ip/ip-block-edit/ip-block-edit.module').then(
      (m) => m.IpBlockEditModule
      ),
  },
  {
    path: AppRoutes.history_list,
    loadChildren: () =>
    import('./history/history-list/history-list.module').then(
      (m) => m.HistoryListModule
      ),
  },
  {
    path: AppRoutes.currency_list,
    loadChildren: () =>
    import('./currency/currency-list/currency-list.module').then(
      (m) => m.CurrencyListModule
      ),
  },
  {
    path: AppRoutes.currency_edit + "/:id",
    loadChildren: () =>
    import('./currency/currency-edit/currency-edit.module').then(
      (m) => m.CurrencyEditModule
      ),
  },
  {
    path: AppRoutes.network_list,
    loadChildren: () =>
    import('./network/network-list/network-list.module').then(
      (m) => m.NetworkListModule
      ),
  },
  {
    path: AppRoutes.network_edit + "/:id",
    loadChildren: () =>
    import('./network/network-edit/network-edit.module').then(
      (m) => m.NetworkEditModule
      ),
  },
  {
    path: AppRoutes.subscribe_list,
    loadChildren: () =>
    import('./subscribe/subscribe.module').then(
      (m) => m.SubscribeModule
      ),
  },
  {
    path: AppRoutes.fee_list,
    loadChildren: () =>
    import('./fee/fee-list/fee-list.module').then(
      (m) => m.FeeListModule
      ),
  },
  {
    path: AppRoutes.fee_edit + "/:id",
    loadChildren: () =>
    import('./fee/fee-edit/fee-edit.module').then(
      (m) => m.FeeEditModule
      ),
  },
  ],
},
];

@NgModule({
  declarations: [LayoutComponent],
  imports: [
  CommonModule,
  MatSidenavModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  SidenavModule,
  RouterModule.forChild(routes),
  ],
})
export class PagesModule {}
