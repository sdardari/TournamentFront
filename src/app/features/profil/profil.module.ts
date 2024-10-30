import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil.component';
import { ProfilRoutingModule } from './profil-routong.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

@NgModule({
  declarations: [
    ProfilComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
  ],
  exports: [
    ProfilComponent,
  ]
})
export class ProfilModule { }
