import { CommonModule } from '@angular/common';
import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../services/main.service';

interface Item {
  title: string;
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carouselContent') carouselContent!: ElementRef;

  items: Item[] = [
    { title: 'Frontend Development' },
    { title: 'UI Development' },
    { title: 'Responsive Web Design' },
    { title: 'JavaScript Frameworks' },
    { title: 'Version Control' },
  ];

  currentIndex: number = 0;
  speed: number = 0.6; // Speed of scrolling
  intervalId!: any;

  constructor(
    private router: Router,
    private mainService: MainService
  ) {}
  ngAfterViewInit(): void {
    this.startAutoScroll();
    this.loadLottieAnimation();
  }

  loadLottieAnimation() {
    // Wait for the script to load and then use lottie
    if ((window as any).lottie) {
      const animation = (window as any).lottie.loadAnimation({
        container: document.getElementById('lottie-container'), // container to render animation
        renderer: 'svg', // choose renderer (svg/canvas/html)
        loop: true, // whether to loop animation
        autoplay: true, // autoplay the animation
        path: 'assets/animations/designer_lottie.json' // path to your .lottie file (JSON)
      });
    }
  }

  startAutoScroll(): void {
    const animate = () => {
      this.autoScroll();
      this.intervalId = requestAnimationFrame(animate);
    };

    // Start the animation
    this.intervalId = requestAnimationFrame(animate);
  }

  autoScroll(): void {
    const totalWidth = this.carouselContent.nativeElement.scrollWidth / 2; // Total width of duplicated items
    const containerWidth =
      this.carouselContent.nativeElement.parentElement.offsetWidth;

    this.currentIndex += this.speed; // Increment index by a small value

    // Reset position when reaching the end
    if (this.currentIndex >= totalWidth) {
      this.currentIndex = 0; // Reset to start
    }

    this.carouselContent.nativeElement.style.transform = `translateX(-${this.currentIndex}px)`;
  }

  route(path: string) {
    this.mainService.toggleNavTheme(true);
    this.mainService.currentRoute = path;
    this.router.navigate([path]);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      cancelAnimationFrame(this.intervalId); // Cancel the animation on component destruction
    }
  }
}
