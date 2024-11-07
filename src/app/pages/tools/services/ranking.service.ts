// services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RankingDTO {
  id: number;
  leaguePoints: number;
  losses: number;
  wins: number;
  nbMatches: number;
  winTournament: number;
  division: string;
}

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  private apiUrl = 'http://localhost:5050/ranking';

  constructor(private http: HttpClient) { }

  // services/ranking.service.ts
  getRankingByUserId(userId: number): Observable<RankingDTO> {
    return this.http.get<RankingDTO>(`http://localhost:5050/ranking/${userId}`);
  }

  getAllRanking(): Observable<RankingDTO[]> {
    return this.http.get<RankingDTO[]>(this.apiUrl);
  }
}
