import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { validate } from '@angular/forms/signals';
import { Login } from '../login/login';
import {
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Projectservices } from '../../../core/apiservices/projectservices';
import { AuthServices } from '../../../core/apiservices/AuthServices';

@Component({
  selector: 'app-sign-up',
  imports: [ ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  signupForm: FormGroup;
  auth:any = inject(AuthServices)
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<Login>,
    private dialog: MatDialog,
    private proservice: Projectservices,
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required, Validators.minLength(3)],
      lastName: ['', Validators.required, Validators.minLength(3)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     // userrole: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    } else {
      debugger
      let data = this.signupForm.value;
         let   obje=    {
  "firstName":data.firstName ,
  "lastName":data.lastName,
  "email": data.email,
  "password":data.password,
  "userrole": "user"
}
      this.auth.Signup(obje).subscribe({
        next: (response: any) => {

          console.log('API Success Response:', response);
          alert('Signup successful');
          this.close()
        },

        error: (error: any) => {
          console.log('API Error:', error);
          alert(error.error?.message || 'Signup failed');
        },
        complete: () => {
          console.log('Request completed');
        },
      });
    }
  }

  close() {
    this.dialogRef.close();
  }
  openLoginPopup() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(Login, {
      width: '500px',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Login data:', result);
      }
    });
  }
}
