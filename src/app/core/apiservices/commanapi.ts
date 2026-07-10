import { I } from "@angular/cdk/keycodes";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Endpoint, enviroment } from '../../../environments/environment';
import { ApiResponse } from "../../models/CommonModel";
@Injectable({
    providedIn:'root'
})

export class CommanApi{
      private baseurl = enviroment.baseapiurl;

http = inject(HttpClient)


GetTenantData(){
    let url  = this.baseurl+Endpoint.tenant
    return this.http.get<ApiResponse>(url)

}





}