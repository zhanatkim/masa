import L from 'leaflet';

// Карта

const map = L.map('map').setView([59.9682871, 30.3176164], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'});
tiles.addTo(map);

const customIcon = L.icon({
  iconUrl: '../img/svg/map-marker.svg',
  className: 'contacts__icon',
  // iconSize: [70, 70], // size of the icon
  // iconAnchor: [59.9682871, 30.3176164], // point of the icon which will correspond to marker's location
});

L.marker([59.9682871, 30.3176164], {icon: customIcon}).addTo(map);
