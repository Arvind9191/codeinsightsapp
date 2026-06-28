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
@NgModule({
  declarations: [AdminUser, Project, FileManager, OfferAndDiscount, Dashboard , Admindashboard],
  imports: [CommonModule, AppRoutingModule, 
    MatCard,
    MatIcon,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormField,
    BaseChartDirective,
    MatLabel


    
  ],
  providers:[provideCharts(withDefaultRegisterables()), AdminService]
})
export class AdminModule {}
