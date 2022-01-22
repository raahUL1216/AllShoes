import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { EventKeyCode } from '../../constants/EventKeyCodes';
import { RiCloseLine } from 'react-icons/ri';
import './search-input.css';

const SearchInput = (props) => {
	/*
	const showUserSearchesPage = (event) => {
		if (props.searchText) {
			if (event.type === 'keydown') {
				const keyPressed = event.which || event.keyCode || 0;

				if (keyPressed === EventKeyCode.Enter) {
					history.push(`/searches/${props.searchText}`);
				}
			} else {
				history.push(`/searches/${props.searchText}`);
			}
		}
	}

	const clearUserSearch = (event) => {
		if (event.type === 'keydown') {
			const keyPressed = event.which || event.keyCode || 0;

			if (keyPressed === EventKeyCode.Enter) {
				props.setSearchText('');
				props.setSearchSuggestions([]);
			}
		} else {
			props.setSearchText('');
			props.setSearchSuggestions([]);
		}
	}
	*/

	return (
		<div className='search-input-wrapper'>
			<FaSearch className='search-input-icon'
				tabIndex={0}
				// onClick={props.searchShoe(props.searchText)}
				// onKeyDown={props.searchShoe(props.searchText)}
				data-testid='search-input-icon'
			/>

			<input type="text"
				className='search-input'
				placeholder="Search shoe"
				// value={props.searchText}
				// onChange={(event) => { props.searchShoe(event.target.value) }}
				// onKeyDown={showUserSearchesPage}
				data-testid='search-input'
				name="searchText"
				autoFocus
			/>

			<RiCloseLine className='clear-input-icon'
				tabIndex={0}
				// onClick={props.clearSearch}
				// onKeyDown={props.clearSearch}
				data-testid='clear-input-icon'
			/>
		</div>
	)
}

export default SearchInput
