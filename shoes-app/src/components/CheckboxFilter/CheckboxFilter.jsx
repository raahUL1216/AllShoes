import React from 'react';
import './checkbox-filter.css';

const CheckboxFilter = (props) => {
	return (
		<div className='checkbox-filter'>
			<label className="form-control">
				<input type="checkbox"
					className='filter__input'
					name={props.label}
					onChange={props.applyCheckboxFilter} />
				<span>{props.label}</span>
			</label>
		</div>
	);
};

export default CheckboxFilter;
