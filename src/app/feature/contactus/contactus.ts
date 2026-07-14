import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommanApi } from '../../core/apiservices/commanapi';
import { UsersMessage } from '../../models/CommonModel';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {

  private apis = inject(CommanApi);
  private fb = inject(FormBuilder);
  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['general', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  // Helper template method to check form field invalid states
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    alert();
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    let obj: UsersMessage = {
      fullName: this.contactForm.value.fullName,
      email: this.contactForm.value.email,
      reason: this.contactForm.value.reason,
      message: this.contactForm.value.message
    }
    this.isSubmitting = true;
    this.submitStatus = 'idle';

this.apis.SaveMsg(obj).subscribe(res=>{
      console.log(res)
      this.isSubmitting = false;
      this.submitStatus = 'success';
      this.contactForm.reset({ subject: 'general' });
})
   
  }


}
