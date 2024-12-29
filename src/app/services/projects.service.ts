import { Injectable } from '@angular/core';

interface images {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

interface details {
  projectName: string;
  about: string;
  technologies: string[];
  website: string;
  github: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectImages: { [key: string]: images[] } = {
    'UI/UXERA': [
      {
        itemImageSrc: '../../../assets/images/Portfolio/UI-UXera-Screen1.png',
        thumbnailImageSrc:
          '../../../assets/images/Portfolio/UI-UXera-Screen1.png',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc: '../../../assets/images/Portfolio/UI-UXera-Screen2.png',
        thumbnailImageSrc:
          '../../../assets/images/Portfolio/UI-UXera-Screen2.png',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        itemImageSrc: '../../../assets/images/Portfolio/UI-UXera-Screen3.png',
        thumbnailImageSrc:
          '../../../assets/images/Portfolio/UI-UXera-Screen3.png',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
    ],

    WEATHERAPP: [
      {
        itemImageSrc: '../../../assets/images/Portfolio/weatherapp-screen1.png',
        thumbnailImageSrc:
          '../../../assets/images/Portfolio/weatherapp-screen2.png',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc: '../../../assets/images/Portfolio/weatherapp-screen2.png',
        thumbnailImageSrc:
          '../../../assets/images/Portfolio/weatherapp-Screen2.png',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        itemImageSrc: '../../../assets/images/Portfolio/weatherapp-screen3.png',
        thumbnailImageSrc:
          '../../../assets/images/Portfolio/weatherapp-screen3.png',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
    ],

    MOVIESAPP: [
      {
        itemImageSrc: '../../../assets/images/Portfolio/moviesapp-screen1.png',
        thumbnailImageSrc:
          '../../../assets/images/Portfolio/moviesapp-screen1.png',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc: '../../../assets/images/Portfolio/moviesapp-screen2.png',
        thumbnailImageSrc:
          '../../../assets/images/Portfolio/moviesapp-screen2.png',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        itemImageSrc: '../../../assets/images/Portfolio/moviesapp-screen3.png',
        thumbnailImageSrc:
          '../../../assets/images/Portfolio/moviesapp-screen3.png',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
    ],

    PROJECTPULSE: [
      {
        itemImageSrc:
          '../../../assets/images/Portfolio/projectplanner-screen1.png',
        thumbnailImageSrc:
          '../../../assets/images/Portfolio/projectplanner-screen1.png',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc:
          '../../../assets/images/Portfolio/projectplanner-screen2.png',
        thumbnailImageSrc:
          '../../../assets/images/Portfolio/projectplanner-screen2.png',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
    ],
  };

  projectDetails: { [key: string]: details } = {
    'UI/UXERA': {
      projectName: 'UI/UXERA',
      about:
        'The web app offers a user-friendly platform with a variety of pre-configured templates for creating websites quickly and easily. Users can choose from a range of professionally designed templates tailored for different purposes, such as blogs, portfolios, and e-commerce sites. Additionally, the app allows for complete customization, enabling users to modify templates or build their own unique designs from scratch. With intuitive drag-and-drop tools and creative options, users can express their individuality and bring their vision to life, regardless of their technical expertise.',
      technologies: ['Figma'],
      website: 'https://www.website.com',
      github:
        'https://www.figma.com/design/aFq9as83iaBDEqeDDvs6Mh/ux%2Fuiera?node-id=0-1&t=5cY5W9wy9N6a0TIM-1',
    },

    'WEATHERAPP': {
      projectName: 'SU Weather',
      about:
        'This application allows users to enter the name of a city or area to receive up-to-date weather details along with a stunning visual representation of the location. By integrating the OpenWeather API, users can access accurate weather information, including temperature, humidity, and weather conditions. Simultaneously, the app fetches a beautiful, random image of the specified area using the Unsplash API, creating an immersive experience that combines weather data with visual appeal.',
      technologies: ['OpenWeather API', 'HTML5', 'CSS3', 'Javascript'],
      website: 'https://www.website.com',
      github: 'https://github.com/UniquelySimple/WeatherApp',
    },

    'MOVIESAPP': {
      projectName: 'JMDB',
      about:
        "This web application is a beautifully designed movie gallery built entirely using Django. Utilizing Django's powerful template rendering capabilities, the app delivers a seamless user experience without relying on any additional frontend libraries. The focus is on simplicity and elegance, showcasing an array of movies along with their details and ratings in a visually appealing format.",
      technologies: ['Angular', 'Django', 'HTML & CSS', 'Typescript'],
      website: 'https://www.website.com',
      github: 'https://github.com/UniquelySimple/MoviesApp',
    },

    'PROJECTPULSE': {
      projectName: 'Project Pulse',
      about: `
      ProjectPulse is an innovative project management application designed to streamline workflows and enhance team collaboration. Inspired by industry-leading tools like JIRA, ProjectPulse empowers team managers and leaders with a comprehensive suite of features for effective task and performance management.
      With intuitive task tracking, customizable workflows, and robust reporting capabilities, ProjectPulse provides real-time insights into team performance, workload distribution, and project progress.
      `,
      technologies: ['Angular', 'DotNet', 'HTML & CSS', 'Typescript'],
      website: 'https://www.website.com',
      github: 'https://www.github.com/UniquelySimple/PROJECTPULSE',
    },
  };

  viewDetails: boolean = false;

  constructor() {}
}
