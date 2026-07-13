import { Component } from '@angular/core';
import { MatModule } from '../../../MatModule';
import { AppRoutingModule } from "../../../feature/admin/app-routing/app-routing-module";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-projects',
  imports: [MatModule, AppRoutingModule ,RouterLink],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.css',
})
export class FeaturedProjects {}
