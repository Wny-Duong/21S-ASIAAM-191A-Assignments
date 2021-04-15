let day = 8;
const name = "Albert";

console.log("Hiya");

// JavaScript const variable declaration
const coolMap = L.map('map').setView([33.70928098530632, -117.95396310155171], 9);

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(coolMap);

fetch("js/map1.geojson")
    .then(response => {
        return response.json();
    })
    .then(data =>{
        // Basic Leaflet method to add GeoJSON data
		L.geoJSON(data, {
			style: function (feature) {
				return {color: feature.properties.color};
			}
		}).bindPopup(function (layer) {
			return layer.feature.properties.place + "<br>" + layer.feature.properties.status;
		}).addTo(coolMap);
    });

function customMarker (feature, latlng) {
    return L.circleMarker(latlng, { color: feature.properties.color })
  }
  
  // create an options object
  let myLayerOptions = {
    pointToLayer: customMarker
  }
// the leaflet method for adding a geojson

//Create new markers for the following locations
//Crystal Cove Trail
//Borrego Springs Park
//Jeffrey Open Space Trail
//Huntington DOg Beach Trail
//Bolsa Chica Ecological Reserve Trail
