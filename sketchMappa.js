var key = 'pk.eyJ1Ijoib3JvdXJiMjQiLCJhIjoiY2o3amk0OW1pMjBtdzMyb2VpNTFoMDNybSJ9.jBYCFJWvjLRiVqXihQwo8w';
var mappa = new Mappa('MapboxGL', key);
var options = {
  lat: 42.0,
  lng: -73.4,
  zoom: 13.2,
  style: "mapbox://styles/mapbox/dark-v9",
  pitch: 90,
  bearing: -20,
  minZoom: 1,
  renderWorldCopies: false
}

var myMap;
var canvas;

function setup() {
  frameRate(60);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('myContainer');
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}

function draw() {
  clear(); 
}