# Activity 5 - Passing "Props"

Awesome.

We now have a cat card rendering for every cat in our data!

But each cat card currently shows info for Mr Gwumpy. 😾

As adorable as he is, all the other cats in our array need their time to shine. ☀️

How do we make each card show information for each individual cat?

Just like Ma and Pa cats pass properties (like silky fur and floofy tails) down to their kitty offspring, we need to pass our cat data object's properties down to our cat card.

We do this using Props! Short for..

You guessed it!

Properties.

## What are "Properties"? 🤔

You pass variables to functions, you pass "props" to React components. It's really that simple! Props just means data. This data could be a string, a number, an array or more often than not, the properties of an object (like our cat objects properties).

How do we do this in React?

Simple.

# Step 1 - Receiving Properties

-   First, we need to tell `CatCard` what props it's expecting to take.

Add a `CatCardProps` interface to `cat_card.tsx`:

```JavaScript
interface CatCardProps{
   name: string;
   species: string;
   favFoods: Array<string>;
   birthYear: number;
}

```

-   Update `CatCard` to take in props.

Hint: Instead of being annotated with just `React.FC` it should now be annotated with `React.FC<CatCardProps>`

-   Now update the `CatCard` functions parameters to receive some delicious 'props'

Your code should look something like this:

```JavaScript
// cat_card.tsx
interface CatCardProps {
	name: string;
	species: string;
	favFoods: Array<string>;
	birthYear: number;
}

const CatCard: React.FC<CatCardProps> = (props) => (
	<div className='card'>
		<h3 className='card__text card__header'>Mr Gwumpy</h3>
		<p className='card__text'>Species: Cat</p>
		<p className='card__text'>Favourite Food(s): Caviar</p>
		<p className='card__text'>Birth Year: 1984</p>
	</div>
);

export default CatCard;

```

The incoming `props` are just like how a normal JavaScript function receives stuff - cool 😎

Note: We don't have to call our parameter `props` here, we could call it `data`, or `cat`, or `bingoWings` if we wanted to! But `props` is fine for now and will help you remember the lingo 👍

# Step 2 - Passing Properties

Now that the receiving interface is set up, in `App.tsx` we can pass properties from the cat object we're looping over to our cat card, like this:

`<CatCard name={cat.name} species={cat.species} />`

-   Pass all of the cat properties to our cat card in this way. The final code should look like this:

```JavaScript
	{cats.map((cat) => (
		<CatCard
			name={cat.name}
			species={cat.species}
			favFoods={cat.favFoods}
			birthYear={cat.birthYear}
		/>
	))}
```

To check our cat card is receiving our cat data properties, we can add a console.log inside our `<CatCard/>`

❗ Note! Our CatCard currently uses an _implicit return_, i.e. we return straight JSX from the function without the use of the `return` statement:

i.e

```JavaScript
	() => <SomeJSX/> // an implicit return
	vs
	() => { return (<SomeJSX/>)}
```

If we added some code before `<SomeJSX/>`, React would complain. So to introduce some of our own code, we have to remember to add curly braces and wrap the JSX in a `return()` statement like this `() => { return (<SomeJSX/>)}`.

-   Add the `console.log`, curly braces `{}` and `return()` statement. Your code should look like this:

```JavaScript
const CatCard: React.FC<CatCardProps> = (props) => {
	console.log(
		'CatCard receiving props from App?! Come in App?! 😸 Props received are: ',
		props
	);

	return (
		<div className='card'>
			<h3 className='card__text card__header'>Mr Gwumpy</h3>
			<p className='card__text'>Species: Cat</p>
			<p className='card__text'>Favourite Food(s): Caviar</p>
			<p className='card__text'>Birth Year: 1984</p>
		</div>
	);
};
```

❗ Try getting rid of the curly braces, the `console.log` and the `return()` statement, so you're back to the version from before. Then re-add them. Play around and get comfortable with just returning JSX directly by writing `(props) => <SomeJSX />` or wrapping curly braces and use a `return` by writing `(props) => { return ( <SomeJSX/>)}`.

👉 After all that, add the `console.log` so the code looks like the snippet above. Check your browser console. You should see your `console.log()` printed out lots of times. Each log should show the cat properties you have passed to your cat component like this:

```
CatCard receiving props from App?! Come in App?! 😸 Props received are:  {name: 'Little Miss Purrfect', species: 'Cat', favFoods: Array(2), birthYear: 2016, /* etc */ }

```

Having confirmed our props are passing as expected, you can now get rid of - or comment out - the `console.log`.

# Step 3 - Accessing Properties

Looks like we're all hooked up and ready to go-go!

Our cat cards array of data is being looped over and for every cat object our `<CatCard/>` component is being rendered. We are then passing our cat properties to our cat card for us to use. Pawesome.

Now we just need to inject 💉 our card with catty data using JavaScript.

To do this we simply need to replace our hard-coded cat information with our props.

## Step 3.1

-   In the cat cards `<h3>` replace Mr Gwumpy with `{props.name}`

-   Save your work and check the browser.

Your cat cards should now show other cats names!

## Step 3.2

-   Following the same pattern, replace the rest of the hard coded data with props

<details>
<summary>Click here to see the final result</summary>
<pre>

```JavaScript
const CatCard : React.FC<CatCardProps> = (props) => {

    // console.log("CatCard to App, come in App? Do you read me?", props)

    return (
           <div className="card">
            <h3 className="card__text card__header">{props.name}</h3>
            <p className="card__text">Species: {props.species}</p>
            <p className="card__text">Favourite Food(s): {props.favFoods}</p>
            <p className="card__text">Birth Year: {props.birthYear}</p>
        </div>
    )
}

export default CatCard
```

Let's break it down. 🔨

We are passing `props` into our cat card.

Our CatCard receives these props through its parameters: `const CatCard : React.FC<CatCardProps> = (props) => <>rest of component here</>`

In our component, we access these properties through object [dot notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors).

We insert these properties into our JSX using curly braces {}

</pre>
</details>

## Alternatively...

In the above instructions, we pass each cat property separately into our CatCard component. This is perfectly fine.

However, if we wanted to, we could just pass the whole cat object like this:

```JavaScript
      {cats.map(cat => {
        return  <CatCard catObject={cat}/>
      })
```

Passing props in the above way would mean we'd access them slightly differently.

First, we'd have to update our `CatCardProps` interface to take a single `catObject: Cat` rather than all the individual properties.

Then, in `cat_card.tsx` we'd access these as `{props.catObject.name}`, `{props.catObject.species}`, `{props.catObject.favouriteFoods}` because we'd have to go into our props, then go into our cat object, then access the property we wanted.

Passing the whole cat object at once or passing individual properties are both perfectly fine ways of writing React code - it's up to you which way you prefer and how you'd like to name things.

Passing the whole cat object makes `App.tsx` a little tidier. It also means that if we change the cat object by say, adding a new property, then those changes are _automatically_ passed down to the child components!

**_For complex objects it's best to pass the entire object rather than individual properties._**

However, for this tutorial we're going to continue passing the cat properties individually as this can be a bit easier to understand when first learning about props in React.

Before moving on to the next exercise though, have a play around to make yourself familiar with different ways of passing props and what each word and level of dot notation refers to. It can be a bit confusing at first, but the more you practice the easier it will become. 😺

# End of Exercise 5

Phew!

Great job.

That was a lot to get through but I think you'll agree, our cat cards are looking smashing and we've learnt a lot! 🧠

Don't forget to take a break 🌯

Then let's see what else we can do with props! [Activity 6](./activity_6.md)
