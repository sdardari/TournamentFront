import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../tools/profil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: any;
  isEditing = false;

  constructor(private profilService: ProfilService, private route: ActivatedRoute) { }

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
    this.profilService.updateUser(2, formData).subscribe(() => {
      //console.log('L\'utilisateur & été mis à jour')
      this.fetchData()
      this.isEditing = !this.isEditing
    })
  }

  editUser(user: any): void {
    this.user = {...user}
    this.isEditing = !this.isEditing
  }

  formClose(): void{
    this.isEditing = false
  }
}
