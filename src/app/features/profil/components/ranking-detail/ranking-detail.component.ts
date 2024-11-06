import { Component } from '@angular/core';
import {RankingService} from '../tools/ranking.service';
import {ActivatedRoute} from '@angular/router';

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

  constructor(private rankingService: RankingService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchRanking();
  }

  fetchRanking() {
    this.route.data.subscribe({
      next: (data) => {
        this.ranking = data['rankingData'];
      },
      complete: () => console.log('Requête ranking terminée')
    });
  }
}
