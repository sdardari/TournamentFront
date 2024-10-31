import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AuthentificationRoutingModule } from './authentification-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import {PasswordModule} from "primeng/password";
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    CardModule,
    InputTextModule,
      PasswordModule,
    SharedModule
  ]
})
export class AuthentificationModule { }
