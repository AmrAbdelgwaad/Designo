import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-app-design',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './app-design.component.html',
  styleUrl: './app-design.component.scss',
})
export class AppDesignComponent {}
