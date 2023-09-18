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
});

L.marker([59.9682871, 30.3176164], {icon: customIcon}).addTo(map);
map.scrollWheelZoom.disable();
