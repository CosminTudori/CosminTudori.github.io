var Element1 = document.getElementById('informative-1');
var Element2 = document.getElementById('informative-2');
var Element3 = document.getElementById('informative-3');
var Element4 = document.getElementById('informative-4');

var bounding = Element1.getBoundingClientRect();

var Element1Height = Element1.offsetHeight;
var Element1Width = Element1.offsetWidth;

var Element2Height = Element2.offsetHeight;
var Element2Width = Element2.offsetWidth;

var Element3Height = Element3.offsetHeight;
var Element3Width = Element3.offsetWidth;

var Element4Height = Element4.offsetHeight;
var Element4Width = Element4.offsetWidth;

function elementInViewport() {

    var bounding = Element1.getBoundingClientRect();

    if (bounding.top >= -Element1Height 
        && bounding.left >= -Element1Width
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + Element1Width
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + Element1Height) {
        Element1.style.opacity = 1;
    }

    var bounding = Element4.getBoundingClientRect();

    if (bounding.top >= -Element4Height 
        && bounding.left >= -Element4Width
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + Element4Width
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + Element4Height) {
    	Element4.style.opacity = 1;
    }

    var bounding = Element3.getBoundingClientRect();

    if (bounding.top >= -Element3Height 
        && bounding.left >= -Element3Width
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + Element3Width
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + Element3Height) {
    	Element3.style.opacity = 1;
    }

    var bounding = Element2.getBoundingClientRect();

    if (bounding.top >= -Element2Height 
        && bounding.left >= -Element2Width
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + Element2Width
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + Element2Height) {
        Element2.style.opacity = 1;
    }
}

window.addEventListener("scroll", function(){var interval = setInterval(elementInViewport(), 1000);});