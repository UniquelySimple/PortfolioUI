import { Component, OnInit } from '@angular/core';
import { ProjectDetailsComponent } from "../project-details/project-details.component";
import { ProjectsService } from '../../services/projects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [
    ProjectDetailsComponent,
    CommonModule
  ]
})
export class ProjectsComponent implements OnInit {
  showAppDetailsFor: string = '';
  projectsService: ProjectsService;

  constructor(
    projectsService: ProjectsService
  ) {
    this.projectsService = projectsService;
  }

  ngOnInit(): void {
  }

  viewDetails(appName: string) {
    this.showAppDetailsFor = appName;
    this.projectsService.viewDetails = true;
  }
}
