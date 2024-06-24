import { BACK_END_URL } from "../constants/api";

export function fetchDataByCategory(category) {
	return fetch(`${BACK_END_URL}/food/${category}`)
		.then((res) => res.json())
		.then((data) => {
			return data;
		});
}
