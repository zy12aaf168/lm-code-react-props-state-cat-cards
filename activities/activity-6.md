# Activity 6 - Adding Images

It would be delightful if we could _see_ our lovely cats too.

There are some images provided in `/src/assets/images'

Let's create a new component for them. What props will our new component need? 🤔 Have a think!

---

At the very least, we're going to need:

-   An image
-   Alt text so the image is accessible for people using screen readers

There'll be some more later, but for now that'll get us started.

👉 Make a new `cat_image.tsx` file and create a props interface for the above. Try it yourself... but if you need, then some sample end code is here:

```JavaScript
// cat_image.tsx
interface CatImageProps {
	image: string;
	altText: string;
}

const CatImage: React.FC<CatImageProps> = ({ image, altText }) => (
	<>
		<img className='card__image' src={image} alt={altText} />
	</>
);

export default CatImage;
```

In the `cat_card.tsx` file add the `<CatImage/>` component:

```JavaScript
import cat1 from '../assets/images/cat1.jpg';

// rest of file...

<CatImage image={image} altText="A lovely cat (or your own description here!)" />
```

Now we're showing the same image for every cat. But before we fix that... you might have noticed the `licences.txt` file in the images folder. We don't own the original images - they're available under various creative commons licences.

In order to be good web citizens (and, in some cases, to stay within the terms of the licence) we ought to show which licences our images fall under and attribute the original copyright holders.

All our images have licences, and some require attribution. Let's add this info to our `CatImageProps` interface:

```JavaScript
// cat_image.tsx
interface CatImageProps {
	image: string;
	altText: string;
	licenceType: string;
	licenceUrl: string;
	attributionName?: string;
	attributionUrl?: string;
}
```

We can display this props by adding some JSX under the `<img>` tag in `cat_image.tsx`:

```JavaScript
// cat_image.tsx

// <img tag here>
		<p className='card__text__small'>
			Image licenced under <a href={licenceUrl}>{licenceType}</a>
			{attributionName && (
				<>
					&nbsp;by <a href={attributionUrl}>{attributionName}</a>
				</>
			)}
		</p>
```

We're using the pattern of `{ someBooleanCondition && <SomeComponent/>}` which will conditionally render that component if the condition is true. In this case, we only want to show the "by Whoever" part if there's an attribution name present.

Now we have to go through the images folder and pass the correct cat picture in for each cat. Luckily, we've done the boring part for you. Here's an array which links all the cat images with the correct licences. Let's add it to `cat_card.tsx`:

```JavaScript
// cat_card.tsx

import cat1 from '../assets/images/cat1.jpg';
import cat2 from '../assets/images/cat2.jpg';
import cat3 from '../assets/images/cat3.jpg';
import cat4 from '../assets/images/cat4.jpg';
import cat5 from '../assets/images/cat5.jpg';
import cat6 from '../assets/images/cat6.jpg';
import cat7 from '../assets/images/cat7.jpg';
import cat8 from '../assets/images/cat8.jpg';
import cat9 from '../assets/images/cat9.jpg';
import cat10 from '../assets/images/cat10.jpg';
import cat11 from '../assets/images/cat11.jpg';
import cat12 from '../assets/images/cat12.jpg';

const images = [
	{
		image: cat1,
		altText: 'Describe this cat!',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'amblin',
		attributionUrl: 'https://www.flickr.com/people/amblin/'
	},
	{
		image: cat2,
		altText: 'Describe this cat!',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'ivva',
		attributionUrl: 'https://www.flickr.com/people/ivva/'
	},
	{
		image: cat3,
		altText: 'Describe this cat!',
		licenceType: 'CC BY-ND 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-nd/2.0/',
		attributionName: 'Rachele Pettarelli Ph',
		attributionUrl: 'https://www.flickr.com/people/rachephotos/'
	},
	{
		image: cat4,
		altText: 'Describe this cat!',
		licenceType: 'CC BY 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
		attributionName: 'renarl',
		attributionUrl: 'https://www.flickr.com/people/renarl/'
	},
	{
		image: cat5,
		altText: 'Describe this cat!',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'x-oph',
		attributionUrl: 'https://www.flickr.com/people/x-oph/'
	},
	{
		image: cat6,
		altText: 'Describe this cat!',
		licenceType: 'CC BY-ND 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-nd/2.0/',
		attributionName: 'arrathoonlaa@att.net',
		attributionUrl: 'https://www.flickr.com/people/21851382@N04/'
	},
	{
		image: cat7,
		altText: 'Describe this cat!',
		licenceType: 'CC BY 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
		attributionName: 'pavlovskyy',
		attributionUrl: 'https://www.flickr.com/people/pavlovskyy/'
	},
	{
		image: cat8,
		altText: 'Describe this cat!',
		licenceType: 'CC BY 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
		attributionName: 'AleGranholm',
		attributionUrl: 'https://www.flickr.com/people/darthale/'
	},
	{
		image: cat9,
		altText: 'Describe this cat!',
		licenceType: 'CC BY 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
		attributionName: 'Sardonic G',
		attributionUrl: 'https://www.flickr.com/people/24039825@N06/'
	},
	{
		image: cat10,
		altText: 'Describe this cat!',
		licenceType: 'CC BY 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
		attributionName: 'www.metaphoricalplatypus.com',
		attributionUrl: 'https://www.flickr.com/people/29638108@N06/'
	},
	{
		image: cat11,
		altText: 'Describe this cat!',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'abraham.williams',
		attributionUrl: 'https://www.flickr.com/people/4braham/'
	},
	{
		image: cat12,
		altText: 'Describe this cat!',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'x-oph',
		attributionUrl: 'https://www.flickr.com/people/x-oph/'
	}
];
```

Awesome. Now we just need the `CatCard` component to know which image from the array is appropriate.

In `App.tsx` our `.map` function currently ignores the array index. Let's change that:

```JavaScript
// App.tsx
{cats.map((cat, index) => (
						<CatCard
							name={cat.name}
							species={cat.species}
							favFoods={cat.favFoods}
							birthYear={cat.birthYear}
							catIndex={index}
						/>
					))}
```

Don't forget to add the `catIndex` to our cat card properties interface! (Hint: It'll look like: `catIndex: number;`)

Now each `CatCard` knows which image is correct, so we can pass the image props down to our `CatImage` component:

```JavaScript
	<CatImage
				image={images[catIndex].image}
				altText={images[catIndex].altText}
				licenceType={images[catIndex].licenceType}
				licenceUrl={images[catIndex].licenceUrl}
				attributionName={images[catIndex].attributionName}
				attributionUrl={images[catIndex].attributionUrl}
			/>
```

_Note: This is kind of a silly design!_ It would make much more sense to load all of the image data together with all the cat data in `App.tsx` and then pass in all the image props along with the cat data like this: `<CatCard catData={catData} imageData={someImageData}/>`. But sometimes it's useful to do things the silly way so we can see the advantages of the sensible way! And this way allowed us to play with the `index` of the `map` function too, which can come in handy in other situations.

(We will come back to this later, but if you want, you can go back and refactor at the end of the assignemnt - so all the data is stored in `App.tsx` and passed down as props in a cleaner manner.)

Yay! Now we have images and licence information! Let's move onto [Activity 7](./activity-7.md)
