import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/Auth/auth-service';

@Component({
  selector: 'app-usercomponent',
  standalone: false,
  templateUrl: './usercomponent.html',
  styleUrl: './usercomponent.css',
})
export class Usercomponent {
  authService = inject(AuthService)
    logout(){
   this.authService.logout();
  }
}
