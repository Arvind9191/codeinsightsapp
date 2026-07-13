import { Component } from '@angular/core';
import { MatModule } from '../../../MatModule';
import { AppRoutingModule } from "../../../feature/admin/app-routing/app-routing-module";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [MatModule, AppRoutingModule ,RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
