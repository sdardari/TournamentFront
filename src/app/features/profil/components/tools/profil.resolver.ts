import { Resolve } from '@angular/router';
import {Injectable} from '@angular/core';
import {ProfilService} from './profil.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn : 'root'
})

export class ProfilResolver implements Resolve<any>{

  constructor(private profilService: ProfilService) { }

  resolve(): Observable<any> {
    return this.profilService.getUser(2);

  }
}
