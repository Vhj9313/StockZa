<script>
  let name = "Vaibhav Jadhav";
  let email = "vaibhavjadhav9313@gmail.com";
  let language = "English";
  let colorTheme = "Light";
  let darkMode = true;

  const logout = () => {
    console.log("Logged out");
    // Handle logout functionality here
  };
</script>

<main class="settings-page">
  <div class="settings-container">
    <h1>⚙️ Settings</h1>

    <!-- Profile Section -->
    <div class="section">
      <h2>👤 Profile</h2>
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" value={name} disabled />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" value={email} disabled />
      </div>
    </div>

    <!-- Preferences Section -->
    <div class="section">
      <h2>🎛️ Preferences</h2>
      <div class="form-group">
        <label for="language">Language</label>
        <select id="language" bind:value={language}>
          <option>English</option>
          <option>Marathi</option>
          <option>Hindi</option>
        </select>
      </div>
      <div class="form-group">
        <label for="colorTheme">Color Theme</label>
        <select id="colorTheme" bind:value={colorTheme}>
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
    </div>

    <!-- Security Section -->
    <div class="section">
      <h2>🔒 Security</h2>
      <button class="button">Change Password</button>
      <p>Change your password from here.</p>
    </div>

    <!-- Logout Section -->
    <div class="section">
      <h2>🚪 Account</h2>
      <button class="button logout-btn" on:click={logout}>Logout</button>
      <p>Log out of your account.</p>
    </div>
  </div>
</main>

<style>
  .settings-page {
    background: linear-gradient(135deg, #0f172a, #1e293b);
    color: white;
    padding: 2rem;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .settings-container {
    max-width: 900px;
    width: 100%;
  }

  h1 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    color: #38bdf8;
    margin-bottom: 2rem;
  }

  .section {
    background: rgba(255, 255, 255, 0.05);
    margin-bottom: 2rem;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .section h2 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #4CAF50;
    margin-bottom: 1rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  input[type="text"],
  input[type="email"],
  select {
    width: 100%;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    border-radius: 8px;
    font-size: 1rem;
  }

  select {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }

  .button {
    padding: 1rem 2rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .button:hover {
    background-color: #76d275;
  }

  .logout-btn {
    background-color: #e74c3c;
  }

  .logout-btn:hover {
    background-color: #c0392b;
  }

  @media (max-width: 768px) {
    .settings-container {
      padding: 1rem;
    }

    h1 {
      font-size: 2rem;
    }

    .section h2 {
      font-size: 1.5rem;
    }

    label {
      font-size: 1rem;
    }

    input,
    select {
      font-size: 0.9rem;
    }

    .button {
      font-size: 0.9rem;
    }
  }
</style>
