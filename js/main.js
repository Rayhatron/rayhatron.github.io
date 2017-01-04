var menu = document.getElementById("myTopnav");
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleMenu() {
    if (menu.className === "topnav") {
        menu.className += " responsive";
    } else {
        menu.className = "topnav";
    }
}

function hideMenu(){

    setTimeout( function(){
        menu.className = "topnav";
    }, 500);
 
}