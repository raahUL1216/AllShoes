import React, { useEffect } from 'react';
import ShoeCategoryFilter from '../ShoeCategoryFilter/ShoeCategoryFilter.jsx';
import ShoePriceFilter from '../ShoePriceFilter/ShoePriceFilter.jsx';
import ShoeSizeFilter from '../ShoeSizeFilter/ShoeSizeFilter.jsx';
import { getFilterValues } from '../../common/getFilters.js';
import './shoe-filters.css';
import '../../styles/common-styles.css';

const ShoeFilters = (props) => {
	const [availableFilterValues, setAvailableFilterValues] = React.useState({
		categories: [],
		priceRange: {
			min: 0,
			max: 0
		},
		availableShoeSize: []
	});

	// get shoes filters
	useEffect(() => {
		getFilterValues()
			.then((shoeFilters) => {
				setAvailableFilterValues(shoeFilters);
			})
			.catch(error => console.error(error));
	}, []);

	return (
		<div className='shoe-filters-container'>
			<ShoeCategoryFilter
				availableFilterValues={availableFilterValues}
				filters={props.filters}
				setFilters={props.setFilters}
			/>
			<ShoePriceFilter
				availableFilterValues={availableFilterValues}
				filters={props.filters}
				setFilters={props.setFilters}
			/>
			<ShoeSizeFilter
				availableFilterValues={availableFilterValues}
				filters={props.filters}
				setFilters={props.setFilters}
			/>
		</div>
	);
};

export default ShoeFilters;
