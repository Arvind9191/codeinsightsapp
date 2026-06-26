import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

 totalSales = 8950;
  totalRevenue = 325400;
  activeProjects = 24;
  newUsers = 1280;
  usersThisMonth = 220;

  // Chart data
  salesLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  salesData = [
    { data: [5000, 7000, 8000, 10000, 12000, 15000], label: 'Sales' }
  ];
public chartOptions: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' // TypeScript now correctly identifies this as a valid position type
    }
  }
};

  // Table data
  displayedColumns: string[] = ['rank', 'name', 'tech', 'sales', 'revenue'];
  topProjects = [
    { rank: 1, name: 'E-Commerce App', tech: 'Angular', sales: 620, revenue: 124000 },
    { rank: 2, name: 'CRM System', tech: '.NET', sales: 540, revenue: 98500 },
    { rank: 3, name: 'Portfolio Website', tech: 'React', sales: 470, revenue: 75200 },
    { rank: 4, name: 'Booking System', tech: 'PHP', sales: 380, revenue: 60800 },
    { rank: 5, name: 'Learning Platform', tech: 'Node.js', sales: 310, revenue: 48900 }
  ];
barChartData: any;
barChartOptions: any;
}
