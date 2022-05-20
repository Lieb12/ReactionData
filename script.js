var isGroupOne = true;

let colors = ["#2B87D1", "#4BDB6A", "#CE2636"];
var n = 0;
var rand = 300;

function bgChange() {
   setInterval(function() {
       if (isGroupOne) {
           document.body.style.backgroundColor = "#ffffff";
       } else {
        document.getElementById("idLabel").innerHTML = n;
        n++;
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * 3)];
       }
   }, rand);
}

function groupOne() {
    isGroupOne = true;
}

function groupTwo() {
    isGroupOne = false;
}