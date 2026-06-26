import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

myProjects = [
  {
    title: 'Hospital Management System',
    technology: 'Angular, MVC, SQL',
    description: 'Complete hospital management solution with patient records and billing.',
    reportUrl: 'assets/reports/hospital-management.pdf'
  },
  {
    title: 'E-Commerce Website',
    technology: 'ASP.NET Core, Angular',
    description: 'Online shopping platform with cart, payment gateway, and admin dashboard.',
    reportUrl: 'assets/reports/ecommerce.pdf'
  },
  {
    title: 'School Management System',
    technology: 'Angular, Node.js, MongoDB',
    description: 'Manage students, teachers, classes, and exams efficiently.',
    reportUrl: 'assets/reports/school-management.pdf'
  }
];
}
