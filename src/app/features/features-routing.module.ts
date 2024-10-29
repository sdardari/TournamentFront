import { Routes } from "@angular/router";

const routes: Routes=[
    { path:'', redirectTo:'/home', pathMatch:'full'},

    { path: 'profil', loadChildren:()=> import('./profil/profil.module').then(m=>m.ProfilModule) },    
    { path: 'login-register', loadChildren:()=> import('./login-register/login-register.module').then(m=>m.LoginRegisterModule) },    

]