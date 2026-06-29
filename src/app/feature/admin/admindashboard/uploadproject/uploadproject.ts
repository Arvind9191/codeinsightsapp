import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-uploadproject',
  standalone: false,
  templateUrl: './uploadproject.html',
  styleUrl: './uploadproject.css',
})
export class Uploadproject {


 uploadForm: FormGroup;
  techOptions: string[] = ['Angular', 'React', 'Vue', 'Node.js', 'C#', 'Java', 'Python', 'SQL'];
//   selectedFiles: { [key: string]: File | null } = {
//   projectfile: null,
//   imagefile: null,
//   projectReport: null
// };

// onFileSelected(event: any, field: string) {
//   const file = event.target.files[0];
//   if (file) {
//     this.selectedFiles[field] = file;
//     console.log(`${field} selected:`, file.name);
//   }
// }
categories = [
  { id: 'edu', name: 'Education Project' },
  { id: 'ecom', name: 'E-Commerce Project' },
  { id: 'health', name: 'Healthcare Project' },
  { id: 'finance', name: 'Finance Project' },
  { id: 'social', name: 'Social Media Project' },
  { id: 'ai', name: 'AI/ML Project' },
  { id: 'cloud', name: 'Cloud-Native Project' }
];
  selectedFiles: { [key: string]: File | null } = {
    projectfile: null,
    imagefile: null,
    projectReport: null
  };

  constructor(private fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      categoryId: [''],
      title: [''],
      description: [''],
      price: [''],
      paymentPageUrl: [''],
      aboutVideoUrl: [''],
      setupVideoUrl: [''],
      technologies: [[]]
    });
  }

  onFileSelected(event: any, field: string) {
    const file = event.target.files[0];
    this.selectedFiles[field] = file;
  }

  onSubmit() {
    const formData = new FormData();
    Object.keys(this.uploadForm.value).forEach(key => {
      formData.append(key, this.uploadForm.value[key]);
    });

    // Append files
    Object.keys(this.selectedFiles).forEach(key => {
      if (this.selectedFiles[key]) {
        formData.append(key, this.selectedFiles[key] as File);
      }
    });

    // TODO: Call your API endpoint /api/Files/upload
    console.log('FormData ready to send:', formData);
  }

}
