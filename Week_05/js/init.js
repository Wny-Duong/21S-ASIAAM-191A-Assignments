const map = L.map('map').setView([34.0709, -118.444], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let url = 'https://spreadsheets.google.com/feeds/list/1fOGJWiskaoYxeZPDIHJXBnfe9X7E3MAPRrl6x0QMLHo/o1ff19g/public/values?alt=json'
fetch(url)
	.then(response => {
		return response.json();
		})
    .then(data =>{
        // console.log(data)
        processData(data)
    })


function addMarker(data){
        // console.log(data)
        // these are the names of our fields in the google sheets:
        L.marker([data.lat,data.longi]).addTo(map)
            .bindPopup(`<h2>${data.game}</h2>`  + 
                        `<br>${data.age}</br>` + `<br>${data.location}</br>`)

        return data.timestamp
}


function addMarkerAlt(data){
    // console.log(data)
    // these are the names of our fields in the google sheets:
    L.marker([data.lat,data.longi]).addTo(map)
        .bindPopup(`<h2>${data.hobbies}</h2>`  + 
                    `<br>${data.location}</br>`)

    return data.timestamp
}

const longString = 'hellooooooooooooo'
const array1 = ['a', 'b', 'c'];

// this loops through an array
for (const stuff of array1){
    console.log(stuff)
}

// this loops through a string!
for (const letter in longstring){
    console.log(letter)
}

let myArray = ['hello','this','is','an','array']
myArray.forEach(justChecking);

function justChecking(data){
    console.log(data)
}

function processData(theData){
    const formattedData = [] /* this array will eventually be populated with the contents of the spreadsheet's rows */
    const rows = theData.feed.entry // this is the weird Google Sheet API format we will be removing
    // we start a for..of.. loop here 
    for(const row of rows) { 
      const formattedRow = {}
      for(const key in row) {
        // time to get rid of the weird gsx$ format...
        if(key.startsWith("gsx$")) {
              formattedRow[key.replace("gsx$", "")] = row[key].$t
        }
      }
      // add the clean data
      formattedData.push(formattedRow)
    }
    // lets see what the data looks like when its clean!
    console.log(formattedData)
    // we can actually add functions here too
    
    // formattedData.forEach(addMarker)
    //formattedData.forEach(addMarkerAlt)
    //Branching popup
    for (i = 0; i < formattedData.length; i++)
    {
        if (formattedData[i].game == "")
        {
            addMarkerAlt(formattedData[i]);
        }
        else{
            addMarker(formattedData[i]);
        }
        
    }
}