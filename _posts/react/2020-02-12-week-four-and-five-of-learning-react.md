--- 
title: Week Four And Five Of Learning React
description: A summary of week four and five of learning React.js in 2020.
category: react
date: 2020-02-12
permalink: /blog/:title/
tags:
    - react.js
    - redux
    - flux
---

I thought that week three was bad but things just went downhill since then. Well, that's not entirely true. In week four of learning React, I did make some progress but in week five not so much because something interesting started happening at work. Let me explain.

<!--more-->

## Week Four

In week four I decided to do the React lessons on <a href="" target="_blank">FreeCodeCamp</a>. Even though it was mostly repetition, it was good because it helped me solidify the fundamentals of React and I did learn about something new.

### PropTypes

Often when building React apps you'll have some data passed down from a parent component to a child component in the form of props. Now, what happens if we forget to pass a prop or if we pass the wrong type of prop ? Well, the app would crash but we can catch this bug ahead of time with type-checking via PropTypes.

```javascript
const Greeting = (props) => {
    return <h1>Hi {props.name}</h1>
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired
}

const App = (props) => {
    return (
        <main>
            <Greeting name={'Ray'}/>
        </main>
    )
}

ReactDom.render(<App/>, document.getElementById('root'))
```

In the example above we create a simple functional component which returns an h1 element that greets a user. Below the component, we then define the propTypes for that component so that it requires data to be a string. If the expected prop is not a string or is not provided then a warning would be thrown.

Going forward if I know the type prop that a component should receive then I'll use as it's quite useful.

## Week Five

One of my shortcomings in <a href="/blog/week-three-of-learning-react/" target="_blank">week three</a> was that I learned about Redux by watching a lecture without actually typing code. Fortunately, in week five I got to actually write code that used Redux through the FreeCodeCamp Redux lessons.

While learning about prop drilling, I came across an article by Kent on the subject and it helped me understand when it's a problem and when it's useful. I shared the post on Twitter and Kent actually <a href="https://twitter.com/Rayhatron/status/1221809686753742849" target="_blank">responded</a> to remind me that actually Redux is not the solution to prop drilling problems but it's context.

From what I've gathered, context does pretty much everything that Redux does and the best part is that it comes with React. So you don't have to install a third-party library and just add an unnecessary dependency to your app.

While I haven't actually used context yet, I'm keen to use it and see if I truly won't need Redux in my React apps.

## Amazing Distractions

Remember I mentioned that something very interesting at work started happening ? Well, we are working on a new project that uses cloud technologies like Google cloud platform/AWS/Azure. You can use those platforms and still be doing things the same old way in terms of application architecture but gaining the advantages of easy scaling.

Now what we are doing is different in that we are building a truly cloud-native system. There's this concept in cloud computing called serverless computing whereby instead of having a server that you pay for monthly but managed by the cloud provider you actually don't have a server to pay for.

Instead, you're billed according to your usage of compute resources. For example, with Google cloud platform they have what they call cloud functions. You essentially write code that will get triggered by a certain event and when that code is executed you're billed based on how long it takes to execute and the number of times it is invoked.

Event-driven code is not a new thing but when you put in this billing structure you find yourself looking at the ways that you can structure your application in such a way that you're not getting billed excessively.

Well, maybe when we're done building the system I'll write a post my experience using serverless computing. I do hope that I won't get swayed too far by the stuff that would be happening at work because I do need to gain more experience with React.

Let's see if we can strike a good balance. Thanks for reading.
