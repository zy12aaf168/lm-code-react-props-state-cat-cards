# Activity 2 - Create a Cat Card

Instead of hard coding our cat cards (like we did when we copied and pasted that HTML earlier), let's create a reusable component, that looks different depending on what data we feed it! 👁 🐈

Can you remember how to create a component?

Try to think about how you would approach this. Recalling and planning will be useful for learning even if the plan you form in your mind isn't perfect.

Then read on, to find out how...

## Step 1

-   In the `components` folder create a file/component called `cat_card.tsx`

-   Add this code to `cat_card.tsx`:

```JavaScript
const CatCard : React.FC = () =>
        <div className="card">
            <h3 className="card__text card__header">Mr Gwumpy</h3>
            <p className="card__text">Species: Cat</p>
            <p className="card__text">Favourite Food(s): Caviar</p>
            <p className="card__text">Birth Year: 1984</p>
        </div>;

export default CatCard;
```

-   Save your file

## Step 2

-   At the top of `App.tsx` import your cat card

<details>
<summary>Click here to see the answer</summary>
<pre>

`import CatCard from './components/cat_card'`

</pre>
</details>

Component created and ready to go!

Time to see [Activity 3](./activity_3.md) 😸
