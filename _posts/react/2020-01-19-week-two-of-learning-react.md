--- 
title: Week Two Of Learning React
description: A summary of my second week learning React.js in 2020.
category: react
date: 2020-01-19
permalink: /blog/:title/
tags:
	- react.js
	- freecodecamp
	- react native
---

Week two was fantastic, I really got to see what React is about outside of creating components. This week I got to learn about state, fetching data from external APIs and navigation. Now I have to clarify the last part as it wasn't React web that I was working with for this week.

<!--more-->

In the first of week of learning React, I finished all the mobile web responsive projects on FreeCodeCamp so I am fresh out of projects to do at the moment as I am currently working through ES6 lessons on FreeCodeCamp.

Fortunately, I am also taking <a href="https://www.edx.org/course/cs50s-mobile-app-development-with-react-native" target="_blank">CS50's Mobile App Development With React Native</a> on edx.org. <a href="https://facebook.github.io/react-native/" target="_blank">React Native</a> allows you to develop mobile applications using JavaScript and React. Great thing about it is that you could actually build both an Android and iOS app using the same codebase. So less development time.

Now, there are some differences for when it comes to how the app and web platforms handle UI/UX e.g navigation that make React code in React Native slightly different/not easily transferrable to web. However, the fundamentals of React like components and state still remain the same.

The project that I worked on for the course was a movie browser. When you open the app, you're presented with a search bar for you to enter the name of a movie. As you start typing, requests are sent to an open movie API. When a response is returned, the results will be shown in a scrollable list on the screen.

From that list of results you can then click one and that will open a movie details screen. Some of details shown on that screen are plot, release, runtime, actors etc. You can see a complete walkthrough of the app <a href="https://youtu.be/Onvqp8rOd0k" target="_blank">here</a>.

Now to the technical bits of the lessons I learned:

## State

Data handling in simple React apps is done through the use of state. Say this movie browser app. It will have a state object that has a movies property which is an array of movies. Now initially the array will be empty because we haven't done a search.

To use state you'll have to use a class based component instead of the simple function based one that I was using last week. So for my search screen the component looked like the following:

```javascript
export default class SearchScreen extends React.Component {
	state = {
		movies: [],
		searchError: '',
	}

	render() {
		return (
			<View>
				<TextInput
					style={styles.searchField} onChangeText={text => this.getMovieResults(text)} placeholder="Name of movie to find"
				/>
				<FlatList
					data={this.state.movies}
					renderItem={({ item }) => <Item movie={item} onSelectMovie={item => this.handleSelectMovie(item)} />}
					style={styles.movieResultsContainer}
					keyExtractor={(item,index) => 'key' + index}
				/>
				<Text style={styles.searchError}>{this.state.searchError}</Text>
			</View>
		)
	}
}
```

So we have a state object with two properties, the movies and an error that gets shown when a search fails e.g no movie found or too many results etc. After that we then have the render method where we return what will be shown to the user when the component is renders.

When we have multiple elements in a component, they should all have one parent and in this React Native app that would be a ```<View>``` which is equivalent to a ```<div>``` when using React on the web. Within the parent element we have 3 children, an input for the name of the movie to be search, a scrollable list element where results will be displayed and a text element to display a search error message.

Now this is where state comes in and the React magic kicks in. I'll use the search error text element as it's the simplest one. So we have the opening tag which is represented by ```<Text style={styles.searchError}>``` and we are passing some styles to make the text color red so that the user understands that this is an error. Then we have the closing element tag ```</Text>```. In between those two tags we have something interesting.

Curly braces allow us to enter any JavaScript expression between them that gets evaluated when the component is rendered e.g 2 + 2 would result in 4 being shown in that text element. So between those opening and closing tags, there's an expression that essentially says for this component, get the value stored in the property ```searchError``` of state.

Now when we send a request to the API to search for a movie and an error is returned, we update the components state to store the error message in searchError. Whenever any updates to state happen, React will check if there is a difference between the current way the component should be displayed and what was shown previously.

In our case there is a difference since the error message is no longer empty so React will well... **react** to that change by rerendering the component with the new value of ```searchError```.

I love this a lot.

Reason I love that is because with plain JavaScript I'd have to do some work to achieve the same thing i.e when we get the data, I then get a reference to the element in the DOM and then update that element's innerHTML for example so that it shows the new value. With React, I simply declare what I want and it takes care of the rest when state changes.

## async await

Apart from state, I also learned about ES6 async await. Now when fetching data you don't get a response immediately so there is some waiting that has to be done. Normally you create a callback function that will get executed when the response from the API arrives.

Something like:

```javascript
// Not a real function to make a requst
// you'd see something like this if using request library in nodejs
send_request_to_api('some url', (request, response) => {
	// Do something
})
```

Or if you're using <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank">fetch API</a>, it'd look like

```javascript
const get_results_from_api = () => {
	fetch('some url')
	.then(
		(response) => {
			return response.json()
		}
	)
	.then(
		(response_json) => {
			// Do something with the json
		}
	)
}

get_results_from_api()
```

With fetch API you send a request to a URL and fetch will return a promise that it will eventually tell you the result of that request when it gets it. To tell the fetch API what to do when that result comes, we add ```then()``` and supply a function to be run when that happens which in the example above would result in another promise being returned therefore we add another ```then()```.

With async await, we remove all the ```then()``` so the above would then look like the following

```javascript
const get_results_from_api = async () => {
	const response = await fetch('some url')
	const response_json = await response.json()

	// Do something with response_json
}

get_results_from_api()
```

Looks much cleaner yeah ?

Now one key thing to note is that async word that we use as we declare the function. If we want to wait for a Promise using ```await``` instead of ```then()``` then we have to make the function asynchronous using ```async``` keyword otherwise a Syntax Error will be thrown as ```await``` keyword is only valid in an ```async``` function.

What happens is that when we call our function using ```get_results_from_api()```, a request is sent to the API URL using fetch and we wait for that Promise to be resolved as our async function execution will be paused at that point. Once the promise has been resolved the execution will resume and we then change that response to json using ```.json()``` which in turn will pause the execution as we wait for that Promise to be resolved.

Even though the execution of the async function gets paused, the execution of the code in the function where we called our async function will not get paused.

In a nutshell, those are what I would say were my two biggest lessons from the week. I see myself using async await more in future projects and hopefully React too. Looking forward to learning more about React over the coming weeks and building more projects with it.
