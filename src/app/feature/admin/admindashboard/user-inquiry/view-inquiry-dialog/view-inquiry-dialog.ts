import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-inquiry-dialog',
  standalone: false,
  templateUrl: './view-inquiry-dialog.html',
  styleUrl: './view-inquiry-dialog.css',
})
export class ViewInquiryDialog {

   replyMessage: string = '';

  constructor(
    public dialogRef: MatDialogRef<ViewInquiryDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close() {
    this.dialogRef.close();
  }

  sendReply() {
    if (!this.replyMessage.trim()) {
      alert('Reply message cannot be empty!');
      return;
    }

    // 🔧 Here you would call your backend API to send the reply email
    // Example: this.inquiryService.sendReply(this.data.email, this.replyMessage).subscribe(...)

    alert(`Reply sent to ${this.data.email}:\n\n${this.replyMessage}`);
    this.dialogRef.close();
  }
}
