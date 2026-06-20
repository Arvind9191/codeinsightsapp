import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Endpoint, enviroment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Projectservices {
  private baseurl = enviroment.baseapiurl;
  private http = inject(HttpClient);
  constructor(private httpclient: HttpClient) {}

  Signup(data: any) {
    debugger
    alert('api request')
    const fullurl = this.baseurl + Endpoint.signup;
    return this.httpclient.post(fullurl, data);
  }
}
