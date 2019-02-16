import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './general/not-found/not-found.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './theme/site/site.module#SiteModule'
  },
  {
    path: 'dashboard',
    loadChildren: './theme/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './theme/auth/auth.module#AuthModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
