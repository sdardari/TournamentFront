import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../tools/profil.service';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from '../../../authentification/tools/services/auth.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: any;
  isEditing = false;

  constructor(private profilService: ProfilService, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.route.data.subscribe({
      next: (data) => {
        this.user = data['userData'];
      },
      //complete: () => console.log('Requête terminée')
    });
  }

  onSubmit(formData: {[key: string]: any}): void {
    const userId = this.authService.getUserIdFromToken()
    if (userId) {
      this.profilService.updateUser(userId, formData).subscribe(() => {
        //console.log('L\'utilisateur & été mis à jour')
        this.fetchData()
        this.isEditing = !this.isEditing
      })
    }
  }

  editUser(user: any): void {
    this.user = {...user}
    this.isEditing = !this.isEditing
  }

  formClose(): void{
    this.isEditing = false
  }
}
