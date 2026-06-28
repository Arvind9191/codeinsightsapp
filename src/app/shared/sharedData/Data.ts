import { inject, Injectable, signal } from "@angular/core";
import { ApiResponse } from "../../models/CommonModel";
@Injectable({
    providedIn:"root"
})

export class SharedData{
loginRes = signal<ApiResponse>({
    data:'logout',
    statusCode:0,
    message:''
})


}