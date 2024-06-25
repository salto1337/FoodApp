import { BACK_END_URL } from "../constants/api";

export async function message(user) {
	try {
		const response = await fetch(`${BACK_END_URL}/contact`, {
			method: "POST",
			body: JSON.stringify(user),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new Error("Problem with message");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Fetch error:", error);
		throw error;
	}
}
