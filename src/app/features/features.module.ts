import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { HomeComponent } from './authentification/home/home.component';
import {AuthentificationRoutingModule} from './authentification/authentification-routing.module';
import {CardModule} from 'primeng/card';
import {FloatLabelModule} from 'primeng/floatlabel';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';
import {PasswordModule} from 'primeng/password';
import {Button} from 'primeng/button';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {ClanRoutingModule} from './clan/clan-routing.module';
import {ProfilModule} from './profil/profil.module';
import { featuresRoutingModule } from './features-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    featuresRoutingModule,
    AuthentificationRoutingModule,
    ClanRoutingModule,
    CardModule,
    FloatLabelModule,
    InputTextModule,
    PaginatorModule,
    PasswordModule,
    Button,
    ReactiveFormsModule,
    SharedModule,
    ProfilModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ]
})
export class FeaturesModule { }
