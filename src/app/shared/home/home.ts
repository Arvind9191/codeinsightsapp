import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Faq } from "./faq/faq";
import { Cta } from "./cta/cta";
import { Testimonials } from "./testimonials/testimonials";
import { LatestBlogs } from "./latest-blogs/latest-blogs";
import { Technologies } from "./technologies/technologies";
import { HowItWorks } from "./how-it-works/how-it-works";
import { WhyChoose } from "./why-choose/why-choose";
import { FeaturedProjects } from "./featured-projects/featured-projects";
import { Categories } from "./categories/categories";
import { Stats } from "./stats/stats";
import { Hero } from "./hero/hero";
import { MatModule } from '../../MatModule';
 
@Component({
  selector: 'app-home',
  imports: [MatModule, CommonModule, Faq, Cta, Testimonials, LatestBlogs, Technologies, HowItWorks, WhyChoose, FeaturedProjects, Categories, Stats, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
