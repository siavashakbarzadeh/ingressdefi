import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { LayoutComponent } from '../layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { InnerHeaderModule } from '../common/inner-header/inner-header.module';
import { InnerFooterModule } from '../common/inner-footer/inner-footer.module';
import { SidemenuModule } from './defi/sidemenu/sidemenu.module';
import { MarketDetailComponent } from './nft/market-detail/market-detail.component';
import { TopCollectorsComponent } from './nft/top-collectors/top-collectors.component';
import { SearchComponent } from './search/search.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ReferralModule } from './reference-links/reference-links.module';

// import { FarmComponent } from './pages/defi/farm/farm.component';
// import { Staking2Component } from './defi/staking2/staking2.component';
import { ToasterComponent } from "src/app/common/toaster/toaster.component";
import { ToasterContainerComponent } from "src/app/common/toaster/toaster-container.component";
import { ActivityComponent } from './nft/activity/activity.component';
import { FeatureComponent } from './nft/feature/feature.component';
import { MarketComponent } from './nft/market/market.component';
import { HistoryComponent } from './nft/history/history.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../auth.guard';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
{
  path: '',
  component: LayoutComponent,
  children: [
  {
    path: "dashboard",
    loadChildren: () =>
    import("./defi/dashboard/dashboard.module").then((m) => m.DashboardModule),
  }, 
  {
    path: "farm",
    loadChildren: () =>
    import("./defi/farm/farm.module").then((m) => m.FarmModule),
  },
  {
    path: "staking",
    loadChildren: () =>
    import("./defi/staking/staking.module").then((m) => m.StakingModule),
  },
  {
    path: "trade",
    loadChildren: () =>
    import("./defi/trade/trade.module").then((m) => m.TradeModule),
  },
  {
    path: "reference-links",
    loadChildren: () =>
    import("./reference-links/reference-links.module").then((m) => m.ReferralModule),
  },
  {
    canActivate: [AuthGuard],
    path: "collection",
    loadChildren: () =>
    import("./nft/collection/collection.module").then((m) => m.CollectionModule),
  },
  {
    canActivate: [AuthGuard],
    path: "create-item",
    loadChildren: () =>
    import("./nft/create-item/create-item.module").then((m) => m.CreateItemModule),
  },
  {
    canActivate: [AuthGuard],
    path: "items",
    loadChildren: () =>
    import("./nft/items/items.module").then((m) => m.ItemsModule),
  },
  {
    path: "profile",
    loadChildren: () =>
    import("./profile/profile.module").then((m) => m.ProfileModule),
  },
  {
    path: "edit-profile",
    loadChildren: () =>
    import("./edit-profile/edit-profile.module").then((m) => m.EditProfileModule),
  },
  {
    canActivate: [AuthGuard],
    path: "settings",
    loadChildren: () =>
    import("./nft/settings/settings.module").then((m) => m.SettingsModule),
  },
  {
    canActivate: [AuthGuard],
    path: "import",
    loadChildren: () =>
    import("./nft/import/import.module").then((m) => m.ImportModule),
  },
  {
    canActivate: [AuthGuard],
    path: "user",
    loadChildren: () =>
    import("./nft/user/user.module").then((m) => m.UserModule),
  },
  ],
},
{
  path: 'market', 
  component: MarketComponent
},
{
  path: 'history', 
  component: HistoryComponent
},
{
  path: 'item-details', 
  component: MarketDetailComponent
},
{
  path: 'activity', 
  component: ActivityComponent
},
{
  path: 'features', 
  component: FeatureComponent
},
{
  path: 'search', 
  component: SearchComponent
},

];

@NgModule({
  declarations: [LayoutComponent, TopCollectorsComponent, HistoryComponent,
  MarketDetailComponent, MarketComponent, FeatureComponent, ActivityComponent, MainpageComponent, SearchComponent, ToasterContainerComponent, ToasterComponent
  ],
  imports: [
  CommonModule,
  InnerHeaderModule,
  InnerFooterModule,
  SidemenuModule,
  NgxPaginationModule,
  FormsModule,
  RouterModule.forChild(routes),
  TabsModule.forRoot()
  ],
  exports:[
  ToasterContainerComponent, 
  ToasterComponent,
  ]
})
export class PagesModule {}
