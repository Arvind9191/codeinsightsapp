import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ViewInquiryDialog } from './view-inquiry-dialog/view-inquiry-dialog';
import { CommanApi } from '../../../../core/apiservices/commanapi';

@Component({
  selector: 'app-user-inquiry',
  standalone: false,
  templateUrl: './user-inquiry.html',
  styleUrl: './user-inquiry.css',
})
export class UserInquiry {

  constructor(private dialog: MatDialog) { }
  displayedColumns: string[] = ['fullname', 'email', 'reason', 'message', 'date', 'status', 'actions'];
  dataSource = new MatTableDataSource(INQUIRY_DATA);
  private apis = inject(CommanApi);
  reasons: string[] = [
    'Project Running Issue',
    'Project Setup Issue',
    'Payment / Billing Issue',
    'License / Access Issue',
    'Bug / Error Report',
    'Feature Request',
    'Academic / Partnership Inquiry'
  ];

  selectedReason: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {

    this.apis.GetMsg(10, 1).subscribe(res => {
      let inquerydata = []
      debugger

      res.data.forEach((ele: any) => {
        let obj = {
          fullname:ele.fullName,
          email: ele.email,
          reason: ele.reason,
          message: ele.message,
          date: new Date(ele.createdAt),
           status: ele.status
        }
        inquerydata.push(obj)
         this.dataSource = new MatTableDataSource(inquerydata)
      });
    })




  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  viewInquiry(row: any) {
    this.dialog.open(ViewInquiryDialog, {
      width: '400px',
      data: row
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  filterByReason() {
    this.dataSource.filter = this.selectedReason.trim().toLowerCase();
  }

  filterByDate(event: any) {
    const date = event.value;
    this.dataSource.filterPredicate = (data, filter) =>
      new Date(data.date).toDateString() === new Date(filter).toDateString();
    this.dataSource.filter = date;
  }



  markResolved(row: any) {
    row.status = 'Resolved';
    this.dataSource._updateChangeSubscription();
  }

  deleteInquiry(row: any) {
    const index = this.dataSource.data.indexOf(row);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription();
    }
  }
}

const INQUIRY_DATA = [
  { fullname: "Krishna Mohan", email: 'user1@example.com', reason: 'Project Running Issue', message: 'App crashes on login', date: new Date('2026-06-25'), status: 'Pending' },
  { fullname: "Krishna Mohan", email: 'user2@example.com', reason: 'Payment / Billing Issue', message: 'Invoice not received', date: new Date('2026-06-26'), status: 'Pending' },
  { fullname: "Krishna Mohan", email: 'user3@example.com', reason: 'Bug / Error Report', message: 'Error on dashboard', date: new Date('2026-06-27'), status: 'Resolved' }
];