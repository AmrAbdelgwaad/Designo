import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
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
  isLoading = true;
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  state = false;
  toggle() {
    this.state = !this.state;
  }
}
