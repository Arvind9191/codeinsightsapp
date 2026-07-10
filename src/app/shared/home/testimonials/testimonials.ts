import { Component } from '@angular/core';
import { MatModule } from '../../../MatModule';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [MatModule , CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {



  testimonials = [

{
    name:'Rahul Sharma',
    designation:'B.Tech CSE Student',
    image:'assets/users/user1.jpg',
    review:'The documentation was excellent and the project worked perfectly. I completed my final year project in just a few days.'
},

{
    name:'Priya Singh',
    designation:'MCA Student',
    image:'assets/users/user2.jpg',
    review:'Clean source code, proper folder structure and an easy installation guide. Highly recommended.'
},

{
    name:'Aman Verma',
    designation:'Software Engineer',
    image:'assets/users/user3.jpg',
    review:'The source code quality exceeded my expectations. The database and documentation saved me a lot of time.'
}

];
}
