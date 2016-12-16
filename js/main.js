
window.onload = function(){
    var app = new Vue({
        el: '#content',
        data: {
            message: 'Hello Vue!',
            projects_count: 2,
            revealMenu: false,
            projects: [
                {   
                    id: 0,
                    image: "../images/simon-game.PNG",
                    name: "Simon Game",
                    github: "https://github.com/Rayhatron/Simon-game",
                    demo: "https://rayhatron.github.io/Simon-game/", 
                    description: "Classic Simon game made to help pass time and test your memory",
                    tags: ["html 5", "css 3", "sass", "vue.js", "grunt"]
                }, 
                {
                    id: 1,
                    image: "../images/pomodoro-clock.PNG",
                    name: "Pomodoro Clock",
                    github: "https://github.com/Rayhatron/Pomodoro-clock",
                    demo: "https://rayhatron.github.io/Pomodoro-clock/", 
                    description: "Pomodoro clock to help you stay focused and productive for work or study sessions.",
                    tags: ["html 5", "css 3", "angular.js"]
                },  
                {
                    id: 2,
                    image: "../images/tic-tac-toe.PNG",
                    name: "Tic-Tac-Toe",
                    github: "https://github.com/Rayhatron/Tic-Tac-Toe",
                    demo: "https://rayhatron.github.io/Tic-Tac-Toe/", 
                    description: "Classic Tic-Tac-Toe game. Play against AI with odds in your favour.",
                    tags: ["html 5", "css 3", "angular.js"]
                },
                {
                    id: 3,
                    image: "../images/js-calculator.PNG",
                    name: "Calculator",
                    github: "https://github.com/Rayhatron/JS-calculator",
                    demo: "https://rayhatron.github.io/JS-calculator/", 
                    description: "A calculator to help you when the numbers get too big for mental math.",
                    tags: ["html 5", "css 3", "jquery"]
                },
                {
                    id: 4,
                    image: "../images/tip-calculator.PNG",
                    name: "Tip Calculator",
                    github: "https://github.com/Rayhatron/Tip-calculator",
                    demo: "https://rayhatron.github.io/Tip-calculator/", 
                    description: "A calculator for those times when you just can't figure out how big of a tip to give.",
                    tags: ["html 5", "css 3", "sass", "javascript", "grunt"]
                }, ]
        },
    });

    var header = new Vue({
        el: 'header',
        data: {
            revealMenu: false,
           
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
    });
}



