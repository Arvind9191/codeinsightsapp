import { inject, Injectable } from "@angular/core";
import { UploadProjectRequest } from "../../models/CommonModel";
import { Observable } from "rxjs/internal/Observable";
import { HttpClient } from "@angular/common/http";
import { Endpoint, enviroment } from '../../../environments/environment';
@Injectable({
    providedIn:'root'
})

export class FileServices{

      private baseurl = enviroment.baseapiurl;

  private http = inject(HttpClient);

    uploadProject(project: UploadProjectRequest, 
              projectFile: File, 
              imageFile: File, 
              projectReport: File): Observable<any> {
  

let url  = this.baseurl+Endpoint.fileupload
  const formData = new FormData();
  formData.append('CategoryId', project.categoryId);
  formData.append('Title', project.title);
  formData.append('Description', project.description);
  formData.append('Price', project.price.toString());
  formData.append('PaymentPageUrl', project.paymentPageUrl);
  formData.append('AboutVideoUrl', project.aboutVideoUrl);
  formData.append('SetupVideoUrl', project.setupVideoUrl);
  project.technologies.forEach(t => formData.append('Technologies', t));

  if (projectFile) formData.append('Projectfile', projectFile);
  if (imageFile) formData.append('Imagefile', imageFile);
  if (projectReport) formData.append('ProjectReport', projectReport);

  return this.http.post(url, formData);
}



}