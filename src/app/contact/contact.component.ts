import { Component } from '@angular/core';
import { LocationLinksComponent } from '../location-links/location-links.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LocationLinksComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
