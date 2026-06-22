import { Injectable, signal } from '@angular/core';
import { ApiResponse } from '../../models/CommonModel';

@Injectable({
  providedIn: 'root',
})
export class Globdata {
// constructor(private res:ApiResponse){

// }

userdata=  signal<ApiResponse>({data:"", statusCode:0,message:'intialize userdata variable'} )


}
