import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Endpoint, enviroment } from '../../../environments/environment';
import { ApiResponse } from '../../models/CommonModel';
import { ProjectUpdate } from '../../models/projectmodel';

@Injectable({
  providedIn: 'root',
})
export class Projectservices {
  private baseurl = enviroment.baseapiurl;

  private http = inject(HttpClient);
  constructor() {}


  GetProjectAll(){
    let url = this.baseurl+Endpoint.projectlist
    return this.http.get<ApiResponse>(url)
  }

  GetProjectById(projectId:any){
    let url = this.baseurl+Endpoint.getprojectbyid+`/${projectId}`
    return this.http.get(url)
  }

  UpdateProject(Obj:ProjectUpdate){

    let url = this.baseurl+Endpoint+`/${Obj.projectId}`
    let obj = {
  "projectId": Obj.projectId,
  "title": Obj.title,
  "description": Obj.description,
  "price": Obj.price,
  "categoryName": Obj.categoryName,
  "categoryId": Obj.categoryId,
  "imagePath": Obj.imagePath,
  "aboutProjectUrl": Obj.aboutProjectUrl,
  "projectSetupurl":Obj.projectSetupUrl,
  "technology": Obj.technology,
  "paymentPageUrl": Obj.paymentPageUrl,
  "isAvailable": Obj.isAvailable
}


 return this.http.put(url,obj)

  }





  deleteProject(ProjectID:any , isDeleted:boolean){
    let url = this.baseurl+Endpoint.deleteproject+`/${ProjectID}?isAvailable=${isDeleted}`

   return  this.http.delete<ApiResponse>(url)

  }



  
}
