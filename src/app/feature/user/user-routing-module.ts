import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHome } from './dashboard-home/dashboard-home';
import { Profile } from './profile/profile';
import { Purchases } from './purchases/purchases';
import { Projects } from './projects/projects';
import { Settings } from './settings/settings';
import { Usercomponent } from './usercomponent/usercomponent';

const routes: Routes = [
   {
    path: '',
    component: Usercomponent,
    children: [
      { path: 'userdashboard', component: DashboardHome },
      { path: 'profile', component: Profile },
      { path: 'purchases', component: Purchases },
      { path: 'projects', component: Projects },
      { path: 'settings', component: Settings },

      // ✅ Redirect empty child path to dashboard
      { path: '', redirectTo: 'userdashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
