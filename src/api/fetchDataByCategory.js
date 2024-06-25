import { BACK_END_URL } from "../constants/api";

export async function fetchDataByCategory(category) {
	try {
		const response = await fetch(`${BACK_END_URL}/food/${category}`);

		if (!response.ok) {
			throw new Error("Category Fetch Failed");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Fetch error:", error);
		throw error;
	}
}
