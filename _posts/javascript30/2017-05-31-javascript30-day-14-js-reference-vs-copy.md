--- 
title: Javascript30 Day 14- Object and Array reference vs copy
category: javascript30
date: 2017-05-31
permalink: /blog/javascript/:title/
tags: 
    - javascript30
---

Today's post is going to be a quick and short recap as some of the stuff that I encountered in the challenge, I already new about them.
<!--more-->

When working with Objects and Arrays, there may be scenarios where you have to copy data from one variable of either type to another variable of the same type. 

This is not a problem when working with strings, numbers and booleans as a clean copy if made. For example:

```javascript
let initialSpeed = 20; 
let finalSpeed = initialSpeed;

console.log('Before change: ');
console.log(`Initial Speed: ${initialSpeed}`);
console.log(`Final Speed: ${finalSpeed}`);

initialSpeed = 50;

console.log('After change: ');
console.log(`Initial Speed: ${initialSpeed}`);
console.log(`Final Speed: ${finalSpeed}`);

let name = 'Rufaro';
let name2 = name;

console.log('Before change: ');
console.log(`Name: ${name}`);
console.log(`Name2: ${name2}`);

name = 'Ray'; 

console.log('After change: ');
console.log(`Name: ${name}`);
console.log(`Name2: ${name2}`);
```

If you change the original variable's value, the copy will not be affected as it is not linked to the original one. However, when working with Arrays and Objects this is not the case. Let's take a quick look.

```javascript
const squad = ['Ray', 'Malo', 'Quasar', 'Wotjek']; 
const squad2 = squad;

console.log('Before change: ');
console.log(`Squad: ${squad}`);
console.log(`Squad2: ${squad2}`);

squad2[1] = 'Mark';

console.log('After change: ');
console.log(`Squad: ${squad}`);
console.log(`Squad2: ${squad2}`);
```

When we run the above code, we discover that after changing the copy, the original variable is actually changed. This is because when we created the copy variable, we were referencing to the original and not actually making a true copy of the values. 

So to make a copy of an array, we can use some of the following ways: 

- ES6 spread operator: `squad2 = [...squad];`
- Slice: `squad2 = squad.slice();`
- Concatenate into empty array: `squad2 = [].concat(squad);`
- From an array: `squad2 = Array.from(squad);`

For copying objects, we can use `Object.assign()` which will take an empty object, the object to be copied and any properties we would want to overide. Unfortunately, this method will only copy the object one level deep. So to fully copy an object with multiple levels, we can use a function available online called 'clone deep'. 


## Lessons learnt:

- Different ways to copy arrays and objects
- Why arrays and objects aren't easily copied.

You can find the full <a href="https://github.com/Rayhatron/Exploring-Javascript/tree/master/14-object-and-array-reference-vs-copy" target="_blank" title="{{page.title}} Github repo">{{page.title}} code here</a>.
