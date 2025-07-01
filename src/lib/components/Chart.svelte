<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let chartContainer;
  
    onMount(() => {
      const ctx = chartContainer.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            label: 'Stock Price',
            data: [10, 20, 15, 30, 25],
            borderColor: 'rgb(75, 192, 192)',
            fill: false,
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              beginAtZero: true
            }
          }
        }
      });
    });
  </script>
  
  <canvas bind:this={chartContainer}></canvas>
  
  <style>
    canvas {
      width: 100%;
      height: 400px;
    }
  </style>
  