<main class="landing">
    <!-- Hero Section -->
    <section class="hero">
      <div class="content">
        <h1>Welcome to <span>StockZa</span></h1>
        <p>Your gateway to smarter investing. Analyze. Track. Grow.</p>
        <a class="cta" href="/auth/register">Get Started</a>
      </div>
    </section>
  
    <!-- Features Section -->
    <section class="features">
      <h2>Core Features</h2>
      <p class="features-sub">Powerful tools designed for smart investors.</p>
  
      <div class="feature-list">
        <div class="feature">
          <h3>📈 Real-Time Data</h3>
          <p>Live market updates, dynamic charts, and price alerts.</p>
        </div>
        <div class="feature">
          <h3>📊 Analytics</h3>
          <p>Understand market trends with visual insights.</p>
        </div>
        <div class="feature">
          <h3>🔔 Custom Alerts</h3>
          <p>Get notified when your stocks move the way you want.</p>
        </div>
      </div>
    </section>
  
    <!-- Why StockZa Section -->
    <section class="why-stockza">
      <div class="why-container">
        <h2>Why Choose StockZa?</h2>
        <ul class="why-list">
          <li>✅ Trusted by 10,000+ users</li>
          <li>🔒 Bank-grade security and data privacy</li>
          <li>🚀 Tools tailored for modern investors</li>
        </ul>
      </div>
    </section>
  </main>
  
  <style>
    .landing {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(135deg, #0e1a2b, #1e2b4a);
      color: #f8fafc;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      overflow-x: hidden;
    }
  
    /* Hero Section */
    .hero {
      padding: 3rem 2rem 2rem;
      text-align: center;
      width: 100%;
    }
  
    .content h1 {
      font-size: 2.8rem;
      margin-bottom: 1rem;
    }
  
    .content h1 span {
      color: #38bdf8;
    }
  
    .content p {
      color: #cbd5e1;
      font-size: 1.125rem;
      margin-bottom: 2.25rem;
    }
  
    .cta {
      background: #38bdf8;
      color: #0f172a;
      padding: 0.75rem 1.5rem;
      border-radius: 9999px;
      font-weight: bold;
      text-decoration: none;
      transition: 0.3s ease;
    }
  
    .cta:hover {
      background: #0ea5e9;
      box-shadow: 0 0 12px #38bdf8;
    }
  
    /* Features Section */
    .features {
      padding: 1rem 1.5rem;
      width: 100%;
      text-align: center;
    }
  
    .features h2 {
      font-size: 2rem;
      color: #38bdf8;
      margin-bottom: 0.5rem;
    }
  
    .features-sub {
      color: #cbd5e1;
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
  
    .feature-list {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: 1fr;
      max-width: 960px;
      margin: 0 auto;
    }
  
    @media (min-width: 768px) {
      .feature-list {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  
    .feature {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 1rem;
      padding: 1.5rem;
      color: #e2e8f0;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
    }
  
    .feature:hover {
      transform: translateY(-5px);
    }
  
    .feature h3 {
      font-size: 1.2rem;
      color: #38bdf8;
      margin-bottom: 0.5rem;
    }
  
    /* Why StockZa Section */
    .why-stockza {
      padding: 1rem 2rem 4rem;
      text-align: center;
      width: 100%;
    }
  
    .why-container {
      max-width: 700px;
      margin: 0 auto;
    }
  
    .why-stockza h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #38bdf8;
    }
  
    .why-list {
      list-style: none;
      padding: 0;
      color: #cbd5e1;
      font-size: 1.125rem;
      display: grid;
      gap: 1rem;
    }
  </style>
  