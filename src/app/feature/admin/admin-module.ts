import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing/app-routing-module';
import { AdminUser } from './admindashboard/user/user';
import { Project } from './admindashboard/project/project';
import { FileManager } from './admindashboard/file-manager/file-manager';
import { OfferAndDiscount } from './admindashboard/offer-and-discount/offer-and-discount';
import { Dashboard } from './admindashboard/dashboard/dashboard';
import { Admindashboard } from './admindashboard/admindashboard';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
import { AdminService } from './adminServicers';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field'; // ✅ Required for mat-form-field
import { MatInputModule } from '@angular/material/input';
import { Uploadproject } from './admindashboard/uploadproject/uploadproject';
import { Editproject } from './admindashboard/project/editproject/editproject';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { Deleteproject } from './admindashboard/project/deleteproject/deleteproject';
import { UserInquiry } from './admindashboard/user-inquiry/user-inquiry';
import { ViewInquiryDialog } from './admindashboard/user-inquiry/view-inquiry-dialog/view-inquiry-dialog';
@NgModule({
  declarations: [
    AdminUser,
    Project,
    FileManager,
    OfferAndDiscount,
    Dashboard,
    Admindashboard,
    Uploadproject,
    Editproject,
    Deleteproject,
    UserInquiry,
    ViewInquiryDialog,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCard,
    MatIcon,
    MatDatepickerModule,
    MatTableModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormField,
    BaseChartDirective,
    MatLabel,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatChipsModule,

    MatCheckboxModule,

    MatExpansionModule,
  ],
  providers: [provideCharts(withDefaultRegisterables()), AdminService],
})
export class AdminModule {}
