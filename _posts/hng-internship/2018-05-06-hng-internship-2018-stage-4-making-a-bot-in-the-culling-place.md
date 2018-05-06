--- 
title: HNG Internship 2018 Stage 4 - Making A Bot In The Culling Place
description: My experience taking part in stage 4 of HNG Internship where we got to make bots using PHP, JavaScript and SQL.
category: hng-internship
date: 2018-05-06
permalink: /blog/:title/
tags: 
    - hng internship
    - phpmyadmin
    - sql
    - bot
---

Alright, maybe I should stop linking the intro of these posts to the difficulty of the stage. When we talked about [stage 3 of the HNG Internship](/blog/hng-internship-2018-stage-3-intro-to-phpmyadmin-and-sql/){:target="_blank"} I said it puts the "*C* in challenging", as true as that was, stage 4 nullifies that statement.
<!--more-->

You see each new stage somehow manages to make the previous one look like a piece of cake and that's how it's supposed to be so it's great. Stage 4 also known as the culling place didn't disappoint in that area. 

## HNG Internship Stage 4 Tasks

1. Build a chatbot. 

## That's it? 

Well, even though for HNG Internship stage 4 you just had to build a chatbot, that bot had a list of feature requirements that it had to fulfil for you to go to the next stage. 

### 1. Your bot should look nice

As with any software that is used by people, it has an interface which is used to interact with it. So likewise, your bot had to have a chatting interface that looked good and resembled a chatbot. If you've been following my journey through the stages then you'd know that for this requirement you'll most likely be using [Figma design](https://www.figma.com/){:target="_blank"} to create the interface as we have been using the design software since [stage one of the HNG Internship](/blog/hng-internship-2018-stage-1-design-and-a-bit-of-code/){:target="_blank"}.

### 2. Your bot should be able to respond to messages

Well, it wouldn't be chatbot if it just looked nice but you couldn't chat with it, right? :stuck_out_tongue_winking_eye:

The second requirement was that it should be functional meaning that if you send it a message then it should respond to that message. But how would your bot know what to say in response to a message? 

Well, there are two ways that it would know what to say. 

- If someone sends a message that you have a predefined fixed answer to then the bot should use that. For example, if a person was to send "aboutbot" then the bot should respond with its version number, this is something that you would have hardcoded as a response to such a message. 
- If someone sends a message that doesn't have a predefined fixed answer then the bot should get the answer to that message from the database. 

The first way that the bot responds to messages is pretty straightforward, however, the second way is the more interesting one. All the bots that are made for stage 4 share one brain which is a table called chatbot in a database that has a list of questions and answers to them. 

Any question can have multiple answers to it and if someone immediately repeats a message that they had just sent to your bot then the bot should pick a different answer from the one that it had previously sent so it doesn't repeat 1 answer multiple times in a row. 

