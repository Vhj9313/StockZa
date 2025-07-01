<script>
  import { onMount } from 'svelte';

  let newsArticles = [];
  let loading = true;

  const fetchNews = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/everything?q=stock market&apiKey=4ffb9a86536e4697adce5a812bdec9d9');
      const data = await response.json();
      newsArticles = data.articles;
    } catch (error) {
      console.error("Failed to fetch news:", error);
    } finally {
      loading = false;
    }
  };

  onMount(() => {
    fetchNews();
  });
</script>

<main>
  <h1>📈 Stock Market News</h1>
  <div class="news-container">
    {#if loading}
      <div class="spinner"></div>
    {:else if newsArticles.length > 0}
      {#each newsArticles as article}
        <div class="news-item">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <p class="date">Published on: {new Date(article.publishedAt).toLocaleDateString()}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      {/each}
    {:else}
      <p>No news articles available.</p>
    {/if}
  </div>
</main>

<style>
  main {
    background: linear-gradient(135deg, #0f172a, #1e293b); /* Same background as Stocks Overview */
    padding: 1rem;
    color: white;
    min-height: 100vh; /* Ensure it takes up full height */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center the spinner vertically */
    align-items: center; /* Center horizontally */
  }

  h1 {
    text-align: center;
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #38bdf8;
  }

  .news-container {
    margin: 2rem auto;
    padding: 1rem;
    border-radius: 16px;
    color: #fff;
    max-width: 1200px;
  }

  .news-item {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 1.25rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .news-item h3 {
    font-size: 1.75rem;
    color: #ffffff;
    margin-bottom: 0.8rem;
    font-weight: 600;
  }

  .news-item p {
    color: #ddd;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .news-item a {
    color: #4CAF50;
    font-weight: bold;
    text-decoration: none;
    font-size: 1rem;
  }

  .news-item a:hover {
    text-decoration: underline;
    color: #76d275;
  }

  .date {
    font-size: 0.9rem;
    color: #aaa;
    margin-top: 0.5rem;
  }

  .spinner {
    border: 6px solid rgba(255, 255, 255, 0.2);
    border-top: 6px solid #4CAF50;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    animation: spin 1s linear infinite;
    margin: 2rem auto;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 650px) {
    .news-container {
      padding: 0.5rem;
      width: 100%;
    }

    .news-item {
      margin-bottom: 1rem;
      padding: 1rem;
    }

    h1 {
      font-size: 2rem;
    }

    .news-item h3 {
      font-size: 1.4rem;
    }

    .news-item p {
      font-size: 1rem;
    }

    .news-item a {
      font-size: 0.9rem;
    }
  }
</style>
