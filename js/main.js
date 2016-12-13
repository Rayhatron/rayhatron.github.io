
window.onload = function(){
    var app = new Vue({
    el: '#content',
    data: {
        message: 'Hello Vue!',
        projects: [
            {
                name: "Project 1",
                github: "https://github.com",
                demo: "google.com", 
                description: "Lorem ipsum",
                tags: ["tag 1", "tag 2", "tag 3"]
            }, 
            {
                name: "Project 2",
                github: "github.com",
                demo: "google.com", 
                description: "Lorem ipsum ipsum",
                tags: ["tag 1", "tag 2", "tag 3"]
            },  
            {
                name: "Project 3",
                github: "github.com",
                demo: "google.com", 
                description: "Lorem ipsum ipsum ipsum",
                tags: ["tag 1", "tag 2", "tag 3"]
            }, ]
    }
    })
}

/*
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
function showMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function hideMenu(){
	setTimeout(function(){
		showMenu();
	}, 100);
}
*/

