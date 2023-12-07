import { API_ENDPOINT } from '$env/static/private'

export const load = async () => {
	const res = await fetch(`${API_ENDPOINT}/get-all-activity`);
	const data = await res.json();

	return {
		data: data
	};
};