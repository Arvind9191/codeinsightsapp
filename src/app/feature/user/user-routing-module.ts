import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHome } from './dashboard-home/dashboard-home';
import { Profile } from './profile/profile';
import { Purchases } from './purchases/purchases';
import { Projects } from './projects/projects';
import { Settings } from './settings/settings';
import { Usercomponent } from './usercomponent/usercomponent';
import { authguardGuard } from '../../core/guards/authguard-guard';

const routes: Routes = [
   {
    path: '',
    component: Usercomponent,
    children: [
      { path: 'userdashboard', component: DashboardHome , canActivate:[authguardGuard] },
      { path: 'profile', component: Profile , canActivate:[authguardGuard] },
      { path: 'purchases', component: Purchases  , canActivate:[authguardGuard]},
      { path: 'projects', component: Projects , canActivate:[authguardGuard]},
      { path: 'settings', component: Settings },

      // ✅ Redirect empty child path to dashboard
      { path: '', redirectTo: 'userdashboard', pathMatch: 'full' }
    ],
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
