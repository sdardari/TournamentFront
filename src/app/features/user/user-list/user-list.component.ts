// components/user-list/user-list.component.ts
import { Component, OnInit } from '@angular/core';
import {UserDTO, UserService} from '../../../../../../../Downloads/TournamentFront-main 2/src/app/pages/tools/services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: UserDTO[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log('Utilisateurs récupérés :', this.users);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des utilisateurs :', err);
      }
    });
  }
}
