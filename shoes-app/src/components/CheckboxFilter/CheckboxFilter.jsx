import React from 'react';
import './checkbox-filter.css';

const CheckboxFilter = () => {
	return (
		<div className='checkbox-filter'>
			<label className="form-control">
				<input type="checkbox"
					className='filter__input'
					name="sort-by-price-filter" />
				Sort by Price
			</label>
		</div>
	);
};

export default CheckboxFilter;
