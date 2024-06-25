import { BACK_END_URL } from "../constants/api";

export async function productLoader({ request }) {
	const pageUrl = new URL(request.url);
	const page = pageUrl.searchParams.get("page") || 1;

	try {
		const response = await fetch(`${BACK_END_URL}/food?page=${page}`);
		if (!response.ok) {
			throw new Error("Fetch failed");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Fetch error:", error);
		throw error;
	}
}
