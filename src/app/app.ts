import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from "./shared/layout/layout";
import { AuthService } from './core/Auth/auth-service'; 
import { Loader } from "./shared/loader/loader";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProjectLibraryApp');
   public authService = inject(AuthService);

  // onFormSubmit(): void { 
  //   this.authService.login();
  // }
}
