import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AuthServices } from '../../../core/apiservices/AuthServices';
@Component({
  selector: 'app-email-verified',
  imports: [CommonModule],
  templateUrl: './email-verified.html',
  styleUrl: './email-verified.css',
})
export class EmailVerified {
  isEmailVerified: boolean = false; // set dynamically from backend
   constructor(private route: ActivatedRoute , private auth:AuthServices , private cd:ChangeDetectorRef){

   }

   ngOnInit(){

    this.route.queryParams.subscribe((params:any)=>{
          const userid = params["userId"]||null
          const token = params["token"]||null

          console.log(userid+ "  and "+ token)
          const obj = {
            userid:userid,
            token:token
          }
          this.auth.VerifyEmail(obj).subscribe((res:any)=>{
            console.log()
            debugger
            if(res.statusCode==200){
              this.isEmailVerified = true;
            }else{
              this.isEmailVerified = false;
            }
            this.cd.detectChanges()
          })
    })
   }

}
