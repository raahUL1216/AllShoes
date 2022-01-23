import React from 'react';
import './shoe-size-filter.css';

const ShoeSizeFilter = (props) => {
	const setSizeFilter = (size) => {
		props.setFilters((prevFilters) => {
			return {
				...prevFilters,
				size: size
			};
		});
	};

	const highlightSelectedSize = (selectedlElement) => {
		const sizeElements = document.querySelectorAll("#sizeFilter .size-filter-item");

		// remove active class from all listed shoe size
		sizeElements.forEach((element) => {
			element.classList.remove("selected-shoe-size");
		});

		// highlight focused size
		selectedlElement.classList.add('selected-shoe-size');
	};

	const handleClickSizeFilter = (event) => {
		const selectedSizeElement = event.target;

		setSizeFilter(selectedSizeElement.innerHTML);
		highlightSelectedSize(selectedSizeElement);
	}

	const handleKeySizeFilter = (event) => {
		const selectedSizeElement = event.target;

		setSizeFilter(selectedSizeElement.innerHTML);
		highlightSelectedSize(selectedSizeElement);
	};

	return (
		<div className='size-filter-container'>
			<div className='size-filter-title'>Size</div>

			<div className='size-filter' id='sizeFilter'>
				{
					props.availableFilterValues.availableShoeSize.map((size, index) => {
						return (
							<div
								key={index}
								tabIndex={0}
								id={`size-filter-${size}`}
								className='size-filter-item'
								onClick={handleClickSizeFilter}
								onFocus={handleKeySizeFilter}
							>
								{size}
							</div>
						);
					})
				}
			</div>
		</div>
	);
};

export default ShoeSizeFilter;
