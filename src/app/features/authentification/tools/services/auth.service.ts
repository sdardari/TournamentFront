import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private loginUrl='http://localhost:8080/login';
  private registerUrl = 'http://localhost:8080/register';


  login(username:string, password: string): Observable<any> {
    const headers= new HttpHeaders({'Content-Type':'application/json'});
    const loginData= {username, password};

    return this.http.post<any>(this.loginUrl,loginData,{headers});
  }

  register(user:any): Observable<any> {
    return this.http.post<any>(this.registerUrl,user);
  }


  isLoggedIn():boolean{
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
  }

  getUserIdFromToken(): number | null {
    const token = localStorage.getItem('token');
    if (token) {

      const decodedToken: any = jwtDecode(token);
      return decodedToken.user_id || null;
    }
    return null;
  }
}
