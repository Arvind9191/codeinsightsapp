import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  imports: [],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css',
})
export class Aboutus {

  stats = [
    {
      title: 'Projects',
      count: '500+'
    },
    {
      title: 'Technologies',
      count: '50+'
    },
    {
      title: 'Students',
      count: '10K+'
    },
    {
      title: 'Downloads',
      count: '100K+'
    }
  ];

  features = [
    {
      icon: '💻',
      title: 'Source Code',
      description: 'Complete source code with implementation.'
    },
    {
      icon: '📚',
      title: 'Documentation',
      description: 'Well-structured project documentation.'
    },
    {
      icon: '🎥',
      title: 'Video Tutorials',
      description: 'Step-by-step learning videos.'
    },
    {
      icon: '🚀',
      title: 'Latest Technologies',
      description: 'Angular, .NET Core, SQL Server and more.'
    }
  ];

  teamMembers = [
    {
      name: 'ProjectLibrary Team',
      role: 'Development Team',
      image: 'assets/team/team1.jpg'
    },
    {
      name: 'Content Team',
      role: 'Documentation Experts',
      image: 'assets/team/team2.jpg'
    },
    {
      name: 'Support Team',
      role: 'Technical Support',
      image: 'assets/team/team3.jpg'
    }
  ];
}
