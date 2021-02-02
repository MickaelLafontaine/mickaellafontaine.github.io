let myMap;
let canvas;
let mappa = new Mappa('Leaflet');
let data;

// Lets change the map tiles to something with more contrast
let options = {
  lat: 34.0522,
  lng: -118.2437,
  zoom: 9,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas) 

  // Only redraw the meteorites when the map change and not every frame.
  myMap.onChange(callbackFunction);
}

function draw(){
}

function callbackFunction(){
  // Clear the canvas
  clear();
	
      // Only draw them if the position is inside the current map bounds. We use a
      // Leaflet method to check if the lat and lng are contain inside the current
      // map. This way we draw just what we are going to see and not everything. See
      // getBounds() in http://leafletjs.com/reference-1.1.0.html
			
      if (myMap.map.getBounds().contains({lat: options.lat, lng: options.lng})) {
        // Transform lat/lng to pixel position
				let la = myMap.latLngToPixel(options.lat, options.lng);
  
  
				fill(0,255,0);
        noStroke();

        ellipse(la.x, la.y, 10, 10);
      }

}