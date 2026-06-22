
// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmailAuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userId = route.queryParamMap.get('userId');
    const token = route.queryParamMap.get('token');

    if (userId && token) {
      // ✅ Both values exist → allow navigation
      return true;
    } else {
      //  Missing values → redirect to error page
      this.router.navigate(['/error'], {
        queryParams: { message: 'Token and UserId not found' }
      });
      return false;
    }
  }
}
