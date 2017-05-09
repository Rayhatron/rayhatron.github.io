--- 
title: Javascript30 Day 6-Ajax Type Ahead
description: Blog post summarising my experience after completing the sixth day of 30 days of Javascript challenges
category: javascript30
date: 2017-01-16
image: "../images/blog/javascript30/day-6-of-javascript-30.jpg"
permalink: /blog/javascript/:title/
tags: 
    - javascript30
---

Ha! I didn't think it would take me that long to compile a list of cities in Zimbabwe into a JSON file. 
Today's exercise was to
<!--more-->
create a text an input field which shows any values that contain the current input search term.

Instead of using the same data that <a href="https://twitter.com/wesbos">Wes Bos</a> used in the lecture, i decided to create my own data in JSON form.
This lead me on a hunt for local data and as sad as this is, not much Zimbabwean data exists online. The only source i found was wikipedia.
Now this means that not many developers are actually compiling local data, using it and making it avalaible for others. And this makes it more challenging
to develop specific for the country without having to go through the struggle of making the data.

In my case, i had to create an array of objects where each object was a city and had the following structure:

```javascript

    {
        "city": "Harare",
        "latitude": -17.831554,
        "longitude": 31.046047,
        "population": 1485231,
        "rank": 1,
        "province": "Harare"
    }
    
```
I can manage to make an array of 5 objects while pulling the data manually but 25 Yo! Now that's some work. 
However it was really satisfying in the end and i got to see how many places don't even show up on google maps as i looked for latitude and longitude of each city.

After compiling the data and putting it in a github gist for access as an api via ``` fetch() ``` , i then filtered through the data using the search term from the 
input field and dynamically displayed the results by creating ``` <li> ``` tags to contain the results. 

The filtering involved using RegExp which is something i don't normally do so this helped me practice it. 

<h2>Today i learned</h2>

- Data creation
- Github gist creation and access
- ``` fetch() ```
- RegExp (regular expression)


Have you hard to manually create large data sets? What project was it for? Feel free to tweet <a href="https://twitter.com/{{site.twitter_username}}" target="_blank" title="Twitter">@me</a> your experience.
You can find the code <a href="https://github.com/Rayhatron/Exploring-Javascript/tree/master/06%20-%20Ajax%20Type%20Ahead" target="_blank" title="Github repo">here</a>.
