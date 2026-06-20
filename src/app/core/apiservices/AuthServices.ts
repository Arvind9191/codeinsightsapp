import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoint, enviroment } from '../../../environments/environment';
import { ApiResponse } from '../../models/CommonModel';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {

    private baseurl=enviroment.baseapiurl;
  constructor(private http: HttpClient) {}

  Login(data: any) {
    const fullurl=this.baseurl+Endpoint.login;
    return this.http.post<ApiResponse>(fullurl,data)
  }
}
