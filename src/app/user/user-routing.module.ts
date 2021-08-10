import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthActivated } from '../core/guards/auth.activated';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    // path: '',
    // children: []
    path: 'login',
    component: LoginComponent,
    canActivate:[AuthActivated],
    data:{
      authenticationRequired: false,
      authenticationFailureRedirectUrl: '/',
    }
  },
  {

    path: 'register',
    component: RegisterComponent,
    canActivate:[AuthActivated],
    data:{
      authenticationRequired: false,
      authenticationFailureRedirectUrl: '/',
    }
  },
  {
   
    path: 'profile',
    component: ProfileComponent,
    canActivate:[AuthActivated],
    data:{
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }