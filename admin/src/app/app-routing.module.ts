import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthGurdGuard } from './common/gurds/auth-gurd.guard';

const routes: Routes = [
  {
    canActivate: [AuthGurdGuard],
    path: environment.baseUrl + '/auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: environment.baseUrl,
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
      // canActivate: [AuthGurdGuard],
  },

  {
    path: '404',
    loadChildren: () =>
      import('./pagenotfound/pagenotfound.module').then(
        (m) => m.PagenotfoundModule
      ),
  },
  { path: 'ipblock', loadChildren: () => import('./ipblack/ipblack.module').then(m => m.IpblackModule) },
  { path:  environment.baseUrl +'/ipwhite', loadChildren: () => import('./ipwhite/ipwhite.module').then(m => m.IpwhiteModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
