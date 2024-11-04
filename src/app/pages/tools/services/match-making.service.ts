import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InscriptionSoloModels} from '../models/inscriptionSolo.models';

@Injectable({
  providedIn: 'root'
})
export class MatchMakingService {
  private apiUrl = 'http://localhost:8080/matchMaking/solo';

  constructor(private http: HttpClient) { }

  registerSolo(userId: number, typeTournament: string): Observable<InscriptionSoloModels> {
    const params = new HttpParams()
      .set('userId', userId.toString())
      .set('typeTournament', typeTournament);

    return this.http.post<InscriptionSoloModels>(this.apiUrl, {}, { params });
  }
}
