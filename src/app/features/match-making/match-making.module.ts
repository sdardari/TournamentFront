import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchMakingRoutingModule } from './match-making-routing.module';
import { InscriptionSoloComponent } from './components/inscription-solo/inscription-solo.component';


@NgModule({
  declarations: [
    InscriptionSoloComponent
  ],
  imports: [
    CommonModule,
    MatchMakingRoutingModule
  ]
})
export class MatchMakingModule { }
