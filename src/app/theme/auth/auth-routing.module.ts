import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {GuestGuard} from '../../guard/guest.guard';



const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent,
    canActivate: [ GuestGuard ]
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent,
    canActivate: [ GuestGuard ]
  },
  {
    path : '',
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
