import { Component } from '@angular/core';
import {RankingService} from '../tools/ranking.service';

@Component({
  selector: 'ranking-detail',
  templateUrl: './ranking-detail.component.html',
  styleUrl: './ranking-detail.component.scss'
})
export class RankingDetailComponent {

  ranking: any= null;
  winRatio: number | undefined;
  loseRatio: number | undefined;
  chartData: { datasets: { backgroundColor: string[]; data: any[]; }[]; labels: string[]; } | undefined;
  chartOptions: { responsive: boolean; plugins: { legend: { position: string; }; }; } | undefined

  constructor(private rankingService: RankingService) { }

  ngOnInit() {
    this.fetchRanking();
  }

  fetchRanking() {
    this.rankingService.getRanking(2).subscribe({
      next: (data) => {
        this.ranking = data;
      },
      complete: () => console.log('Requête rankong terminée')
    });

    // Calcul des ratios pour les barres de progression
    this.winRatio = (this.ranking.wins / this.ranking.nbMatches) * 100;
    this.loseRatio = (this.ranking.losses / this.ranking.nbMatches) * 100;

    // Données pour le graphique circulaire
    this.chartData = {
      labels: ['Wins', 'Losses'],
      datasets: [
        {
          data: [this.ranking.wins, this.ranking.losses],
          backgroundColor: ['#4caf50', '#f44336']
        }
      ]
    };

    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    };
  }
}
