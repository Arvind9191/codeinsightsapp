import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deleteproject',
  standalone: false,
  templateUrl: './deleteproject.html',
  styleUrl: './deleteproject.css',
})
export class Deleteproject {


   constructor(
    public dialogRef: MatDialogRef<Deleteproject>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  confirmDelete() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
