import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavVisibilityService {
  private visibility = new BehaviorSubject<boolean>(true);
  navVisibility$ = this.visibility.asObservable();

  constructor() {}

  showNav() {
    this.visibility.next(true);
  }

  hideNav() {
    this.visibility.next(false);
  }
}
