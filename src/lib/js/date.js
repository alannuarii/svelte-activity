export const date2 = (tanggal) => {
	// membuat objek Date dengan parameter waktu Sat, 06 May 2023 00:00:00 GMT
	const date = new Date(tanggal);
	const months = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	];
	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();
	const formattedDate = `${day} ${months[monthIndex]} ${year}`;
	return formattedDate;
	// 6 Mei 2023
};

export const date1 = (tanggal) => {
	const days = [
		'Minggu',
		'Senin',
		'Selasa',
		'Rabu',
		'Kamis',
		'Jumat',
		'Sabtu'
	];

	// membuat objek Date dengan parameter waktu Sat, 06 May 2023 00:00:00 GMT
	const date = new Date(tanggal);
	const dayIndex = date.getDay();
	const day = days[dayIndex];
	const months = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	];
	const monthIndex = date.getMonth();
	const year = date.getFullYear();
	const formattedDate = `${day}, ${date.getDate()} ${months[monthIndex]} ${year}`;
	// Contoh hasil: Sabtu, 6 Mei 2023
	return formattedDate;
};
