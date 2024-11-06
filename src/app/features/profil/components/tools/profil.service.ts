import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private apiUrl = 'http://localhost:8080/users'

  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}`);
  }

  updateUser(id:number, user:any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, user);
  }
}
