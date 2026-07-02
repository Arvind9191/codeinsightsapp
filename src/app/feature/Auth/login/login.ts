import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../core/Auth/auth-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogActions, MatDialogContent, MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { SignUp } from '../sign-up/sign-up';
import { AuthServices } from '../../../core/apiservices/AuthServices';
import { Globdata } from '../../../shared/globledata/globdata';
import { ToastrService } from 'ngx-toastr';
import { SharedData } from '../../../shared/sharedData/Data';
import { Cookies } from '../../../core/Auth/cookie.servcie';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public authService = inject(AuthService);
  public auth = inject(AuthServices);
  public globdata = inject(Globdata)
  public toster = inject(ToastrService)
  public shared = inject(SharedData)
  public cookie = inject(Cookies)
  public readonly isLoggedIn = signal<boolean>(false);
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<Login>, private dialog: MatDialog ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  close() {
    this.dialogRef.close();
  }
  onSubmit(): void {

    debugger
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); return;
    }
    let obj = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password
    }
    this.auth.Login(obj).subscribe((res) => {
      if(res.statusCode==200){
         this.globdata.userdata.set(res)
         this.shared.loginRes.set(res)
           this.cookie.setCookie(res)
         this.authService.login()
        //  this.toster.success("Login Successfully")

           this.close();
      }else{
         this.toster.error("Login Faild")
      }
     
      
    
    })


  }

  opensignuppopup() {
    this.dialogRef.close()
    const dialogref = this.dialog.open(
      SignUp, {
      width: '100%',
      disableClose: true
    }
    );
    dialogref.afterClosed().subscribe((result: any) => {
      if (result) {
      }
    })
  }
}
