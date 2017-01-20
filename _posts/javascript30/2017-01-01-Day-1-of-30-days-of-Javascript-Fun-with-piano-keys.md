--- 
title: Javascript30 Day 1- Fun with piano keys
description: Blog post summarising my experience after completing the first day of 30 days of Javascript challenges
category: javascript
date: 2017-01-01
image: "../images/blog/javascript30/day-1-of-javascript-30.jpg"
permalink: /blog/javascript/:title/
tags: 
    - javascript30


---


Challenge began today. Got to play with some CSS transitions and DOM manipulations through JS.
At the beginning, it seemed hard to do, however
<!--more-->
as I began to layout out the program, it became simple.

The exercise was to make a page that has a range of keyboard keys displayed and when a keyboard key was pressed, a sound was to be played and a visual effect was to take place to notify which key was pressed. 
The name of the sound played also had to be written underneath each displayed keyboard key.

For my version, i used piano sounds so the displayed keyboard keys also correspondend to the name of the piano note played and it saved me some extra writting. :joy:

Pseudocode:

```plaintext

    if keyboard key is pressed
        initialize audio variable to audio element from html with same keycode as pressed key on keyboard
        initialize key variable to div element from html with same keycode as pressed key on keyboard
        initialize keys variable to all div elements from html that have class of 'key'
    
    if variable 'audio' doesn't contain an html audio element 
        stop the program
    
    reset audio element's time to 0 to allow successive audio play when same keyboard key is pressed repeatedly
    play audio
    
    change background color of page to any random color

    add class of 'playing' to div element contained in variable 'key' for CSS transition(animation) of that element
    for each value in array of div elements contained in variable 'keys'
        add an event listener to remove transition class of 'playing' when transition ends

    add an event listener to browser window to execute the above steps when a keyboard key is pressed

```
Once i had all the steps defined logically, it was just a matter of writing it in javascript. 
All in all, it was a fun and interesting project.

There's room for expansion on the project so feel free to contact me on <a href="https://twitter.com/{{site.twitter_username}}" target="_blank" title="Twitter">twitter</a> if you'd like to contribute or just to chat.
You can find the code <a href="https://github.com/Rayhatron/Exploring-Javascript/tree/master/01%20-%20Fun%20with%20some%20piano%20keys" target="_blank" title="Github repo">here</a>.
