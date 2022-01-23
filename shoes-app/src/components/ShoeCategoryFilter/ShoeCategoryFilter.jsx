import React from 'react';
import CheckboxFilter from '../CheckboxFilter/CheckboxFilter';
import './shoe-category-filter.css'

const ShoeCategoryFilter = (props) => {
	const filterCategory = (event) => {
		const checkedCategory = event.target.name;
		const checked = event.target.checked;

		if (checked) {
			props.setFilters((prevFilters) => {
				return {
					...prevFilters,
					categories: [...prevFilters.categories, checkedCategory]
				};
			});
		} else {
			props.setFilters((prevFilters) => {
				return {
					...prevFilters,
					categories: prevFilters.categories.filter(category => category !== checkedCategory)
				};
			});
		}
	}

	return (
		<div className='category-filter-container'>
			<div className='category-header'>Categories</div>

			<div className='category-filters'>
				{
					props.availableFilterValues.categories.map((category, index) => {
						return (
							<CheckboxFilter
								key={index}
								label={category}
								applyCheckboxFilter={filterCategory}
							/>
						)
					})
				}
			</div>
		</div>
	);
};

export default ShoeCategoryFilter;
