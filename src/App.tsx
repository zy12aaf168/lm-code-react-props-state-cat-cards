import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import {CATDATA, CATIMAGES} from './data/cat';
import CatCard from './components/cat_card'


function App(): JSX.Element {

	const [cats, setCats] = useState(CATDATA)

	return (
		<>
			<Navbar />
			<Header />

			<main>
				<div className='cards__wrapper'>
					{
						cats.map((cat, index) => (<CatCard key={cat.id} catIndex={index}{...cat}/>
					))}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
