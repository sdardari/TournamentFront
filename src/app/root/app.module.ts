import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import {SharedModule} from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RouterModule,
    SharedModule
  ],

  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
