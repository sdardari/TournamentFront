import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Clanmodel} from '../models/clanmodel';



export interface ClanDTO{

}



@Injectable({
  providedIn: 'root'
})
export class ClansService {

  private apiUrl= 'http://localhost:8080/clan';

  constructor(private http:HttpClient) { }

    getAllClans():Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);

  }

  getClan(id:number):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
