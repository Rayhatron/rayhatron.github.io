--- 
title: Javascript30 Day 9-Dev Tools Tricks
description: Blog post summarising my experience after completing the ninth day of 30 days of Javascript challenges
category: javascript
date: 2017-03-06
image: "../images/blog/javascript30/day-9-of-javascript-30.jpg"
permalink: /blog/javascript/:title/
tags: 
    - javascript30
---

It all starts with `console.log()`, however, that is not where it all ends. 
There is more to the console object than just logging as we will soon discover.
<!--more-->

Something that I quickly learnt as I began web development with javascript was to log data to the console. `console.log()` is
one of the most widely used code in javascript as it allows you to quickly debug and analyze your program by logging various
data as it executes. 

Here are some cool dev tools tricks that use the console.

```javascript

    // regular
    console.log('Hello!');

    // interpolated
    console.log('Hello i am a %s string!', ':smile:')

    // styled
    console.log('%c I am some cool text', 'font-size: 20px; background: blue');

    // warning!
    console.warn('DANGER');

    // error
    console.error('What did you do?');

    // info 
    console.info('The sun is hot');

    // testing
    console.assert( 1 === 2, 'That is wrong, revise your math.');

    // clearing
    console.clear();

    // viewing dom elements

    const p = document.querySelector('p');

    console.log(p);
    console.dir();

```
As you can see from the above code, the console can be a very powerful asset to a developer during development.

<h2>Today i learned:</h2>

- Various console methods.
- How to output styled text into the console.

Have you used any of the above console methods? Feel free to tweet <a href="https://twitter.com/{{site.twitter_username}}" target="_blank" title="Rayhatron Web developer twitter">@Rayhatron</a> about your experince with the console.
You can find the <a href="https://github.com/Rayhatron/Exploring-Javascript/tree/master/09%20-%20Dev%20Tools%20Tricks" target="_blank" title="{{page.title}} Github repo">{{page.title}} code here</a>.
