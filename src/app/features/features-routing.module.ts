import { RouterModule, Routes } from "@angular/router";
import { ProfilComponent } from "./profil/profil.component";
import { NgModule } from "@angular/core";
import {ProfilResolver} from './profil/components/tools/profil.resolver';
import {RankingResolver} from './profil/components/tools/ranking.resolver';
import {isNotAuthGuard} from '../shared/guards/isNotAuth.guard';

const routes: Routes=[
    { path:'', redirectTo:'/home', pathMatch:'full'},
    { path: 'profil',
      component:ProfilComponent,
      resolve: {userData: ProfilResolver, rankingData: RankingResolver},
      canActivate: [isNotAuthGuard]},
  {path:'clan',loadChildren:()=>import('./clan/clan.module').then(module=>module.ClanModule)

  }
  // {
  //   path:'**', component: "noPageFound"
  // }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class featuresRoutingModule { }