At this point in time then you might be wondering how would it be able to respond to the messages from people? Well, your chatbot interface should have a form that accepts input in the form of text and when that form is submitted through a [POST request](https://www.w3schools.com/tags/ref_httpmethods.asp){:target="_blank"} to your profile page then some PHP code in your profile page should be able to handle that request. 

First of all, the [POST handler](https://www.w3schools.com/php/php_forms.asp){:target="_blank"} would make a check to see if the message sent is one of those predefined ones so that you can immediately respond to it without going to the database, however, if it's not then the code should query the database for answers to the received message. 

Once an answer to the message is found then the bot simply responds to the user using that. So what happens if there is no answer in the database to the message sent by the user?

### 3. People should be able to train your chatbot 

In the case that no answer is found then your chatbot should respond with something like "Hey I don't know how to respond to that yet, you can train me by entering the following command: `train: question #answer #password`". 

That message will let the user know what they need to do in order to train the bot by entering the command specified at the end. Unfortunately or fortunately depending on your point of view, that means that you've got some extra work to do. Now, you've got to check each message that the user sends to see if it meets the training command criteria i.e does it begin with `train:` followed by something then a `#` then something again then a `#` and lastly a password.

If the message sent meets that criteria then you'll have to check if the password is correct before proceeding. Note, that the chatbot specifications require that the password be literally "password". Talk about having a secure password right... :unamused:

Once everything is all good then you have to insert the question and answer into the database. Remember earlier when we said that all the bots share one brain? Since they can all be trained then it means that your bot can know what another bot learned and vice versa. 

As beautiful as that sounds, it also means that all the bad language that some bots learn your bot might end up using to respond to people's messages. One of the requirements should probably have been to make sure that your bot can't be taught the bad language. 

Anyways it's not a perfect world. 

While we're still at the training of your bot, you'll definitely want to check if the question and answer already exist in the database so that you don't repeat them if they do and you might want to make sure that the supplied values in the training command are not empty just to be on the safe side otherwise you'll end up training your bot how to answer to nothing with something or worse nothing. 

Hmm, that'd be interesting come to think of it, answering nothing with nothing :laughing: 

## Give Your Bot Some Super Powers

All those 3 requirements are what is essential for you to get to stage 5. However, if you'd like to have your bot stand out from the crowd then you'd give it some special abilities like being able to respond to questions like "What's the time?" with the actual time or being able to ask your bot to do cool stuff like evaluate a mathematical formula. 

If your bot managed to have that wow factor then you would have earned yourself a nice prize and the bragging rights of course. :sunglasses:

## My Experience Surviving The Culling Place Of HNG Internship

<div class="text-center"><img src="/images/blog/hng-internship/stage-4/hng-internship-stage-4.jpg" alt="HNG Internship 2018 Stage 4 slack channel description" title="HNG Internship 2018 Stage 4 slack channel description"/></div>

You only realize why stage 4 was also called the culling place when you either make it out the other end or you don't. Remember HNG Internship is a 3-month remote internship designed to find the **most talented software developers** in ~~Nigeria~~ Africa.

And that is exactly why stage 4 is the culling place, this is where most people drop out or they shine. Looking at it, building a chatbot might seem simple but when you have to do everything in one PHP file and jump between JavaScript for handling the user interactions, PHP for handling the POST request and SQL for interfacing with the database then it immediately isn't so simple. 

For me, it was an amazingly fun challenge. I started off with no clue of how it would turn out, then wrote some spaghetti code, standardized that code and ended up with a functional chatbot. While developing it, I shared how I was doing on Twitter.

<div class="container">
    <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Made some good progress on the <a href="https://twitter.com/hashtag/Bot?src=hash&amp;ref_src=twsrc%5Etfw">#Bot</a> for <a href="https://twitter.com/hnginternship?ref_src=twsrc%5Etfw">@hnginternship</a> stage 4. <br><br>It can now successfully accept input, search the DB for answers to questions and retrieve them if they are there otherwise it returns a prompt to the user to train it. <br><br>Still a long way to go<a href="https://twitter.com/hashtag/PHP?src=hash&amp;ref_src=twsrc%5Etfw">#PHP</a> <a href="https://twitter.com/hashtag/SQL?src=hash&amp;ref_src=twsrc%5Etfw">#SQL</a> <a href="https://twitter.com/hashtag/coding?src=hash&amp;ref_src=twsrc%5Etfw">#coding</a> <a href="https://t.co/W766RlkR0N">pic.twitter.com/W766RlkR0N</a></p>&mdash; Rufaro Madamombe (@Rayhatron) <a href="https://twitter.com/Rayhatron/status/987717657309917186?ref_src=twsrc%5Etfw">April 21, 2018</a></blockquote>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

So you can follow the whole journey [there](https://twitter.com/Rayhatron/status/987717657309917186){:target="_blank"}.

Better yet, here's the live [chatbot](http://old.hng.fun/profile.php?id=rayhatron) for you to play around with. Enjoy!