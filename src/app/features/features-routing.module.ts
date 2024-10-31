import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './authentification/login/login.component';
import {RegisterComponent} from './authentification/register/register.component';
import {HomeComponent} from './authentification/home/home.component';
import {NgModule} from '@angular/core';

const routes: Routes=[
    { path:'', redirectTo:'/home', pathMatch:'full'},
  // {
  //   path:'**', component: "noPageFound"
  // }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class featuresRoutingModule { }
