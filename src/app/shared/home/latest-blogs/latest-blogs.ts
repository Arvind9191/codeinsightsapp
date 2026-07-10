import { Component } from '@angular/core';
import { MatModule } from '../../../MatModule';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-latest-blogs',
  imports: [MatModule , CommonModule],
  templateUrl: './latest-blogs.html',
  styleUrl: './latest-blogs.css',
})
export class LatestBlogs {
blogs = [

{
    image:'assets/blogs/rag.webp',
    category:'AI',
    readTime:'8 min',
    date:'12 Jul 2026',
    title:'How to Implement RAG in ASP.NET Core',
    description:'Learn Retrieval-Augmented Generation using OpenAI, Vector Database and ASP.NET Core.'
},

{
    image:'assets/blogs/jwt.webp',
    category:'.NET',
    readTime:'10 min',
    date:'10 Jul 2026',
    title:'JWT Authentication using ASP.NET Core Identity',
    description:'Complete guide to JWT authentication, refresh tokens and Identity.'
},

{
    image:'assets/blogs/angular.webp',
    category:'Angular',
    readTime:'12 min',
    date:'08 Jul 2026',
    title:'Build Dashboard with Angular Material',
    description:'Create a modern responsive dashboard using Angular Material.'
},

{
    image:'assets/blogs/sql.webp',
    category:'SQL',
    readTime:'7 min',
    date:'05 Jul 2026',
    title:'10 SQL Server Performance Tips',
    description:'Improve query performance with indexing, joins and execution plans.'
},

{
    image:'assets/blogs/clean.webp',
    category:'Architecture',
    readTime:'15 min',
    date:'01 Jul 2026',
    title:'Clean Architecture in ASP.NET Core',
    description:'Build scalable enterprise applications using Clean Architecture and CQRS.'
},

{
    image:'assets/blogs/project.webp',
    category:'Career',
    readTime:'6 min',
    date:'28 Jun 2026',
    title:'20 Final Year Project Ideas',
    description:'Trending final year project ideas with complete source code.'
}

];

}



export interface Blog {

    title:string;

    excerpt:string;

    image:string;

    category:string;

    readTime:string;

    url:string;

}