import { Component, OnInit } from '@angular/core';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { ProjectsService } from '../../services/projects.service';
import { CommonModule } from '@angular/common';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [ProjectDetailsComponent, CommonModule],
})
export class ProjectsComponent implements OnInit {
  showAppDetailsFor: string = '';
  projectsService: ProjectsService;

  constructor(
    projectsService: ProjectsService,
    private mainService: MainService
  ) {
    this.projectsService = projectsService;
  }

  ngOnInit(): void {}

  viewDetails(appName: string) {
    if (
      this.projectsService.viewDetails &&
      this.showAppDetailsFor !== appName
    ) {
      this.mainService.changeProjectDetails(true);
      setTimeout(() => {
        this.projectsService.viewDetails = false;
        this.showAppDetailsFor = appName;
        this.projectsService.viewDetails = true;
      }, 250);
    } else {
      this.showAppDetailsFor = appName;
      this.projectsService.viewDetails = true;
    }
  }
}
