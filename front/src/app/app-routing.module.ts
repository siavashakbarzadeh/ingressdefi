import { UserprofileComponent } from './pages/nft/userprofile/userprofile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { InnerHeaderComponent } from './common/inner-header/inner-header.component';
import { InnerFooterComponent } from './common/inner-footer/inner-footer.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogdetailsComponent } from './pages/blogdetails/blogdetails.component';

import { LoginAddressComponent } from './pages/login-address/login-address.component';
import { SearchComponent } from './pages/search/search.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { ReferenceLinksComponent } from './pages/reference-links/reference-links.component';

import { DashboardComponent } from './pages/defi/dashboard/dashboard.component';
import { FarmComponent } from './pages/defi/farm/farm.component';
import { StakingComponent } from './pages/defi/staking/staking.component';
import { Staking2Component } from './pages/defi/staking2/staking2.component';
import { TradeComponent } from './pages/defi/trade/trade.component';
import { SidemenuComponent } from './pages/defi/sidemenu/sidemenu.component';

import { ActivityComponent } from './pages/nft/activity/activity.component';
import { CollectionComponent } from './pages/nft/collection/collection.component';
// import { CreateItemComponent } from './pages/nft/create-item/create-item.component';
import { FeatureComponent } from './pages/nft/feature/feature.component';
import { MarketComponent } from './pages/nft/market/market.component';
import { MarketDetailComponent } from './pages/nft/market-detail/market-detail.component';
import { TopCollectorsComponent } from './pages/nft/top-collectors/top-collectors.component';

const routes: Routes = [
  /*{
    path: environment.baseUrl + '/auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },*/
  {path: '', component: HomeComponent},
  {
    path: "",
    loadChildren: () =>
    import('./pages/pages.module').then((m) => m.PagesModule),
    // canActivate: [AuthGurdGuard],
  },

  /*{
    path: '404',
    loadChildren: () =>
      import('./pagenotfound/pagenotfound.module').then(
        (m) => m.PagenotfoundModule
      ),
  },*/
  { path: 'ipblock', loadChildren: () => import('./ipblack/ipblack.module').then(m => m.IpblackModule) },
    {path: 'privacy', component: PrivacyComponent},
    {path: 'blogs', component: BlogComponent},
    {path: 'blog-details', component: BlogdetailsComponent},
    {path: 'userprofile/:userName', component: UserprofileComponent},
];
   

/*const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'collection', component: CollectionComponent},
  {path: 'create-item', component: CreateItemComponent},
  {path: 'farm', component: FarmComponent},
  {path: 'feature', component: FeatureComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login-address', component: LoginAddressComponent},
  {path: 'market', component: MarketComponent},
  {path: 'market-detail', component: MarketDetailComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'reference-links', component: ReferenceLinksComponent},
  {path: 'search', component: SearchComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'staking', component: StakingComponent},
  {path: 'staking2', component: Staking2Component},
  {path: 'top-collectors', component: TopCollectorsComponent},
  {path: 'trade', component: TradeComponent},
  {path: 'mainpage', component: MainpageComponent},
  ];*/

  @NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
