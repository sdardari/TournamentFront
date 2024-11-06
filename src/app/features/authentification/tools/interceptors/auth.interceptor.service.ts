import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req:HttpRequest<unknown>, next:HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = localStorage.getItem('token')
    if(authToken && authToken !=''){
      return next.handle(req.clone({
        setHeaders:{
          Authorization: `Bearer ${authToken}`
        }
      }));
    }
    return next.handle(req);

  }

  constructor() { }
}
