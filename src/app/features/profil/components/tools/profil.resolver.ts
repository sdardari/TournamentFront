import { Resolve } from '@angular/router';
import {Injectable} from '@angular/core';
import {ProfilService} from './profil.service';
import {Observable, of} from 'rxjs';
import {AuthService} from '../../../authentification/tools/services/auth.service';

@Injectable({
  providedIn : 'root'
})

export class ProfilResolver implements Resolve<any>{

  constructor(private profilService: ProfilService, private authService: AuthService) { }

  resolve(): Observable<any> {
    const userId = this.authService.getUserIdFromToken()
    if(userId){
      return this.profilService.getUser(userId);
    } else {
      console.log('erreur')
      return of(null);
    }
  }
}
