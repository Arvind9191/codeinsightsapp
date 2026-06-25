import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing-module';
import { DashboardHome } from './dashboard-home/dashboard-home';
import { Profile } from './profile/profile';
import { Purchases } from './purchases/purchases';
import { Projects } from './projects/projects';
import { Settings } from './settings/settings';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { Usercomponent } from './usercomponent/usercomponent';
@NgModule({
  declarations: [DashboardHome, Profile, Purchases, Projects, Settings, Usercomponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCard,
    MatIcon,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
  ],
})
export class UserModule {}
