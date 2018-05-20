--- 
title: Javascript30 Day 16 - Mouse Move Shadow
category: javascript30
date: 2018-05-20
permalink: /blog/javascript/:title/
tags: 
    - javascript30
---

You know something about the web, it can awfully look similar whichever way you look because there are many themes that you can download and often if you get the best you're also getting what your competition has.
<!--more-->

However, if you decided to go with something a little bit more customized then you can stand out among the sea of website out there that use the same themes. 

For today's JavaScript30 challenge we got to make a shadow appear behind a text on a page and furthermore have that shadow follow the cursor of the person. Go ahead, give it a try below :smile:
<style>
    .jsTextShadow{
        min-height: 100px;
        display:flex;
        justify-content: center;
        align-items: center;
    }
</style>
<div class="container">
    <h2 class="jsTextShadowText" contenteditable>Rayhatron!</h2>
</div>

If you're on mobile then just tap around anywhere and the shadow will follow where you tap. You can even edit the text and write something else that you'd like to see have a text shadow applied to it. So you might be wondering how is it all working? 

## How To Make A Text Shadow Based On Cursor

Alright, first thing you'll need is some text on a webpage so creating the following HTML should do just the trick.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Mouse Shadow</title>
</head>
<body>

  <div class="hero">
    <h1 contenteditable>🔥 Rayhatron!</h1>
  </div>

  <style>
  html {
    color:black;
    font-family: sans-serif;
  }
  body {
    margin: 0;
  }
  .hero {
    min-height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    color:black;
  }
  h1 {
    text-shadow: 10px 10px 0 rgba(0,0,0,1);
    font-size: 100px;
  }
  </style>

</body>
</html>
```

The HTML just has a basic page made with a container that has one h1 tag inside where the text will be. We also add some styles to make container center the text both horizontally and vertical through flexbox and by making it 100% of the devices height.

Once that's setup it's time to implement the actual logic. You can either write the code in between `<script></script>` added at the end of the page just before the `</body>` tag or you could write it in an external file and include that file using `<script src="Path To File"></script>` placed at the same location. 

### Implementing the logic 

To kick off we will need to get access some key HTML elements in our JavaScript so we'll get them by using their unique classes like so: 

```javascript
    const hero = document.querySelector('.hero');
    const text = document.querySelector('h1');  
```

Next we will add a function that will handle calculations to create the text shadow later. For now, it'll just log to the browser console when the mouse is moved so we know it's working. We'll also add an event listener so that that function is called when the mouse is moved. 

```javascript
    function shadow(e){
        console.log(e);
    }

    hero.addEventListener('mousemove', shadow);
```

Alright, you can save the page now and open that index.html file in your favourite browser. Then open the developer tools through CTRL+SHIFT+I and head over to the console tab. Whenever you move the mouse now, some data should be logged in the console tab which means that the event listener is working as expected. 

Next thing to do is to finish the implementation of the program in the `function shadow()`. To do that, we'll need a couple of things: 

### 1. The width and height of the page. 

```javascript
    const { offsetWidth: width, offsetHeight: height } = container;
```

### 2. The offsetWidth and offsetHeight of the cursor from the top left corner of the page.

```javascript
    let { offsetX: x, offsetY: y } = e;
```

### 3. Make sure if the cursor is within the container of the text we adjust the offsetWidth and offsetHeight to take care of that otherwise those values would be relative to the x and y of the text in the page instead of the actual page.

```javascript
    if( this !== e.target ) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }
```

### 4. Figure out the walk on the y-axis and x-axis which is basically how many pixels should the shadow be stretched.

```javascript
    const xWalk = Math.round((x / width * walk ) - ( walk / 2 ));
    const yWalk = Math.round((y / height * walk ) - ( walk / 2 ));
```

### 5. Once that is done, use the yWalk and xWalk values to create the shadow.

```javascript 
text.style.textShadow = 

    `${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7)  
    ,

    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7) 

    ,

    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7)  

    ,

    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)`; 
```

The above lines for creating the text shadow will work like the following: 

- Follow the cursor's direction by creating a purple shadow with the respective walks
- Go in the opposite direction of the cursor in the x-axis, so if cursor goes right in x-axis the aqua shadow goes left
- Make the yWalk the horizontal of the green shadow and make the negative value of the xWalk be the vertical of the shadow, so if cursor goes 10px in the x-axis to the left, the shadow will go 10px in the yAxis down
- Make the negative value of the yWalk the horizontal of the deep blue/purple shadow and make the xWalk be the vertical of the shadow, so if cursor goes 10px in the x-axis to the left, the shadow will go 10px in the yAxis up 


## Lessons learnt:

- Destructuring data from document using ES6
- Getting position of cursor in real time
- Creating a dynamic text shadow from calculated values

You can find the full <a href="https://github.com/Rayhatron/Exploring-Javascript/tree/master/16-mouse-move-shadow" target="_blank" title="{{page.title}} Github repo">{{page.title}} code here</a>. 

Tweet me <a href="https://twitter.com/Rayhatron" target="_blank" title="Rayhatron Twitter">@Rayhatron</a> with your thoughts on adding such unique functionality to websites and let's discuss. 

<script>
    const container = document.querySelector('.content');
    const text = document.querySelector('.jsTextShadowText');
    const walk = 100; /* 100px; */

    function shadow(e) {
        const { offsetWidth: width, offsetHeight: height } = container;
        let { offsetX: x, offsetY: y } = e;

        if( this !== e.target ) {
            x += e.target.offsetLeft;
            y += e.target.offsetTop;
        }
        
        const xWalk = Math.round((x / width * walk ) - ( walk / 2 ));
        const yWalk = Math.round((y / height * walk ) - ( walk / 2 ));

        text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7)
        
        ,
        
        ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7)
        
        ,
        
        ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7)
        
        ,
        
        ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)`;

        /* console.log(xWalk, yWalk); */
    }

    container.addEventListener('mousemove', shadow);

</script>