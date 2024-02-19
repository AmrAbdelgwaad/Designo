import { Component } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { icon, latLng, marker, tileLayer } from 'leaflet';
@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent {
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }),
    ],
    zoom: 5,
    center: latLng(-33.11336, 151.64716),
    zoomControl: false,
  };

  layers = [
    marker([-33.11336, 151.6471], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/images/locations/desktop/location-dot-solid.svg',
        shadowUrl: 'assets/images/locations/desktop/marker-shadow.png',
      }),
      alt: 'Designo agency in Australia',
    }).bindPopup(''),
  ];
}
