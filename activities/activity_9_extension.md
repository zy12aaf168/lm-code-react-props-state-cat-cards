# Extensions - Chuck Norris Level Ninja 👊

You now have the opportunity to put what you've learnt into practice.

Our journey together ends and from here you're going it alone, Ninjas!

# Extension 1 - Who let the dogs out? 🐶

[![Guard Dog](../public/guard-dog.png)](https://www.youtube.com/watch?v=Qkuu0Lwb5EM 'Who let the dogs out')

Much to our Cats _disgust_, you may have spotted some Dog data lurking around when exploring these files.

Knowing what you've learnt from looping through cats, can you create a Dog Component and render some dog cards on the screen?

-   Look in `src > data > dog-data.ts` to let the dogs out

-   Remember to add a key when mapping over doggy data 🔑

-   Map over the dog data above or below where you map over the cat data (adding a new `useState()`)

-   Try and do this from memory to test yourself!

-   Could you add an extra line to the Header which counts how many dogs there are in the app?

Once you've got this working (creating components and passing props and state is great practice), a further consideration might be:

-   Do you need a new Dog card component at all? 🤯 Re-naming CatCard to just Card and passing the dog data to this card component might save some code? Don't let the cats hear about it though! 😾

# Extension 2 - Food for Thought 🍤

You may have noticed that in our cat cards, our cats favorite foods are squished together without spaces between each food item.

This is because some of the food items are in an array and when they are rendered on the page our program doesn't know there needs to be a white space and comma between each item.

Using what you know about JavaScript, passing props and inserting logic through curly braces {}, could you write some logic so that favorite foods are joined together nicely with a comma separating each food item?

# Extension 3 - Interactivity ⭐

It would be great for our users to be able to add their favourite cats (and dogs?). Can you:

-   Add a form for users to submit new cats, with input text boxes for fields like name, species, fave food, etc.

Hint: the `value` of these `<input>` elements will need to be stored in state variables.

If you need help, something like this code will be useful:

```JavaScript
const [ myTextInputValue, setMyTextInputValue ] = useState<string>('');

// later, as part of the JSX returned from the form component:
<input value={myTextInputValue} onChange={(event) => { /* some code to setMyTextInputValue based on 'event' */}}/>
```

- Add a 'submit' button to the form which adds the new cat to the array of cats.

Hint: your onClick handler for the button needs to update the array in state.

These new cats/dogs won't have any images associated, so you'll have to make sure your image logic can handle missing image data!

# Well done! 🙌

If you've got this far then you are more than getting the hang of React!

And it was you (YOU YOU YOU!) that let the dogs out. 🐶

Chuck Norris greatness achieved. 👊
