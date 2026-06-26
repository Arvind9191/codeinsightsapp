import { Component, HostListener } from '@angular/core';
import { AppRoutingModule } from "../app-routing/app-routing-module";

@Component({
  standalone: false,
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.html',
  styleUrl: './admindashboard.css',
})
export class Admindashboard {
opened = true;
  isMobile = false;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 768;
    this.opened = !this.isMobile; // auto-close on mobile
  }

  ngOnInit() {
    this.onResize(); // check initial screen size
  }
}
