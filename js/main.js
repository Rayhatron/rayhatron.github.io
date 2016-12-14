
window.onload = function(){
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!',
            projects_count: 2,
            revealMenu: false,
            projects: [
                {   
                    id: 0,
                    image: "images/office.jpg",
                    name: "Project 1",
                    github: "https://github.com",
                    demo: "google.com", 
                    description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
                    tags: ["tag 1", "tag 2", "tag 3"]
                }, 
                {
                    id: 1,
                    name: "Project 2",
                    github: "github.com",
                    demo: "google.com", 
                    description: "Lorem ipsum ipsum",
                    tags: ["tag 1", "tag 2", "tag 3"]
                },  
                {
                    id: 2,
                    name: "Project 3",
                    github: "github.com",
                    demo: "google.com", 
                    description: "Lorem ipsum ipsum ipsum",
                    tags: ["tag 1", "tag 2", "tag 3"]
                }, ]
        },
        methods: {
            showMenu: function(){
                this.revealMenu = !this.revealMenu;
                
            },

            hideMenu: function(){
                var self = this;
                setTimeout(function(){
                    self.revealMenu = false;
                } , 50);
            }
        }
    })
}




