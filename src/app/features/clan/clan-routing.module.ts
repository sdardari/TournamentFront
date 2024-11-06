import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../authentification/home/home.component';
import {ClanListComponent} from './pages/clan-list/clan-list.component';
import {ClanProfileComponent} from './pages/clan-profile/clan-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'clanList', component: ClanListComponent},
  {path:'clan-profile/:id', component: ClanProfileComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClanRoutingModule { }
