import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-email-verified',
  imports: [CommonModule],
  templateUrl: './email-verified.html',
  styleUrl: './email-verified.css',
})
export class EmailVerified {
  isEmailVerified: boolean = false; // set dynamically from backend


}
