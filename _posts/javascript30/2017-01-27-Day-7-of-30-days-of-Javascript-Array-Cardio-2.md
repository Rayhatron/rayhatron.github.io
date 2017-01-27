--- 
title: Javascript30 Day 7-Array Cardio 2
description: Blog post summarising my experience after completing the seventh day of 30 days of Javascript challenges
category: javascript
date: 2017-01-27
permalink: /blog/javascript/:title/
tags: 
    - javascript30
---

Today's challenge was the second installement of Array cardio.

Just like the first Array cardio day, I worked with various array methods to manipulate array data.
<!--more-->

The two arrays that I worked with are as follows:

```javascript

    const people = [
    {name: 'Ray', year: 1997 },
    {name: 'Kait', year: 1986 },
    {name: 'Irv', year: 1970 },
    {name: 'Lux', year: 2015 }
    
    ];

    const comments = [
        {text: 'Love this!', id: 523423 },
        {text: 'Super good', id: 823423 },
        {text: 'You are the best', id:  2039842},
        {text: 'Lasagne is my fav food ever', id: 123523 },
        {text: 'Nice Nice Nice', id: 542328 }
    ];

```
Now the tasks that I had to carry out are as follows: 

1. Use ``` Array.prototype.some() ``` to check if at least one person is 18?
2. Use ``` Array.prototype.every() ``` to check if everyone is 19?
3. Use ``` Array.prototype.find() ``` to find the comment with ID of 823423.
4. Use ``` Array.prototype.findIndex() ``` to find the comment with ID of 823423 and delete it.

For all the tasks, I started by learning more about the method to be used on [Mozilla Developer Network](https://developer.mozilla.org/en-US/). 
This is a great resource to always keep in mind when developing because it'll save you a lot of time when you get stuck as it explains clearly what
you're looking for. 

The challenge was not that difficult as most of the array methods are straight forward in how they work. This 4 array methods together with the 
methods that I used in the previous array cardio make up a nice list of array methods that you should always keep in mind during development.

<h2>Today i learned:</h2>

- MDN is a great reference resource
- 4 more array methods
- More ES6 style code


What other array methods do you find handy? Feel free to tweet <a href="https://twitter.com/{{site.twitter_username}}" target="_blank" title="Twitter">@me</a> about them.
You can find the code <a href="https://github.com/Rayhatron/Exploring-Javascript/tree/master/07%20-%20Array%20cardio%202" target="_blank" title="Github repo">here</a>.
