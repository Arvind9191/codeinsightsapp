import { NgModule } from "@angular/core";
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
import { BaseChartDirective } from 'ng2-charts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field'; // ✅ Required for mat-form-field
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({

    imports: [
        MatExpansionModule,
        MatGridListModule,
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
        MatSliderModule
    ],
    exports: [
        MatExpansionModule,
        MatGridListModule,
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
        MatSliderModule
    ]

})


export class MatModule {

}