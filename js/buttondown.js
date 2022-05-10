var button = document.getElementById("button-next");
var img = document.getElementById("arrow");
var center = document.getElementById("content-center");
img.addEventListener("click", GoDown);
img.addEventListener("mouseenter", ButtonHover);
img.addEventListener("mouseleave", ButtonUnhover);

window.onload(function(){img.style.background="none";});
function GoDown(){
	center.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function ButtonHover(){
	img.style.background = "rgba(0,0,0,0.2)";
}

function ButtonUnhover(){
	img.style.background = "transparent";
}