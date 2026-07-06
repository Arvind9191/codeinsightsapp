import { inject, Injectable } from "@angular/core";
import { ApiResponse } from "../../models/CommonModel";
import { AuthService } from "./auth-service";
import { SharedData } from "../../shared/sharedData/Data";

@Injectable({
    providedIn: 'root'
})

export class Cookies {

    shardData= inject(SharedData)
    currentTimestamp!: string;
    nextTwoHourTimestamp!: number;
 authService = inject(AuthService);

    setCookie(data: ApiResponse) {

        try {
            debugger
            const now = new Date();
          
            // Add 2 hours
            new Date(now.getTime() + (2 * 60 * 60 * 1000)).getTime()
            this.nextTwoHourTimestamp =  new Date(now.getTime() + ( 2 *60 * 60 * 1000)).getTime();

            var log = {
                role: data.data.userRole,
                time: this.nextTwoHourTimestamp
            }
            localStorage.setItem('login', JSON.stringify(log))
        } catch (e) {
            console.log(e)
        }

    }


    removeCookie() {
        try {
            localStorage.removeItem('login')
        } catch (e) {
            console.log(e)
        }
    }


    stayLogin(params:any) {
        try {
            debugger
           var logingData =    localStorage.getItem('login')??""
           if(logingData!=null && logingData!=""){
               let login = JSON.parse(logingData)
               const currentTimestamp =new Date().getTime();
                if(login.time>currentTimestamp){
                 
                   let islogin: boolean = false
                   let userType:any = 'logout'
                    if(login.role=='user' && params.includes('/user')){
                        islogin= true
                         userType = JSON.stringify(localStorage.getItem("userdetails"))
                    }else if(login.role=='admin' && params.includes('/admin')){
                         islogin = true
                        userType = JSON.stringify(localStorage.getItem("userdetails"))
                    }else{
                        userType = 'logout'
                        islogin =false;
                    }

                        let logres:ApiResponse = {
                            data:userType,
                            statusCode:0,
                            message:islogin?"stay login":'logout'
                        }
                        this.shardData.loginRes.set(logres)
                    if(islogin){
                        this.authService.isLoggedIn.set(true)
                        return true;
                    }else{
                          this.authService.isLoggedIn.set(false)
                        return false;
                    }
                }else{

                    localStorage.removeItem("userdetails")
                    localStorage.removeItem("login")
                    return false;
                }

           }else{
            return false;
           }
       
            
        } catch (e) {
            console.log(e)
            return false
        }
    }
}