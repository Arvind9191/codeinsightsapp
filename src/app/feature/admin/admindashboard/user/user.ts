import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class AdminUser {

 displayedColumns: string[] = ['srNo', 'email', 'name', 'registeredDate', 'isVerified', 'action'];
  dataSource = new MatTableDataSource<User>(USERS_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    debugger
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
debugger
    this.dataSource
  }

  filterByVerification(value: string) {
    this.dataSource.filterPredicate = (data: User, filter: string) =>
      filter === '' || String(data.isVerified) === filter;
    this.dataSource.filter = value;
  }

  viewMore(user: User) {
    alert(`Viewing details for ${user.name}`);
  }
}

export interface User {
  srNo: number;
  email: string;
  name: string;
  registeredDate: Date;
  isVerified: boolean;
}

const USERS_DATA: User[] = [
  { srNo: 1, email: 'john@example.com', name: 'John', registeredDate: new Date('2024-01-10'), isVerified: true },
  { srNo: 2, email: 'jane@example.com', name: 'Jane', registeredDate: new Date('2024-02-15'), isVerified: false },
  { srNo: 3, email: 'alex@example.com', name: 'Alex', registeredDate: new Date('2024-03-05'), isVerified: true },
  { srNo: 4, email: 'maria@example.com', name: 'Maria', registeredDate: new Date('2024-03-20'), isVerified: false },
  { srNo: 5, email: 'sam@example.com', name: 'Sam', registeredDate: new Date('2024-04-01'), isVerified: true },
  { srNo: 6, email: 'lisa@example.com', name: 'Lisa', registeredDate: new Date('2024-04-18'), isVerified: false },
  { srNo: 7, email: 'david@example.com', name: 'David', registeredDate: new Date('2024-05-02'), isVerified: true },
  { srNo: 8, email: 'sophia@example.com', name: 'Sophia', registeredDate: new Date('2024-05-12'), isVerified: false },
  { srNo: 9, email: 'mike@example.com', name: 'Mike', registeredDate: new Date('2024-06-01'), isVerified: true },
  { srNo: 10, email: 'emma@example.com', name: 'Emma', registeredDate: new Date('2024-06-15'), isVerified: false },
  { srNo: 11, email: 'chris@example.com', name: 'Chris', registeredDate: new Date('2024-07-01'), isVerified: true },
  { srNo: 12, email: 'olivia@example.com', name: 'Olivia', registeredDate: new Date('2024-07-20'), isVerified: false },
  { srNo: 13, email: 'ryan@example.com', name: 'Ryan', registeredDate: new Date('2024-08-05'), isVerified: true },
  { srNo: 14, email: 'nina@example.com', name: 'Nina', registeredDate: new Date('2024-08-22'), isVerified: false },
  { srNo: 15, email: 'kevin@example.com', name: 'Kevin', registeredDate: new Date('2024-09-10'), isVerified: true },
  { srNo: 16, email: 'grace@example.com', name: 'Grace', registeredDate: new Date('2024-09-25'), isVerified: false },
  { srNo: 17, email: 'paul@example.com', name: 'Paul', registeredDate: new Date('2024-10-05'), isVerified: true },
  { srNo: 18, email: 'mia@example.com', name: 'Mia', registeredDate: new Date('2024-10-18'), isVerified: false },
  { srNo: 19, email: 'adam@example.com', name: 'Adam', registeredDate: new Date('2024-11-01'), isVerified: true },
  { srNo: 20, email: 'zoe@example.com', name: 'Zoe', registeredDate: new Date('2024-11-15'), isVerified: false }
];

