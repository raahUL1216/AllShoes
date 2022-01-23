import { availableShoes } from "../mockResponse/availableShoesResponse";

export const getShoes = (filters) => {
	let shoes = availableShoes;

	// apply searchText filter
	if (filters.searchText) {
		const searchText = filters.searchText.toLowerCase();

		shoes = shoes.filter(shoe => {
			const searchWords = searchText.split(' ');

			return searchWords.reduce((searchFound, searchWord) => {
				return searchFound &&
					searchTextInShoe(shoe, searchWord);
			}, true);
		});
	}

	// filter category
	if (filters.categories.length) {
		shoes = shoes.filter(shoe => filters.categories.includes(shoe.category));
	}

	// filter by price 
	shoes = shoes.filter(shoe => (shoe.price >= 0 && shoe.price <= filters.maxPrice));

	// filter by size
	if (filters.size?.length) {
		shoes = shoes.filter(shoe => shoe.size.includes(filters.size));
	}

	// sort by price
	if (filters.sortByPrice) {
		shoes = shoes.sort((a, b) => b.price - a.price);
	}

	return Promise.resolve(shoes);
}

const searchTextInShoe = (shoe, searchText) => {
	let foundSearch = false;
	shoe = (({ name, brand, color, category }) => ({ name, brand, color, category }))(shoe);

	foundSearch = Object.keys(shoe).some(
		property => {
			let propValue = shoe[property];

			if (Array.isArray(propValue)) {
				propValue = propValue.map(value => value.toLowerCase());
			} else {
				propValue = propValue.toLowerCase();
			}

			return propValue.includes(searchText);
		}
	);

	return foundSearch;
}