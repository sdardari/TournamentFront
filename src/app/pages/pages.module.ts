import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import {PagesRoutingModule} from './pages-routing.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ButtonModule,
    PagesRoutingModule,
    TableModule,
    AvatarModule,
  ],
  exports: [RouterModule]
})
export class PagesModule { }
