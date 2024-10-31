import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './features-routing.module';
import {ProfilModule} from './profil/profil.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ProfilModule
  ]
})
export class FeaturesModule { }
