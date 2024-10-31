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
import { FeatureRoutingModule } from './features-routing.module';
import {ProfilModule} from './profil/profil.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    AuthentificationRoutingModule,
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
