import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-settings',
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {

  passwordForm: FormGroup;
  emailForm: FormGroup;
  isEmailVerified = false; // set from backend

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });

    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  changePassword() {
    if (this.passwordForm.valid) {
      console.log('Password updated:', this.passwordForm.value);
    }
  }

  updateEmail() {
    if (this.emailForm.valid) {
      console.log('Email updated:', this.emailForm.value);
    }
  }

  verifyEmail() {
    console.log('Verification email sent');
  }
}
