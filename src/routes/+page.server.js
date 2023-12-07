import { API_ENDPOINT } from '$env/static/private';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const formData = new FormData();
        formData.append('jenis', data.get('jenis'));
        formData.append('tanggal', data.get('tanggal'));
        formData.append('pekerjaan', data.get('pekerjaan'));
        if (data.get('perushaan') === null) {
            formData.append('perusahaan', 'PLN NP');
        } else {
            formData.append('perusahaan', data.get('perusahaan'));
        }
        const fotoFiles = data.getAll('foto');
        fotoFiles.forEach((file) => {
            formData.append('foto', file);
        });

        const res = await fetch(`${API_ENDPOINT}/input`, {
            method: 'POST',
            body: formData
        });

        return res.json();
    }
};