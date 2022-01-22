import React from 'react';
import ShoeCategoryFilter from '../ShoeCategoryFilter/ShoeCategoryFilter.jsx';
import ShoePriceFilter from '../ShoePriceFilter/ShoePriceFilter.jsx';
import ShoeSizeFilter from '../ShoeSizeFilter/ShoeSizeFilter.jsx';
import './shoe-filters.css';
import '../../styles/common-styles.css';

const ShoeFilters = () => {
	return (
		<div className='shoe-filters-container'>
			<ShoeCategoryFilter />
			<ShoePriceFilter />
			<ShoeSizeFilter />
		</div>
	);
};

export default ShoeFilters;
