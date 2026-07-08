import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { SignUp } from '../../feature/Auth/sign-up/sign-up';
import { Login } from '../../feature/Auth/login/login';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../core/Auth/auth-service';
import { Contactus } from '../../feature/contactus/contactus';
import { Projectlist } from '../../feature/projectlist/projectlist';
import { Home } from '../home/home';
import { RouterLink } from '@angular/router';
import { SharedData } from '../sharedData/Data';
import { ApiResponse } from '../../models/CommonModel';
import { CommanApi } from '../../core/apiservices/commanapi';
import { Globdata } from '../globledata/globdata';

@Component({
  selector: 'app-adminmenu',
  imports: [RouterLink],
  templateUrl: './adminmenu.html',
  styleUrl: './adminmenu.css',
})
export class Adminmenu {
  isMenuOpen = false;
  isProfileOpen = false;
  public shared = inject(SharedData)
public authService = inject(AuthService);
  public commanApi = inject(CommanApi)
  public globdata = inject(Globdata)
  isAboutDropdownOpen = false; // Toggles mobile nested menu tracking
  constructor(private elementRef: ElementRef, private dialog: MatDialog) { }


  

  ngOnInit(){
    debugger
    var userdata = localStorage.getItem("userdetails")
    if(userdata!=null){
     var user:ApiResponse = JSON.parse(userdata)
      this.shared.loginRes.set(user)
    }



     this.commanApi.GetTenantData().subscribe((res:ApiResponse)=>{
         debugger
      if(res.statusCode==200){
        this.globdata.tenantData.set(res)
      }
    })

  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.isProfileOpen = false;
    }
  }

  toggleProfile(event: Event): void {
    event.stopPropagation();
    this.isProfileOpen = !this.isProfileOpen;
    if (this.isProfileOpen) {
      this.isMenuOpen = false;
    }
  }

  toggleAboutDropdown(event: Event): void {
    if (window.innerWidth <= 768) {
      event.preventDefault();
      this.isAboutDropdownOpen = !this.isAboutDropdownOpen;
    }
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
      this.isProfileOpen = false;
      this.isAboutDropdownOpen = false;
    }
  }
  public readonly isLoginPopupOpen = signal<boolean>(false);



  openLoginPopup() {
    const dialogRef = this.dialog.open(
      Login,
      {
        width: '500px',
        disableClose: true
      }
    );
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log(
          'Login data:',
          result
        );
      }

    });
  }

  opensignuppopup() {

    const dialogref = this.dialog.open(
      SignUp, {
      width: '100%',
      disableClose: true
    }
    );
    dialogref.afterClosed().subscribe((result: any) => {
      if (result) {
      }
    })
  }

}
