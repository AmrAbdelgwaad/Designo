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
  canadaOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }),
    ],
    zoom: 13,
    center: latLng(43.71705, -79.25469),
    zoomControl: false,
  };

  canadaLayers = [
    marker([43.71705, -79.25469], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/images/locations/desktop/location-dot-solid.svg',
        shadowUrl: 'assets/images/locations/desktop/marker-shadow.png',
      }),
      alt: 'Designo agency in Australia',
    }).bindPopup('1.Hey 🤨🤨🤨!!!!'),
  ];

  australiaOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }),
    ],
    zoom: 13,
    center: latLng(-33.11336, 151.64716),
    zoomControl: false,
  };

  australiaLayers = [
    marker([-33.12575, 151.64042], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/images/locations/desktop/location-dot-solid.svg',
        shadowUrl: 'assets/images/locations/desktop/marker-shadow.png',
      }),
      alt: 'Designo agency in Canada',
    }).bindPopup('2.Do you want to play with me 😈😈😈?'),
  ];

  ukOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }),
    ],
    zoom: 13,
    center: latLng(53.73373, -1.30021),
    zoomControl: false,
  };

  ukLayers = [
    marker([53.73373, -1.30021], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/images/locations/desktop/location-dot-solid.svg',
        shadowUrl: 'assets/images/locations/desktop/marker-shadow.png',
      }),
      alt: 'Designo agency in UK',
    }).bindPopup("3.I don't 😝😝😝"),
  ];
}
