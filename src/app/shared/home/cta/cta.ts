import { Component } from '@angular/core';
import { MatModule } from '../../../MatModule';
import { AppRoutingModule } from "../../../feature/admin/app-routing/app-routing-module";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta',
  imports: [MatModule, AppRoutingModule , RouterLink],
  templateUrl: './cta.html',
  styleUrl: './cta.css',
})
export class Cta {}
