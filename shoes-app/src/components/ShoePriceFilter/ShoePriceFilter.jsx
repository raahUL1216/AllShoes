import React from 'react';
import './shoe-price-filter.css';

const ShoePriceFilter = (props) => {
	const filterPrice = (event) => {
		const maxPrice = parseInt(event.target.value);

		props.setFilters((prevFilters) => {
			return {
				...prevFilters,
				maxPrice: maxPrice
			};
		});
	}

	const showSliderIndicator = () => {
		const inputSlider = document.getElementById("price-slider");
		const slideValue = document.getElementById("price-slider-value");

		const currentValue = inputSlider.value;
		let indicatorPosition = (currentValue / 40);

		slideValue.textContent = currentValue;
		slideValue.style.left = indicatorPosition + "%";
		slideValue.classList.add("show");
	}

	const hideSliderIndicator = () => {
		const slideValue = document.getElementById("price-slider-value");
		slideValue.classList.remove("show");
	}

	return (
		<div className='price-filter-container'>
			<div className='price-filter-title'>Price</div>

			<div className='price-range'>
				<div className='range-slider-value'>
					<span id='price-slider-value'>{props.filters.maxPrice}</span>
				</div>

				<div className='field'>
					<div className='value left'>
						{props.availableFilterValues.priceRange.min}
					</div>

					<input type="range"
						id='price-slider'
						min={props.availableFilterValues.priceRange.min}
						max={props.availableFilterValues.priceRange.max}
						steps="1"
						value={props.filters.maxPrice}
						onChange={filterPrice}
						onInput={showSliderIndicator}
						onBlur={hideSliderIndicator}
					/>

					<div className='value right'>
						{props.availableFilterValues.priceRange.max}
					</div>

				</div>
			</div>
		</div>
	);
};

export default ShoePriceFilter;
