let day = 8;
const name = "Albert";

console.log("Hiya");

// JavaScript const variable declaration
const coolMap = L.map('map').setView([34.0709, -118.444], 15);

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(coolMap);

//JavaScript let variable declaration to create a marker
let marker = L.marker([34.0709, -118.444]).addTo(coolMap)
		.bindPopup('Math Sciences 4328 aka the Technology Sandbox<br> is the lab where I work in ')
		.openPopup();