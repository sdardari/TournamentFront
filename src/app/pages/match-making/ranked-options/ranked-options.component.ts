import {Component, OnInit} from '@angular/core';
import {AddressDTO, AddressService} from '../../tools/services/address.service';
import {MatchMakingService} from '../../tools/services/match-making.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ranked-options',
  templateUrl: './ranked-options.component.html',
  styleUrl: './ranked-options.component.scss'
})
export class RankedOptionsComponent implements OnInit {
  addressList: AddressDTO[] = [];
  cityList: String[] = [];

  selectedRegionList: string | null = null;
  tournamentSizes = ['PETIT', 'MOYEN', 'GRAND']
  selectedSize: string | null = null;
  tournamentType = ['Solo', 'Duo', 'Squad']

    ngOnInit(): void {
        this.addressInit();

    }
constructor(
  private readonly addressService: AddressService,
  private readonly matchMakingService: MatchMakingService,
  private route: Router
) {}


private addressInit() {
  this.addressService.getAllAddress().subscribe((addressList: AddressDTO[]) => {
      this.addressList = addressList;
      this.cityList = [...new Set(this.addressList.map(address => address.city))];
    });
  }

  goToValidationTournament() {
    this.route.navigate(['pages/validateTournament'])
  }
selectSize(size: string) {
  this.selectedSize = size;
  console.log(this.selectedSize);
}

onSubmit() {
    const userId = 11 // TODO mettre l'id via le token d'auth'
  if(userId && this.selectedSize){
    console.log(userId, this.selectedSize);
    this.matchMakingService.registerSolo(userId, this.selectedSize).subscribe({
      next: (response) => { console.log('inscription réussie :', response); this.goToValidationTournament()},
      error: (error) => console.log('erreur inscription tournoi:', error),
    });
  }else {
    console.error('Taille tournoi non selectionné');
  }
}

}
