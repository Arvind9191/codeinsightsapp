import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  videoUrl:any
   searchText = '';

  constructor( private sanitizer:DomSanitizer,private router:Router){
 this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/T_TsCkDqp2w'
    );
  }
  
  playVideo() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    );
  }

  getSafeUrl(url: string): SafeResourceUrl {
  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}
  projects = [
  {
    id:1,
    title:'Hospital Management System',
    srcUrl:'https://www.youtube.com/embed/T_TsCkDqp2w',
    technology:'Angular + .NET Core',
    price:'Free'
  },
  {
    id:2,
    title:'E-Commerce Website',
    srcUrl:'https://www.youtube.com/embed/shorts/z8OwX__ajFw?si=CDgk_m0hxXWbzF5i',
    technology:'Angular + SQL Server',
    price:'₹499'
  },
  {  
    id:2,
    title:'E-Commerce Website',
    srcUrl:'https://www.youtube.com/embed/shorts/TN47RdVTP0I?si=GUU8LBV7cIX70tVX',
    technology:'Angular + SQL Server',
    price:'₹499'
  },
  {
    id:2,
    title:'E-Commerce Website',
    srcUrl:'https://www.youtube.com/embed/shorts/lHoXpZMjEqg?si=XNN-8-PzU6Lg0JgQ',
    technology:'Angular + SQL Server',
    price:'₹499'
  }
]; 


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
  downloadProject(id: number) {
    alert()
    console.log('Download', id);
  } 
  viewDetails(pro:any) { 
     this.router.navigate(["Prodetails"]);
  }

buynow(pro:any){
  alert(pro.id)
}



  courses = [
   
    {
      name:'C#',
      image:'assets/course/html.png',
      route:'/html-course',
      icon:'fa-regular fa-file-code'
    }, 
  
   
     
    {
      name:'JQUERY',
      image:'assets/course/html.png',
      route:'/html-course',
      icon:'fa-regular fa-file-code',
      color:'#0769AD'
    }, 
    {
      name:'JavaScript',
      image:'assets/course/js.png',
      route:'/javascript-course',
      icon:'fa-brands fa-js'
    },
    {
      name:'Python',
      image:'assets/course/python.png',
      route:'/python-course',
      icon:'fa-brands fa-python'
    }, 
    {
      name:'React',
      image:'assets/course/react.png',
      route:'/react-course',
      icon:'fa-brands fa-react'
    }, 
    {
      name:'MSSQL',
      image:'assets/course/sql.png',
      route:'/mssql-course',
      icon:'fa-solid fa-database'
    },
    {
      name:'Java',
      image:'assets/course/java.png',
      route:'/java-course',
      icon:'fa-brands fa-java'
    }, 
    {
      name:'.NET',
      image:'assets/course/dotnet.png',
      route:'/dotnet-course',
      icon:'fa-brands fa-windows'
    },
    {
      name:'.NET MVC',
      image:'assets/course/dotnet.png',
      route:'/dotnet-course',
      icon:'fa-solid fa-table-columns'
    },
     {
      name:'WEB API',
      image:'assets/course/react.png',
      route:'/react-course',
      icon:'fa-solid fa-network-wired'
    },
    {
      name:'Angular',
      image:'assets/course/flutter.png',
      route:'/flutter-course',
      //icon:'fa-solid fa-image'
      icon:'fa-brands fa-angular'
    }     
  ];

  filteredCourses() {
    return this.courses.filter(x =>
      x.name.toLowerCase()
      .includes(this.searchText.toLowerCase())
    );
  }
  openCourse(route:string) {
    this.router.navigate([route]);
  }
}
