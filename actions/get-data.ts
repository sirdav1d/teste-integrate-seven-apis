/** @format */

'use server';

export async function getData() {
	const resp = await fetch(
		'https://rjnfrwp904.execute-api.us-east-1.amazonaws.com/envhospital/user',
		{
			headers: {
				Authorization: `Bearer hw9X6oBH-JNynNJIuKEnP2B0q4zrPWhpPzoVZ8AsR`,
			},
		},
	);

	const data = resp.json();

	return data;
}
