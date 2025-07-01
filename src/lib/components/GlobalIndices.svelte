<script>
    import { onMount } from 'svelte';
  
    let globalIndices = [
      { name: "Dow Jones", price: 33530.14, prevClose: 33480.15 },
      { name: "NASDAQ", price: 13500.76, prevClose: 13450.25 },
      { name: "S&P 500", price: 4200.50, prevClose: 4185.25 },
      { name: "FTSE 100", price: 7400.12, prevClose: 7380.10 },
      { name: "DAX", price: 15680.90, prevClose: 15710.40 },
      { name: "Nikkei 225", price: 29550.32, prevClose: 29490.10 },
      { name: "Hang Seng", price: 19350.45, prevClose: 19220.00 },
      { name: "ASX 200", price: 7325.89, prevClose: 7305.25 },
      { name: "CAC 40", price: 6785.60, prevClose: 6790.10 },
      { name: "IBEX 35", price: 8800.40, prevClose: 8790.50 },
      { name: "Shanghai Composite", price: 3100.80, prevClose: 3120.10 },
      { name: "Bovespa", price: 107000.50, prevClose: 106950.30 },
      { name: "KOSPI", price: 2530.40, prevClose: 2520.10 },
      { name: "Russell 2000", price: 2100.30, prevClose: 2095.00 },
      { name: "MIB", price: 26000.60, prevClose: 25980.40 }
    ];
  
    globalIndices = globalIndices.map(indice => {
      const change = indice.price - indice.prevClose;
      const percentChange = ((change / indice.prevClose) * 100).toFixed(2);
      return { ...indice, change, percentChange, absDifference: Math.abs(change).toFixed(2) };
    });
  
    let windowWidth;
  
    const updateWindowWidth = () => {
      windowWidth = window.innerWidth;
    };
  
    onMount(() => {
      windowWidth = window.innerWidth;
      window.addEventListener('resize', updateWindowWidth);
      return () => {
        window.removeEventListener('resize', updateWindowWidth);
      };
    });
  </script>
  
  <style>
    .container {
      max-width: 100%;
      margin: 2rem auto;
      padding: 1rem;
      background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
      border-radius: 12px;
      color: #fff;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
      overflow-x: auto;
    }
  
    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      font-size: 2.5rem;
      font-weight: 600;
    }
  
    /* Table Layout for Larger Screens */
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
  
    .positive {
      color: #4caf50;
    }
  
    .negative {
      color: #f44336;
    }
  
    .difference-positive {
      color: #4caf50;
    }
  
    .difference-negative {
      color: #f44336;
    }
  
    .difference {
      font-weight: bold;
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
  
    .card .card-footer {
      font-size: 0.8rem;
      margin-top: 1rem;
      font-weight: bold;
    }
  
    .card .positive {
      color: #4caf50;
    }
  
    .card .negative {
      color: #f44336;
    }
  
    /* Media Queries */
    @media (max-width: 650px) {
      .container {
        padding: 1rem;
        width: 100%;
      }
  
      /* Card Layout for Screens Below 650px */
      table {
        display: none;
      }
  
      .card {
        margin-bottom: 1rem;
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
  
  <div class="container">
    <!-- Card Layout for Smaller Screens -->
    {#if windowWidth <= 650}
      {#each globalIndices as indice}
        <div class="card">
          <div class="card-header">
            {indice.name}
          </div>
          <div class="card-body">
            <span><strong>Current Price:</strong> {indice.price.toFixed(2)}</span>
            <span><strong>Previous Close:</strong> {indice.prevClose.toFixed(2)}</span>
            <span><strong>Change (%):</strong> 
              <span class={indice.change >= 0 ? 'positive' : 'negative'}>
                {indice.percentChange}%
              </span>
            </span>
            <span><strong>Difference:</strong> 
              <span class={indice.change >= 0 ? 'difference-positive' : 'difference-negative'}>
                {indice.absDifference}
              </span>
            </span>
          </div>
          <div class="card-footer">
            {indice.change >= 0 ? 'Positive' : 'Negative'}
          </div>
        </div>
      {/each}
    {:else}
      <!-- Table Layout for Larger Screens -->
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Current Price</th>
            <th>Previous Close</th>
            <th>Change (%)</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          {#each globalIndices as indice}
            <tr>
              <td>{indice.name}</td>
              <td>{indice.price.toFixed(2)}</td>
              <td>{indice.prevClose.toFixed(2)}</td>
              <td class={indice.change >= 0 ? 'positive' : 'negative'}>
                {indice.percentChange}%
              </td>
              <td class={indice.change >= 0 ? 'difference-positive' : 'difference-negative'}>
                {indice.absDifference}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    {/if}
  </div>
  