import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface TournamentRegisterDTO {
  id: number;
  userId: number | null;
  teamId: number | null;
  clanId: number | null;
  tournamentId: number;
  registrationType: string;
}
export interface TournamentRegisterByIdDTO{
  name: string;
  localisation: string;
  nbPlace: number;
}

@Injectable({
  providedIn: 'root'
})

export class TournamentRegisterService {
  constructor(private http: HttpClient) {
  }
  private urlTournamentList = 'http://localhost:5050/tournament/matchmakingList'
  private urlTournamentById = 'http://localhost:5050/tournament/'

  getTournamentList(): Observable<TournamentRegisterDTO[]>{
    return this.http.get<TournamentRegisterDTO[]>(this.urlTournamentList);
  }

  getTournamentById(id: number): Observable<TournamentRegisterByIdDTO[]>{
    return this.http.get<TournamentRegisterByIdDTO[]>(`http://localhost:5050/tournament/${id}`);
  }
}
