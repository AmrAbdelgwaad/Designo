import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-floating-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './floating-contact.component.html',
  styleUrl: './floating-contact.component.scss',
})
export class FloatingContactComponent {}
