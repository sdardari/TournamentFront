import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './home/page-accueil/page-accueil.component';
import { RankedOrNotComponent } from './match-making/tournament-selection/ranked-or-not.component';
import {PlayButtonComponent} from './home/play-button/play-button.component';
import {TableRankingComponent} from './home/table-ranking/table-ranking.component';
import {RankedOptionsComponent} from './match-making/ranked-options/ranked-options.component';
import {UnrankedOptionComponent} from './match-making/unranked-option/unranked-option.component';
import {FormsModule} from '@angular/forms';
import {ValidateTournamentComponent} from './match-making/validate-tournament/validate-tournament.component';
import {TournamentResolver} from './match-making/validate-tournament/tournament-resolver.service';

export const routes: Routes = [
  { path: '', component: PageAccueilComponent },
  { path: 'tournament-selection', component: RankedOrNotComponent },
  { path: 'ranked', component: RankedOptionsComponent },
  { path: 'unRanked', component: UnrankedOptionComponent },
  { path: 'validateTournament', component: ValidateTournamentComponent, resolve: { tournamentData: TournamentResolver} },
];

@NgModule({
  declarations: [
    PageAccueilComponent,
    RankedOrNotComponent,
    RankedOptionsComponent,
    UnrankedOptionComponent,
    ValidateTournamentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableRankingComponent,
    PlayButtonComponent,
    FormsModule
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
