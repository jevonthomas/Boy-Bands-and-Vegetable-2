var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var bandLoopCount = bands.length;
var veggieLoopCount = vegetables.length;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var i = 0; i < bandLoopCount; i++) {

  // Add the band names into the correct <div>
  currentBand = bands[i];

  bandElement.innerHTML += `<p>${currentBand}</p>`;

}

for (var i = 0; i < veggieLoopCount; i++) {
  // Add the veggie names into the correct <div>
  currentVeggie = vegetables[i];

  veggieElement.innerHTML += `<p>${currentVeggie}</p>`;

}