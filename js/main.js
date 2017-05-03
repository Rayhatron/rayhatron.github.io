var menu = document.getElementById("myTopnav");
var nav = document.getElementById("nav");

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleMenu() {
    if (menu.className === "topnav") {
        menu.classList.add("responsive");
    } else {
        menu.classList.remove("responsive");
    }
}

function hideMenu(){

    setTimeout( function(){
        menu.classList.remove("responsive");
    }, 500);
 
}

// Make the nav sticky when header is out of view. 
window.onscroll = function() {
    console.log("scrolling");
    if( window.pageYOffset < 300){
        console.log("not-fixed");
        nav.classList.remove("navbar-fixed");
    }
    if( window.pageYOffset > 300){
        console.log("fixed");
        nav.classList.add("navbar-fixed");
    }
};
