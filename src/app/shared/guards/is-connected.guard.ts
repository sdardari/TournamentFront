import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../features/authentification/tools/services/auth.service';

export const isConnectedGuard: CanActivateFn = (route, state) => {
  const rout= inject(Router);
  const auth=inject(AuthService);

  if(auth.isLoggedIn()){
    alert("please logout to continue ")
    return false
  }

  return true;
};
