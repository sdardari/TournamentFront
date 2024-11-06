import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil.component';
import { UserDetailComponent} from './components/user-detail/user-detail.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { RankingDetailComponent } from './components/ranking-detail/ranking-detail.component';
import {ProgressBarModule} from 'primeng/progressbar';
import {ImageModule} from 'primeng/image';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfilComponent,
    UserDetailComponent,
    RankingDetailComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ImageModule,
    CardModule,
    ProgressBarModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    ProfilComponent,
    UserDetailComponent,
    RankingDetailComponent
  ]
})
export class ProfilModule { }
