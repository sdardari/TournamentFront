import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../tools/profil.service';


@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: any = null;

  constructor(private profilService: ProfilService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.profilService.getUser(2).subscribe({
      next: (data) => {
        this.user = data;
      },
      complete: () => console.log('Requête terminée')
    });
  }
  //
  // editUser(): void {
  //   this.user =
  // }
}
