import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { EventKeyCode } from '../../constants/EventKeyCodes';
import { RiCloseLine } from 'react-icons/ri';
import './search-input.css';

const SearchInput = (props) => {
	const applySearchTextFilter = (searchText) => {
		props.setFilters((prevFilters) => {
			return {
				...prevFilters,
				searchText: searchText
			};
		});
	}

	const searchItemFromSearchIcon = (event) => {
		if (event.type === 'keyup') {
			const keyPressed = event.which || event.keyCode || 0;

			if (keyPressed === EventKeyCode.Enter) {
				applySearchTextFilter(props.filters.searchText);
			}
		} else {
			applySearchTextFilter(props.filters.searchText);
		}
	}

	const searchItem = (event) => {
		const searchText = event.target.value;

		if (event.type === 'keyup') {
			const keyPressed = event.which || event.keyCode || 0;

			if (keyPressed === EventKeyCode.Enter) {
				applySearchTextFilter(searchText);
			}
		} else {
			applySearchTextFilter(searchText);
		}
	}

	const clearSearch = (event) => {
		if (event.type === 'keyup') {
			const keyPressed = event.which || event.keyCode || 0;

			if (keyPressed === EventKeyCode.Enter) {
				applySearchTextFilter('');
			}
		} else {
			applySearchTextFilter('');
		}
	}


	return (
		<div className='search-input-wrapper'>
			<FaSearch className='search-input-icon'
				tabIndex={0}
				onClick={searchItemFromSearchIcon}
				onKeyUp={searchItemFromSearchIcon}
				data-testid='search-input-icon'
			/>

			<input type="text"
				className='search-input'
				placeholder="Search shoe"
				value={props.filters.searchText}
				onChange={searchItem}
				onKeyUp={searchItem}
				data-testid='search-input'
				name="shoeSearchText"
				autoFocus
			/>

			<RiCloseLine className='clear-input-icon'
				tabIndex={0}
				onClick={clearSearch}
				onKeyUp={clearSearch}
				data-testid='clear-input-icon'
			/>
		</div>
	)
}

export default SearchInput
