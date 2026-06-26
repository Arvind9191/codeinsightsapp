import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
 defaultImage = 'assets/default-avatar.png';
  user = {
    name:'Arvind Kumar',
    profileImage: '/logo.png',
    email: 'arvindkumar@gmail.com',
    emailVerified: false
  };

  passwordData = { current: '', new: '', confirm: '' };

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // preview logic
      const reader = new FileReader();
      reader.onload = () => this.user.profileImage = reader.result as string;
      reader.readAsDataURL(file);
    }
  }

  updateProfileImage() {
    console.log('Profile image updated:', this.user.profileImage);
  }

  changePassword() {
    console.log('Password updated:', this.passwordData);
  }

  sendVerificationEmail() {
    console.log('Verification email sent to:', this.user.email);
  }



updateName() {
  console.log('Name updated:', this.user.name);
}

updateEmail() {
  console.log('Email updated:', this.user.email);
}



}
