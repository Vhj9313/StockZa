<script>
    import IndianIndices from '$lib/components/IndianIndices.svelte';
    import GlobalIndices from '$lib/components/GlobalIndices.svelte';
  
    let activeTab = 'indian'; // Default active tab
</script>

<main class="indices-page">
    <section class="header">
        <h1>📊 Indices Overview</h1>
        <p>Explore key indices from India and around the world.</p>
    </section>

    <section class="tabs">
        <button 
            class="tab-button" 
            class:active={activeTab === 'indian'} 
            on:click={() => activeTab = 'indian'}
        >
            Indian Indices
        </button>
        <button 
            class="tab-button" 
            class:active={activeTab === 'global'} 
            on:click={() => activeTab = 'global'}
        >
            Global Indices
        </button>
    </section>

    <section class="indices-section">
        {#if activeTab === 'indian'}
            <IndianIndices />
        {:else}
            <GlobalIndices />
        {/if}
    </section>
</main>

<style>
    /* Overall page styling */
    .indices-page {
        padding: 1.5rem;
        color: #f8fafc;
        background: linear-gradient(135deg, #0f172a, #1e293b); /* Dark gradient background */
        min-height: 100vh;
        box-sizing: border-box;
    }

    .header {
        text-align: center;
        margin-bottom: 2rem;
    }

    .header h1 {
        margin-top: 0;
        font-size: 2.5rem;
        color: #38bdf8; /* Bright blue */
    }

    .header p {
        font-size: 1.125rem;
        color: #cbd5e1;
    }

    .tabs {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }

    /* Button Styling for Tab */
    .tab-button {
        background: #1e293b;
        color: #f8fafc;
        padding: 12px 24px;
        margin: 0 1rem;
        border: none;
        cursor: pointer;
        transition: background 0.3s ease;
        font-size: 1.1rem;
        border-radius: 5px;
    }

    .tab-button:hover {
        background: #334155;
    }

    .tab-button.active {
        background: #38bdf8;
        color: #0f172a;
    }

    .indices-section {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        margin-top: 2rem;
    }
</style>
