import { Injectable, signal } from '@angular/core';
import { ApiResponse } from '../../models/CommonModel';
import { single } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Globdata {
// constructor(private res:ApiResponse){

// }

userdata=  signal<ApiResponse>({data:"", statusCode:0,message:'intialize userdata variable'} )
tenantData = signal<ApiResponse>({data:"", statusCode:0,message:'intialize tenant variable'})


}
