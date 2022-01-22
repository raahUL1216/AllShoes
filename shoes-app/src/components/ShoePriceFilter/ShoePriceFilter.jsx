import React from 'react';
import './shoe-price-filter.css';

const ShoePriceFilter = () => {
	const filterPrice = (event) => {
		const output = document.getElementById("demo");

		output.innerHTML = event.target.value;
	}

	return (
		<div className='price-filter-container'>
			<div className='price-filter-title'>Price</div>

			<div className="slidecontainer">
				<input type="range" min="1" max="100" value="50" className="slider" id="myRange"
					onInput={filterPrice} />
				<p>Value: <span id="demo"></span></p>
			</div>
		</div>
	);
};

export default ShoePriceFilter;
