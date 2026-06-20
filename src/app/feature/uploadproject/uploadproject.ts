import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-uploadproject',
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './uploadproject.html',
  styleUrl: './uploadproject.css',
})
export class Uploadproject {

  uploadprojectform:FormGroup;
  selectedFile: File | null = null;
fileError: string = '';
 selectedVideo: File | null = null;
  videoUrl: string | null = null;
  errorMessage = '';

  constructor(private fb :FormBuilder,private http: HttpClient)
  {
    this.uploadprojectform=this.fb.group({   
      projectname:['',Validators.required,Validators.minLength(3)],
      title:['',Validators.required,Validators.minLength(3)],
      price:['',Validators.required],
      thomble:['',Validators.required],
      upproject:['',Validators.required],
      demovideo:['',Validators.required]

  })
  }
onFileSelect(event: any): void { 
  const file = event.target.files[0]; 
  if (!file) return;  
  const extension = file.name.split('.').pop()?.toLowerCase(); 
  if (extension !== 'zip') {
    this.fileError = 'Only ZIP files are allowed';
    this.selectedFile = null; 
    event.target.value = ''; 
    
    return;
  }
   this.fileError = '';
  this.selectedFile = file;

  console.log('Selected ZIP file:', file);
}


 onVideoSelect(event: any): void {

    const file = event.target.files[0];

    if (!file) return;

    // Validate video type
    if (!file.type.startsWith('video/')) {
      this.errorMessage = 'Please select a valid video';
      return;
    }

    this.errorMessage = '';
    this.selectedVideo = file;

    // Preview
    this.videoUrl = URL.createObjectURL(file);
  }

  uploadVideo(): void {

    if (!this.selectedVideo) return;

    const formData = new FormData();

    formData.append(
      'video',
      this.selectedVideo,
      this.selectedVideo.name
    );

    this.http.post(
      'http://localhost:3000/upload',
      formData
    )
    .subscribe({
      next: (res) => {
        console.log('Uploaded successfully', res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  
onSubmit(){
  if (this.uploadprojectform.invalid) { this.uploadprojectform.markAllAsTouched(); return;
  }
}
  


}
