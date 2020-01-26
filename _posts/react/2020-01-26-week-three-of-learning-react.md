--- 
title: Week Three Of Learning React
description: A summary of my third week learning React.js in 2020.
category: react
date: 2020-01-26
permalink: /blog/:title/
tags:
    - react.js
    - redux
    - flux
---

Okay this week was definitely not my best or favourite one. Simply because I didn't actual get to write any code to solidify what I was learning. For week three, we took a look at Redux which is state management tool. Now why might we want to manage state ?

<!--more-->

Imagine we have a web app built using React that helps you track the anime that you're currently watching. You open it and it'll tell you the total anime that you're watching and allows you to add any new one.

So we have at least three components: one that shows the total anime you've added, one that shows a list of the anime you're current watching and one that allows you to add a new anime. When you add a new anime, the total is incremented by one and the list of anime should also show the newly added anime.

That means all three components have to share the same data. But how is that possible since state is only available to its component ?

## Use Props

It is true that state is only available to its component but that is only true if you want to access it as ```this.state.something``` otherwise it is possible to share state across various componets through props.

Any React component can receive data as props just like how a function can be passed arguments. So in our example, to share state among the three components we could use props. In order to do that, all three components would need to have the same parent component that passes it's state as props to those components and where applicable, functions to alter its state.

For example:

```javascript
class AnimeTracker extends React.Component {
	state = {
		totalAnime: 0,
		anime: [],
	}

	addAnime = newAnime => {
		this.setState(
			{
				anime: [...anime, newAnime],
			}
		)
	}

	render() {
		return (
			<Counter totalAnime={this.state.totalAnime} />
			<AnimeList anime={this.state.anime}/>
			<AddAnimeForm addAnime={this.addAnime}/>
		)
	}
}
```

As the example above we have a parent component called ```AnimeTracker``` and it has three children: a ```Counter``` component, an ```AnimeList``` component and an AddAnimeForm component. The ```AddAnimeForm``` can alter the ```AnimeTracker``` state by using the addAnime function and that will in turn cause the ```Counter``` and ```AnimeList``` components to be rerender as the state has changed.

Seems like we are able to achieve our goal so why do we need state management again ?

## Prop Drilling

Prop drilling ?

The practice we showed above can result in what is known as prop drilling if your app is complex enough. Imagine that ```AnimeList``` had another component inside it which required state from the parent component ```AnimeTracker``` but that state wasn't used by ```AnimeList```. It means AnimeList would be getting state that it doesn't need simply because it has a child that needs it hence the drilling part as we have to "drill" through several components for the right component to get access to state it needs via props.

This can quickly get crazy if you have multiple levels of components to get through. In certain cases, problems may arise, for example, renaming props along the way will make it harder to keep track of them. Kent did a great job of explaining some of those problems so you can take a look at his post on <a href="https://kentcdodds.com/blog/prop-drilling" target="_blank">prop drilling</a>.

Now wouldn't it be great to be able to share data without ending up with problems due to prop drilling. Sure it would but how is that possible ?

## Redux

That is where Redux comes into play. As we discussed earlier, Redux is a state management tool. So instead of sharing state using props through a parent component, you can do so through application state that is kept in a Redux store.

To retrieve state from the store you simply use ```store.getState()`. And to update the store's data we don't do it directly but have to tell the store that we'd like to update the data and it will handle the updating of the data.

To do that we'd dispatch an action for example ```store.dispatch({type: 'ADD_ANIME', payload: { newAnime: 'Shingeki no Kyojin' } })```. Now actions only describe what happened i.e Shingeki no Kyojin was added as an anime. How that actually happens will be specified by a reducer that handles that action.

```javascript
const addAnimeReducer = (state, action) => {
	// Add the Anime to the list
	switch(action.type) {
		case 'ADD_ANIME':
			return {
				...state,
				totalAnime: state.totalAnime + 1,
				anime: [...state.anime, action.payload.newAnime],
			}
		default:
			return state
	}
}
```

So now that we have our reducer, how does it actually get used ? Well when you create a store using Redux's ```createStore()``` function you can pass 3 arguments to it: a reducer, preloadedState, enhancer. For now, we will focus on the first argument, the reducer. When an action is dispatched, Redux will send that action to the reducer and the reducer will then decide how to change state based on the action.

If we have multiple actions we'd then make multiple reducers and use Redux's ```combineReducers()``` function to create one reducer that will then use those smaller reducers based on the action.

An important thing about Redux is the flow of data, it's unidirectional. 

UI --dispatch--> action --> reducer --> store --subscribe--> UI

As seen by that flow, for the UI to get updated after the state in the store is updated is if we are listening to changes to that store by subscribing to it. Fortunately, Redux takes care of all this if you're using it's ```<Provider />``` wrapper component.

I must say, Redux is quite an interesting tool and the whole architecture was something very new to me. At this point, I just need to get my hands dirty by building an app that used Redux. Hopefully that will be sooner than later.
