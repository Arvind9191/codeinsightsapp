import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Admindashboard } from '../admindashboard/admindashboard';
import { Dashboard } from '../admindashboard/dashboard/dashboard';
import { AdminUser } from '../admindashboard/user/user';
import { Project } from '../admindashboard/project/project';
import { FileManager } from '../admindashboard/file-manager/file-manager';
import { OfferAndDiscount } from '../admindashboard/offer-and-discount/offer-and-discount';
import { Uploadproject } from '../admindashboard/uploadproject/uploadproject';
import { UserInquiry } from '../admindashboard/user-inquiry/user-inquiry';
import { authguardGuard } from '../../../core/guards/authguard-guard';



const routes: Routes = [
{path:'' , component:Admindashboard,
  
children:[
  {path:'admindashboard',component:Dashboard , canActivate:[authguardGuard]},
  {path:'adminuser' , component:AdminUser , canActivate:[authguardGuard]},
  {path:'adminproject', component:Project, canActivate:[authguardGuard]},
  {path:'filemanager', component:FileManager, canActivate:[authguardGuard]},
  {path:'offeranddiscount', component:OfferAndDiscount, canActivate:[authguardGuard]},
  {path:'projectupload' , component:Uploadproject, canActivate:[authguardGuard]},
  {path:"adminquery",component:UserInquiry, canActivate:[authguardGuard]},
  { path: '', redirectTo: 'admindashboard', pathMatch: 'full' }
],


}
];
@NgModule({
   imports: [RouterModule.forChild(routes)],
  exports: [RouterModule ,CommonModule],
})
export class AppRoutingModule {


}
