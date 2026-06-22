import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Auth/auth-service';
import to from '@angular/common/locales/to';

export const authguardGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
  const router = inject(Router); 
  if (authService.isLoggedIn()) {
    return true;
  } else {
   
    return false;
  }
};
