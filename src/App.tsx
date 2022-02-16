import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';

function App() {
	// JavaScript code can be inserted here!

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
}

export default App;
