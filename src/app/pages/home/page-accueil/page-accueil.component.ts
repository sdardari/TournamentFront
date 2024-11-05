import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  cashPrizeTournaments = [
    { rank: 1, name: 'Tournament 1', emoji: '🔥' },
    { rank: 2, name: 'Tournament 2', emoji: '🌟' },
    { rank: 3, name: 'Tournament 3', emoji: '💎' },
    // autres tournois
  ];

  playersRanking = [
    { rank: 1, name: 'Player 1', points: 1500, emoji: '🔥' },
    { rank: 2, name: 'Player 2', points: 1400, emoji: '🌟' },
    { rank: 3, name: 'Player 3', points: 1300, emoji: '💎' },
    // autres joueurs
  ];

  latestTournaments = [
    { rank: 1, name: 'Tournament A', emoji: '🔥' },
    { rank: 2, name: 'Tournament B', emoji: '🌟' },
    { rank: 3, name: 'Tournament C', emoji: '💎' },
    // autres tournois
  ];

  constructor() { }

  ngOnInit(): void {}
}
