import { Component } from '@angular/core';
import { FloatingContactComponent } from '../floating-contact/floating-contact.component';
import { NgOptimizedImage } from '@angular/common';
import { LocationLinksComponent } from '../location-links/location-links.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FloatingContactComponent, NgOptimizedImage, LocationLinksComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
