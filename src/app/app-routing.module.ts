import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './theme/site/site.module#SiteModule'
  },
  {
    path: 'dashboard',
    loadChildren: './theme/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'auth',
    loadChildren: './theme/auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
