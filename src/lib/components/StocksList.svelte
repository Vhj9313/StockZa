<script>
	import { onMount } from "svelte";

	let stocks = [];
	let loading = true;
	let searchTerm = "";
	let windowWidth;

	const symbolToName = {
		"ACC.NS": "ACC Limited",
		"ADANIGREEN.NS": "Adani Green Energy",
		"ADANIPORTS.NS": "Adani Ports and SEZ",
		"AMBUJACEM.NS": "Ambuja Cements",
		"ASIANPAINT.NS": "Asian Paints",
		"AUBANK.NS": "AU Small Finance Bank",
		"BAJAJ-AUTO.NS": "Bajaj Auto",
		"BAJFINANCE.NS": "Bajaj Finance",
		"BHARTIARTL.NS": "Bharti Airtel",
		"BRITANNIA.NS": "Britannia Industries",
		"CIPLA.NS": "Cipla",
		"DIVISLAB.NS": "Divi's Laboratories",
		"DRREDDY.NS": "Dr. Reddy's Laboratories",
		"EICHERMOT.NS": "Eicher Motors",
		"GRASIM.NS": "Grasim Industries",
		"HCLTECH.NS": "HCL Technologies",
		"HDFC.NS": "HDFC Limited",
		"HDFCBANK.NS": "HDFC Bank",
		"HEROMOTOCO.NS": "Hero MotoCorp",
		"HINDALCO.NS": "Hindalco Industries",
		"HINDUNILVR.NS": "Hindustan Unilever",
		"ICICIBANK.NS": "ICICI Bank",
		"ITC.NS": "ITC Limited",
		"JSWSTEEL.NS": "JSW Steel",
		"KOTAKBANK.NS": "Kotak Mahindra Bank",
		"LUPIN.NS": "Lupin Pharmaceuticals",
		"M&M.NS": "Mahindra & Mahindra",
		"MARUTI.NS": "Maruti Suzuki",
		"NESTLEIND.NS": "Nestlé India",
		"NTPC.NS": "NTPC Limited",
		"ONGC.NS": "Oil and Natural Gas Corporation",
		"POWERGRID.NS": "Power Grid Corporation of India",
		"RELIANCE.NS": "Reliance Industries",
		"SBIN.NS": "State Bank of India",
		"SHREECEM.NS": "Shree Cement",
		"SUNPHARMA.NS": "Sun Pharmaceutical Industries",
		"TATAMOTORS.NS": "Tata Motors",
		"TATACONSUM.NS": "Tata Consumer Products",
		"TATAMETALI.NS": "Tata Metaliks",
		"TCS.NS": "Tata Consultancy Services",
		"TECHM.NS": "Tech Mahindra",
		"TITAN.NS": "Titan Company",
		"ULTRACEMCO.NS": "UltraTech Cement",
		"UPL.NS": "UPL Limited",
		"WIPRO.NS": "Wipro Limited",
		"YESBANK.NS": "YES Bank",
		"ZEE.NS": "Zee Entertainment Enterprises"
	};

	const updateWindowWidth = () => {
		windowWidth = window.innerWidth;
	};

	onMount(async () => {
		windowWidth = window.innerWidth;
		window.addEventListener("resize", updateWindowWidth);

		try {
			const response = await fetch("/api/stocks");
			const data = await response.json();
			stocks = data.map(stock => ({
				symbol: stock.symbol,
				name: symbolToName[stock.symbol] || stock.symbol,
				currentPrice: stock.price
			}));
		} catch (e) {
			console.error("Error fetching stocks:", e);
		} finally {
			loading = false;
		}

		return () => window.removeEventListener("resize", updateWindowWidth);
	});
</script>

<div class="container">
	<div class="search-bar">
		<input
			type="text"
			bind:value={searchTerm}
			placeholder="🔍 Search stocks..."
			class="search-input"
		/>
	</div>

	{#if loading}
		<div class="loading-container">
			<div class="spinner"></div>
			<p>Fetching latest prices...</p>
		</div>
	{:else}
		{#if windowWidth <= 650}
			{#each stocks.filter(stock => stock.name.toLowerCase().includes(searchTerm.toLowerCase())) as stock, index}
				<div class="card">
					<div class="card-header">
						{stock.name}
					</div>
					<div class="card-body">
						<span><strong>Sr. No.:</strong> {index + 1}</span>
						<span><strong>Symbol:</strong> {stock.symbol}</span>
						<span><strong>Current Price:</strong> ₹{stock.currentPrice}</span>
					</div>
				</div>
			{/each}
		{:else}
			<div class="stocks-list">
				<table>
					<thead>
						<tr>
							<th>Sr. No.</th>
							<th>Symbol</th>
							<th>Name</th>
							<th>Current Price (₹)</th>
						</tr>
					</thead>
					<tbody>
						{#each stocks.filter(stock => stock.name.toLowerCase().includes(searchTerm.toLowerCase())) as stock, index}
							<tr>
								<td>{index + 1}</td>
								<td>{stock.symbol}</td>
								<td>{stock.name}</td>
								<td>{stock.currentPrice}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	{/if}
</div>

<style>
	.container {
		max-width: 100%;
		margin: 2rem auto;
		padding: 1rem;
		background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
		border-radius: 12px;
		color: #fff;
		overflow-x: auto;
	}

	.search-bar {
		display: flex;
		justify-content: center;
		margin-bottom: 1.5rem;
	}

	.search-input {
		background-color: #0f172a;
		border: 1px solid #334155;
		color: #f1f5f9;
		padding: 0.6rem 1rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		width: 100%;
		max-width: 400px;
		transition: border 0.3s ease, box-shadow 0.3s ease;
		margin-top: 1.4rem;
	}

	.search-input:focus {
		outline: none;
		border-color: #38bdf8;
		box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.5);
	}

	.loading-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		color: #94a3b8;
		font-size: 1rem;
	}

	.spinner {
		border: 4px solid #1e293b;
		border-top: 4px solid #38bdf8;
		border-radius: 50%;
		width: 36px;
		height: 36px;
		animation: spin 1s linear infinite;
		margin-bottom: 1rem;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	/* Table Styles */
	table {
		width: 100%;
		border-collapse: collapse;
		table-layout: fixed;
	}

	th, td {
		padding: 1rem;
		text-align: left;
		border-bottom: 1px solid #444;
	}

	th {
		background-color: #1f2d3d;
		font-size: 1.1rem;
	}

	/* Card Layout for Small Screens */
	.card {
		background-color: rgba(255, 255, 255, 0.1);
		margin-bottom: 1rem;
		padding: 1rem;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
	}

	.card .card-header {
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.card .card-body {
		font-size: 0.9rem;
		display: flex;
		flex-direction: column;
	}

	.card .card-body span {
		margin-bottom: 0.3rem;
	}

	/* Media Queries */
	@media (max-width: 650px) {
		table {
			display: none;
		}
	}

	@media (min-width: 1024px) {
		.container {
			width: 90%;
		}
		table {
			width: 100%;
		}
	}
</style>
