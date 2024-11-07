import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../features/authentification/tools/services/auth.service';


export const isNotAuthGuard: CanActivateFn = (route, state) => {
  const router= inject(Router);
  const auth =inject(AuthService);

  if(auth.isLoggedIn()) return true
  else{
    //alert("please connect to continue ")
    return router.navigate(['/login']);
  }



  return true;
};
