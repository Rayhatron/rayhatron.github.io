--- 
title: Javascript30 Day 11- Custom Video Player
category: javascript30
date: 2017-05-09
permalink: /blog/javascript/:title/
image: "../images/blog/javascript30/day-11.png"
tags: 
    - javascript30
---

Embedding videos into websites is a common thing when building dynamic and interactive sites. The challenging task comes when you have to customize the player.
<!--more-->

Now why might you want to even customize a video player? 

### User Story

You just got a new client who produces a lot of quality video content and they request that their website have theme of yellow. That's not such a hard thing to do right? 

On the surface, it does seem easy but since our client is a video producer, they will surely want to embed some of their videos on the site.

The underlying assumption is that the video player will follow the yellow theme, which probably means a yellow progress bar on the video. 

Your client also has specific amounts of time that the forward/backward will make the video move. 

### Problem

At this point, you might be feeling like the squirrel in the image above because you've got a problem now. 

If you take a look at an html5 `<video>` tag, you cannot easily target the controls as they are not visible in the DOM. So that rules out adding styles to the default controls. And since we didn't make the controls, we cannot change their functionality.

So how do we actually get to make a custom html5 video player for our client.

### Solution 

The option we have is to skip the `controls` attribute in the `<video>` tag and then create our own controls that way we have a truly custom video player and meet our client's requirements. 

Today's JavaScript30 task shows us how to do exactly that. 

 The steps to take to achieve that are:

 1. Create a container for the video tag and the controls
 2. Create a container with all the controls
 3. Add styles
 4. Add functionality

 Steps 1-3 aren't that difficult so you can have a go at that. Let's take a look at step 4.

 First thing we need is access to all the elements of our player.

 ```javascript
// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

const fullScreen = player.querySelector('.fullscreen');
 ```
 Next we need to implement the functionality of the following functions: 

 ```javascript
// Build functions

// Play or pause the video
function togglePlay(){
    
}

// Change the play/pause button icon according to the video state
function updateButton(){
    
}

// Skip ahead or previous
function skip(){
    
}

// Handle the volume and speed of video
function handleRangeUpdate(){
   
}

// Automatically update the progress bar as the video plays
function handleProgess(){
    
}

// Handle the scrubbing feature
function scrub(e){
    
}

// Toggle in and out of fullscreen mode
function enterFullScreen(){
    
}
 ```
My implementation was a bit messy so i ended up watching the tutorial and implementing it the same way. I however did add the `enterFullScreen()` function on my own as it was not part of the solutions. 

Here is the result of the last function: 

```javascript
// Toggle in and out of fullscreen mode
function enterFullScreen(){
    if(!video.webkitDisplayingFullscreen){
        video.webkitRequestFullScreen();
    }else{
        document.webkitExitFullscreen();
    }
}

fullScreen.addEventListener('click', enterFullScreen);
```

## Lessons learnt:

- `addEventListener()` is better vs adding `onclick="myFunc()"` to a DOM element. This is especially true when you want to separate the structure and the logic and when you want multiple items to respond to the same function
- How to create a custom html5 video player.

Tweet me <a href="https://twitter.com/{{site.twitter_username}}" target="_blank" title="Rayhatron Web developer twitter">@Rayhatron</a>. Would like to hear what custom items you have had to create for clients.

You can find the full <a href="https://github.com/Rayhatron/Exploring-Javascript/tree/master/11-custom-html5-video-player" target="_blank" title="{{page.title}} Github repo">{{page.title}} code here</a>.
