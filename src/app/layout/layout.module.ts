import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AvatarModule } from 'primeng/avatar';
import {ImageModule} from 'primeng/image';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    SplitButtonModule,
    AvatarModule,
    ImageModule
  ],

  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
