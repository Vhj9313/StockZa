<script>
  import Icon from '@iconify/svelte';
</script>

<footer>
  <div class="social-icons">
    <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
      <Icon icon="icon-park-outline:instagram" />
    </a>
    <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
      <Icon icon="fa6-brands:facebook" />
    </a>
    <a href="https://x.com" target="_blank" aria-label="X (formerly Twitter)">
      <Icon icon="ri:twitter-x-fill" />
    </a>
    <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
      <Icon icon="fa6-brands:linkedin" />
    </a>
  </div>
  <p>&copy; 2025 StockZa. All rights reserved.</p>
</footer>

<style>
  footer {
    background: linear-gradient(to right, #0f172a, #1e293b, #0f172a); /* 🌌 Soft gradient match */
    color: #f8fafc;
    text-align: center;
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .social-icons a {
    color: #f8fafc;
    font-size: 24px;
    transition: color 0.3s;
  }

  .social-icons a:hover {
    color: #38bdf8;
  }

  footer p {
    margin: 0;
    font-size: 14px;
    color: #cbd5e1;
  }

  @media (min-width: 600px) {
    .social-icons {
      gap: 30px;
    }

    footer p {
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    .social-icons a {
      font-size: 28px;
    }

    footer p {
      font-size: 18px;
    }
  }
</style>
