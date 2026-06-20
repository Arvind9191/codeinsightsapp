import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../core/Auth/auth-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogActions, MatDialogContent, MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { SignUp } from '../sign-up/sign-up';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [MatDialogActions, MatDialogContent, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   public authService = inject(AuthService); 
  
  public readonly isLoggedIn = signal<boolean>(false); 
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,    private dialogRef: MatDialogRef<Login>,private dialog: MatDialog) 
  {     
    this.loginForm = this.fb.group({ 
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    }); 
  }   
  close() {
    this.dialogRef.close();
  }        
  onSubmit(): void { 
       if (this.loginForm.invalid) { this.loginForm.markAllAsTouched(); return;
  }
 }

 opensignuppopup(){    
  this.dialogRef.close() 
     const dialogref=this.dialog.open(
       SignUp,{
         width:'100%', 
         disableClose: true
       }
     );
     dialogref.afterClosed().subscribe((result:any)=>{
       if(result){  
       }
     })
   }
}
