alert("connected")

var h1=document.querySelector("h1")
var p=document.getElementsByTagName("p")
var button=document.querySelector("button")
isgreen=false

setInterval(function(){
    if(isgreen) {
        h1.style.color="white";
    } else {
        h1.style.color="green";
    }
    isgreen = !isgreen;
}, 1000);

setInterval(function(){
    if(isgreen) {
        p.style.background="black";
    } else {
        p.style.color ="blue";
    }
    isgreen = !isgreen;
}, 1000);

button.addEventListener("mouseover", function(){
    alert("will you like to select this button?")
});