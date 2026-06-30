import { Component, inject, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Editproject } from './editproject/editproject';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Deleteproject } from './deleteproject/deleteproject';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project { 
  

constructor(private dialog: MatDialog) {}

  
  displayedColumns: string[] = ['select','name','category','price','technology','analytics','status','actions'];
  dataSource = new MatTableDataSource(PROJECT_DATA);
  categories = ['Education','E-Commerce','Healthcare','Finance'];
  selectedCategory: string = '';
  expandedRow: any = null;

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 


editProject(row: any) {
  const dialogRef = this.dialog.open(Editproject, {
    width: '700px',
    maxWidth: '90vw',    // responsive max width (mobile/tablet)
    height: 'auto', 
    data: { ...row } // pass selected row data
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Updated project:', result);
      // Call API to update project here
      // Example: this.projectService.update(result).subscribe(...)
    }
  });
}

 ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

 
  
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  filterByCategory() {
    this.dataSource.filter = this.selectedCategory.trim().toLowerCase();
  }

  updatePrice(row: any) {
    console.log('Updated price:', row.price);
    // API call here
  }

  toggleStatus(row: any) {
    console.log('Status changed:', row.active);
    // API call here
  }

  // editProject(row: any) {
  //   console.log('Edit project:', row);
  // }

deleteProject(row: any) {
  const dialogRef = this.dialog.open(Deleteproject, {
    width: '300px',
    data: row
  });

  dialogRef.afterClosed().subscribe(confirm => {
    if (confirm) {
      const index = this.dataSource.data.indexOf(row);
      if (index >= 0) {
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription();
      }
    }
  });
}
  expandRow(row: any) {
    this.expandedRow = row;
  }

  bulkDisable() {
    debugger
    const selected = this.dataSource.data.filter(p => p.selected);
    console.log('Bulk disable:', selected);
  }

  bulkUpdatePrice() {
    const selected = this.dataSource.data.filter(p => p.selected);
    console.log('Bulk update price:', selected);
  }

  toggleAll(event: any) {
    const checked = event.checked;
    this.dataSource.data.forEach(p => p.selected = checked);
  }
}

const PROJECT_DATA = [
  { name:'Hospital Management', category:'Healthcare', price:500, technology:'Angular, SQL', downloads:120, active:true, description:'Hospital system project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'E-Commerce Store', category:'E-Commerce', price:800, technology:'Angular, Node.js', downloads:200, active:true, description:'Online shopping project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'School Management', category:'Education', price:600, technology:'Angular, .NET', downloads:150, active:true, description:'School admin project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'Library System', category:'Education', price:400, technology:'Angular, SQL', downloads:90, active:true, description:'Library management project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'Inventory Tracker', category:'Finance', price:700, technology:'Angular, C#', downloads:130, active:true, description:'Inventory tracking project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'Restaurant Ordering', category:'E-Commerce', price:550, technology:'Angular, Node.js', downloads:110, active:true, description:'Food ordering project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'Banking Portal', category:'Finance', price:950, technology:'Angular, Java', downloads:220, active:true, description:'Banking system project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'Social Media App', category:'Social Media', price:1000, technology:'Angular, Firebase', downloads:300, active:true, description:'Social networking project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'Healthcare Tracker', category:'Healthcare', price:650, technology:'Angular, SQL', downloads:140, active:true, description:'Patient tracking project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'Quiz Application', category:'Education', price:450, technology:'Angular, Node.js', downloads:170, active:true, description:'Quiz app project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'CRM System', category:'Business', price:1200, technology:'Angular, .NET', downloads:250, active:true, description:'Customer management project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'HR Management', category:'Business', price:800, technology:'Angular, SQL', downloads:180, active:true, description:'HR system project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'Travel Booking', category:'E-Commerce', price:900, technology:'Angular, Node.js', downloads:210, active:true, description:'Travel booking project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'Event Planner', category:'Business', price:500, technology:'Angular, Firebase', downloads:95, active:true, description:'Event planning project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'Fitness Tracker', category:'Healthcare', price:700, technology:'Angular, Java', downloads:160, active:true, description:'Fitness tracking project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'Blog Platform', category:'Social Media', price:600, technology:'Angular, Node.js', downloads:140, active:true, description:'Blogging project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'Online Exam System', category:'Education', price:750, technology:'Angular, .NET', downloads:190, active:true, description:'Exam management project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'Portfolio Website', category:'Business', price:300, technology:'Angular, HTML/CSS', downloads:80, active:true, description:'Portfolio project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'Chat Application', category:'Social Media', price:850, technology:'Angular, Firebase', downloads:230, active:true, description:'Chat app project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false },
  { name:'Cloud File Storage', category:'Cloud-Native', price:1100, technology:'Angular, Node.js', downloads:260, active:true, description:'Cloud storage project', aboutVideo:'url', setupVideo:'url', report:'report.pdf', selected:false }
];
