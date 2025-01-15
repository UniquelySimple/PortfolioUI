import { CommonModule } from '@angular/common';
import {
  OnInit,
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class AppComponent implements OnInit, AfterViewInit {
  isNavDark: boolean = false;
  isHamburgerTriggered: boolean = false;
  constructor(private router: Router, private mainService: MainService) {}
  @ViewChild('hamburger')
  hamburgerElem!: ElementRef;

  @ViewChild('closeNav')
  closeNavElem!: ElementRef;

  @ViewChild('navHyperlinks')
  navLinks!: ElementRef;

  @ViewChild('navHyperlinks')
  themeToggle!: ElementRef;

  ngAfterViewInit() {
    this.hamburgerElem.nativeElement.addEventListener('click', () => {
      this.isHamburgerTriggered = !this.isHamburgerTriggered;
      // this.setCloseEventListener();
      // this.navLinks.nativeElement.classList.toggle('active'); // Toggle the active class to show/hide links
    });

    this.themeToggle.nativeElement.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
    });

    const cursor = document.querySelector<HTMLDivElement>('#cursor');
    const cursorBorder =
      document.querySelector<HTMLDivElement>('#cursor-border');

    interface CursorPosition {
      x: number;
      y: number;
    }

    const cursorPos: CursorPosition = { x: 0, y: 0 };
    const cursorBorderPos: CursorPosition = { x: 0, y: 0 };

    document.addEventListener('mousemove', (e: MouseEvent) => {
      cursorPos.x = e.clientX;
      cursorPos.y = e.clientY;

      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    });

    requestAnimationFrame(function loop() {
      const easing = 8;
      cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easing;
      cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easing;

      if (cursorBorder) {
        cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
      }
      requestAnimationFrame(loop);
    });

    document.querySelectorAll<HTMLElement>('[data-cursor]').forEach((item) => {
      item.addEventListener('mouseover', (e: MouseEvent) => {
        const cursorType = item.dataset['cursor'];
        if (cursorType === 'pointer') {
          if (cursorBorder) {
            cursorBorder.style.backgroundColor = 'rgba(255, 255, 255, .6)';
            cursorBorder.style.setProperty('--size', '20px');
          }
        } else if (cursorType === 'pointer2') {
          if (cursorBorder) {
            cursorBorder.style.backgroundColor = 'white';
            cursorBorder.style.mixBlendMode = 'difference';
            cursorBorder.style.setProperty('--size', '80px');
          }
        }
      });

      item.addEventListener('mouseout', (e: MouseEvent) => {
        if (cursorBorder) {
          cursorBorder.style.backgroundColor = 'unset';
          cursorBorder.style.mixBlendMode = 'unset';
          cursorBorder.style.setProperty('--size', '50px');
        }
      });
    });
  }
  ngOnInit(): void {
    this.mainService.NavThemeToggle$.subscribe((data: boolean) => {
      if (data) {
        this.changeToDark(data);
      }
    });
  }

  changeToDark(check: boolean) {
    if (check && this.isNavDark) {
      return;
    }
    if (check && !this.isNavDark) {
      this.navLinks.nativeElement.style.filter = 'invert(1)';
      this.hamburgerElem.nativeElement.style.filter = 'invert(1)';
      this.isNavDark = true;
    } else {
      if (this.isNavDark) {
        this.navLinks.nativeElement.style.filter = 'invert(0)';
        this.hamburgerElem.nativeElement.style.filter = 'invert(0)';
        this.isNavDark = false;
      }
    }
  }

  setCloseEventListener() {
    this.closeNavElem.nativeElement.addEventListener('click', () => {
      this.isHamburgerTriggered = !this.isHamburgerTriggered;
      // this.navLinks.nativeElement.classList.toggle('active'); // Toggle the active class to show/hide links
    });
  }

  navigateWithReverseAnimation(componentRoute: string) {
    console.log(this.router.url);
    if (this.mainService.currentRoute == componentRoute || (this.mainService.currentRoute == '/' && this.router.url == '/home')) {
      return;
    }
    if (this.isHamburgerTriggered) {
      this.isHamburgerTriggered = !this.isHamburgerTriggered;
    }
    this.mainService.currentRoute = componentRoute;
    console.log('routeToNavigate : ', componentRoute);
    let element = document.getElementsByClassName('container-fluid')[0];
    let watermark = document.querySelector('#watermarkText');
    console.log(watermark);
    watermark?.classList.add('fadeSlideOut');
    element.classList.add('fadeOut');
    setTimeout(() => {
      this.router.navigate([componentRoute]);
    }, 500);
  }

  title = 'myPortfolioUI';
}
