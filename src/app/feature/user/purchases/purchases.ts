import { Component } from '@angular/core';

@Component({
  selector: 'app-purchases',
  standalone: false,
  templateUrl: './purchases.html',
  styleUrl: './purchases.css',
})
export class Purchases {

 purchases = [
    { name: 'Hospital Management System', date: 'Apr 15, 2026', amount: 4999, status: 'Completed' },
    { name: 'E-Commerce Website', date: 'May 02, 2026', amount: 8999, status: 'Completed' },
    { name: 'School Management System', date: 'Jun 10, 2026', amount: 6999, status: 'Pending' }
  ];

  displayedColumns: string[] = ['name', 'date', 'amount', 'status', 'actions'];

}
