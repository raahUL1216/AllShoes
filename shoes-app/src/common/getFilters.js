import { shoesCategories } from "../mockResponse/categoryFilterResponse";
import { priceRange } from "../mockResponse/priceRangeFilterResponse";
import { availableShoeSize } from "../mockResponse/sizeFilterResponse";

export const getFilterValues = () => {
	return Promise.resolve({
		categories: shoesCategories,
		priceRange: priceRange,
		availableShoeSize: availableShoeSize
	});
}