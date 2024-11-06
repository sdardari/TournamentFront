import {Resolve, ResolveFn} from '@angular/router';
import {Injectable} from '@angular/core';
import {RankingService} from './ranking.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn : 'root'
})

export class RankingResolver implements Resolve<any>{

  constructor(private rankingService: RankingService) { }

  resolve(): Observable<any> {
    return this.rankingService.getRanking(2);

  }
}
