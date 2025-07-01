<script>
    import { onMount } from 'svelte';
  
    let indices = [
        { name: "NIFTY 50", price: 22212.25, prevClose: 22300.5 },
    { name: "BANK NIFTY", price: 47630.15, prevClose: 47500.6 },
    { name: "SENSEX", price: 73600.10, prevClose: 73850.2 },
    { name: "BANKEX", price: 50700.55, prevClose: 50550.9 },
    { name: "NIFTY MIDCAP 100", price: 45400.3, prevClose: 45600.75 },
    { name: "NIFTY SMALLCAP 100", price: 8200.85, prevClose: 8250.95 },
    { name: "NIFTY NEXT 50", price: 30000.5, prevClose: 29950.75 },
    { name: "NIFTY 500", price: 7000.45, prevClose: 7020.25 },
    { name: "S&P BSE SENSEX NEXT 50", price: 19500.25, prevClose: 19650.5 },
    { name: "S&P BSE MIDCAP", price: 15300.75, prevClose: 15350.1 },
    { name: "S&P BSE SMALLCAP", price: 14000.5, prevClose: 14050.7 },
    { name: "NIFTY 100", price: 18500.75, prevClose: 18450.95 },
    { name: "S&P BSE 200", price: 33000.75, prevClose: 32950.45 },
    { name: "S&P BSE 500", price: 8500.55, prevClose: 8490.45 }
    ];
  
    indices = indices.map(indice => {
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
      {#each indices as indice}
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
          {#each indices as indice}
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
  