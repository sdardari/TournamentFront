import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  
  items: any[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Profil',
        icon: 'pi pi-user',
        routerLink: '/profil',
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'Login/Register',
        icon: 'pi pi-sign-in',
        routerLink: '/login-register',
        
        routerLinkActiveOptions: { exact: true }
      }
    ];
  }

}
