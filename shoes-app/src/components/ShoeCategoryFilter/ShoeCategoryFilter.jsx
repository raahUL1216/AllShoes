import React from 'react';
import CheckboxFilter from '../CheckboxFilter/CheckboxFilter';
import './shoe-category-filter.css'

const ShoeCategoryFilter = () => {
	return (
		<div className='category-filter-container'>
			<div className='category-header'>Categories</div>

			<div className='category-filters'>
				<CheckboxFilter />
				<CheckboxFilter />
				<CheckboxFilter />
				<CheckboxFilter />
			</div>
		</div>
	);
};

export default ShoeCategoryFilter;
