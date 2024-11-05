import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss'], // Correction ici
  imports: [ButtonModule],
  standalone: true
})
export class PlayButtonComponent {
  constructor(private router: Router) {
  }

  tournamentSelection() {
    this.router.navigate(['/pages/tournament-selection']);
  }
}
