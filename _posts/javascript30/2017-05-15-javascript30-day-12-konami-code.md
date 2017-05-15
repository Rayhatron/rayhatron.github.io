--- 
title: Javascript30 Day 12- Konami Code
category: javascript30
date: 2017-05-15
permalink: /blog/javascript/:title/
tags: 
    - javascript30
---

Every seasoned gamer knows what the konami code is. Incase you aren't a gamer, I'll explain what it is shortly. Then we'll take a look at how we can implement the same functionality on the web through JavaScript to create some cool easter eggs in our websites or web apps. 
<!--more-->

Konami code ( :arrow_up: :arrow_down: :arrow_up: :arrow_down: :arrow_left: :arrow_right: :arrow_left: :arrow_right: :b: :a: ) is a very popular cheat code in video games. A player can press a specific sequence of keys and if the sequence is right, they get an advantage that could be an extra life or some key utilities to win the game. 

### Use case?

You might be wondering why you might want to add such a feature to your web based project. I really like finding hidden stuff that surprise me whenever I'm using any software based product because it's exciting. 

Now you might not like the same thing but whether you are a developer or just a website owner, you might want to consider adding such a feature as it brings something unique to your users. 

Apart from spuring excitement, it's an additional way for you to engage with your community in an interactive way and take them on a new adventure.

So how do we implement that functionality?

### A solution

The pseudocode for such a program could look like this: 

```
define our secret code
when user presses any key, keep track of it
if the keys that have been pressed are the same length as our secret code length
    check if they are the same

```
For my implementation, I have chosen 'rayhatron' as my secret code. I've declared a couple of variables to help with the tracking of data and checking if the user entered the right code.

```javascript
const komaniCode = 'rayhatron';
const codeLength = komaniCode.length;

let enteredCode = [];
let match = true;

```

Next we need to capture all the key presses from the user and store them. 

```javascript
window.addEventListener('keyup', (e) => {
    enteredCode.push(e.key.toLowerCase()); // Sanitize the data to lower case and add it to the array
    checkCode();
});
```
As you can see, I have added a function call for `checkCode()` and we will create it and add the details next.

```javascript
function checkCode(){
    if(enteredCode.length == codeLength){ // Only continue if the users keypresses are the same length as our code
        for(var i = 0; i < codeLength; i++){ // Loop through the users array 
            if(enteredCode[i] != komaniCode[i]){ // If any of the characters don't match one in our code
                return match = false; // exit
            }
        }

        if(match){
            alert("Konami Code"); // Do something cool since they match
        }
        enteredCode = []; // reset the array that contains the users keypresses
    }
}
```

I've added comments in the code to explain what's happening. 

### A problem

The code we have now works, but it has one major flaw, it only works if the code is the first thing that the user enters. Let's take a look at why.

Our code as it is will only try to check if the user's key presses are a match if the user has pressed 9 keys since our code is 9 letters long. Well shouldn't that be what it does? Yes and no. The problem here is that it restricts the characters that will be tracked to the first 9, instead we should allow new characters to be tracked but still keep the limit to 9 letters. 

How do we do that?

### A better solution

Let's take a look at the function [splice](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/splice?v=control). Basically `splice()` will allow us to keep adding new characters to our array by removing old ones within a certain range. Once that works, we just need to check if the user's array includes our secret code. Here's how the code will look like once we refactor it.

```javascript
const secretCode = 'rayhatron';
const secretCodeLength = secretCode.length;

let enteredCode = [];

window.addEventListener('keyup', (e) => {
    
    enteredCode.push(e.key.toLowerCase());

    enteredCode.splice(-secretCodeLength -1, enteredCode.length - secretCodeLength);

    if(enteredCode.join('').includes(secretCode)){
        alert('Something cool is coming soon!')
    }

});
```

Wow, that's a whole lot more effecient and clean. Go ahead, type 'rayhatron' right now on your key board and watch it work as I have implementated it on my site. Obviously I can do more on what actually happens once the code has been entered and I will be soon. 

## Lessons learnt:

- Good naming conventions
- How to use `splice()`
- How to refactor code and make it more efficient

Tweet me <a href="https://twitter.com/{{site.twitter_username}}" target="_blank" title="Rayhatron Web developer twitter">@Rayhatron</a>. Would like to hear about some of the javascript functions that you've discovered during refactoring code.

You can find the full <a href="https://github.com/Rayhatron/Exploring-Javascript/tree/master/12-key-sequence-detection" target="_blank" title="{{page.title}} Github repo">{{page.title}} code here</a>.
