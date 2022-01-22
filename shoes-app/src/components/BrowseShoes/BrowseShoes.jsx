import React from 'react';
import Navbar from '../Navbar/Navbar';
import ShoeFilters from '../ShoeFilters/ShoeFilters';
import ShoeListing from '../ShoeListing/ShoeListing';
import './browse-shoes.css'

const BrowseShoes = () => {
	return (
		<div className='browse-shoes-container'>
			<div className='browse-shoe-header'>
				<Navbar />
			</div>

			<div className='browse-shoe-body'>
				<ShoeFilters />
				<ShoeListing />
			</div>
		</div>
	);
};

export default BrowseShoes;
