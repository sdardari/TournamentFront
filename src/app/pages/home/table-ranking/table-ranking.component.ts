import { Component, OnInit } from '@angular/core';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { UserService, UserRankingDTO } from '../../tools/services/user.service';
import { SkeletonModule } from 'primeng/skeleton';

interface Column {
  field: string;
  header: string;
  isImageHeader?: boolean;
}

@Component({
  selector: 'app-table-ranking',
  templateUrl: './table-ranking.component.html',
  styleUrls: ['./table-ranking.component.scss'],
  standalone: true,
  imports: [TableModule, CommonModule, SkeletonModule],
  providers: [UserService]
})
export class TableRankingComponent implements OnInit {
  usersRankings: UserRankingDTO[] = [];
  virtualUsers: UserRankingDTO[] = [];
  cols: Column[] = []
  topWinnerImage: string = 'assets/images/top-winner.png';
  topHeaderImage = 'assets/images/top.png';
  WinnerDeuxImage: string = 'assets/images/star.png';
  Winnertrois: string = 'assets/images/3rd-place.png';

  constructor(private readonly userService: UserService) {}


  private initializeColumns() {
    this.cols = [
      { field: 'id', header: 'Top', isImageHeader: true },
      { field: 'username', header: 'Player' },
      { field: 'kda', header: 'winRate | kda' },
      { field: 'nbMatches', header: 'nbMatches' },
      { field: 'winTournaments', header: 'winTournaments' },
      { field: 'ranking', header: 'Ranking' }
    ];
  }

  private userRankingsInit() {
    this.userService.getAllUsersRankings().subscribe((userRankings: UserRankingDTO[]) => {
      this.usersRankings = userRankings.filter(userRanking => userRanking.ranking.division.toLowerCase() !== 'unranked').map(userRanking => ({
        ...userRanking,
        profileImage: this.getProfileImageUrl(userRanking.id),
        winTournaments: userRanking.ranking.winTournament,
        nbMatches: userRanking.ranking.nbMatches,
        winRate: this.winRate(userRanking.ranking.nbMatches, userRanking.ranking.wins),
        ratioKDA: this.ratioKDA(userRanking.ranking.losses, userRanking.ranking.wins),
        calculatingGlobal: this.calculatingKDAGlobal(userRanking.ranking.nbMatches, userRanking.ranking.wins, userRanking.ranking.losses),
        rankingImage: `assets/images/${userRanking.ranking.division.toLowerCase()}.png`
      }))
        .sort((a, b) => b.ratioKDA - a.ratioKDA)
        .map((userRanking, index) => ({
          ...userRanking,
          rank: index + 1
        }));
      this.virtualUsers = Array.from({ length: this.usersRankings.length });
      console.log(this.usersRankings);
    });
  }
  private winRate(nbMatch: number, wins: number): number{
    let winRate = wins / nbMatch;
    return parseFloat(winRate.toFixed(2));
  }
  private ratioKDA(losses: number, wins: number): number{
    let ratioKDA = wins / losses;
    return parseFloat(ratioKDA.toFixed(2));
  }
  private calculatingKDAGlobal(nbMatch: number, wins: number, losses: number ): number{
    let scoreKDAGlobal = ((wins - losses) / nbMatch) * 100;
    return scoreKDAGlobal;
  }

  loadUsersLazy(event: TableLazyLoadEvent) {
    setTimeout(() => {
      const start = event.first || 0;
      const end = (event.first || 0) + (event.rows || 100);
      const loadedUsers = this.usersRankings.slice(start, end);
      Array.prototype.splice.apply(this.virtualUsers, [start, end - start, ...loadedUsers]);
    }, Math.random() * 1000 + 250);
  }

  private getProfileImageUrl(userId: number): string {
    return `https://randomuser.me/api/portraits/men/${userId % 100}.jpg`;
  }
  private getRandomInt(min: number, max: number): number {
     min = Math.ceil(min)
     max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min);
  }
  ngOnInit() {
    this.initializeColumns();
    this.userRankingsInit();
  }

}

