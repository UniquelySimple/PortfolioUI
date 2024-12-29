import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  currentRoute: string = '';
  changeNavToDarkMode = new Subject<boolean>();
  NavThemeToggle$ = this.changeNavToDarkMode.asObservable();

  switchProjectDetails = new Subject<boolean>();
  switchProjectDetails$ = this.switchProjectDetails.asObservable();

  constructor() { }
  toggleNavTheme(value: boolean): void {
    this.changeNavToDarkMode.next(value);
  }

  changeProjectDetails(value: boolean): void {
    this.switchProjectDetails.next(value);
  }
}
