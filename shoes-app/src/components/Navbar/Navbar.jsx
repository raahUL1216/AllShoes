import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import './navbar.css';

const Navbar = (props) => {
	return (
		<div className='navbar-container'>
			<div className='navbar-title'>AllShoes</div>

			<SearchInput
				filters={props.filters}
				setFilters={props.setFilters}
			/>
		</div>
	);
};

export default Navbar;
