document.getElementById("photo").onmouseover = function() {mouseOver()};

document.getElementById("photo").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("photo").innerHTML = "&#128247";
};

function mouseOut() {
  document.getElementById("photo").innerHTML = "Photography";
};

//Changes the word "photography" to a camera emoji and back//

document.getElementById("cook").onmouseover = function() {mouseOv()};

document.getElementById("cook").onmouseout = function() {mouseO()};

function mouseOv() {
  document.getElementById("cook").innerHTML = "&#129385";
};

function mouseO() {
  document.getElementById("cook").innerHTML = "Cooking";
};

//Changes the word "Cooking" to a piece of meat and back//

document.getElementById("game").onmouseover = function() {mouseOve()};

document.getElementById("game").onmouseout = function() {mouseOu()};

function mouseOve() {
  document.getElementById("game").innerHTML = "&#127918";
}

function mouseOu() {
  document.getElementById("game").innerHTML = "Video Games";
}
//Changes the phrase "Video Games" into a controller emoji//

function openWin() {
  myWindow = window.open("https://www.coastal.edu/humanities/", "myWindow");   // Opens a new window//
}

document.getElementById("edward").onclick = function() {openWin()};
//This makes it so if you click the image it activates the openWin function//

function colorChange() {
  document.getElementById("body").style.color = "red";
  alert("Definitely didn't do this all at 2 am!");
}
//This gives an alert, then changes the color of all text in the document after closing the alert//