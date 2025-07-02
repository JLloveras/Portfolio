var carousel = document.querySelector('.carousel');
var cellCount = 6;
var selectedIndex = 0;
var speed=7;


//These functions and variables are for the home page starting up.
var fade1 = document.querySelector("#fade-in");
var down = document.querySelector('.down');
setTimeout(function(){
  fade1.style.filter="opacity(1)";
  down.style.transform="translateY(0)";
}, 500)

var fade2 = document.querySelector('#fade-in2');
setTimeout(function(){
  fade2.style.transform="translateY(0px)";
}, 750);

var fade3 = document.querySelector('#fade-in3');
var hidden= document.querySelector('#hide');
setTimeout(function(){
  fade3.style.transform='rotateY(0deg)';
  hidden.style.overflow='auto';
}, 1750);

var fade4 = document.querySelector('#fade_carousel');
setTimeout(function(){
  fade4.style.transform='rotateX(0deg)';
}, 2000);

//This function rotates the entire carousel, using the "angle" variable and "selectedIndex", which documents which cell is in front
function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360 * speed;
  carousel.style.transform = 'translateZ(-241px) rotateY(' + angle + 'deg)';
}

//These functions change variables such as "selectedIndex" or "speed" to change which cell is in front and how fast they turn.
var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var surpriseButton = document.querySelector(".surprise-button");
surpriseButton.addEventListener( 'click', function() {
  selectedIndex+=Math.floor(Math.random() *4)+6;
  rotateCarousel();
});

var slowButton = document.querySelector('.slow-down-button');
slowButton.addEventListener( 'click', function(){
  if(speed===7){
    slowButton.innerHTML='Speed Up';
    speed=1;
    rotateCarousel();
  } else if(speed===1) {
    slowButton.innerHTML='Slow Down';
    speed=7;
    rotateCarousel();
  }
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});