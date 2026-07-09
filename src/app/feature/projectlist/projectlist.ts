import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Router, RouterLink } from '@angular/router';
import { MatModule } from '../../MatModule';
import { ProjectServices } from '../../core/apiservices/projectservices';
import { ApiResponse } from '../../models/CommonModel';
import { Globdata } from '../../shared/globledata/globdata';

@Component({
  selector: 'app-projectlist',
  imports: [CommonModule, RouterLink , MatModule],
  templateUrl: './projectlist.html',
  styleUrl: './projectlist.css',
})
export class Projectlist {
projectService:ProjectServices = inject(ProjectServices)


  searchTerm = '';
  selectedCategory = '';
  selectedTech = '';
  sortBy = 'newest';
  showFree = false;
  showPaid = true;
  priceRange = { min: 0, max: 10000 };

  categories = ['Hospital', 'School', 'E-Commerce', 'Inventory', 'Learning'];
  technologies = ['Angular', '.NET Core', 'MVC', 'SQL', 'PHP'];
projects:any = [];
  // projects:any = [
  //   { title: 'E-Commerce Website Hospital', category: 'Hospital', technologies: ['Angular', '.NET Core', 'SQL'], price: 4999 ,originalPrice:10000},
  //   { title: 'School Management Hospital', category: 'School', technologies: ['Angular', 'ASP.NET Core'], price: 6999 , originalPrice:10000 },
  //   { title: 'Hospital Management System', category: 'Hospital', technologies: ['Angular', 'MVC', 'SQL'], price: 8999,originalPrice:10000 },
  //   { title: 'Inventory Management System', category: 'Inventory', technologies: ['C#', '.NET'], price: 7499 },
  //   { title: 'Online Shop Management System', category: 'E-Commerce', technologies: ['Angular', '.NET'], price: 5999,originalPrice:10000 },
  //   { title: 'Learning Management Portal', category: 'Learning', technologies: ['Angular', 'PHP'], price: 0 ,originalPrice:10000}
  // ];

  filteredProjects:any = [];
  pagedProjects:any = [];
   globalData = inject(Globdata)
  pageSize = 6;
  pageIndex = 0;
  gridCols = 4;

  ngOnInit() {

    debugger
    this.projectService.GetProjectAll().subscribe((res:ApiResponse)=>{

      if(res.statusCode==200){
      this.projects = res.data
      
    this.applyFilters();
    this.updateGridCols(window.innerWidth);
      }else{
        this.projects = []
      }
      

    })



  }

  applyFilters() {
    this.filteredProjects = this.projects.filter((p:any) => {
      const matchesSearch = p.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = !this.selectedCategory || p.category === this.selectedCategory;
      const matchesTech = !this.selectedTech || p.technologies.includes(this.selectedTech);
      const matchesPrice = p.price <= this.priceRange.max;
      return matchesSearch && matchesCategory && matchesTech && matchesPrice;
    });

    if (this.sortBy === 'low') this.filteredProjects.sort((a:any, b:any) => a.price - b.price);
    if (this.sortBy === 'high') this.filteredProjects.sort((a:any, b:any) => b.price - a.price);

    this.updatePagedProjects();
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updatePagedProjects();
  }

  updatePagedProjects() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProjects = this.filteredProjects.slice(start, end);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateGridCols(event.target.innerWidth);
  }

  toggleFree() {
    this.showFree = !this.showFree;
    this.showPaid = !this.showFree;
    this.pagedProjects = this.projects.filter((p:any)=>p.price==0)
  }


  SelectedTechology(){
    if(this.selectedTech!=""){
     this.pagedProjects = this.projects.filter((p:any)=>p.technology.split(",").includes(this.selectedTech))
    }else{
     this.pagedProjects = this.projects
    }
  }
SelectedCategory(){
   if(this.selectedCategory!=""){
     this.pagedProjects = this.projects.filter((p:any)=>p.categoryName.includes(this.selectedCategory))
    }else{
     this.pagedProjects = this.projects
    }
}


SearchByProjectName(){
   if(this.searchTerm!=""){
     this.pagedProjects = this.projects.filter((p:any)=>p.title.includes(this.searchTerm))
    }else{
     this.pagedProjects = this.projects
    }
}


searchByFilter(){
 this.pagedProjects = this.projects.filter((p:any)=>p.price<=this.priceRange.max)
}
  togglePaid() {
    this.showPaid = !this.showPaid;
    this.showFree = !this.showPaid;
     this.pagedProjects = this.projects.filter((p:any)=>p.price!=0)
  }

  SortedBy(){
    
     if (this.sortBy === 'low') { return   this.pagedProjects= this.filteredProjects.sort((a:any, b:any) => a.price - b.price)};
    if (this.sortBy === 'high') { return  this.pagedProjects =this.filteredProjects.sort((a:any, b:any) => b.price - a.price)};
  }

  updateGridCols(width: number) {
    if (width <= 600) {
      this.gridCols = 1;
    } else if (width <= 1024) {
      this.gridCols = 2;
    } else {
      this.gridCols = 3;
    }
  }
}
