import { BACK_END_URL } from "../constants/api";

export function message(user) {
	return fetch(`${BACK_END_URL}/contact`, {
		method: "POST",
		body: JSON.stringify(user),
		headers: {
			"Conten-Type": "application/json",
		},
	})
		.then((res) => res.json())
		.then((res) => {
			return res;
		});
}
