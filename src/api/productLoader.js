import { BACK_END_URL } from "../constants/api";

export function productLoader({ request }) {
	const pageUrl = new URL(request.url);
	const page = pageUrl.searchParams.get("page") || 1;
	
	return fetch(`${BACK_END_URL}/food?page=${page}`)
		.then((res) => res.json())
		.then((data) => {
			return data;
		});
}
