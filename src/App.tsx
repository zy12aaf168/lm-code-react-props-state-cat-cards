import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';

function App() {
	// Your code here!

	return (
		<>
			<Navbar />
			<Header />

			<main>
				<div className='cards__wrapper'>{/* And here! */}</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
