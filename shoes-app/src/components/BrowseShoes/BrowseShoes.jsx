import React, { useEffect } from 'react';
import { getShoes } from '../../common/getShoes';
import Navbar from '../Navbar/Navbar';
import ShoeFilters from '../ShoeFilters/ShoeFilters';
import ShoeListing from '../ShoeListing/ShoeListing';
import './browse-shoes.css'

const BrowseShoes = () => {
	const [shoes, setShoes] = React.useState([]);
	const [filters, setFilters] = React.useState({
		searchText: '',
		categories: [],
		maxPrice: 1000,
		size: 0,
		sortByPrice: false
	});

	// get shoes and apply filter
	useEffect(() => {
		getShoes(filters)
			.then((shoes) => {
				setShoes(shoes);
			})
			.catch(error => {
				console.error(error);
			});
	}, [filters]);

	return (
		<div className='browse-shoes-container'>
			<div className='browse-shoe-header'>
				<Navbar
					filters={filters}
					setFilters={setFilters}
				/>
			</div>

			<div className='browse-shoe-body'>
				<ShoeFilters
					filters={filters}
					setFilters={setFilters}
				/>
				<ShoeListing
					shoes={shoes}
					filters={filters}
					setFilters={setFilters}
				/>
			</div>
		</div>
	);
};

export default BrowseShoes;
