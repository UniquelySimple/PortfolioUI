import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  words: string[] = ["Rahul", "Developer", "Designer", "Artist", "Foodie"];
  currentWord: string = this.words[0];
  index: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  changeLastWord() {
    this.index = (this.index + 1) % this.words.length;
    this.currentWord = this.words[this.index];
  }

  navigateWithReverseAnimation() {
    let element = document.getElementsByClassName('container-fluid')[0];
    element.classList.add('fadeOut');
    setTimeout(() => {
      this.router.navigate(['/about']);
    }, 500);
  }
}
