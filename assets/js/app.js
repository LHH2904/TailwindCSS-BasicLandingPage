// show and hide hamburger menu in small screen
const menu = document.getElementById("menu");
const ulMenu = document.getElementById("ulMenu");

function menuToggle(){
    menu.classList.toggle("navbar-show");
}

// browser resize listener
window.addEventListener("resize", menuResize);

// resize event if user changing the width
function menuResize(){
    // first get the size from the window
    const window_size = window.innerWidth || document.body.clientWidth;
    if(window.innerWidth > 640){
        menu.classList.remove("navbar-show");
    }
}