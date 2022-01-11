# Activity 7 - Passing Dynamic Data

Currently our Header says there are 0 cats in our App. This isn't accurate!

Now we know how to pass props to our components, let's update our Header component to reflect the true number of cats in our ~~basket~~ application.

This Header count is a perfect example of "state" or "dynamic data" in our app. The number of cats we have might change and our cat count should update to reflect this.

One way to do this is by working out the number of cats in our array and passing this count down to our Header component using props.

- How would we check or count the number of objects in an array in JavaScript?

<details>
<summary>Click here to find out how!</summary>
<pre>

// In `App.tsx` above our return statement, declare a variable and save our cats length to it

`const catCount = cats.length;`

</pre>
</details>

Now we have the number of cats in our array (`console.log()` this to double check!)

- How could we insert this JavaScript logic into our Header element? 🤔

We'll need to pass our catCount variable down to our Header component as props then access those props in our `<h2>`

Have a go yourself then...

<details>
<summary>Click here to find out how!</summary>
<pre>

In `App.tsx` we pass our catCount variable to our Header component through props:

`<Header catCount={catCount}>`

In `header.tsx` we receive props through the Header parameters. We'll also need to add a new HeaderProps interface!

`const Header : React.FC<HeaderProps> = (props) => <>rest of component here</>`

In `header.tsx` we replace the 0 with our dynamic data.

Your component should look something like this:

```JavaScript

interface HeaderProps{
  catCount: number;
}

const Header : React.FC<HeaderProps> = (props) =>
    <header className="header__container">
      <h1 className="header__title header__welcome">Welcome to React!</h1>
      <h2 className="header__title">There are currently {props.catCount} Cats in this Cat App</h2>
    </header>;

export default Header
```

Let's break it down. 🔨

In `App.tsx` we use the JavaScript `.length` property to count how many cat objects there are and save this number to a variable

We pass this variable to our Header component using props.

Our Header component receives our props through it's parameters.

We use curly braces to replace the 0 in our h2 with our props.

</pre>
</details>

Boom! Our Cat App now accurately reflects how many cats there are! 😺

To test whether our Header component is accurately reflecting our applications state though, let's add another cat to our app to make sure!

In `App.tsz` in the `useState()` function add Captain Catface to our cat data array

```JavaScript
    {
      name: "Captain Catface",
      species: "Sea Cattain",
      favFoods: ["fish, rum"],
      birthYear: 2016,
    }
```

❗ But we don't have an image for Captain Catface so our app will crash when it tries to access an image that isn't there.

So let's make sure our component can handle that.

Change the way we render the `CatImage` component in `cat_card.tsx` to only render if there's a corresponding image:

```JavaScript
// cat_card.tsx
/* rest of component */

// only render an image if there's a corresponding entry in our images array
{props.catIndex < images.length && (
				<CatImage
					image={images[props.catIndex].image}
					altText={images[props.catIndex].altText}
					licenceType={images[props.catIndex].licenceType}
					licenceUrl={images[props.catIndex].licenceUrl}
					attributionName={images[props.catIndex].attributionName}
					attributionUrl={images[props.catIndex].attributionUrl}
				/>
			)}
```

Again, the smart way to do this would be to load the images along with the cat data in `App.tsx`, so they couldn't get out of step. Or maybe even to combine the arrays so the images are always stored with the cats? Or we could make it so images are _completely_ optional and if the data isn't there then it simply doesn't render (without crashing)?

The point is there's lots of better ways to do it! As we're writing our apps we can look out for these kinds of inefficiencies and try to improve on the design.

We'll come up with one better way in the next activity.

---

Your header should now say how many cats there are!

Great work!

Our Cat app is now "reacting" to changes in our state! 🙌

Let's push this to the next level! [Activity 8](./activity_8.md)
