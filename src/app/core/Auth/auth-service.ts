import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 public readonly isLoggedIn = signal<boolean>(false);
   
  public readonly isLoginPopupOpen = signal<boolean>(false);

  openLoginPopup(): void {
    this.isLoginPopupOpen.set(true);
  }
  closeLoginPopup(): void {
    this.isLoginPopupOpen.set(false);
  }
  login(): void {
    this.isLoggedIn.set(true);
    this.closeLoginPopup();  
  }

  logout(): void {
    this.isLoggedIn.set(false);
  }
}
