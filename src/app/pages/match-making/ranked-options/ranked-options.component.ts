import { Component } from '@angular/core';

@Component({
  selector: 'app-ranked-options',
  templateUrl: './ranked-options.component.html',
  styleUrl: './ranked-options.component.scss'
})
export class RankedOptionsComponent {

  tournamentSize = ['Petit', 'Moyen', 'Grand']
  tournamentType = ['Solo', 'Duo', 'Squad']


}
