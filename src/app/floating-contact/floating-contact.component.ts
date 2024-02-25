import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-floating-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './floating-contact.component.html',
  styleUrl: './floating-contact.component.scss',
})
export class FloatingContactComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
