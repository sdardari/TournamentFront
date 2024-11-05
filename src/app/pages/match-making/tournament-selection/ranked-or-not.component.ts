import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tournament-selection',
  templateUrl: './ranked-or-not.component.html',
  styleUrl: './ranked-or-not.component.scss'
})
export class RankedOrNotComponent {
  constructor(private router: Router) {
  }

  goRanked() {
    this.router.navigate(['/pages/ranked']);
  }

  goUnRanked() {
    this.router.navigate(['/pages/unRanked']);
  }
}
