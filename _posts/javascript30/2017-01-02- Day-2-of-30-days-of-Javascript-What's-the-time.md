--- 
title: Javascript30 Day 2- What's the time
description: Blog post summarising my experience after completing the second day of 30 days of Javascript challenges
category: javascript
date: 2017-01-02
image: "../images/blog/javascript30/day-2-of-javascript-30.jpg"
permalink: /blog/javascript/:title/
tags: 
    - javascript30
---


More DOM manipulations and CSS transitions but more complex.

This has probably been my most favourite exercise 
<!--more-->
so far because i finally got to make a clock in javascript. 

Most of the work was in CSS to set up the layout of the clock and the clock hands. 
After completing that, i went on with my usual process of writing pseudocode first then translate it to javascript.

Pseudocode:

```plaintext

    Initialize instances of the DOM elements to be manipulated to variables 'hourHand', 'minHand', ''secHand'

    Initialize current Date and time to variable 'now'

    Get hours, minutes and seconds from 'now'
    Allocate degrees for rotation for each hour, minute and second 

    Manipulate the DOM elements 'hourHand', 'minHand', 'secHand' based on the rotation degrees of each element

    Add transitions to the DOM elements to get realistic clock hand movements
    
    Run the steps every second

```
As i was writing the javascript and testing it, i came across a problem.
Something was going wrong along the way so i decided to manually debug by placing 

```javascript 

    console.log("Why is it not working?!"); 

``` 
to try and discover where the code was failing. 

The debugging code was working but my problem was still there. After a few moments of pondering with my thoughts,
i realized that nothing was wrong with my javascript code but the instances of the DOM elements were not being found.

And immediately it clicked in my mind. I had committed a rookie mistake.

My ``` script<> ``` tag was in the ``` <head> ``` of the HTML document so it was being executed before the full page had been loaded hence
i couldn't get the DOM elements because they didn't exist then.

Placing it at the end of the ``` <body> ``` tag quickly solved my problem and i was happy again well after a face palm. 
Fortunately no-one was watching. :see_no_evil: 

Feel free to contact me on <a href="https://twitter.com/{{site.twitter_username}}" target="_blank" title="Twitter">twitter</a> if you'd like to collaborate or just to chat.
You can find the code <a href="https://github.com/Rayhatron/Exploring-Javascript/tree/master/02%20-%20What's%20the%20time" target="_blank" title="Github repo">here</a>.
