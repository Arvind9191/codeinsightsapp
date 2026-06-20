import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-projectlist',
  imports: [CommonModule, RouterLink],
  templateUrl: './projectlist.html',
  styleUrl: './projectlist.css',
})
export class Projectlist {

  constructor(private router:Router)
  {

  }
  projects1 = [
    {
      id:1,
      title: 'E-Commerce Website',
      technology: 'Angular 21, .NET Core, SQL Server',
      description: 'Complete responsive e-commerce solution.',
      price: 4999,
      image: 'thombles/hospital.png'
    },
    {
      id:2,
      title: 'School Management',
      technology: 'Angular, ASP.NET Core',
      description: 'Manage students, fees and attendance.',
      price: 6999,
      image: 'thombles/hospital.png'
    },
    {
      id:3,
      title: 'Hospital Management',
      technology: 'Angular, MVC, SQL',
      description: 'Patient and doctor management system.',
      price: 8999,
      image: 'thombles/hospital.png'
    },
    {
      id:4,
      title: 'Hospital Management',
      technology: 'Angular, MVC, SQL',
      description: 'Patient and doctor management system.',
      price: 8999,
      image: 'thombles/hospital.png'
    },
    {
      id:4,
      title: 'Hospital Management',
      technology: 'Angular, MVC, SQL',
      description: 'Patient and doctor management system.',
      price: 8999,
      image: 'thombles/hospital.png'
    },
    {
      id:4,
      title: 'Hospital Management',
      technology: 'Angular, MVC, SQL',
      description: 'Patient and doctor management system.',
      price: 8999,
      image: 'thombles/hospital.png'
    },
    {
      id:4,
      title: 'Hospital Management',
      technology: 'Angular, MVC, SQL',
      description: 'Patient and doctor management system.',
      price: 8999,
      image: 'thombles/hospital.png'
    },
    {
      id:4,
      title: 'Hospital Management',
      technology: 'Angular, MVC, SQL',
      description: 'Patient and doctor management system.',
      price: 8999,
      image: 'thombles/hospital.png'
    }
  ];  

  viewDetails(project: any) {
    this.router.navigate(["Prodetails"]);
}

buynow(project: any) {
  console.log('Buy Project:', project);
}
}
