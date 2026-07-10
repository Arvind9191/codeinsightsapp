import { Component, inject } from '@angular/core';
import { Header } from "../header/header";
import { Loader } from "../loader/loader";
import { RouterOutlet } from "@angular/router";
import { Footer } from "../footer/footer";
import { AuthService } from '../../core/Auth/auth-service';
import { Adminmenu } from "../adminmenu/adminmenu";
import { CommanApi } from '../../core/apiservices/commanapi';
import { ApiResponse } from '../../models/CommonModel';
import { Globdata } from '../globledata/globdata';

@Component({
  selector: 'app-layout',
  imports: [ RouterOutlet, Footer, Adminmenu],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  isLoading: boolean = false;
  public authService = inject(AuthService);
  public commanApi = inject(CommanApi)
  public globdata = inject(Globdata)
  constructor() {
    
  }



  ngOninit(){
    alert("layout call")
    this.commanApi.GetTenantData().subscribe((res:ApiResponse)=>{
         
      if(res.statusCode==200){
        this.globdata.tenantData.set(res)
      }
    })

  }

}
