--- 
title: Javascript30 Day 13- Slide in on scroll
category: javascript30
date: 2017-05-24
permalink: /blog/javascript/:title/
tags: 
    - javascript30
---

Many of us use the internet on a daily basis to access websites and we all want a good experience while doing it. Now as a web developer, it is my job to make websites that are user-friendly and engaging. How do I actually achieve that? Let's take a look one example in this post.
<!--more-->

We are going to be looking at the effect of the slide in on scroll where images, appear out of thin air as the user scrolls a page as illustrated below.

<div class="text-center"><img class="wrapper" src="/images/blog/javascript30/day-13.gif" alt="Javascript30 Day-13" title="Javascript30 Day-13"/></div>

### Use case?

A simple reason for implementing such a feature is to grab the user's attention. The effect works well because it's not just a highlight on the image or a fancy border but it includes motion which draws the user to that event. This is great if you want to really make a certain item stand out more on your website, for example, a new product on an e-commerce store. 

It's not a feature that works on all websites so don't just go around implementing it or asking your developer to do it without considering what exactly you are trying to achieve. 

So how do we actually make that happen?

### A solution

Before we start writing any javascript, we have to first style our page and hide the images using CSS so as to achieve the effect of them coming out of thin air. So our CSS would be something like: 

```css
html {
    box-sizing: border-box;
    background:#ffc600;
    font-family:'helvetica neue';
    font-size: 20px;
    font-weight: 200;
}
body {
    margin: 0;
}
*, *:before, *:after {
    box-sizing: inherit;
}
h1 {
    margin-top: 0;
}
.site-wrap {
    max-width: 700px;
    margin: 100px auto;
    background:white;
    padding:40px;
    text-align: justify;
}
.align-left {
    float:left;
    margin-right:20px;
}
.align-right {
    float:right;
    margin-left:20px;
}
.slide-in {
    opacity:0;
    transition:all .5s;
}
.align-left.slide-in {
    transform:translateX(-30%) scale(0.95);
}
.align-right.slide-in {
    transform:translateX(30%) scale(0.95);
}
.slide-in.active {
    opacity:1;
    transform:translateX(0%) scale(1);
}
```
If you take a look, at the bottom of our CSS, we have a class of `.active` which we will use to toggle the slide in and out effect. 

Now on the other side of the task, we need to accomplish a few things:

- Access the images through the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- Listen for when the user is scrolling
- Do something when scrolling is happening

```javascript
// Get all images that will need to be slid in
const sliderImages = document.querySelectorAll('.slide-in');

// Function to slid in / out the images
function checkSlide(e){
    
}

window.addEventListener('scroll', checkSlide);
```

This is good to get us going so let us flesh out the details of `checkSlide()`. The function needs to be able to access each individual image and then define some key values like the point to start sliding in at, the bottom of the image, whether the image is half shown and whether the image has been scrolled past. The first two will help us define the last two and the last two will finally decide whether the image slides in or out.

Below is how the code could look like, I have added comments to explain some of the things that are happening. 

```javascript
// Function to slid in / out the images
function checkSlide(e){
    sliderImages.forEach(sliderImage => {

        // Half way through the image
        // window.scrollY returns a value indicating the number of pixels the document is currently scrolled vertically from the origin
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;

        // Bottom of the image
        // offsetTop returns the distance of the current element relative to the top of the offsetParent node.
        const imageBottom = sliderImage.offsetTop + sliderImage.height;

        // Check that the image is now half show
        const isHalfShown = slideInAt > sliderImage.offsetTop;
    
        // Check that the image has not been scrolled past
        const isNotScrolledPast = window.scrollY < imageBottom;

        // Transition the image in if it is half shown and not scrolled past.
        if(isHalfShown && isNotScrolledPast){
            // add the active class that will make it appear. 
            sliderImage.classList.add('active');
        }else{
            // hide the image since it is either scrolled past and not half shown
            sliderImage.classList.remove('active');
        }
    });
}
```

Finally, our code works, it successfully hides and shows an image if it is half shown and not scrolled past.

### A problem

However, there is a problem. Our code will execute every single time that the page is scrolled. This means that even if we scroll the page by just a single pixel, our code will execute. So by the time, we reach the actual image that will get affected by the `checkSlide()` function, we would have executed the code over 50 times at least. 

That's bad for performance as we'll be using memory resources for nothing. So we need to implement something that will reduce the number of times that the code runs so that it is more optimised for better performance.

### A better solution

Most javascript libraries come with a function called `debounce()` that solves our problem by preventing a function from being called multiple times in a row. Since this is a library free series, we just took an implementation of debounce from one of the libraries and then implemented it in the code. 

```javascript
// Limits the call of the checkSlide function to enhance performance
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
    var context = this, args = arguments;
    var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
}
```

We now have `debounce()` as part of our code but we just need to call it in an appropriate place in order for it to be useful. The last line of our code where we set the event listener is where we'll call `debounce()` and pass which `checkSlide()` as an argument to it so that it can call `checkSlide()` after it does its magic.

```javascript
window.addEventListener('scroll', debounce(checkSlide));
```

## Lessons learnt:

- Performance matters to you and the user.
- How to use `debounce()` for performance enhancement.
- How to access and use various properties on the `window` object in calculations.
- How to manipulate visibility of elements based on events and through addition or removal of CSS classes in javascript.

Tweet me <a href="https://twitter.com/{{site.twitter_username}}" target="_blank" title="Rayhatron Web developer twitter">@Rayhatron</a>. Would like to hear about some of the javascript functions that you've used/created to enhance the performance of your code.

You can find the full <a href="https://github.com/Rayhatron/Exploring-Javascript/tree/master/13-slide-in-on-scroll" target="_blank" title="{{page.title}} Github repo">{{page.title}} code here</a>.
