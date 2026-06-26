import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/apiservices/intercepter';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideToastr({
        timeOut: 2000,
        //  positionClass: 'toast-bottom-right',
        preventDuplicates: true,
    }), // Toastr providers
     provideHttpClient(withInterceptors([authInterceptor])),
     provideCharts(withDefaultRegisterables())
  ]
};
