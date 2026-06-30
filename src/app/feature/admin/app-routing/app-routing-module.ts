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



const routes: Routes = [
{path:'' , component:Admindashboard,
children:[
  {path:'admindashboard',component:Dashboard},
  {path:'adminuser' , component:AdminUser },
  {path:'adminproject', component:Project},
  {path:'filemanager', component:FileManager},
  {path:'offeranddiscount', component:OfferAndDiscount},
  {path:'projectupload' , component:Uploadproject},
  {path:"adminquery",component:UserInquiry},
  { path: '', redirectTo: 'admindashboard', pathMatch: 'full' }
]

}
];
@NgModule({
   imports: [RouterModule.forChild(routes)],
  exports: [RouterModule ,CommonModule],
})
export class AppRoutingModule {


}
