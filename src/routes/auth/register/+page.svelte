<script>
    let email = '';
    let password = '';
    let confirmPassword = '';
  
    let emailError = '';
    let passwordError = '';
    let confirmPasswordError = '';
  
    const validateEmail = (email) => {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    };
  
    const handleSubmit = () => {
      if (password.length < 8) {
        passwordError = 'Password should be at least 8 characters';
        return;
      }
      if (password !== confirmPassword) {
        confirmPasswordError = "Passwords do not match";
        return;
      }
  
      // clear everything
      emailError = '';
      passwordError = '';
      confirmPasswordError = '';
      email = '';
      password = '';
      confirmPassword = '';
    };
  
    const handleEmailInput = () => {
      if (email.trim() === '') {
        emailError = '';
      } else if (!validateEmail(email)) {
        emailError = 'Invalid email format';
      } else {
        emailError = '';
      }
    };
  
    const handlePasswordInput = () => {
      if (password === '') {
        passwordError = '';
      } else if (password.length < 8) {
        passwordError = 'Password should be at least 8 characters';
      } else {
        passwordError = '';
      }
  
      if (confirmPassword !== '' && confirmPassword !== password) {
        confirmPasswordError = 'Passwords do not match';
      } else {
        confirmPasswordError = '';
      }
    };
  
    const handleConfirmPasswordInput = () => {
      if (confirmPassword === '') {
        confirmPasswordError = '';
      } else if (confirmPassword !== password) {
        confirmPasswordError = 'Passwords do not match';
      } else {
        confirmPasswordError = '';
      }
    };
  
    $: isFormValid = validateEmail(email) && password.length >= 8 && password === confirmPassword;
  </script>
  
  <main class="auth">
    <section class="auth-form">
      <h2>Sign Up</h2>
      <form on:submit|preventDefault={handleSubmit}>
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
  
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            bind:value={confirmPassword}
            placeholder="Confirm your password"
            required
            on:input={handleConfirmPasswordInput} />
          {#if confirmPasswordError}
            <p class="error">{confirmPasswordError}</p>
          {/if}
        </div>
  
        <button type="submit" class="cta" disabled={!isFormValid}>Create Account</button>
      </form>
      <p class="signin-link">Already have an account? <a href="/auth/login">Login here</a></p>
    </section>
  </main>
  
  <style>
    .auth {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #0e1a2b, #1e2b4a);
      color: #f8fafc;
    }
  
    .auth-form {
      background: rgba(0, 0, 0, 0.6);
      padding: 2.5rem;
      border-radius: 12px;
      width: 100%;
      max-width: 450px;
      text-align: center;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
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
      transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
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
      width: 100%;
      cursor: pointer;
      transition: 0.3s ease;
    }
  
    .cta:hover {
      background: #0ea5e9;
      box-shadow: 0 4px 10px rgba(64, 158, 255, 0.4);
    }
  
    .cta:disabled {
      background: #d1d5db;
      cursor: not-allowed;
    }
  
    .error {
      color: #f87171;
      margin-top: 0.5rem;
      font-size: 0.75rem;
      font-weight: bold;
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
    @media (max-width: 480px) {
      .auth {
        padding: 1rem;
      }
  .auth-form {
    padding: 1.5rem;
    border-radius: 10px;
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
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  .signin-link {
    font-size: 0.9rem;
  }
}

  </style>
  