import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TournamentRegisterService, TournamentRegisterDTO, TournamentRegisterByIdDTO } from '../../tools/services/tournamentRegister.service';

@Injectable({
  providedIn: 'root'
})
export class TournamentResolver implements Resolve<TournamentRegisterByIdDTO[]> {

  constructor(private tournamentRegisterService: TournamentRegisterService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TournamentRegisterByIdDTO[]> {
    return this.tournamentRegisterService.getTournamentList().pipe(
      switchMap((allTournamentRegister: TournamentRegisterDTO[]) => {
        const tournamentIds = allTournamentRegister.map(
          tournament => tournament.tournamentId);

        const tournamentDetails$ = tournamentIds.map(
          id => this.tournamentRegisterService.getTournamentById(id));

        return forkJoin(tournamentDetails$).pipe(
          map((results) => results.flat())
        );
      }),
      catchError(error => {
        console.error('Erreur lors de la récupération des tournois', error);
        return of([]);
      })
    );
  }
}
