import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { ProjectsService } from '../../services/projects.service';

interface projectDetails {
  about : string;
  technologies : string[];
  website : string;
  github : string;
}

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
})
export class ProjectDetailsComponent implements OnInit {
  @Input()
  appName!: string;

  @ViewChild('projectDetails')
  projectDetailsSection!: ElementRef;

  private projectsService: ProjectsService;

  constructor(
    projectsService: ProjectsService
  ) {
    this.projectsService = projectsService;
  }

  images: object[] = [];
  details: projectDetails = {
    about: '',
    technologies: [],
    website: '',
    github: ''
  };
  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    // this.photoService.getImages().then((images) => (this.images = images));
    // this.images = [
    //   {
    //     itemImageSrc: '../../../assets/images/Portfolio/UI-UXera-Screen1.png',
    //     thumbnailImageSrc:
    //       '../../../assets/images/Portfolio/UI-UXera-Screen1.png',
    //     alt: 'Description for Image 1',
    //     title: 'Title 1',
    //   },
    //   {
    //     itemImageSrc: '../../../assets/images/Portfolio/UI-UXera-Screen2.png',
    //     thumbnailImageSrc:
    //       '../../../assets/images/Portfolio/UI-UXera-Screen2.png',
    //     alt: 'Description for Image 2',
    //     title: 'Title 2',
    //   },
    //   {
    //     itemImageSrc: '../../../assets/images/Portfolio/UI-UXera-Screen3.png',
    //     thumbnailImageSrc:
    //       '../../../assets/images/Portfolio/UI-UXera-Screen3.png',
    //     alt: 'Description for Image 3',
    //     title: 'Title 3',
    //   },
    // ];
    this.images = this.getImages(this.appName);
    this.details = this.getDetails(this.appName);
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  }

  getImages(appName: string){
    return this.projectsService.projectImages[appName];
  }

  getDetails(appName: string){
    return this.projectsService.projectDetails[appName];
  }

  close() {
    this.projectDetailsSection.nativeElement.classList.add('move-out');
    setTimeout(() => {
      this.projectsService.viewDetails = false;
    }, 500);
  }

  openProject() {
    console.log("Open project website");
  }
}
