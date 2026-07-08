import { Component, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Globdata } from '../../../../shared/globledata/globdata';
import { ApiResponse, UploadProjectRequest } from '../../../../models/CommonModel';
import { FileServices } from '../../../../core/apiservices/fileservice';

@Component({
  selector: 'app-uploadproject',
  standalone: false,
  templateUrl: './uploadproject.html',
  styleUrl: './uploadproject.css',
})
export class Uploadproject {

 fileService:FileServices = inject(FileServices)
 uploadForm: FormGroup;
  techOptions: string[] = ['Angular', 'React', 'Vue', 'Node.js', 'C#', 'Java', 'Python', 'SQL'];
   globalData = inject(Globdata)
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



ngOnInit() {
  effect(() => {
    const data = this.globalData.tenantData();
    if (data) {
      console.log("Tenant data ready:", data);
     
    }
  });
}
  onFileSelected(event: any, field: string) {
    const file = event.target.files[0];
    this.selectedFiles[field] = file;
  }

  onSubmit() {

    
    debugger 
    //const formData = new FormData();
   
   let  formvalue:any = this.uploadForm.value;


    let projObj:UploadProjectRequest = {
      title:formvalue.title,
      description:formvalue.description,
      categoryId:formvalue.categoryId,
      paymentPageUrl:formvalue.paymentPageUrl,
      setupVideoUrl:formvalue.setupVideoUrl,
      price:formvalue.price,
      aboutVideoUrl:formvalue.aboutVideoUrl,
      technologies:formvalue.technologies
    }

    if(this.selectedFiles["projectfile"]!=null && this.selectedFiles["imagefile"] &&  this.selectedFiles["projectReport"]){

    this.fileService.uploadProject(projObj , this.selectedFiles["projectfile"] , this.selectedFiles["imagefile"] ,  this.selectedFiles["projectReport"]).subscribe((res:ApiResponse)=>{
      console.log(res)
    })
    }else{
      alert("Please select all file")
    }

  }

}
