import { RouterModule, Routes } from "@angular/router";
import { ProfilComponent } from "./profil/profil.component";
import { NgModule } from "@angular/core";

const routes: Routes=[
    { path:'', redirectTo:'/home', pathMatch:'full'},

    { path: 'profil', component:ProfilComponent },    
    { path: 'login-register', loadChildren:()=> import('./login-register/login-register.module').then(m=>m.LoginRegisterModule) },    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule{}