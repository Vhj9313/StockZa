<script>
    import StocksList from '$lib/components/StocksList.svelte';
</script>

<main class="stocks-page">
    <section class="header">
        <h1>📈 Stocks Overview</h1>
        <p>Explore the latest stock prices, trends, and market insights for top companies in the Nifty 50 and Bank Nifty indices.</p>
    </section>

    <section class="stock-section">
        <StocksList />
    </section>
</main>

<style>
    .stocks-page {
        padding: 1.5rem;
        color: #f8fafc;
        background: linear-gradient(135deg, #0f172a, #1e293b);
        min-height: 100vh;
    }

    .header {
        text-align: center;
        margin-bottom: 2rem;
    }

    .header h1 {
        margin-top: 0;
        font-size: 2.5rem;
        color: #38bdf8;
    }

    .header p {
        font-size: 1.125rem;
        color: #cbd5e1;
    }

    .stock-section {
        border-radius: 1rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
</style>
