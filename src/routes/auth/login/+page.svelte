<script>
  let email = '';
  let password = '';
  let errorMessage = '';
  let emailError = '';
  let passwordError = '';

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Password validation function
  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // Handle login on form submission
  const handleLogin = async () => {
    if (!email || !password) {
      errorMessage = 'Please fill in both fields!';
      return;
    }
    if (!validateEmail(email)) {
      emailError = 'Invalid email format';
      return;
    }
    if (!validatePassword(password)) {
      passwordError = 'Password should be at least 8 characters';
      return;
    }

    // Clear errors if login is successful
    emailError = '';
    passwordError = '';
    errorMessage = '';
    
    // Perform login API call (Firebase or your backend)
    console.log('Logging in...');
    // Reset fields after login attempt
    email = '';
    password = '';
  };

  // Handle email input changes
  const handleEmailInput = () => {
    if (email === '') {
      emailError = '';
    } else if (!validateEmail(email)) {
      emailError = 'Invalid email format';
    } else {
      emailError = '';
    }
  };

  // Handle password input changes
  const handlePasswordInput = () => {
    if (password === '') {
      passwordError = '';
    } else if (!validatePassword(password)) {
      passwordError = 'Password should be at least 8 characters';
    } else {
      passwordError = '';
    }
  };

  // Disable login button if fields are empty or invalid
  $: isFormValid = validateEmail(email) && validatePassword(password);
</script>

<main class="auth">
  <section class="auth-form">
    <h2>Login</h2>
    <form on:submit|preventDefault={handleLogin}>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          bind:value={email}
          placeholder="Enter your email"
          required
          on:input={handleEmailInput} />
        {#if emailError}
          <p class="error">{emailError}</p>
        {/if}
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          bind:value={password}
          placeholder="Enter your password"
          required
          on:input={handlePasswordInput} />
        {#if passwordError}
          <p class="error">{passwordError}</p>
        {/if}
      </div>

      {#if errorMessage}
        <p class="error">{errorMessage}</p>
      {/if}

      <button type="submit" class="cta" disabled={!isFormValid}>Login</button>
    </form>
    <p class="signin-link">Don't have an account? <a href="/auth/register">Sign up here</a></p>
  </section>
</main>

<style>
  .auth {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #0e1a2b, #1e2b4a); /* Blends with main page */
    color: #f8fafc;
    backdrop-filter: blur(8px); /* Gives a blur effect to blend with page */
  }

  .auth-form {
    background: rgba(0, 0, 0, 0.4); /* Semi-transparent to blend with the page */
    padding: 2.5rem;
    border-radius: 12px;
    width: 100%;
    max-width: 450px;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }

  .auth-form h2 {
    font-size: 2.5rem;
    color: #38bdf8;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .form-group {
    margin-bottom: 1.5rem;
    text-align: left;
    position: relative;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #cbd5e1;
  }

  .form-group input {
    width: 100%;
    padding: 0.75rem;
    background-color: #1e2b4a;
    color: #f8fafc;
    border-radius: 8px;
    border: 1px solid #38bdf8;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  .form-group input:focus {
    outline: none;
    border-color: #0ea5e9;
    box-shadow: 0 0 10px rgba(64, 158, 255, 0.4);
  }

  .cta {
    background: #38bdf8;
    color: #0f172a;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s ease;
    width: 100%;
    cursor: pointer;
    border: none;
    font-size: 1.125rem;
  }

  .cta:disabled {
    background: #d1d5db; /* Disabled state color */
    cursor: not-allowed;
  }

  .cta:hover {
    background: #0ea5e9;
    box-shadow: 0 4px 10px rgba(64, 158, 255, 0.4);
  }

  .error {
    color: #f87171;
    margin-top: 0.5rem;
    font-size: 0.875rem; /* Reduced font size */
    font-weight: normal; /* Lighter font weight */
    line-height: 1.25rem;
  }

  .signin-link {
    margin-top: 1.5rem;
    font-size: 1rem;
    color: #cbd5e1;
  }

  .signin-link a {
    color: #38bdf8;
    font-weight: bold;
    text-decoration: none;
  }

  .signin-link a:hover {
    text-decoration: underline;
  }
  @media (max-width: 640px) {

  .auth-form {
    padding: 2rem 1.5rem;
    max-width: 90%;
  }

  .auth-form h2 {
    font-size: 2rem;
  }

  .form-group label {
    font-size: 0.9rem;
  }

  .form-group input {
    font-size: 0.95rem;
    padding: 0.65rem;
  }

  .cta {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }

  .signin-link {
    font-size: 0.95rem;
  }

  .error {
    font-size: 0.75rem;
  }
}

</style>
