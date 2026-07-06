import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../Auth/loader.service';
import { finalize } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('access_token');
    const loaderService = inject(LoaderService); 
  // Clone request with Authorization header if token exists
  const authReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;


    loaderService.show();
  return next(authReq).pipe(
    finalize(()=>loaderService.hide())
  );
};