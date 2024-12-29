import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { ProjectsService } from '../../services/projects.service';
import { MainService } from '../../services/main.service';

interface projectDetails {
  projectName: string;
  about: string;
  technologies: string[];
  website: string;
  github: string;
}

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
})
export class ProjectDetailsComponent implements OnInit, AfterViewInit {
  @Input()
  appName!: string;

  @ViewChild('projectDetails')
  projectDetailsSection!: ElementRef;

  @ViewChild('openProjectSection')
  openProjSection!: ElementRef;

  private projectsService: ProjectsService;

  constructor(
    projectsService: ProjectsService,
    private mainService: MainService
  ) {
    this.projectsService = projectsService;
  }

  images: object[] = [];
  details: projectDetails = {
    projectName: '',
    about: '',
    technologies: [],
    website: '',
    github: '',
  };
  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.images = this.getImages(this.appName);
    this.details = this.getDetails(this.appName);
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];

    this.mainService.switchProjectDetails$.subscribe(data => {
      this.close();
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.projectDetailsSection.nativeElement.classList.add('move-in');
      this.openProjSection.nativeElement.classList.add('move-in');
    }, 10);
  }

  getImages(appName: string) {
    return this.projectsService.projectImages[appName];
  }

  getDetails(appName: string) {
    return this.projectsService.projectDetails[appName];
  }

  close() {
    this.projectDetailsSection.nativeElement.classList.remove('move-in');
    this.openProjSection.nativeElement.classList.remove('move-in');
    requestAnimationFrame(() => {
      this.projectDetailsSection.nativeElement.classList.add('move-out');
      this.openProjSection.nativeElement.classList.remove('move-in');
    });
    setTimeout(() => {
      this.projectsService.viewDetails = false;
    }, 250);
  }

  openProject() {
    console.log('Open project website');
  }
}
