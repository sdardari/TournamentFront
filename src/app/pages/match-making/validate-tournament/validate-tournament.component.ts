import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { TournamentRegisterByIdDTO, TournamentRegisterDTO, TournamentRegisterService } from '../../tools/services/tournamentRegister.service';

@Component({
  selector: 'app-validate-tournament',
  templateUrl: './validate-tournament.component.html',
  styleUrls: ['./validate-tournament.component.scss']
})
export class ValidateTournamentComponent implements OnInit {
  allTournamentRegisterByIdDTO: TournamentRegisterByIdDTO[] = [];

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.allTournamentRegisterByIdDTO = this.route.snapshot.data['tournamentData']
  }
}
