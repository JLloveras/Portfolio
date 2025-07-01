let image = document.querySelector("img");
let bg = document.querySelector('body');

//I use timeout functions to make sure that my screen works well and doesn't take longer than it needs to.
setTimeout(function(){
    image.style.filter="opacity(1)";
    bg.style.backgroundColor='#001f08';
}, 1000);
setTimeout(function(){
    image.style.filter="opacity(0)";
}, 3000);
setTimeout(function(){
    window.location.replace("http://jlloveras.github.io/Portfolio/home.html");
}, 5500);