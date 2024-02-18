import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-location-links',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './location-links.component.html',
  styleUrl: './location-links.component.scss',
})
export class LocationLinksComponent {}
