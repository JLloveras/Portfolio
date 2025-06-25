let image = document.querySelector("img");
let bg = document.querySelector('body');
setTimeout(function(){
    image.style.filter="opacity(1)";
    bg.style.backgroundColor='#001f08';
}, 1000);
setTimeout(function(){
    image.style.filter="opacity(0)";
}, 3000);
setTimeout(function(){
    window.location.replace("http://127.0.0.1:5500/Portfolio/home.html");
}, 5500);