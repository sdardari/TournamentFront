import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {isConnectedGuard} from '../../shared/guards/is-connected.guard';
import {isNotAuthGuard} from '../../shared/guards/isNotAuth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate:[isConnectedGuard] },
  { path: 'register', component: RegisterComponent, canActivate:[isConnectedGuard]},
  { path: 'home', component: HomeComponent, },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }
