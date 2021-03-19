var counter = 0;

function myFunction () {
    var elem = document.getElementById('body');
    elem.style.backgroundColor = 'blue';
}

function changeColor(newColor) {
    var elem = document.getElementById("para"); 
    elem.style.color = newColor;
}

function randomBackground() {
    let newColor = Math.floor(Math.random() * (1000000 - 111111) + 111111);
    let newHexColor = "#" + newColor.toString();
    var elem1 = document.getElementById('body');
    elem1.style.backgroundColor = newHexColor;
}


let ceiling = 1000000;
let floor = 100000;
let randomNumber = (Math.random() * (ceiling-floor) + floor);
let color = "\'#" + str(randomNumber) + "\'";
let color1 = "#555555"
