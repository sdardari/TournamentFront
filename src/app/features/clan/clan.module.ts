import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanRoutingModule } from './clan-routing.module';
import { ClanListComponent } from './pages/clan-list/clan-list.component';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {Button} from 'primeng/button';
import { ClanProfileComponent } from './pages/clan-profile/clan-profile.component';


@NgModule({
  declarations: [
    ClanListComponent,
    ClanProfileComponent
  ],
  imports: [
    CommonModule,
    ClanRoutingModule,
    CardModule,
    TableModule,
    Button
  ]
})
export class ClanModule { }
