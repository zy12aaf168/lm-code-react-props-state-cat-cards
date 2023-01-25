# Activity 1 - Using State and feeling Great!

In `App.tsx` paste this HTML inside the `<div>` tag, where it says "JSX code can go here" (don't forget to delete the curly braces! {}):

```JavaScript
  <div className="cards__wrapper">
          <div className="card">
            <h3 className="card__text card__header">Cindy Clawford</h3>
            <img className="card__image" src="someImageUrlHere" alt="A cute tabby kitten"></img>
            <p className="card__text">Species: Cat</p>
            <p className="card__text">Favourite Food(s): Mice</p>
            <p className="card__text">Birth Year: 2012</p>
          </div>

          <div className="card">
            <h3 className="card__text card__header">Little Miss Purrfect</h3>
            <img className="card__image" src="someImageUrlHere" alt="A gray fluffy kitten"></img>
            <p className="card__text">Species: Cat</p>
            <p className="card__text">Favourite Food(s): Wet food, dry food</p>
            <p className="card__text">Birth Year: 2016</p>
          </div>
  </div>
```

👉 If you haven't already, use `npm start` and browse to [http://localhost:3000](http://localhost:3000) to see the app.

Great! Except...

Every cats name and subsequent information is currently hard coded e.g. we had to write out each piece of cat information individually (or in our case, copy and paste it). This is obviously far from ideal if we want to get our cat information from an outside source and also results in a lot of repetition. Yuck!

So let's _delete all that HTML we just added_, so your App JSX looks like this again:

```JSX
return (
		<>
			<Navbar />
			<Header />

			<main>
				<div className='cards__wrapper'>{/* JSX code can go here */}</div>
			</main>

			<Footer />
		</>
	);
```

In this guide we'll be taking a lump (technical term) of cat data, adding it to React's `useState()` function, looping through it, passing it to ONE slick and sexy Cat Component and rendering cat information on our page through props - oh yeahhh! 💃🕺

## Ok, so what is State?

When we talk about State in React, what we're really talking about is the _data_ underpinning our application and how that might _change_. React "reacts" to changes in state/data. Whenever the state of a component changes, the component re-renders.

💡 Note: rendering  is just a fancy word for drawing - when we write our components to the screen, we say that they render. In React, whenever a functional component renders, the function is called.

To use state in React we have to use the `useState()` function. In React speak, this function is called a "hook", but we'll explore deeper into what hooks are in another Lab. For now, just know this is an in-built function React offers us to help keep track of our applications changes.

## Step 1 - What are we waiting for? Let's use some!

At the top of `App.tsx` import the `useState()` hook:

`import { useState } from 'react'`

Top tip: type code out rather than copy and paste it. This will help you memorize the syntax 😺

## Step 2 - Putting the use in useState()

Our `useState()` function returns two values. One value is our state, the other is a method allowing us to manipulate our state.

We use JavaScript "destructuring" to extract these values, like so:

`const [ data, setData ] = useState(*our state/data we want React to watch goes here*)`

In this application our state is going to be some cat data.

We're going to need to define what a cat is!

👉 Look at `data/cat.ts` - there's a blank interface. We care about:

-   name
-   species
-   favFoods
-   birthYear

👉 Add the above fields to the Cat interface in `data/cat.ts`, together with appropriate type annotations. (Answer below.)

---

```JavaScript
export default interface Cat {
  name: string;
  species: string;
  favFoods: Array<string>; // or string[]
  birthYear: number;
}
```

Now our app knows what a cat is, we can start using it! Import our `Cat` interface to App.tsx:

``` JavaScript
import Cat from './data/cat';
```

Now, at the top of our `App` function in `App.tsx`, add this line of code above the return statement:

```JavaScript
const [ cats, setCats ] = useState<Array<Cat>>();
```

Great.

Now we need to tell React what we want our state to be...

Paste this cat data into our `useState()` functions parameters (), i.e. as a default initial state:

```JavaScript
[
   {
			name: 'Little Miss Purrfect',
			species: 'Cat',
			favFoods: ['wet food', 'dry food'],
			birthYear: 2016,
		},
		{
			name: 'Mr Gwumpy',
			species: 'Cat',
			favFoods: ['caviar'],
			birthYear: 2016,
		},
		{
			name: 'Dopey',
			species: 'Cat',
			favFoods: ['bugs'],
			birthYear: 2018,
		},
		{
			name: 'Jumpy',
			species: 'Scaredy Cat',
			favFoods: ['not cucumbers!'],
			birthYear: 2008,
		},
		{
			name: 'Meowsalot',
			species: 'Cat',
			favFoods: ['tuna', 'catnip', 'celery'],
			birthYear: 2012,
		},
		{
			name: 'Cindy Clawford',
			species: 'Cat',
			favFoods: ['mice'],
			birthYear: 2012,
		},
		{
			name: 'Katy Purry',
			species: 'Cat',
			favFoods: ['cigarettes', 'coffee'],
			birthYear: 2015,
		},
		{
			name: 'Dr. Von Belly-Rub',
			species: 'Cat',
			favFoods: ['salt'],
			birthYear: 2020,
		},
		{
			name: 'Blobby',
			species: 'Bird?',
			favFoods: ['your soul'],
			birthYear: 2020,
		},
		{
			name: 'El Taco',
			species: 'Cat',
			favFoods: ['tequila', 'bar snax'],
			birthYear: 1995,
		},
		{
			name: 'Nibbles',
			species: 'Hungry Cat',
			favFoods: ['blankets', 'feet', 'tinsel'],
			birthYear: 2003,
		},
		{
			name: 'BoopySnoot',
			species: 'Tiny Cat',
			favFoods: ['milk'],
			birthYear: 2021,
		}
]
```

## Result

Your `App.tsx` file should now look like this:

<details>
<summary>Click here to see the answer</summary>
<pre>

```JavaScript
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Cat from './data/cat';

function App() {

  const [cats, setCats] = useState<Array<Cat>>(
    // big cat array from above is here!
  );

  return (
    <>
      <Navbar />
      <Header />

      <main>
	<div className="cards__wrapper">{/* JSX code can go here */}</div>
      </main>

      <Footer />
    </>
  );
}

export default App;

```

</pre>
</details>

To check it worked, above our App functions return statement add:

`console.log("Our pretties 😻: ", cats)`

Then check your browser console.

You should see the cat data in the console.

Nice!

Note: You may see a warning that looks a bit like this:

```
  Line 12:17:  'setCats' is assigned a value but never used  no-unused-vars
```

This is just telling us that one of our `useState()` variables isn't being used. Ignore this for now 🙂

Time to move to [Activity 2](./activity_2.md)!
