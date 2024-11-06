import {RouterModule, Routes} from "@angular/router";
import {NgModule} from '@angular/core';

const routes: Routes=[
    { path:'', redirectTo:'/home', pathMatch:'full'},
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
