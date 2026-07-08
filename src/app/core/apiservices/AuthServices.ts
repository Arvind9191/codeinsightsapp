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


  Signup(data: any) {

    const fullurl = this.baseurl + Endpoint.signup;
    return this.http.post(fullurl, data);
  }

  VerifyEmail(data:any){
    const url = this.baseurl+Endpoint.verifyemail+`?userId=${data.userid}&token=${data.token}`;
    return this.http.get(url);
  }

 forgetPassword(email:any){
    const url = this.baseurl+Endpoint.forgetpassword;
    return this.http.post(url , email);
  }

   updatePassword(obj:any){
    const url = this.baseurl+Endpoint.updatePassword;
    return this.http.post(url , obj);
  }

profileNameUpdate(obj:any){
    const url = this.baseurl+Endpoint.updateprofileName;
    return this.http.post(url , obj);
  }






}
