import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import {CATDATA, CATIMAGES} from './data/cat';
import CatCard from './components/cat_card'
import DOGDATA from './data/dog-data';


function App(): JSX.Element {

	const [cats, setCats] = useState(CATDATA)
	const [dogs, setDogs] = useState(DOGDATA)

	return (
		<>
			<Navbar />
			<Header catLength={cats.length} dogLength={dogs.length} />

			<main>
				<div className='cards__wrapper'>
					{
						cats.concat(dogs).map((animal, index) => (<CatCard key={animal.id} animalIndex={index}{...animal}/>
					))}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
