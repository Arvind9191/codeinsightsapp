import { Component, inject } from '@angular/core';
import { Header } from "../header/header";
import { Loader } from "../loader/loader";
import { RouterOutlet } from "@angular/router";
import { Footer } from "../footer/footer";
import { AuthService } from '../../core/Auth/auth-service';
import { Adminmenu } from "../adminmenu/adminmenu"; 

@Component({
  selector: 'app-layout',
  imports: [Header, Loader, RouterOutlet, Footer, Adminmenu],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  isLoading:boolean=false;
   public authService = inject(AuthService);
constructor()
{

}

}
