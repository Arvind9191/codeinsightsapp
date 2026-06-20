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
export const routes: Routes = [
     {path:'' , component:Home},  
     { path: '', redirectTo: '/login', pathMatch: 'full' },
    
    {path:'home' , component:Home},
    {path:'loader' , component:Loader},
    { path: '', component: Layout,children: [
      { path: '',component: Home }
    ]},
    {path:'uploadproject',component:Uploadproject},
   {path:'Prodetails' , component:Prodetails},
   {path:'projects' , component:Projectlist},
   {path:'contact' , component:Contactus},
   {path:'about' , component:Aboutus},
   {path:'disclamer' , component:Disclamer},  
  {path: '**', redirectTo: '/login' },
   
];
