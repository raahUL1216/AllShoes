import React from 'react';
import ShoeList from '../ShoeList/ShoeList';
import CheckboxFilter from '../CheckboxFilter/CheckboxFilter';
import './shoe-listing.css';
import '../../styles/common-styles.css';

const ShoeListing = (props) => {
	const setSortFilter = (event) => {
		const checked = event.target.checked;

		props.setFilters((prevFilters) => {
			return {
				...prevFilters,
				sortByPrice: checked
			};
		});
	}

	return (
		<div className='shoe-listing-container'>
			<div className='shoe-listing-header'>
				<div className='shoe-listing-title'>New Arrivals</div>
				<CheckboxFilter
					label='Sort by Price'
					applyCheckboxFilter={setSortFilter}
				/>
			</div>

			<ShoeList
				shoes={props.shoes}
			/>
		</div>
	);
};

export default ShoeListing;
