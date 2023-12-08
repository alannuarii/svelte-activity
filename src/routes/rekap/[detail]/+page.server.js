import { API_ENDPOINT } from '$env/static/private'

export const load = async (params) => {
    const kode = params.params.detail

	const res = await fetch(`${API_ENDPOINT}/get-activity-param/${kode}`);
	const data = await res.json();

	return {
		data: data
	};
};