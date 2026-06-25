import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  standalone: false,
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.css',
})
export class DashboardHome {

recentPurchases = [
  { name: 'E-Commerce System', date: 'Apr 15, 2024', amount: 4999, status: 'Completed' },
  { name: 'Hospital Management', date: 'Mar 28, 2024', amount: 8999, status: 'Completed' },
  { name: 'School Management System', date: 'Mar 10, 2024', amount: 6999, status: 'Pending' }
];

displayedColumns: string[] = ['name', 'date', 'amount', 'status'];

myProjects = [
  { title: 'Hospital Management System', technology: 'Angular, MVC, SQL', description: 'Complete hospital management solution.' },
  { title: 'E-Commerce Website Project', technology: 'ASP.NET Core, Angular', description: 'Online shopping platform with cart and payment.' },
   { title: 'Hospital Management System', technology: 'Angular, MVC, SQL', description: 'Complete hospital management solution.' },
  { title: 'E-Commerce Website Project', technology: 'ASP.NET Core, Angular', description: 'Online shopping platform with cart and payment.' },
   { title: 'Hospital Management System', technology: 'Angular, MVC, SQL', description: 'Complete hospital management solution.' },
  { title: 'E-Commerce Website Project', technology: 'ASP.NET Core, Angular', description: 'Online shopping platform with cart and payment.' }
];


}
