--- 
title: Day 4 of 30 days of Javascript - Array Cardio 
category: javascript
date: 2017-01-04
image: "../images/blog/javascript30/day-4-of-javascript-30.jpg"
permalink: /blog/javascript/:title/
tags: 
    - javascript30
---


Today's challenge was called "Array Cardio" and boy was it a workout.

Well it was definitely a mental workout for me. I mean, 
<!--more-->
i didn't even know that `console.table();` was even a thing. 
You know sometimes you spend so much time working with certain things that you end up thinking that's all there is.

The exercise was to manipulate two arrays. One of which was an array of objects and the other a simple array of strings.

```javascript

    //Practicing array manipulations

    const inventors = [
        {first: 'Albert', last: 'Einstein', birthYear: 1879, deathYear: 1955},
        {first: 'Isaac', last: 'Newton', birthYear: 1643, deathYear: 1727},
        {first: 'Galileo', last: 'Galilei', birthYear: 1564, deathYear: 1642},
        {first: 'Marie', last: 'Curie', birthYear: 1867, deathYear: 1934},
        {first: 'Johannes', last: 'Kepler', birthYear: 1571, deathYear: 1630},
        {first: 'Nicolaus', last: 'Copernicus', birthYear: 1473, deathYear: 1543},
        {first: 'Max', last: 'Planck', birthYear: 1858, deathYear: 1947}
    ];

    const people = [
        'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
    ]

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?

    // 5. Sort the inventors by years lived

    // 6. sort Exercise
    // Sort the people alphabetically by last name

    // 7. Reduce Exercise
    // Sum up the instances of each of these

```

Eventhough the array methods to use were provided and i had used them before. I only managed to do 1 - 3 on first run and once i reached 4, i hit a hurdle that i couldn't overcome.

And i have a habit of not continuing on with anything until i solve the current problem i'm facing so I had to look at the solution and to my surprise, i was not that far off.

Lesson learnt - i don't know the things that i think i know.


What challenges have you faced that you thought you knew the answers to? Feel free to tweet <a href="https://twitter.com/{{site.twitter_username}}" target="_blank" title="Twitter">@me</a>.
You can find the code <a href="https://github.com/Rayhatron/Exploring-Javascript/tree/master/04%20-%20Array%20cardio%201" target="_blank" title="Github repo">here</a>.
