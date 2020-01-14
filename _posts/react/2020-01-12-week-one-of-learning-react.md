--- 
title: Week One Of Learning React
description: A summary of my first week learning React.js in 2020.
category: react
date: 2020-01-12
permalink: /blog/:title/
tags: 
    - react.js
    - freecodecamp
---

So 2019 wasn't the best year for me when it comes to improving my skills outside of what my job currently needs. I failed to achieve my goal of learning React so in 2020, I've decided to make sure that gets done no matter what.

<!--more-->

Starting off the year already working towards that goal. Now I just don't want to learn for the sake of just learning. However, the goal is to learn so that I can provide more value to more people and React.js is at a point where it's being used by a decent number of companies so the demand for talent is there.

So to get started learning I pretty much went to the official documentation and then followed the simple getting started guide.

As great as the docs are, I quickly saw a challenge, once you're done with the example project then that's it. Apart from that, I knew that I probably wouldn't understand React that well if I managed to complete the example project that quickly.

So I decided to pick up where I left off on FreeCodeCamp and do the projects there using React no matter how simple they are. I like this way of learning because it forces me to do something as simple as rendering a component over and over until it's muscle memory for me.

The projects that I worked on are a [pizza survey form](https://codepen.io/rayhatron/pen/xxbPPXB), a landing page for [Ray's pizza](https://codepen.io/rayhatron/full/wvBpEqp) (looks like my love for pizza can't be contained) and lastly a [technical documentation page](https://codepen.io/rayhatron/full/rNaJxqE).

All those projects are non-interactive. However, they did teach me a fundamental React concept: components.

Components can either be simple JavaScript functions or ES6 classes. They are the building blocks of React apps as they are responsible for the output of elements. Let's take a look at the first type of way of creating components.

First, we need the HTML of the page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="app"></div>
    <!-- Load React. -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

    <!-- My React script --->
    <script src="./app.js"></script>
</body>
</html>
```

For the most part, it's just like any other HTML page, however, for React to work on our page, we need to include it via script tags and most importantly we need to have a root element where React will output the content. In this case, the root element is the ```div```` with an ID of *app*.

Once we have the HTML ready, we can go on a write the script that will output what we want on the page using React.

```javascript
// This is an external JS file that's included in our HTML via a script tag

// First we create the function based React component.
// The component will output a main tag with an h1 inside it.
function Page() {
    return (
        <main>
            <h1>Hello World !!</h1>
        </main>
    );
}

// Lastly we pass the component we just created along with the root DOM element to ReactDom.render().
// ReactDom will then render that component inside the div with an ID of app that's in our HTML.
ReactDom.render(
    <Page />,
    document.getElementById('app')
);
```

So for those projects, I've been mainly creating components and rendering them to the page. As the projects increased in complexity, I've had to break more sections of the page into different components and then include them in each other so that only 1 component ends up being passed to ReactDom.render().

I'm starting to see the benefits of breaking an app into components as with some of them you can reuse them in other sections e.g a navigation bar. Also, it makes it easier to maintain or improve upon the code base versus if it was just one big function or HTML file.

Looking forward to learning more about React and going beyond just rendering simple components.
