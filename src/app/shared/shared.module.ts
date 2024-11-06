import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ValidatorsErrorsHandlerComponent } from './recyclable-forms/components/dynamic-component/components/validators-errors-handler/validators-errors-handler.component';
import { DynamicComponentComponent } from './recyclable-forms/components/dynamic-component/dynamic-component.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Button} from "primeng/button";
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    ValidatorsErrorsHandlerComponent,
    DynamicComponentComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    Button,
    PasswordModule,
    InputTextModule
  ],
  exports:[
    DynamicComponentComponent

  ]
})
export class SharedModule { }
