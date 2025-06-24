let image = document.querySelector("img");
setTimeout(function(){
    image.style.filter="opacity(1)";
}, 1000);
setTimeout(function(){
    image.style.filter="opacity(0)";
}, 4000);
setTimeout(function(){
    window.location.replace("http://127.0.0.1:5500/Portfolio/home.html");
}, 7000);