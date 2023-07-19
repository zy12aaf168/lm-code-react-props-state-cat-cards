import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Cat from './data/cat';
import {CATDATA} from './data/cat';

function App(): JSX.Element {

	const [cats, setCats] = useState(CATDATA)

	return (
		<>
			<Navbar />
			<Header />

			<main>
				<div className='cards__wrapper'>
					{/* JSX code can go here */}</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
