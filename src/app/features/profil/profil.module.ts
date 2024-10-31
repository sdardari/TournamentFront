import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil.component';
import { UserDetailComponent} from './components/user-detail/user-detail.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { RankingDetailComponent } from './components/ranking-detail/ranking-detail.component';
import {ProgressBarModule} from 'primeng/progressbar';
import {ImageModule} from 'primeng/image';


@NgModule({
  declarations: [
    ProfilComponent,
    UserDetailComponent,
    RankingDetailComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ImageModule,
    CardModule,
    ProgressBarModule,

  ],
  exports: [
    ProfilComponent,
    UserDetailComponent,
    RankingDetailComponent
  ]
})
export class ProfilModule { }
