--- 
title: Javascript30 Day 15- Local Storage
category: javascript30
date: 2017-09-03
permalink: /blog/javascript/:title/
tags: 
    - javascript30
---

A website or web app is no good if it loses it's data once the page has been refreshed. So how does one actually keep that data persisting without the need of an online database? Local storage might be the answer. 
<!--more-->

Every modern web browser has it's own dedicated local storage. This storage allows developers to store small size data right in the browser for quick retrieval. The data stored will be available to the developer for as long as it exists within local storage. 

## Why would you use local storage? 

We briefly mentioned that it could be used to store small size data but what exactly does that mean. Well, sometimes, your website or web app might not need to store that much information submitted by the user. It could just be a simple app that allows a user to add list of items they need to get done in a particular day. 

Such type of applications would benefit from using local storage instead of a dedicated database. This is especially true if the person using the website or web app will only be accessing it from the same browser each time. Another advantage of storing data in local storage is that it will be available to you as the developer and to the user even if the device is not connected to the internet. 

## When you shouldn't use local storage

Local storage has some use cases but there are some situations where it shouldn't be an option at all. For example, if your web app will be storing sensitive information from people then local storage is not an option. Local storage is not secure so any developer can get the same user to use their app from the same browser and the secretly tap into local storage for your data if the know where to look. 

It's not only insecure because of that but also because the data stored in local storage is not encrypted so it's as visible as plain text. Some instances that local storage isn't a good choice is when you want to store large amounts of data that might also need to be accessible from any device. Then an online database would be more ideal. 

## How to use local storage

```javascript 
    // Will return an item from local storage by passing the item's identifier as an arguement to getItem()
    const items = JSON.parse(localStorage.getItem('items')); 

    // Will store an item in local storage by passing it to the called function setItem()
    localStorage.setItem('items', JSON.stringify(items));
```
To use local storage, those are the main functions that you will use to get values stored within local storage or store them in local storage if they weren't stored. One thing to note is that when storing data like objects, you will need to use `JSON.stringify()` in order to convert the object to a string. 

This has to be done because local storage cannot store JavaScript objects in their natural form. When retrieving the data from local storage and it is an object, you will need to use `JSON.parse()` as illustrated above. This will convert the string stored in local storage to a JavaScript object so you can access it in it's natural form. 

## Lessons learnt:

- Saving data to local storage
- Getting saved data from local storage
- Use cases of local storage and when it shouldn't be used
- Delegating Events to elements within another element e.g `<li>` in `<ul>`
- Creating robust functions

You can find the full <a href="https://github.com/Rayhatron/Exploring-Javascript/tree/master/15-local-storage" target="_blank" title="{{page.title}} Github repo">{{page.title}} code here</a>. 

Tweet me <a href="https://twitter.com/Rayhatron" target="_blank" title="Rayhatron Twitter">@Rayhatron</a> with your thoughts on local storage and let's discuss. 
