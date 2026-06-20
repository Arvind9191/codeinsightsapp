import { Component, Input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-prodetails',
  imports: [],
  templateUrl: './prodetails.html',
  styleUrl: './prodetails.css',
})
export class Prodetails implements OnInit {
  @Input() productId!: string;

  // State Management via Signals
  selectedColor = signal<string>('Aurora Green');
  selectedVariantIndex = signal<number>(0);
  mainImage = signal<string>('assets/phone-green-main.jpg');

  // Static assets representing UI data
  colorOptions = [
    { name: 'Aurora Green', code: '#e0f2f1', img: 'assets/phone-green-thumb.jpg' },
    { name: 'Space Black', code: '#212121', img: 'assets/phone-black-thumb.jpg' },
    { name: 'Nebula Purple', code: '#4a148c', img: 'assets/phone-purple-thumb.jpg' }
  ];

  variants: any[] = [
    { storage: '128 GB', ram: '6 GB', discount: '41%', originalPrice: '50,999', salePrice: '29,999' },
    { storage: '128 GB', ram: '8 GB', discount: '43%', originalPrice: '55,999', salePrice: '31,999' },
    { storage: '256 GB', ram: '8 GB', discount: '44%', originalPrice: '62,999', salePrice: '34,999' }
  ];

  ngOnInit(): void {
    // Logic to load product details using your standard library services based on productId can go here
  }

  changeColor(colorName: string, thumbImg: string): void {
    this.selectedColor.set(colorName);
    this.mainImage.set(thumbImg); // Updates the view dynamically
  }

  selectVariant(index: number): void {
    this.selectedVariantIndex.set(index);
  }


 activeSectionId = signal<number | null>(1); 

  // Aapka alag-alag content array me define hoga
  sections = signal<any[]>([
    { id: 1, title: 'Browse by Categories', description: 'Take the first step towards achieving your goals with our comprehensive online technology.', image: 'assets/images/student.png' },
    { id: 2, title: 'Using Technology in this project', description: 'Explore the modern frontend and backend architectures we built inside this library module.Explore the modern frontend and backend architectures we built inside this library module.Explore the modern frontend and backend architectures we built inside this library module.Explore the modern frontend and backend architectures we built inside this library module.Explore the modern frontend and backend architectures we built inside this library module.', image: 'assets/images/student.png' },
    { id: 3, title: 'Project Implementation & Deployment', description: 'Learn how to package your system and deploy it easily on cloud infrastructure.', image: 'assets/images/student.png' },
    { id: 4, title: 'Database Structure & Schemes', description: 'Detailed visual guide through relational database design and application indexing.', image: 'assets/images/student.png' },
    { id: 5, title: 'Submission Guide & Reports', description: 'Get access to ready-made presentation templates, black-book formats, and abstracts.', image: 'assets/images/student.png' }
  ]);

  toggleSection(id: number) {
    // Agar usi button par dobara click hua toh close (null) kar do, nahi toh nayi ID open karo
    this.activeSectionId.update(currentId => currentId === id ? null : id);
}

 buynow() {
  
}
}