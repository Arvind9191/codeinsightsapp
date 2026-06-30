import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-editproject',
  standalone: false,
  templateUrl: './editproject.html',
  styleUrl: './editproject.css',
})
export class Editproject {
  constructor(
    public dialogRef: MatDialogRef<Editproject>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
save() {
    this.dialogRef.close(this.data); // return updated project back to parent
  }

   cancel() {
    this.dialogRef.close();
  }
}
