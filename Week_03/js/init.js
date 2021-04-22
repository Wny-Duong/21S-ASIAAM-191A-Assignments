// use our marker functions
var lat_long_pairs =
[
 [34.07175100955802, -118.44409703086599],
 [34.07000562792079, -118.43836829547996],
 [34.071724612763596, -118.43863330017751],
 [34.05490468004816, -118.3848148866862],
 [34.00423707468872, -118.38716623086769],
 [34.069856813731285, -118.44912110202998],
 [33.99822435162892, -118.4781677866523]
 
];
var  titles = [
	"CPO Food Closet",
	"580 Café",
	"CPO - ECRT Meal Vouchers Distribution",
	"JFS/SOVA Community Food & Resource Program",
	"West Los Angeles College Foundation",
	"UCLA Dashew Center - ECRT Meal Vouchers Distribution",
	"Food Distribution Center - Saint Joseph Center"
];
var  descriptor = [
	"Oncampus",
	"Offcampus",
	"Oncampus",
	"Offcampus",
	"Offcampus",
	"Oncampus",
	"Offcampus"
];

function getLats(lat_long){
	var lats = []
	for (i = 0; i < lat_long_pairs.length; i++)
	{
		lats.push(lat_long[i][0]);
	}
	return lats;
};
function getLongs(lat_long){
	var longs = []
	for (i = 0; i < lat_long_pairs.length; i++)
	{
		longs.push(lat_long[i][1]);
	}
	return longs;
};

// declare variables
let zoomLevel = 12;
var latList = getLats(lat_long_pairs);
var longList = getLongs(lat_long_pairs);

const mapCenter = [math.mean(latList), math.mean(longList)];
//const mapCenter = [34, -118];

// use the variables
const map = L.map('map').setView(mapCenter, zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2>` + `<br>${message}</br>`)
    createButtons(lat,lng,title); // new line!!!
    return message;
}

// create a function to add buttons with a fly to command
function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 

    // attach an event listner to the button with Leaflet's map.flyTo
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); 
    })
    document.body.appendChild(newButton); //this adds the button to our page.
}

//https://financialwellness.ucla.edu/resources/food-security-resources
//https://eatwell.healthy.ucla.edu/resources/
//http://www.wlac.edu/Basic-Needs/Food-Pantry.aspx
//https://www.wsfb.org/our-services/need-food-help/

//The fact that I had to search bit by bit from each of these sites leading into one
//Another is very, very annoying.

//https://foodfinder.211la.org/-118.524792,33.992406,-118.281375,34.107242?layers=20%2C22%2C18%2C19%2C21
//Ahh, this is an interesting one and actually way too close to what I had in mind for our group project.


// Create a function to filter markers and move to specific locations
// Uses median of relevant points
function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 

    // attach an event listner to the button with Leaflet's map.flyTo
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); 
    })
    document.body.appendChild(newButton); //this adds the button to our page.
}




for (i = 0; i < titles.length; i++)
{
	console.log(titles.length);
	console.log(lat_long_pairs[i])
	console.log(lat_long_pairs[i][0])
	console.log(lat_long_pairs[i][1])
	addMarker(lat_long_pairs[i][0], lat_long_pairs[i][1], titles[i], descriptor[i]);
}

//addMarker(34.07174212246961, -118.4439790136692,'home','home land!')
/*
addMarker(34.076366339522735, -118.4402718020299,'James Bridges Theater','On-Campus Movie Theater')
addMarker(34.047722205132544, -118.44833132660327, "Landmark's Nuart Theater",'Bus/Car Accessible')
addMarker(34.059642582729325, -118.4436013597024, 'Billy Wilder Theater','Walk Accessible Theater')
addMarker(34.06174582772844, -118.44652274765399, 'Landmark Westwood','Bus/Car Accessible Theater')
addMarker(34.062901910666355, -118.44726829553497, 'Regency Village Theatre','Walk Accessible Theater')
addMarker(34.06277929044048, -118.44684225562571,'Regency Bruin Theater','Walk Accessible Theater')
*/