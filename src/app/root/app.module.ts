import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '../layout/layout.module';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
import {PagesModule} from '../pages/pages.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PageAccueilComponent} from '../pages/home/page-accueil/page-accueil.component';
import {RankedOrNotComponent} from '../pages/match-making/ranked-or-not/ranked-or-not.component';
import {provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MenubarModule,
    RouterModule,
    PagesModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
