import { Component } from '@angular/core';
import { MatModule } from '../../../MatModule';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../../../feature/admin/app-routing/app-routing-module";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faq',
  imports: [MatModule, CommonModule, AppRoutingModule , RouterLink],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {


  faqs = [

{
question:'What do I get after purchasing a project?',
answer:'You receive the complete source code, SQL database, documentation, installation guide, and any additional resources included with the project.'
},

{
question:'Is the source code included?',
answer:'Yes. Every project comes with full source code so you can study, customize, and extend it according to your requirements.'
},

{
question:'Will I receive the SQL database?',
answer:'Yes. Projects that require a database include SQL scripts or backup files for quick setup.'
},

{
question:'Can I use these projects for my college submission?',
answer:'Yes. Our projects are intended for learning and academic purposes. Review your institution’s guidelines before submitting any work.'
},

{
question:'Do you provide installation support?',
answer:'Yes. If you encounter setup issues, our support team will help you through the installation process.'
},

{
question:'Are future updates free?',
answer:'Yes. Any improvements or bug fixes released for your purchased project will be available to you at no additional cost.'
}

];
}
