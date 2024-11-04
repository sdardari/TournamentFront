import { Component, OnInit } from '@angular/core';
import {Endpoint} from '../../shared/enum/endpoint';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  endpoint = Endpoint

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
