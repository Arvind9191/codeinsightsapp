import { inject, Injectable, signal } from '@angular/core';
import { SharedData } from '../../shared/sharedData/Data';
import { ApiResponse } from '../../models/CommonModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  shared = inject(SharedData)
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
    var data:ApiResponse= {
      data:'logout',
      statusCode:0,
      message:"User Logout"
    }
    this.shared.loginRes.set(data)
    this.isLoggedIn.set(false);
  }
}
