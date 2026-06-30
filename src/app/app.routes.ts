import { Routes } from '@angular/router';
import { Home } from './shared/home/home';
import { Layout } from './shared/layout/layout';
import { Loader } from './shared/loader/loader';
import { Prodetails } from './feature/prodetails/prodetails';
import { Projectlist } from './feature/projectlist/projectlist';
import { Contactus } from './feature/contactus/contactus';
import { Aboutus } from './feature/aboutus/aboutus';
import { Disclamer } from './feature/disclamer/disclamer';  
import { Uploadproject } from './feature/uploadproject/uploadproject';
import { EmailVerified } from './feature/Auth/email-verified/email-verified';
import { EmailAuthGuard } from './core/Auth/email-verify';
import { ErrorComponent } from './shared/error/error';
import { NotFoundComponent } from './shared/not-found-component/not-found-component';
import { Settings } from './feature/Auth/settings/settings';
import { authguardGuard } from './core/guards/authguard-guard';
export const routes: Routes = [
    {path:'' , component:Home},      
    {path:'home' , component:Home},
    {path:'loader' , component:Loader},
    { path: '', component: Layout,children: [
      { path: '',component: Home }
    ]},
    // {path:'uploadproject',component:Uploadproject},
   {path:'Prodetails' , component:Prodetails},
   {path:'projects' , component:Projectlist},
   {path:'contact' , component:Contactus},
   {path:'about' , component:Aboutus},
   {path:'emailverified',component:EmailVerified , canActivate:[EmailAuthGuard]},
   {path:'disclamer' , component:Disclamer},  
   {path:'error' , component:ErrorComponent},
   {path:'pagenotfound',component:NotFoundComponent},
   {path:'settings' , component:Settings},
   {path:'user' , loadChildren:()=>import('./feature/user/user-module').then(m=>m.UserModule) ,canActivate:[authguardGuard]},
   {path:'admin',loadChildren:()=>import('./feature/admin/admin-module').then(m=>m.AdminModule), canActivate:[authguardGuard]},
 {path:'**',component:NotFoundComponent}
   
];
