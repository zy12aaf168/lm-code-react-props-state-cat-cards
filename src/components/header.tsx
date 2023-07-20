const Header: React.FC<{ catLength: number, dogLength: number }> = ({catLength, dogLength}) => (
	<header className='header__container'>
		<h1 className='header__title header__welcome'>Welcome to React!</h1>
		<h2 className='header__title'>
			There are currently {catLength} Cats in this App
		</h2>
		<h2 className="header__title">
			There are currently {dogLength} Dogs in this App 
		</h2>
	</header>
);

export default Header;
