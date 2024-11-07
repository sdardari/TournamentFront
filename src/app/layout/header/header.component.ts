import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../features/authentification/tools/services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private authService:AuthService, private router:Router) {
  }

  isLoggedIn(): boolean{
    return this.authService.isLoggedIn();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }
  login(){
    this.router.navigate(['/login']);
  }
  profil(){
    this.router.navigate(['/profil']);
  }
  home(){
    this.router.navigate(['/home']);
  }
}
