import { Component } from '@angular/core';
import {
  CommonModule,
  NgOptimizedImage,
  ViewportScroller,
} from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Designo';
  state = false;

  toggle() {
    this.state = !this.state;
  }

  constructor(private viewportScroller: ViewportScroller) {}
  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
