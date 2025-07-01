// src/lib/stores/stocks.js
import { writable } from 'svelte/store';

export const stocks = writable([]);
export const loading = writable(false);
export const error = writable(null);

export async function loadStocks() {
	loading.set(true);
	error.set(null);

	try {
		const res = await fetch('/api/stocks');
		if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

		const data = await res.json();
		console.log('✅ Stock data loaded:', data);
		stocks.set(data);
	} catch (err) {
		error.set(err.message || 'Unknown error');
		stocks.set([]); // Clear data on error
	} finally {
		loading.set(false);
	}
}
