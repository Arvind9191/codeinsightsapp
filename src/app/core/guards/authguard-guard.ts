import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Auth/auth-service';
import to from '@angular/common/locales/to';
import { Cookies } from '../Auth/cookie.servcie';

export const authguardGuard: CanActivateFn = (route, state) => {
  debugger
  const cookie = inject(Cookies)
  const authService = inject(AuthService);
  const router = inject(Router);



  if (cookie.stayLogin(state.url)) {
    return true;
  } else {
    router.navigate(['/home'])
    return false;
  }
};
