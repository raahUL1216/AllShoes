import React from 'react';
import ShoeList from '../ShoeList/ShoeList';
import CheckboxFilter from '../CheckboxFilter/CheckboxFilter';
import './shoe-listing.css';

const ShoeListing = () => {
	return (
		<div className='shoe-listing-container'>
			<div className='shoe-listing-header'>
				<div className='shoe-listing-title'>New Arrivals</div>
				<CheckboxFilter />
			</div>

			<ShoeList />
		</div>
	);
};

export default ShoeListing;
