import { I } from "@angular/cdk/keycodes";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Endpoint, enviroment } from '../../../environments/environment';
import { ApiResponse, UsersMessage } from "../../models/CommonModel";
import { of, tap } from "rxjs";
@Injectable({
    providedIn:'root'
})

export class CommanApi{
      private baseurl = enviroment.baseapiurl;
 private  allUserChache:{[key:string]:ApiResponse} ={}
 private allmsgChache:{[key:string]:ApiResponse} ={}
  http = inject(HttpClient)

// GetProjectAll(){
//     let url = this.baseurl+Endpoint.projectlist
//     if(this.GetAllProjectStore){
//       return of(this.GetAllProjectStore)
//     }else{
//       return this.http.get<ApiResponse>(url).pipe(tap(data=>this.GetAllProjectStore = data))
//     }
  
//   }
GetTenantData(){
    let url  = this.baseurl+Endpoint.tenant
    return this.http.get<ApiResponse>(url)
}

SaveMsg(obj:UsersMessage){
    let url = this.baseurl+Endpoint.savemsg

    return this.http.post<ApiResponse>(url, obj)
}

GetMsg(numberOfRecords:number , PageNumber:number){
     const cacheKey = `${numberOfRecords}-${PageNumber}`;
     if(this.allmsgChache[cacheKey]){
        return of(this.allmsgChache[cacheKey])
     }else{
    let url = this.baseurl+Endpoint.getmsg+`?numberOfRecords=${numberOfRecords}&PageNumber=${PageNumber}`
    return this.http.get<ApiResponse>(url).pipe(tap(res=>{
        this.allmsgChache[cacheKey] = res
    }))
     }

}

GetAllUser(PageNumber:number,PageSize:number){
     const cacheKey = `${PageSize}-${PageNumber}`;
     if(this.allUserChache[cacheKey]){
        return this.allUserChache[cacheKey]
     }else{
let url= this.baseurl+Endpoint.getallUser+`?PageNumber=${PageNumber}&PageSize=${PageSize}`

    return this.http.get<ApiResponse>(url).pipe(tap(res=>{
        this.allUserChache[cacheKey] = res;
    }))
     }
    
}



}