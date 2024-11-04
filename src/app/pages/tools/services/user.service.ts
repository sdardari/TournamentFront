// services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserDTO {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
}
export interface UserRankingDTO {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  ranking: {
    id: number;
    nbMatches: number;
    division: string;
    leaguePoints: number;
    wins: number;
    losses: number;
    winTournament: number;
    inPromotionUp: boolean;
    inPromotionDown: boolean;
    user: null | any;
    team: null | any;
    clan: null | any;
  };
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5050/users';
  private apiUrlRanking = 'http://localhost:5050/users/ranking';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(this.apiUrl);
  }
  getAllUsersRankings(): Observable<UserRankingDTO[]> {
    return this.http.get<UserRankingDTO[]>(this.apiUrlRanking);
  }
}
