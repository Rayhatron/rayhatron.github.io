--- 
title: HNG Internship 2018 Stage 1 - Design And A Bit Of Code
description: My experience taking part in stage 1 of HNG Internship, a 3-month remote internship that aims to find the most talented software developers in Africa.
category: hng-internship
date: 2018-04-18
permalink: /blog/:title/
tags: 
    - hng internship
    - figma
    - design and code
---

So recently, a friend pointed me in the direction of an interesting place. Out of curiosity, I decided to check it out and boy was I amazed. You know the feeling you get when you travel for the first time and you experience a different culture? Yeah, I had that all while sitting in my room on my laptop.
<!--more-->

You're probably wondering what this magical place is, well, it's an online community called HNG Internship. It's a 3-month remote internship designed to find the most talented software developers in ~~Nigeria~~ Africa.

HNG Internship started in 2016 when a Nigerian startup called [Hotels.ng](https://hotels.ng/){:target="_blank"} was looking for developers in the country but were not finding enough of them and when they did find them they realized that some needed more exposure and training in order to develop software using best practices which the industry often demands. 

## How Does HNG Internship Work?

Throughout the 3 month internship, people who would've joined the internship by simply joining the [Slack group](http://bit.ly/2GMavRV){:target="_blank"} are given different tasks to complete. The tasks are split into different stages and at each stage, there are prizes up for grabs to those who finish the tasks quickly and excel. 

When you join the Slack group you start off in stage 1 if you have programmed before or have the option to join stage 0 if you hadn't done any programming before. Since I've done a fair bit of software development before, I just stayed in stage 1 when I joined and set out to tackle the tasks for that stage. 

## HNG Internship 2018 Stage 1 Tasks

This year's iteration of the internship is the fourth one and the tasks for Stage 1 are slightly different from those of the previous one. 

### 1. Setup a profile picture (with your real picture) 

This task started off as just a profile picture but later the type of profile picture accepted got narrowed down to just your real face. For some, this didn't sit well with them and if you're reading this before you've joined here's a heads up, make sure you put your real profile picture as soon as you're in because over 1000+ interns have already been disabled for not doing so. 

Might sound crazy but if you think about it, it makes sense, if people use their real pictures then it makes it easier to identify them and the task is also a simple way to check on which people decided to actually go through with the internship instead of just joining and becoming inactive. 

Apart from those 2 things, it does make the whole experience a bit closer to what it would have been if the internship occurred at one physical location versus being an online one, if you would've shown your face at a location to take part in the internship then why not in a Slack channel as well.

### 2. Design a very simple page in Figma

Like me before joining HNG Internship, you too might have never heard of [Figma](https://www.figma.com/){:target="_blank"}. Well, Figma is simply a simple online designing tool. 

Personally, I wouldn't call myself a designer, however, Figma just made me feel like I actually might have a shot at being one hey. 

With Figma, you can get a basic design made in a shorter time than if you had tried to do the same with Adobe Photoshop unless if you're some Photoshop wizard. However, that doesn't mean Adobe Photoshop is useless, it's quite powerful and has its place as any other tool. 

So you might be wondering what my own design looked like. Well, there it is:

<div class="text-center"><img src="/images/blog/hng-internship/stage-1/hng-stage-1-figma-design.jpg" alt="HNG Internship 2018 Stage 1 Figma Design" title="HNG Internship 2018 Stage 1 Figma Design"/></div>

Yeah, a splash of colour would've definitely helped it look better but hey baby steps. Take a look at that alignment though :ok_hand: Probably my favourite feature of Figma so far is how easy it is to align things and have them space out evenly. I'll probably be spending more time with it to see if it can turn me into an awesome designer lol.

For this task, you just have to design a very simple page and make sure that the time is shown somewhere in the design.   

### 3. Bring that design to life using HTML and CSS

Once you've got your design finished in Figma, it's time to make an actual webpage using HTML and CSS based on that design. Depending on whether you have done some web development before and how complex your design is, this could take you anywhere between a few minutes to hours. 

However, #2 did say design a very simple page so shouldn't take that much time to get up to speed with HTML and CSS then create it or just use your preexisting web development knowledge to bring that design to life. 

### 4. Setup docker and get PHP to run in docker

Even though you are able to view your simple webpage by simply opening the HTML file with your browser, for it to show the correct time then you're going to need to use another programming language called PHP which can get the correct time as the page is being displayed so that it will always be different when the page is viewed instead of having it fixed as just text in HTML. 

Now, PHP is a server-side language so it'll only run on servers. So to simulate a server environment on your laptop you'd install and setup [Docker](https://www.docker.com/docker-windows){:target="_blank"} with the right configuration. If you're like me and your current laptop can't run docker then you'll have to look into alternative web server software like [XAMPP](https://www.apachefriends.org/index.html){:target="_blank"} or [WAMP](http://www.wampserver.com/en/){:target="_blank"}. 

Once you've got the environment working then it's time to implement that clock using PHP in your page. 

### 5. Make your page show on your local browser through a web server

Implementing the time will be as simple as changing your HTML file to be a .php file then where you want the time to show up simply place PHP code that gets the time and prints it to the page. 

Something like 

```php 
echo date("H:i", time); ?>
```

In the spirit of HNG Internship, I intentionally made that code incomplete and broken so it won't work as is. In case you're thinking of joining the internship then you still got some work to do :smile:

Once you've figured out the PHP code for the time and made the page be accessible through your running web server software then you're done with most of the work for Stage 1.

### 6. Submit a screenshot in #results and #stage1 channels on Slack

Share your work in #results and #stage1 channels in the Slack group and alert mentors so that the review process is started. 

### 7. Get reviewed by a mentor

For a mentor to review your page you will have to install a software called TeamViewer. Teamviewer will allow the mentor to access your computer as if it was theirs and view your code and see the page working in your browser. 

When the mentor connects to your computer via TeamViewer and completes the review they will then invite you to #stage2 Slack channel and you would have successfully completed Stage 1. 

## Is The HNG Internship For You?

By now you've got some idea of what the internship is about and what you'll be expected to do in the first stage of the 2018 internship. However, you still might be wondering is it for you?

Well, it might be if you're interested in web development and are looking for a place to start your learning journey. During the internship, you'll get to learn web development by working on real-world projects. 

Apart from gaining knowledge, you'll also get meet new people, tackle challenges together, have fun and get the chance to win some of the prizes that will be offered. 

After the first 2 weeks you'll even start getting paid weekly. I'm not exactly sure if the pay will also be available to people outside of Nigeria which is the main country the interns come from and where it all started, however, others have already won some of the prize money even if they're not in Nigeria so cross your fingers that this is the same for the weekly pay as well. 

If you manage to stay in the internship up to the end then you are guaranteed to be connected with some of the best tech companies and kick start your career as a developer.  

If you want to [become a part of the HNG Internship 2018](http://bit.ly/2GMavRV){:target="_blank"} then best to join before 23 April 2018 as new signups will be shut down so that people can get settled down and ready for the official start of the internship on 1 May 2018 ending 28 July 2018. 

## Will I Be Continuing On With The Internship? 

Honestly, things move quite fast in the internship. It is just 3 months after all and there's a lot of ground to be covered. I'll do my best to keep up and not get knocked out by missing the deadlines. 

Something that I know is that I wish this existed back in 2015 when I started [my journey as a self-taught programmer in Zimbabwe](https://www.techzim.co.zw/2017/05/my-journey-as-a-self-taught-coder-in-zimbabwe/).


Tweet me <a href="https://twitter.com/{{site.twitter_username}}" target="_blank" title="Twitter">@Rayhatron</a> with your thoughts about the HNG Internship. Will you be taking part in it?