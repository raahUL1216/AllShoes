import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import './navbar.css';

const Navbar = () => {
	return (
		<div className='navbar-container'>
			<div className='navbar-title'>Shoe.</div>

			<SearchInput
			// searchText={searchText}
			// searchShoe={searchShoe}
			// setSearchText={setSearchText}
			/>
		</div>
	);
};

export default Navbar;
