import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient} from '@angular/common/http';
import {SharedRoutingModule} from '../shared/shared-routing.module';
import {SharedModule} from 'primeng/api';
import {AuthInterceptorService} from '../features/authentification/tools/interceptors/auth.interceptor.service';


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

  providers: [
    provideHttpClient(),
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
